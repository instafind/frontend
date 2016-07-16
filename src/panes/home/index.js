var Vue = require('vue');

module.exports = Vue.extend({
  template: require('./index.html'),
  ready: function() {
    console.log("Hello.");
    this.getListings();
  },
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
  },
  methods: {
    getListings: function() {
      var _this = this;
      _this.$http.get('/data').then(function(results) {
        _this.results = JSON.parse(results.body);
      });
    }
  }
});
