"use strict";

var Vue = require('vue');

// Components.

// Panes.
var PaneRoot = require('./panes/root/index.js');
Vue.component(PaneRoot.vueName, PaneRoot);
var PaneSearch = require('./panes/search/index.js');
Vue.component(PaneSearch.vueName, PaneSearch);
// Create a new root instance.
new Vue({ el: '#app' });
