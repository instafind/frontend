"use strict";

var Vue = require('vue');

// Components.

// Panes.
var PaneRoot = require('./panes/root/index.js');
console.log(PaneRoot);
Vue.component(PaneRoot.vueName, PaneRoot);

// Create a new root instance.
new Vue({ el: '#app' });
