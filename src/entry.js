"use strict";

var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);
var App = Vue.extend({});

// Components.

// Panes.
var PaneRoot = require('./panes/root');
Vue.component('pane-root', PaneRoot);
var PaneSearch = require('./panes/search');
Vue.component('pane-search', PaneSearch);
var PaneHome = require('./panes/home');
Vue.component('pane-home', PaneHome);

// Routes.
var router = new VueRouter();
router.map({
  '/search': {
    component: PaneSearch
  },
  '/home': {
    component: PaneHome
  }
})

// Create a new root instance.
router.start(App, '#app');
