import Vue from 'vue'
import Config from '@/config'

export default {
  user: {
    authenticated: false
  },
  check () {
    if (this.getAccessToken()) {
      this.user.authenticated = Date.now() < this.getTokenCreationTimestamp() + (this.getTokenExpirationTime() * 1000)
      if (!this.user.authenticated) {
        this.refresh()
      }
    } else {
      this.logout()
    }

    return this.user.authenticated
  },
  login (context, credentials, redirect) {
    credentials.grant_type = 'password'
    credentials.client_id = Config.OAuth.client.id
    credentials.client_secret = Config.OAuth.client.secret

    context.$http.post(Config.OAuth.token.URL, credentials).then(response => {
      this.setTokens(response.body.access_token, response.body.refresh_token, response.body.expires_in)

      this.user.authenticated = true

      if (redirect) {
        context.$router.push(redirect)
      }
    }, response => {
      context.error = response.body.error_description
    })
  },
  refresh () {
    let data = {
      grant_type: 'refresh_token',
      refresh_token: this.getRefreshToken(),
      client_id: Config.OAuth.client.id,
      client_secret: Config.OAuth.client.secret
    }

    return Vue.http.post(Config.OAuth.token.URL, data).then(response => {
      this.setTokens(response.body.access_token, response.body.refresh_token, response.body.expires_in)

      this.user.authenticated = true
    }, () => {
      this.logout()
    })
  },
  logout () {
    window.localStorage.removeItem('oauth.access_token')
    window.localStorage.removeItem('oauth.refresh_token')
    window.localStorage.removeItem('oauth.created_at')
    window.localStorage.removeItem('oauth.expires_in')
    this.user.authenticated = false
  },
  setTokens (access, refresh, expiration) {
    window.localStorage.setItem('oauth.access_token', access)
    window.localStorage.setItem('oauth.refresh_token', refresh)
    window.localStorage.setItem('oauth.created_at', Date.now())
    window.localStorage.setItem('oauth.expires_in', expiration)
  },
  getAccessToken () {
    return window.localStorage.getItem('oauth.access_token')
  },
  getRefreshToken () {
    return window.localStorage.getItem('oauth.refresh_token')
  },
  getTokenCreationTimestamp () {
    let createdAt = window.localStorage.getItem('oauth.created_at')

    return createdAt ? parseInt(createdAt) : null
  },
  getTokenExpirationTime () {
    let expiresIn = window.localStorage.getItem('oauth.expires_in')

    return expiresIn ? parseInt(expiresIn) : null
  }
}
