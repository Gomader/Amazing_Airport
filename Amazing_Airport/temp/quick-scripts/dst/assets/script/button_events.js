
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/button_events.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJsZXZlbF9vbmUiLCJTcHJpdGVGcmFtZSIsImxldmVsX3R3byIsImxldmVsX3RocmVlIiwibGV2ZWxfZm91ciIsImxldmVsX2ZpdmUiLCJsZXZlbF9zaXgiLCJsZXZlbF9zZXZlbiIsImxldmVsX2VpZ2h0IiwibGV2ZWxfbmluZSIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJzaG93YWxsZmxpZ2h0cyIsImV2ZW50IiwiY3VzdG9tRXZlbkRhdGEiLCJhY3RpdmUiLCJjbG9zZWFsbGZsaWdodHMiLCJvd25haXJwbGFuZWZseSIsImZseSIsImN1c3RvbUV2ZW50RGF0YSIsImdvIiwibGVmdHMiLCJsZWZ0ZnVlbCIsImZ1ZWwiLCJsZWZ0cGFzc2VuZ2VyIiwicGFzc2VuZ2VyIiwibyIsImFpcnBsYW5lZGF0YSIsImxldmVsIiwiaXNmbHlpbmciLCJkZXN0aW5hdGlvbiIsIm5hbWUiLCJyZXdhcmQiLCJlbmR0aW1lIiwiRGF0ZSIsInBhcnNlIiwidGltZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGlCQUFpQixFQUFDO0FBQ2RDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURNO0FBRWQsaUJBQVE7QUFGTSxLQURWO0FBS1JDLElBQUFBLFNBQVMsRUFBQ1AsRUFBRSxD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c3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIHVzZXJkYXRhID0gcmVxdWlyZSgndXNlcmRhdGEnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXlfZmxpZ2h0c193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsX29uZTpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgbGV2ZWxfdHdvOmNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBsZXZlbF90aHJlZTpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgbGV2ZWxfZm91cjpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgbGV2ZWxfZml2ZTpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgbGV2ZWxfc2l4OmNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBsZXZlbF9zZXZlbjpjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgbGV2ZWxfZWlnaHQ6Y2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIGxldmVsX25pbmU6Y2MuU3ByaXRlRnJhbWUsXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIFxuICAgIH0sXG4gICAgc2hvd2FsbGZsaWdodHMoZXZlbnQsY3VzdG9tRXZlbkRhdGEpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IHRydWU7ICAgXG4gICAgfSxcbiAgICBjbG9zZWFsbGZsaWdodHMoKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIG93bmFpcnBsYW5lZmx5KCl7XG4gICAgICAgIFxuICAgIH0sXG4gICAgZmx5OmZ1bmN0aW9uKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSl7XG4gICAgICAgIHZhciBnbyA9IDA7XG4gICAgICAgIGlmKHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsPj1jdXN0b21FdmVudERhdGEuZnVlbCYmdXNlcmRhdGEubGVmdHMubGVmdHBhc3Nlbmdlcj49Y3VzdG9tRXZlbnREYXRhLnBhc3Nlbmdlcil7XG4gICAgICAgICAgICBmb3IodmFyIG8gaW4gdXNlcmRhdGEuYWlycGxhbmVkYXRhKXtcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10ubGV2ZWw9PWN1c3RvbUV2ZW50RGF0YS5sZXZlbCAmJiB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmc9PVwiZmFsc2VcIil7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5pc2ZseWluZyA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uZGVzdGluYXRpb24gPSBjdXN0b21FdmVudERhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLnJld2FyZCA9IGN1c3RvbUV2ZW50RGF0YS5yZXdhcmQ7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5lbmR0aW1lID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKS8xMDAwICsgY3VzdG9tRXZlbnREYXRhLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsIC09IGN1c3RvbUV2ZW50RGF0YS5mdWVsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5sZWZ0cy5sZWZ0cGFzc2VuZ2VyIC09IGN1c3RvbUV2ZW50RGF0YS5wYXNzZW5nZXI7XG4gICAgICAgICAgICAgICAgICAgIGdvID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcblxuICAgICAgICB9XG4gICAgICAgIGlmKGdvID09IDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgZG9udCBoYXZlIGxhbmRpbmcgYWlycGxhbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==