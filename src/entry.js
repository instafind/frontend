"use strict";

var Vue = require('vue');

// Components.

// Panes.
var PaneRoot = require('./panes/root');
Vue.component('pane-root', PaneRoot);
var PaneSearch = require('./panes/search');
Vue.component('pane-search', PaneSearch);
var PaneHome = require('./panes/home');
Vue.component('pane-home', PaneHome);

// Create a new root instance.
new Vue({ el: '#app' });
