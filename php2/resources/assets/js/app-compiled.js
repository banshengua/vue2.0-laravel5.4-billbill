'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

require('element-ui/lib/theme-default/index.css');

require('element-ui/lib/index.js');

var _index = require('./router/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

_vue2.default.use(_vuex2.default);
var vuex_store = new _vuex2.default.Store({
    state: {
        keyData: ""
    },
    mutations: {
        showkeyData: function showkeyData(state) {
            return state.keyData;
        }
    }
});
_vue2.default.prototype.$http = _axios2.default;
_vue2.default.use(_elementUi2.default, { size: 'small' });
var app = new _vue2.default({
    el: '#app',
    router: _index2.default,
    store: vuex_store,
    render: function render(h) {
        return h(_main2.default);
    }
});

//# sourceMappingURL=app-compiled.js.map