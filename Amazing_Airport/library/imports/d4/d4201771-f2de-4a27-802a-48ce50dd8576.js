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
    warning_window: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  showallflights: function showallflights() {
    this.my_flights_window.active = true;
    this.my_flights_window.getChildByName("active").active = false;
    this.my_flights_window.getChildByName("inner").active = true;
  },
  showflying: function showflying() {
    this.my_flights_window.active = true;
    this.my_flights_window.getChildByName("inner").active = false;
    this.my_flights_window.getChildByName("active").active = true;
  },
  closeallflights: function closeallflights() {
    this.my_flights_window.active = false;
  },
  showwarehouse: function showwarehouse() {
    this.warehouse_window.active = true;
  },
  closewarehouse: function closewarehouse() {
    this.warehouse_window.active = false;
  },
  fly: function fly(event, customEventData) {
    this.my_flights_window.active = false;
    var go = 0;

    if (userdata.lefts.leftfuel >= customEventData.fuel && userdata.lefts.leftpassenger >= customEventData.passenger) {
      for (var o in userdata.airplanedata) {
        if (userdata.airplanedata[o].level == customEventData.level && userdata.airplanedata[o].isflying == "false") {
          userdata.airplanedata[o].isflying = "true";
          userdata.airplanedata[o].destination = customEventData.name;
          userdata.airplanedata[o].reward = customEventData.reward;
          userdata.airplanedata[o].endtime = Date.parse(new Date()) / 1000 + customEventData.time;
          userdata.lefts.leftfuel -= customEventData.fuel;
          userdata.lefts.leftpassenger -= customEventData.passenger;
          go = 1;
          break;
        }
      }
    } else {
      var inner = 'Do not have enough fuel or passengers';
      this.showwarning(inner);
    }

    if (go == 0) {
      var _inner = 'Do not have an avilable plane of the required type.\nBuy a new plane or wait for the current flights to return.';
      this.showwarning(_inner);
    }
  },
  hidewarning: function hidewarning() {
    this.warning_window.active = false;
  },
  toactive: function toactive() {
    this.activeflights.active = true;
    this.flights.active = false;
  },
  toflightlist: function toflightlist() {
    this.flights.active = true;
    this.activeflights.active = false;
  },
  showwarning: function showwarning(inner) {
    this.warning_window.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
    this.warning_window.active = true;
  }
});

cc._RF.pop();