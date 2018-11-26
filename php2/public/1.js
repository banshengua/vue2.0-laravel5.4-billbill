webpackJsonp([1],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(205)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(208),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "E:\\www\\zuoye\\billbill\\resources\\assets\\js\\components\\Movie.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Movie.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a8e18e84", Component.options)
  } else {
    hotAPI.reload("data-v-a8e18e84", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("35db7b51", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a8e18e84\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Movie.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-a8e18e84\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/_vue-loader@11.3.4@vue-loader/lib/selector.js?type=styles&index=0!./Movie.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.movie{width: 1160px;height:1400px;margin: 0 auto;\n}\n.movie>.mv-header{width: 1160px;height:125px;\n}\n.movie>.mv-header>.mv-left-header{float: left;width: 400px;height:125px;\n}\n.movie>.mv-header>.mv-left-header>.title{font-size: 18px;line-height: 24px;height:24px;\n      display: inline-block;color:#525659;overflow: hidden;white-space: nowrap;padding: 8px 0;float: left;margin-bottom: 15px;width:400px;\n}\n.movie>.mv-header>.mv-left-header>.play{display: inline-block;float: left;margin-left:10px;\n   width:120px;height:30px;vertical-align: middle;line-height: 2;\n}\n.movie>.mv-header>.mv-left-header>.play>.icon-play{background-image:url('/billbill/uploads/play.png');\n     background-repeat: no-repeat;width: 30px;height:30px;display: inline-block;vertical-align: top;\n}\n.movie>.mv-header>.mv-left-header>.play>.icon-coins{background-image:url('/billbill/uploads/coin.png');\n     background-repeat: no-repeat;width: 30px;height:30px;display: inline-block;vertical-align: top;\n}\n.movie>.mv-header>.mv-left-header>.play>.icon-factor{background-image:url('/billbill/uploads/star.png');\n     background-repeat: no-repeat;width: 30px;height:30px;display: inline-block;vertical-align: top;\n}\n.movie>.mv-header>.my-right-header{float: right;width: 150px;height:125px;margin-right:100px;\n}\n.movie>.mv-header>.my-right-header>.face{width: 100px;height: 100px;border-radius: 50%;margin-left:10px;\n}\n.movie>.mv-header>.my-right-header>.anthur{font-size: 14px;color:#00b5e5;display: inline-block;overflow: hidden;word-break: break-all;line-height:16px;white-space: nowrap;margin-top:15px;\n}\n.mv-play>.video-wraper>.desc{font-size: 12px;color:#6d757a;float:left;\n          width: 400px;height: auto;word-wrap: break-word;line-height: 16px;margin-top:20px;\n}\n.movie>.bottom{width: 900px;height:220px;float: left;margin-top:30px;\n}\n.movie>.bottom>.face{width: 100px;height: 100px;background:#ccc;border-radius: 50%;margin-left:20px;float: left;\n}\n.movie>.bottom>.content>.el-input>input{height:86px;\n}\n.movie>.bottom>.content{float: left;width: 750px;height:220px;position: relative;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    data: function data() {
        return {
            myData: {}
        };
    },

    methods: {
        getBack: function getBack() {
            window.history.back(-1);
            return window.history.back(-1);;
        }
    },
    created: function created() {
        var _this = this;

        this.$http.get('/billbill/api/' + this.$route.params.id).then(function (response) {
            _this.myData = response.data;
        });

        /*let url="https://bird.ioliu.cn/v2";
           this.$http.get(url,{
               params:{url:'http://api.laifudao.com/open/xiaohua.json'}
           }).then((res) =>{
               console.log(res.data)
        })*/
        /*var instance = axios.create({
            headers: {'content-type': 'application/x-www-form-urlencoded'}
        });
        instance.post(`http://api.laifudao.com/open/xiaohua.json`).then((res) => {
            alert(res.data)});
        */
        /* axios.get('/billbill/hello').then( (response) => {
          var Data = response.data;
             console.log(Data);
             this.myData=Data;
             alert(this.myData)
             }).catch((error) =>{
             alert(error);
         });*/
    }
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "movie"
  }, [_c('div', {
    staticClass: "head-nav"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "round": ""
    },
    on: {
      "click": function($event) {
        _vm.getBack()
      }
    }
  }, [_vm._v("返回")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mv-header"
  }, [_c('div', {
    staticClass: "mv-left-header"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.myData.title))]), _vm._v(" "), (_vm.myData.view < 10000) ? _c('span', {
    staticClass: "play"
  }, [_c('i', {
    staticClass: "icon-play"
  }), _vm._v("  " + _vm._s(_vm.myData.view))]) : _c('span', {
    staticClass: "play"
  }, [_c('i', {
    staticClass: "icon-play"
  }), _vm._v("  " + _vm._s((_vm.myData.view - _vm.myData.view % 1000) / 10000) + "万")]), _vm._v(" "), _c('span', {
    staticClass: "play"
  }, [_c('i', {
    staticClass: "icon-coins"
  }), _vm._v("  硬币" + _vm._s(_vm.myData.coin))]), _vm._v(" "), _c('span', {
    staticClass: "play"
  }, [_c('i', {
    staticClass: "icon-factor"
  }), _vm._v("  收藏" + _vm._s(_vm.myData.favorite))])]), _vm._v(" "), _c('div', {
    staticClass: "my-right-header"
  }, [_c('div', {
    staticClass: "face"
  }, [_c('img', {
    attrs: {
      "src": _vm.myData.face,
      "alt": "",
      "width": "150",
      "height": "100"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "anthur"
  }, [_vm._v("up主:" + _vm._s(_vm.myData.name))])])]), _vm._v(" "), _c('div', {
    staticClass: "mv-play"
  }, [_vm._m(0, false, false), _vm._v(" "), _c('div', {
    staticClass: "video-wraper"
  }, [_c('h3', [_vm._v("手机用户请移动到b站官网上观看"), _c('a', {
    attrs: {
      "target": "_blank",
      "href": 'https://www.bilibili.com/video/av' + _vm.myData.aid
    }
  }, [_vm._v("点击")])]), _vm._v(" "), _c('div', {
    staticClass: "video"
  }, [_c('iframe', {
    attrs: {
      "height": "740",
      "width": "980",
      "src": 'http://static.hdslb.com/miniloader.swf?aid=' + _vm.myData.aid + '&page=1',
      "frameborder": "0",
      "scrolling": "no",
      "allowfullscreen": "true",
      "webkitallowfullscreen": "true",
      "mozallowfullscreen": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.myData.desc))])]), _vm._v(" "), _c('div', {
    staticClass: "share"
  })]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "face"
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('el-input', {
    staticStyle: {
      "width": "600px",
      "height": "100px",
      "float": "left",
      "margin-left": "20px",
      "margin-right": "20px"
    },
    attrs: {
      "placeholder": "请输入内容",
      "disabled": true
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "round": ""
    }
  }, [_vm._v("发表评论")]), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "position": "absolute",
      "left": "100px",
      "top": "22px"
    },
    attrs: {
      "size": "small",
      "type": "info"
    }
  }, [_vm._v("去登录")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "msg",
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("提示:只能在本站看高清和流畅(无法全屏,和弹幕),"), _c('br'), _vm._v("由于兼容问题和vue支持只能在chrome浏览器下观看。\n               "), _c('br'), _vm._v("由于时间不足，没有做用户那块.请期待我的billbill2.0吧")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a8e18e84", module.exports)
  }
}

/***/ })

});