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
var userdata = require('userdata');

cc.Class({
  "extends": cc.Component,
  properties: {
    my_flights_window: {
      type: cc.Node,
      "default": null
    },
    warehouse_window: {
      type: cc.Node,
      "default": null
    },
    activeflights: {
      type: cc.Node,
      "default": null
    },
    flights: {
      type: cc.Node,
      "default": null
    },
    shop_window: {
      type: cc.Node,
      "default": null
    },
    buildings_window: {
      type: cc.Node,
      "default": null
    },
    business_flights_window: {
      type: cc.Node,
      "default": null
    },
    setting_windows: {
      type: cc.Node,
      "default": null
    },
    warning_window: {
      type: cc.Node,
      "default": null
    },
    window: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  showallflights: function showallflights() {
    this.hide();
    var a = cc.instantiate(this.my_flights_window);
    a.active = true;
    a.getChildByName("active").active = false;
    a.getChildByName("inner").active = true;
    this.window.addChild(a);
  },
  showflying: function showflying() {
    this.hide();
    var a = cc.instantiate(this.my_flights_window);
    a.active = true;
    a.getChildByName("active").active = true;
    a.getChildByName("inner").active = false;
    this.window.addChild(a);
  },
  showwarehouse: function showwarehouse() {
    this.hide();
    var a = cc.instantiate(this.warehouse_window);
    a.active = true;
    this.window.addChild(a);
  },
  fly: function fly(event, customEventData) {
    this.hide();
    var go = 0;

    if (userdata.lefts.leftfuel >= customEventData.fuel && userdata.lefts.leftpassenger >= customEventData.passenger) {
      for (var o in userdata.airplanedata) {
        if (userdata.airplanedata[o].level == customEventData.level && userdata.airplanedata[o].isflying == 'false') {
          userdata.airplanedata[o].isflying = 'true';
          userdata.airplanedata[o].destination = customEventData.name;
          userdata.airplanedata[o].reward = customEventData.reward;
          userdata.airplanedata[o].endtime = Date.parse(new Date()) / 1000 + customEventData.time;
          userdata.lefts.leftfuel -= customEventData.fuel;
          userdata.lefts.leftpassenger -= customEventData.passenger;

          if (userdata.achievement[customEventData.id][1] == 3) {
            console.log("r");
          } else {
            userdata.achievement[customEventData.id][0] += 1;

            if (userdata.achievement[customEventData.id][0] == 10) {
              userdata.achievement[customEventData.id][1] += 1;
              userdata.allfile.stars += 1;
              userdata.achievement[customEventData.id][0] = 0;
            }
          }

          go = 1;
          break;
        }
      }
    }

    if (go == 0) {
      if (userdata.lefts.leftfuel < customEventData.fuel || userdata.lefts.leftpassenger < customEventData.passenger) {
        var inner = 'Do not have enough fuel or passengers';
        this.showwarning(inner);
      } else {
        var _inner = 'Do not have an avilable plane of the required type.\nBuy a new plane or wait for the current flights to return.';
        this.showwarning(_inner);
      }
    }
  },
  toactive: function toactive() {
    this.window.getChildByName("My_flights_window").getChildByName("active").active = true;
    this.window.getChildByName("My_flights_window").getChildByName("inner").active = false;
  },
  toflightlist: function toflightlist() {
    this.window.getChildByName("My_flights_window").getChildByName("active").active = false;
    this.window.getChildByName("My_flights_window").getChildByName("inner").active = true;
  },
  showwarning: function showwarning(inner) {
    this.warning_window.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
    var a = cc.instantiate(warning_window);
    a.active = true;
    this.window.addChild(a);
  },
  showsetting: function showsetting() {
    this.hide();
    var a = cc.instantiate(this.setting_windows);
    a.active = true;
    this.window.addChild(a);
  },
  showshop: function showshop() {
    this.hide();
    var a = cc.instantiate(this.shop_window);
    a.active = true;
    this.window.addChild(a);
  },
  showbuildings: function showbuildings() {
    this.hide();
    var a = cc.instantiate(this.buildings_window);
    a.active = true;
    this.window.addChild(a);
  },
  showbusiness: function showbusiness() {
    this.hide();
    var a = cc.instantiate(this.business_flights_window);
    a.active = true;
    this.window.addChild(a);
  },
  hide: function hide() {
    this.window.destroyAllChildren();
  }
});

cc._RF.pop();