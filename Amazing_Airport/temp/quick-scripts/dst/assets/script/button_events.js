
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
  },
  showsetting: function showsetting() {
    this.setting_windows.active = true;
  },
  hidesetting: function hidesetting() {
    this.setting_windows.active = false;
  },
  showshop: function showshop() {
    this.shop_window.active = true;
  },
  hideshop: function hideshop() {
    this.shop_window.active = false;
  },
  showbuildings: function showbuildings() {
    this.buildings_window.active = true;
  },
  hidebuildings: function hidebuildings() {
    this.buildings_window.active = false;
  },
  showbusiness: function showbusiness() {
    this.business_flights_window.active = true;
  },
  hidebusiness: function hidebusiness() {
    this.business_flights_window.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93IiwiYWN0aXZlZmxpZ2h0cyIsImZsaWdodHMiLCJzaG9wX3dpbmRvdyIsImJ1aWxkaW5nc193aW5kb3ciLCJidXNpbmVzc19mbGlnaHRzX3dpbmRvdyIsInNldHRpbmdfd2luZG93cyIsIndhcm5pbmdfd2luZG93Iiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNob3dhbGxmbGlnaHRzIiwiYWN0aXZlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzaG93Zmx5aW5nIiwiY2xvc2VhbGxmbGlnaHRzIiwic2hvd3dhcmVob3VzZSIsImNsb3Nld2FyZWhvdXNlIiwiZmx5IiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJnbyIsImxlZnRzIiwibGVmdGZ1ZWwiLCJmdWVsIiwibGVmdHBhc3NlbmdlciIsInBhc3NlbmdlciIsIm8iLCJhaXJwbGFuZWRhdGEiLCJsZXZlbCIsImlzZmx5aW5nIiwiZGVzdGluYXRpb24iLCJuYW1lIiwicmV3YXJkIiwiZW5kdGltZSIsIkRhdGUiLCJwYXJzZSIsInRpbWUiLCJhY2hpZXZlbWVudCIsImlkIiwiY29uc29sZSIsImxvZyIsImFsbGZpbGUiLCJzdGFycyIsImlubmVyIiwic2hvd3dhcm5pbmciLCJoaWRld2FybmluZyIsInRvYWN0aXZlIiwidG9mbGlnaHRsaXN0IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzaG93c2V0dGluZyIsImhpZGVzZXR0aW5nIiwic2hvd3Nob3AiLCJoaWRlc2hvcCIsInNob3didWlsZGluZ3MiLCJoaWRlYnVpbGRpbmdzIiwic2hvd2J1c2luZXNzIiwiaGlkZWJ1c2luZXNzIl0sIm1hcHBpbmdzIjoi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QUF0QixHQUErQixJQUEvQjtBQUNILEdBakpJO0FBa0pMNkMsRUFBQUEsYUFsSkssMkJBa0pVO0FBQ1gsU0FBS3RELGdCQUFMLENBQXNCUyxNQUF0QixHQUErQixLQUEvQjtBQUNILEdBcEpJO0FBcUpMOEMsRUFBQUEsWUFySkssMEJBcUpTO0FBQ1YsU0FBS3RELHVCQUFMLENBQTZCUSxNQUE3QixHQUFzQyxJQUF0QztBQUNILEdBdkpJO0FBd0pMK0MsRUFBQUEsWUF4SkssMEJBd0pTO0FBQ1YsU0FBS3ZELHVCQUFMLENBQTZCUSxNQUE3QixHQUFzQyxLQUF0QztBQUNIO0FBMUpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbnZhciB1c2VyZGF0YSA9IHJlcXVpcmUoJ3VzZXJkYXRhJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG15X2ZsaWdodHNfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJlaG91c2Vfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVmbGlnaHRzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbGlnaHRzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBzaG9wX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGRpbmdzX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYnVzaW5lc3NfZmxpZ2h0c193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNldHRpbmdfd2luZG93czp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgd2FybmluZ193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgXG4gICAgfSxcbiAgICBzaG93YWxsZmxpZ2h0cygpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgc2hvd2ZseWluZygpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgY2xvc2VhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93d2FyZWhvdXNlKCl7XG4gICAgICAgIHRoaXMud2FyZWhvdXNlX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBjbG9zZXdhcmVob3VzZSgpe1xuICAgICAgICB0aGlzLndhcmVob3VzZV93aW5kb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBmbHk6ZnVuY3Rpb24oZXZlbnQsY3VzdG9tRXZlbnREYXRhKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGdvID0gMDtcbiAgICAgICAgaWYodXNlcmRhdGEubGVmdHMubGVmdGZ1ZWw+PWN1c3RvbUV2ZW50RGF0YS5mdWVsJiZ1c2VyZGF0YS5sZWZ0cy5sZWZ0cGFzc2VuZ2VyPj1jdXN0b21FdmVudERhdGEucGFzc2VuZ2VyKXtcbiAgICAgICAgICAgIGZvcih2YXIgbyBpbiB1c2VyZGF0YS5haXJwbGFuZWRhdGEpe1xuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5sZXZlbD09Y3VzdG9tRXZlbnREYXRhLmxldmVsICYmIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5pc2ZseWluZz09J2ZhbHNlJyl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5pc2ZseWluZyA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmRlc3RpbmF0aW9uID0gY3VzdG9tRXZlbnREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5yZXdhcmQgPSBjdXN0b21FdmVudERhdGEucmV3YXJkO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uZW5kdGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKSkvMTAwMCArIGN1c3RvbUV2ZW50RGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbCAtPSBjdXN0b21FdmVudERhdGEuZnVlbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEubGVmdHMubGVmdHBhc3NlbmdlciAtPSBjdXN0b21FdmVudERhdGEucGFzc2VuZ2VyO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzFdPT0zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzBdPT0xMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVsxXSs9MTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5hbGxmaWxlLnN0YXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVswXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ28gPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ28gPT0gMCl7XG4gICAgICAgICAgICBpZih1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbDxjdXN0b21FdmVudERhdGEuZnVlbHx8dXNlcmRhdGEubGVmdHMubGVmdHBhc3NlbmdlcjxjdXN0b21FdmVudERhdGEucGFzc2VuZ2VyKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgZW5vdWdoIGZ1ZWwgb3IgcGFzc2VuZ2Vycyc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93d2FybmluZyhpbm5lcik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgYW4gYXZpbGFibGUgcGxhbmUgb2YgdGhlIHJlcXVpcmVkIHR5cGUuXFxuQnV5IGEgbmV3IHBsYW5lIG9yIHdhaXQgZm9yIHRoZSBjdXJyZW50IGZsaWdodHMgdG8gcmV0dXJuLidcbiAgICAgICAgICAgICAgICB0aGlzLnNob3d3YXJuaW5nKGlubmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBoaWRld2FybmluZygpe1xuICAgICAgICB0aGlzLndhcm5pbmdfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB0b2FjdGl2ZSgpe1xuICAgICAgICB0aGlzLmFjdGl2ZWZsaWdodHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGlnaHRzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB0b2ZsaWdodGxpc3QoKXtcbiAgICAgICAgdGhpcy5mbGlnaHRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlZmxpZ2h0cy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2hvd3dhcm5pbmcoaW5uZXIpe1xuICAgICAgICB0aGlzLndhcm5pbmdfd2luZG93LmdldENoaWxkQnlOYW1lKFwid2FybmluZ193aW5kb3dcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGlubmVyO1xuICAgICAgICB0aGlzLndhcm5pbmdfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzaG93c2V0dGluZygpe1xuICAgICAgICB0aGlzLnNldHRpbmdfd2luZG93cy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZXNldHRpbmcoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5nX3dpbmRvd3MuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93c2hvcCgpe1xuICAgICAgICB0aGlzLnNob3Bfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlc2hvcCgpe1xuICAgICAgICB0aGlzLnNob3Bfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd2J1aWxkaW5ncygpe1xuICAgICAgICB0aGlzLmJ1aWxkaW5nc193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVidWlsZGluZ3MoKXtcbiAgICAgICAgdGhpcy5idWlsZGluZ3Nfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd2J1c2luZXNzKCl7XG4gICAgICAgIHRoaXMuYnVzaW5lc3NfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVidXNpbmVzcygpe1xuICAgICAgICB0aGlzLmJ1c2luZXNzX2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0pO1xuIl19