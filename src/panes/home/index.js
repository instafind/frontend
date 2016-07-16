module.exports = {
  vueName: 'pane-home',
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
};
