
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
    warehouse_window: {
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
  ownairplanefly: function ownairplanefly() {},
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
    } else {}

    if (go == 0) {
      console.log("You dont have landing airplane"); //here can make a new window
    }
  },
  sellairplane: function sellairplane(event, customEventData) {
    userdata.airplanedata.splice(customEventData.n, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93Iiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNob3dhbGxmbGlnaHRzIiwiYWN0aXZlIiwiY2xvc2VhbGxmbGlnaHRzIiwic2hvd3dhcmVob3VzZSIsImNsb3Nld2FyZWhvdXNlIiwib3duYWlycGxhbmVmbHkiLCJmbHkiLCJldmVudCIsImN1c3RvbUV2ZW50RGF0YSIsImdvIiwibGVmdHMiLCJsZWZ0ZnVlbCIsImZ1ZWwiLCJsZWZ0cGFzc2VuZ2VyIiwicGFzc2VuZ2VyIiwibyIsImFpcnBsYW5lZGF0YSIsImxldmVsIiwiaXNmbHlpbmciLCJkZXN0aW5hdGlvbiIsIm5hbWUiLCJyZXdhcmQiLCJlbmR0aW1lIiwiRGF0ZSIsInBhcnNlIiwidGltZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxsYWlycGxhbmUiLCJzcGxpY2UiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxpQkFBaUIsRUFBQztBQUNkQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFETTtBQUVkLGlCQUFRO0FBRk0sS0FEVjtBQUtSQyxJQUFBQSxnQkFBZ0IsRUFBQztBQUNiRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFESztBQUViLGlCQUFRO0FBRks7QUFMVCxHQUhQO0FBY0w7QUFF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aHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbnZhciB1c2VyZGF0YSA9IHJlcXVpcmUoJ3VzZXJkYXRhJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG15X2ZsaWdodHNfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJlaG91c2Vfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTsgICBcbiAgICB9LFxuICAgIGNsb3NlYWxsZmxpZ2h0cygpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd3dhcmVob3VzZSgpe1xuICAgICAgICB0aGlzLndhcmVob3VzZV93aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb3Nld2FyZWhvdXNlKCl7XG4gICAgICAgIHRoaXMud2FyZWhvdXNlX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIG93bmFpcnBsYW5lZmx5KCl7XG4gICAgICAgIFxuICAgIH0sXG4gICAgZmx5OmZ1bmN0aW9uKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBnbyA9IDA7XG4gICAgICAgIGlmKHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsPj1jdXN0b21FdmVudERhdGEuZnVlbCYmdXNlcmRhdGEubGVmdHMubGVmdHBhc3Nlbmdlcj49Y3VzdG9tRXZlbnREYXRhLnBhc3Nlbmdlcil7XG4gICAgICAgICAgICBmb3IodmFyIG8gaW4gdXNlcmRhdGEuYWlycGxhbmVkYXRhKXtcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10ubGV2ZWw9PWN1c3RvbUV2ZW50RGF0YS5sZXZlbCAmJiB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmc9PVwiZmFsc2VcIil7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5pc2ZseWluZyA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uZGVzdGluYXRpb24gPSBjdXN0b21FdmVudERhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLnJld2FyZCA9IGN1c3RvbUV2ZW50RGF0YS5yZXdhcmQ7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5lbmR0aW1lID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKS8xMDAwICsgY3VzdG9tRXZlbnREYXRhLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsIC09IGN1c3RvbUV2ZW50RGF0YS5mdWVsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5sZWZ0cy5sZWZ0cGFzc2VuZ2VyIC09IGN1c3RvbUV2ZW50RGF0YS5wYXNzZW5nZXI7XG4gICAgICAgICAgICAgICAgICAgIGdvID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcblxuICAgICAgICB9XG4gICAgICAgIGlmKGdvID09IDApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgZG9udCBoYXZlIGxhbmRpbmcgYWlycGxhbmVcIik7Ly9oZXJlIGNhbiBtYWtlIGEgbmV3IHdpbmRvd1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZWxsYWlycGxhbmUoZXZlbnQsY3VzdG9tRXZlbnREYXRhKXtcbiAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhLnNwbGljZShjdXN0b21FdmVudERhdGEubiwxKTtcbiAgICB9XG59KTtcbiJdfQ==