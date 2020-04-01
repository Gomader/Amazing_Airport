"use strict";
cc._RF.push(module, 'd4201dx8t5KJ4AqSM5Q3YV2', 'button_events');
// script/button_events.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    allfile: Object,
    business_flight: {
      type: cc.Node,
      "default": null
    },
    user_flight: {
      type: cc.Node,
      "default": null
    },
    allflight: {
      type: cc.Node,
      "default": null
    },
    shop: {
      type: cc.Node,
      "default": null
    },
    warehouse: {
      type: cc.Node,
      "default": null
    },
    setting: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.allfile = JSON.parse(cc.sys.localStorage.getItem('userData'));
  },
  start: function start() {},
  update: function update(dt) {
    this.allfile = JSON.parse(cc.sys.localStorage.getItem('userData'));
    cc.sys.localStorage.setItem("userData", JSON.stringify(this.allfile));
  }
});

cc._RF.pop();