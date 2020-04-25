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
    level_one: cc.SpriteFrame,
    level_two: cc.SpriteFrame,
    level_three: cc.SpriteFrame,
    level_four: cc.SpriteFrame,
    level_five: cc.SpriteFrame,
    level_six: cc.SpriteFrame,
    level_seven: cc.SpriteFrame,
    level_eight: cc.SpriteFrame,
    level_nine: cc.SpriteFrame
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  showallflights: function showallflights(event, customEvenData) {
    this.my_flights_window.active = true;
  },
  closeallflights: function closeallflights() {
    this.my_flights_window.active = false;
  },
  ownairplanefly: function ownairplanefly() {},
  fly: function fly(event, customEventData) {
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
    } else {}

    if (go == 0) {
      console.log("You dont have landing airplane");
    }
  }
});

cc._RF.pop();