
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
    this.my_flights_window.active = true;
    this.my_flights_window.getChildByName("active").active = false;
    this.my_flights_window.getChildByName("inner").active = true;
  },
  showflying: function showflying() {
    this.my_flights_window.active = true;
    this.my_flights_window.getChildByName("inner").active = false;
    this.my_flights_window.getChildByName("active").active = true;
  },
  showwarehouse: function showwarehouse() {
    this.warehouse_window.active = true;
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
  toactive: function toactive() {
    this.activeflights.active = true;
    this.flights.active = false;
  },
  toflightlist: function toflightlist() {
    this.flights.active = true;
    this.activeflights.active = false;
    hide();
    var a = cc.instantiate(this.flights);
    a.active = true;
  },
  showwarning: function showwarning(inner) {
    this.warning_window.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
    var a = cc.instantiate(warning_window);
    a.active = true;
    this.window.addChild(a);
  },
  showsetting: function showsetting() {
    var a = cc.instantiate(this.setting_windows);
    a.active = true;
    this.window.addChild(a);
  },
  showshop: function showshop() {
    var a = cc.instantiate(this.shop_window);
    a.active = true;
    this.window.addChild(a);
  },
  showbuildings: function showbuildings() {
    var a = cc.instantiate(this.buildings_window);
    a.active = true;
    this.window.addChild(a);
  },
  showbusiness: function showbusiness() {
    var a = cc.instantiate(this.business_flights_window);
    a.active = true;
    this.window.addChild(a);
  },
  hide: function hide() {
    this.window.destroyAllChildren();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93IiwiYWN0aXZlZmxpZ2h0cyIsImZsaWdodHMiLCJzaG9wX3dpbmRvdyIsImJ1aWxkaW5nc193aW5kb3ciLCJidXNpbmVzc19mbGlnaHRzX3dpbmRvdyIsInNldHRpbmdfd2luZG93cyIsIndhcm5pbmdfd2luZG93Iiwid2luZG93Iiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNob3dhbGxmbGlnaHRzIiwiYWN0aXZlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzaG93Zmx5aW5nIiwic2hvd3dhcmVob3VzZSIsImZseSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwiZ28iLCJsZWZ0cyIsImxlZnRmdWVsIiwiZnVlbCIsImxlZnRwYXNzZW5nZXIiLCJwYXNzZW5nZXIiLCJvIiwiYWlycGxhbmVkYXRhIiwibGV2ZWwiLCJpc2ZseWluZyIsImRlc3RpbmF0aW9uIiwibmFtZSIsInJld2FyZCIsImVuZHRpbWUiLCJEYXRlIiwicGFyc2UiLCJ0aW1lIiwiYWNoaWV2ZW1lbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJhbGxmaWxlIiwic3RhcnMiLCJpbm5lciIsInNob3d3YXJuaW5nIiwidG9hY3RpdmUiLCJ0b2ZsaWdodGxpc3QiLCJoaWRlIiwiYSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJhZGRDaGlsZCIsInNob3dzZXR0aW5nIiwic2hvd3Nob3AiLCJzaG93YnVpbGRpbmdzIiwic2hvd2J1c2luZXNzIiwiZGVzdHJveUFsbENoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDSCxHQTNJSTtBQTRJTFEsRUFBQUEsYUE1SUssMkJBNElVO0FBQ1gsUUFBSVIsQ0FBQyxHQUFHeEQsRUFBRSxDQUFDeUQsV0FBSCxDQUFlLEtBQUs5QyxnQkFBcEIsQ0FBUjtBQUNBNkMsSUFBQUEsQ0FBQyxDQUFDbkMsTUFBRixHQUFXLElBQVg7QUFDQSxTQUFLTixNQUFMLENBQVk4QyxRQUFaLENBQXFCTCxDQUFyQjtBQUNILEdBaEpJO0FBaUpMUyxFQUFBQSxZQWpKSywwQkFpSlM7QUFDVixRQUFJVCxDQUFDLEdBQUd4RCxFQUFFLENBQUN5RCxXQUFILENBQWUsS0FBSzdDLHVCQUFwQixDQUFSO0FBQ0E0QyxJQUFBQSxDQUFDLENBQUNuQyxNQUFGLEdBQVcsSUFBWDtBQUNBLFNBQUtOLE1BQUwsQ0FBWThDLFFBQVosQ0FBcUJMLENBQXJCO0FBQ0gsR0FySkk7QUFzSkxELEVBQUFBLElBdEpLLGtCQXNKQztBQUNGLFNBQUt4QyxNQUFMLENBQVltRCxrQkFBWjtBQUNIO0FBeEpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbnZhciB1c2VyZGF0YSA9IHJlcXVpcmUoJ3VzZXJkYXRhJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG15X2ZsaWdodHNfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJlaG91c2Vfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVmbGlnaHRzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBmbGlnaHRzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBzaG9wX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGRpbmdzX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYnVzaW5lc3NfZmxpZ2h0c193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNldHRpbmdfd2luZG93czp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgd2FybmluZ193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHdpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzaG93Zmx5aW5nKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzaG93d2FyZWhvdXNlKCl7XG4gICAgICAgIHRoaXMud2FyZWhvdXNlX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgZmx5OmZ1bmN0aW9uKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBnbyA9IDA7XG4gICAgICAgIGlmKHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsPj1jdXN0b21FdmVudERhdGEuZnVlbCYmdXNlcmRhdGEubGVmdHMubGVmdHBhc3Nlbmdlcj49Y3VzdG9tRXZlbnREYXRhLnBhc3Nlbmdlcil7XG4gICAgICAgICAgICBmb3IodmFyIG8gaW4gdXNlcmRhdGEuYWlycGxhbmVkYXRhKXtcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10ubGV2ZWw9PWN1c3RvbUV2ZW50RGF0YS5sZXZlbCAmJiB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmc9PSdmYWxzZScpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmcgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5kZXN0aW5hdGlvbiA9IGN1c3RvbUV2ZW50RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10ucmV3YXJkID0gY3VzdG9tRXZlbnREYXRhLnJld2FyZDtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmVuZHRpbWUgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLzEwMDAgKyBjdXN0b21FdmVudERhdGEudGltZTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEubGVmdHMubGVmdGZ1ZWwgLT0gY3VzdG9tRXZlbnREYXRhLmZ1ZWw7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmxlZnRzLmxlZnRwYXNzZW5nZXIgLT0gY3VzdG9tRXZlbnREYXRhLnBhc3NlbmdlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVsxXT09Myl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVswXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVswXT09MTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMV0rPTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWxsZmlsZS5zdGFycyArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGdvID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGdvID09IDApe1xuICAgICAgICAgICAgaWYodXNlcmRhdGEubGVmdHMubGVmdGZ1ZWw8Y3VzdG9tRXZlbnREYXRhLmZ1ZWx8fHVzZXJkYXRhLmxlZnRzLmxlZnRwYXNzZW5nZXI8Y3VzdG9tRXZlbnREYXRhLnBhc3Nlbmdlcil7XG4gICAgICAgICAgICAgICAgbGV0IGlubmVyID0gJ0RvIG5vdCBoYXZlIGVub3VnaCBmdWVsIG9yIHBhc3NlbmdlcnMnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd3dhcm5pbmcoaW5uZXIpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGlubmVyID0gJ0RvIG5vdCBoYXZlIGFuIGF2aWxhYmxlIHBsYW5lIG9mIHRoZSByZXF1aXJlZCB0eXBlLlxcbkJ1eSBhIG5ldyBwbGFuZSBvciB3YWl0IGZvciB0aGUgY3VycmVudCBmbGlnaHRzIHRvIHJldHVybi4nXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93d2FybmluZyhpbm5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdG9hY3RpdmUoKXtcbiAgICAgICAgdGhpcy5hY3RpdmVmbGlnaHRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxpZ2h0cy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9mbGlnaHRsaXN0KCl7XG4gICAgICAgIHRoaXMuZmxpZ2h0cy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZWZsaWdodHMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZsaWdodHMpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzaG93d2FybmluZyhpbm5lcil7XG4gICAgICAgIHRoaXMud2FybmluZ193aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJ3YXJuaW5nX3dpbmRvd1wiKS5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaW5uZXI7XG4gICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUod2FybmluZ193aW5kb3cpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2luZG93LmFkZENoaWxkKGEpO1xuICAgIH0sXG4gICAgc2hvd3NldHRpbmcoKXtcbiAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNldHRpbmdfd2luZG93cyk7XG4gICAgICAgIGEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aW5kb3cuYWRkQ2hpbGQoYSk7XG4gICAgfSxcbiAgICBzaG93c2hvcCgpe1xuICAgICAgICBsZXQgYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hvcF93aW5kb3cpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2luZG93LmFkZENoaWxkKGEpO1xuICAgIH0sXG4gICAgc2hvd2J1aWxkaW5ncygpe1xuICAgICAgICBsZXQgYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVpbGRpbmdzX3dpbmRvdyk7XG4gICAgICAgIGEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aW5kb3cuYWRkQ2hpbGQoYSk7XG4gICAgfSxcbiAgICBzaG93YnVzaW5lc3MoKXtcbiAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1c2luZXNzX2ZsaWdodHNfd2luZG93KTtcbiAgICAgICAgYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbmRvdy5hZGRDaGlsZChhKTtcbiAgICB9LFxuICAgIGhpZGUoKXtcbiAgICAgICAgdGhpcy53aW5kb3cuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgfVxufSk7XG4iXX0=