import Vue from 'vue'
import Moment from 'moment'

Vue.filter('calendar', function (value) {
  return Moment(value).calendar()
})
