import Vue from 'vue'

const API_URL = 'http://localhost/findthewords-symfony/web/app_dev.php'
const TOKEN_URL = API_URL + '/oauth/v2/token'
// const SIGNUP_URL = API_URL + '/users'
const CLIENT_ID = '1_62o6a6q1a4kkoc0g0wcco4w04so8g4ko4kcwk4wowkow48c4k4'
const CLIENT_SECRET = '3terzhc7wnoko4wkgk48o0oww04gk0s8owkgog000gk4k88cgg'

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
    credentials.client_id = CLIENT_ID
    credentials.client_secret = CLIENT_SECRET

    context.$http.post(TOKEN_URL, credentials).then(response => {
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
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }

    return Vue.http.post(TOKEN_URL, data).then(response => {
      this.setTokens(response.body.access_token, response.body.refresh_token, response.body.expires_in)

      this.user.authenticated = true
    }, response => {
      console.log(response)
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
