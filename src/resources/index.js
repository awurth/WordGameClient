import Vue from 'vue'
import Resource from 'vue-resource'

Vue.use(Resource)

Vue.http.options.root = 'http://localhost/findthewords-symfony/web/app_dev.php'

let resource = Vue.resource

export default resource
