import Vue from 'vue'
import Moment from 'moment'

Vue.filter('date', function (value, format = 'MM-DD-YYYY') {
  return Moment(value).format(format)
})
