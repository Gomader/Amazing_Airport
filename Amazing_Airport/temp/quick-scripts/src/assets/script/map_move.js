"use strict";
cc._RF.push(module, 'd9243sv63VLqrZlH/7AGkUF', 'map_move');
// script/map_move.js

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
    map: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;

    this.map.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var delta = event.touch.getDelta();

      if (_this.map.x + delta.x <= 2436 && _this.map.x + delta.x >= 0) {
        _this.map.x += delta.x;
      } //if(this.map.y+delta.y<=1125&&this.map.y+delta.y>=0){
      //    this.map.y += delta.y;
      //    console.log(this.map.y);
      //}


      if (delta.y > 5 && _this.map.y == 0) {
        _this.map.runAction(cc.sequence(cc.moveBy(0.5, 0, 300), cc.callFunc(_this.downpage, _this)));
      } else if (delta.y < -5 && _this.map.y == 1125) {
        _this.map.runAction(cc.sequence(cc.moveBy(0.5, 0, -300), cc.callFunc(_this.uppage, _this)));
      }
    });
  },
  uppage: function uppage() {
    this.map.y = 0;
  },
  downpage: function downpage() {
    this.map.y = 1125;
  } // update (dt) {},

});

cc._RF.pop();