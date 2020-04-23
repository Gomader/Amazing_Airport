"use strict";
cc._RF.push(module, '6cadfzqyC1G3omIigFAepyc', 'creater_user');
// script/creater_user.js

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
    newinput: {
      type: cc.EditBox,
      "default": null
    },
    createnewuser: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.opacity = 0;
  },
  start: function start() {
    this.node.runAction(cc.fadeIn(1.0));
  },
  createnewfile: function createnewfile() {
    var userData = {
      name: this.newinput.string,
      stars: 0,
      money: 0,
      clean: 100,
      airplane: {
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        level5: 0,
        level6: 0,
        level7: 0,
        level8: 0,
        level9: 0
      },
      buildings: {
        uprunway: 1,
        downrunway: 1,
        stand: 1,
        control_tower: 0,
        ground_tower: 1,
        repair_center: 0,
        terminal: 1,
        fuel_station: 0
      }
    };
    this.originupload(userData);
  },
  originupload: function originupload(userData) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=0", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("userData=" + JSON.stringify(userData));

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        cc.sys.localStorage.setItem('id', xhr.responseText);
        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        cc.director.loadScene("runway_scene");
      }
    };
  } // update (dt) {},

});

cc._RF.pop();