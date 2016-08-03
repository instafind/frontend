'use strict';

var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
Vue.use(VueRouter);
Vue.use(VueResource);
var App = Vue.extend({});

Vue.http.options.root = 'http://localhost:8083';

// Panes.
var PaneRoot = require('./panes/root');
Vue.component('pane-root', PaneRoot);
var PaneSearch = require('./panes/search');
Vue.component('pane-search', PaneSearch);
var PaneHome = require('./panes/home');
Vue.component('pane-home', PaneHome);

// Routes.
window.router = new VueRouter();

window.router.map({
  '/search': {
    component: PaneSearch
  },
  '/home': {
    component: PaneHome
  }
});

window.router.redirect({
  '*': '/search'
});

// Create a new root instance.
window.router.start(App, '#app');
