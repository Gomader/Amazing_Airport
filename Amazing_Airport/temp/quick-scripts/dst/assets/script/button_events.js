
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93IiwiYWN0aXZlZmxpZ2h0cyIsImZsaWdodHMiLCJ3YXJuaW5nX3dpbmRvdyIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJzaG93YWxsZmxpZ2h0cyIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwic2hvd2ZseWluZyIsImNsb3NlYWxsZmxpZ2h0cyIsInNob3d3YXJlaG91c2UiLCJjbG9zZXdhcmVob3VzZSIsImZseSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwiZ28iLCJsZWZ0cyIsImxlZnRmdWVsIiwiZnVlbCIsImxlZnRwYXNzZW5nZXIiLCJwYXNzZW5nZXIiLCJvIiwiYWlycGxhbmVkYXRhIiwibGV2ZWwiLCJpc2ZseWluZyIsImRlc3RpbmF0aW9uIiwibmFtZSIsInJld2FyZCIsImVuZHRpbWUiLCJEYXRlIiwicGFyc2UiLCJ0aW1lIiwiaW5uZXIiLCJzaG93d2FybmluZyIsImhpZGV3YXJuaW5nIiwidG9hY3RpdmUiLCJ0b2ZsaWdodGxpc3QiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsaUJBQWlCLEVBQUM7QUFDZEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBRE07QUFFZCxpQkFBUTtB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Q0FBbUMsZ0JBQW5DLEVBQXFEQSxjQUFyRCxDQUFvRSxPQUFwRSxFQUE2RThCLFlBQTdFLENBQTBGL0MsRUFBRSxDQUFDZ0QsS0FBN0YsRUFBb0dDLE1BQXBHLEdBQTZHUCxLQUE3RztBQUNBLFNBQUtoQyxjQUFMLENBQW9CTSxNQUFwQixHQUE2QixJQUE3QjtBQUNIO0FBdEdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbnZhciB1c2VyZGF0YSA9IHJlcXVpcmUoJ3VzZXJkYXRhJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG15X2ZsaWdodHNfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJlaG91c2Vfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVmbGlnaHRzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbGlnaHRzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzaG93Zmx5aW5nKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9zZWFsbGZsaWdodHMoKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3d3YXJlaG91c2UoKXtcbiAgICAgICAgdGhpcy53YXJlaG91c2Vfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3Nld2FyZWhvdXNlKCl7XG4gICAgICAgIHRoaXMud2FyZWhvdXNlX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGZseTpmdW5jdGlvbihldmVudCxjdXN0b21FdmVudERhdGEpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgZ28gPSAwO1xuICAgICAgICBpZih1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbD49Y3VzdG9tRXZlbnREYXRhLmZ1ZWwmJnVzZXJkYXRhLmxlZnRzLmxlZnRwYXNzZW5nZXI+PWN1c3RvbUV2ZW50RGF0YS5wYXNzZW5nZXIpe1xuICAgICAgICAgICAgZm9yKHZhciBvIGluIHVzZXJkYXRhLmFpcnBsYW5lZGF0YSl7XG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmxldmVsPT1jdXN0b21FdmVudERhdGEubGV2ZWwgJiYgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmlzZmx5aW5nPT1cImZhbHNlXCIpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmcgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmRlc3RpbmF0aW9uID0gY3VzdG9tRXZlbnREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5yZXdhcmQgPSBjdXN0b21FdmVudERhdGEucmV3YXJkO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uZW5kdGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKSkvMTAwMCArIGN1c3RvbUV2ZW50RGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbCAtPSBjdXN0b21FdmVudERhdGEuZnVlbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEubGVmdHMubGVmdHBhc3NlbmdlciAtPSBjdXN0b21FdmVudERhdGEucGFzc2VuZ2VyO1xuICAgICAgICAgICAgICAgICAgICBnbyA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgZW5vdWdoIGZ1ZWwgb3IgcGFzc2VuZ2Vycyc7XG4gICAgICAgICAgICB0aGlzLnNob3d3YXJuaW5nKGlubmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZihnbyA9PSAwKXtcbiAgICAgICAgICAgIGxldCBpbm5lciA9ICdEbyBub3QgaGF2ZSBhbiBhdmlsYWJsZSBwbGFuZSBvZiB0aGUgcmVxdWlyZWQgdHlwZS5cXG5CdXkgYSBuZXcgcGxhbmUgb3Igd2FpdCBmb3IgdGhlIGN1cnJlbnQgZmxpZ2h0cyB0byByZXR1cm4uJ1xuICAgICAgICAgICAgdGhpcy5zaG93d2FybmluZyhpbm5lcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaGlkZXdhcm5pbmcoKXtcbiAgICAgICAgdGhpcy53YXJuaW5nX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9hY3RpdmUoKXtcbiAgICAgICAgdGhpcy5hY3RpdmVmbGlnaHRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxpZ2h0cy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9mbGlnaHRsaXN0KCl7XG4gICAgICAgIHRoaXMuZmxpZ2h0cy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZWZsaWdodHMuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHNob3d3YXJuaW5nKGlubmVyKXtcbiAgICAgICAgdGhpcy53YXJuaW5nX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcIndhcm5pbmdfd2luZG93XCIpLmdldENoaWxkQnlOYW1lKFwiaW5uZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbm5lcjtcbiAgICAgICAgdGhpcy53YXJuaW5nX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG59KTtcbiJdfQ==