var Vue = require('vue');
require('./index.scss');

module.exports = Vue.extend({
  template: require('./index.html'),
  methods: {
    search: function() {
      window.router.go('/home');
    }
  }
});
