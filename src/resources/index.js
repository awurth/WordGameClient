import Vue from 'vue'
import Resource from 'vue-resource'
import OAuthAccessTokenInterceptor from '@/security/OAuthAccessTokenInterceptor'
import OAuthRefreshTokenInterceptor from '@/security/OAuthRefreshTokenInterceptor'

Vue.use(Resource)

Vue.http.options.root = 'http://localhost/findthewords-symfony/web/app_dev.php'
Vue.http.interceptors.push(OAuthAccessTokenInterceptor)
Vue.http.interceptors.push(OAuthRefreshTokenInterceptor)

let resource = Vue.resource

export default resource
