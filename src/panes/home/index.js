var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  data: function() {
    return {
      results: [
        {
          name: "Restaurant Randomroo"
        },
        {
          name: "Cat Bat Sat"
        },
        {
          name: "What's up?"
        }
      ]
    }
  }
});
