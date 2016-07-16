var Vue = require('vue');
require('./index.scss');

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
          name: "Restaurant Randomroo",
          location: {
            latitude: 5,
            longitude: 5
          }
        },
        {
          name: "Cat Bat Sat",
          location: {
            latitude: 5,
            longitude: 5
          }
        },
        {
          name: "What's up?",
          location: {
            latitude: 5,
            longitude: 5
          }
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
    },
    openMap: function(lat, long) {
      window.open('http://maps.google.com/maps/place/' + lat + ',' + long);
    }
  }
});
