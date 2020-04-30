
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

          console.log("a");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93IiwiYWN0aXZlZmxpZ2h0cyIsImZsaWdodHMiLCJzaG9wX3dpbmRvdyIsImJ1aWxkaW5nc193aW5kb3ciLCJzZXR0aW5nX3dpbmRvd3MiLCJ3YXJuaW5nX3dpbmRvdyIsIm9uTG9hZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJzaG93YWxsZmxpZ2h0cyIsImFjdGl2ZSIsImdldENoaWxkQnlOYW1lIiwic2hvd2ZseWluZyIsImNsb3NlYWxsZmxpZ2h0cyIsInNob3d3YXJlaG91c2UiLCJjbG9zZXdhcmVob3VzZSIsImZseSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwiZ28iLCJsZWZ0cyIsImxlZnRmdWVsIiwiZnVlbCIsImxlZnRwYXNzZW5nZXIiLCJwYXNzZW5nZXIiLCJvIiwiYWlycGxhbmVkYXRhIiwibGV2ZWwiLCJpc2ZseWluZyIsImRlc3RpbmF0aW9uIiwibmFtZSIsInJld2FyZCIsImVuZHRpbWUiLCJEYXRlIiwicGFyc2UiLCJ0aW1lIiwiYWNoaWV2ZW1lbnQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJhbGxmaWxlIiwic3RhcnMiLCJpbm5lciIsInNob3d3YXJuaW5nIiwiaGlkZXdhcm5pbmciLCJ0b2FjdGl2ZSIsInRvZmxpZ2h0bGlzdCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwic2hvd3NldHRpbmciLCJoaWRlc2V0dGluZyIsInNob3dzaG9wIiwiaGlkZXNob3AiLCJzaG93YnVpbGRpbmdzIiwiaGlkZWJ1aWxkaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsaUJBQWlCLEVBQUM7QUFDZEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBRE07QUFFZCxpQkFBUTtBQUZNLEtBRFY7QUFLUkMsSUFBQUEsZ0JBQWdCLEVBQUM7QUFDYkYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBREs7QUFFYixpQkFBUTtBQUZLLEtBTFQ7QUFTUkUsSUFBQUEsYUFBYSxFQUFDO0FBQ1ZILE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURFO0FBRVYsaUJBQVE7QUFGRSxLQVROO0FBYVJHLElBQUFBLE9BQU8sRUFBQztBQUNKSixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFESjtBQUVKLGlCQUFRO0FBRkosS0FiQTtBQWlCUkksSUFBQUEsV0FBVyxFQUFDO0FBQ1JMLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURBO0FBRVIsaUJBQVE7QUFGQSxLQWpCSjtBQXFCUkssSUFBQUEsZ0JBQWdCLEVBQUM7QUFDYk4sTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBREs7QUFFYixpQkFBUTtBQUZLLEtBckJUO0FBeUJSTSxJQUFBQSxlQUFlLEVBQUM7QUFDWlAsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBREk7QUFFWixpQkFBUTtBQUZJLEtBekJSO0FBNkJSTyxJQUFBQSxjQUFjLEVBQUM7QUFDWFIsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBREc7QUFFWCxpQkFBUTtBQUZHO0FBN0JQLEdBSFA7QUFzQ0w7QUFFQVEsRUFBQUEsTUF4Q0ssb0JBd0NLLENBRVQsQ0ExQ0k7QUE0Q0xDLEVBQUFBLEtBNUNLLG1CQTRDSSxDQUVSLENBOUNJO0FBZ0RMQyxFQUFBQSxNQWhESyxrQkFnREdDLEVBaERILEVBZ0RPLENBRVgsQ0FsREk7QUFtRExDLEVBQUFBLGNBbkRLLDRCQW1EVztBQUNaLFNBQUtkLGlCQUFMLENBQXVCZSxNQUF2QixHQUFnQyxJQUFoQztBQUNBLFNBQUtmLGlCQUFMLENBQXVCZ0IsY0FBdkIsQ0FBc0MsUUFBdEMsRUFBZ0RELE1BQWhELEdBQXlELEtBQXpEO0FBQ0EsU0FBS2YsaUJBQUwsQ0FBdUJnQixjQUF2QixDQUFzQyxPQUF0QyxFQUErQ0QsTUFBL0MsR0FBd0QsSUFBeEQ7QUFDSCxHQXZESTtBQXdETEUsRUFBQUEsVUF4REssd0JBd0RPO0FBQ1IsU0FBS2pCLGlCQUFMLENBQXVCZSxNQUF2QixHQUFnQyxJQUFoQztBQUNBLFNBQUtmLGlCQUFMLENBQXVCZ0IsY0FBdkIsQ0FBc0MsT0FBdEMsRUFBK0NELE1BQS9DLEdBQXdELEtBQXhEO0FBQ0EsU0FBS2YsaUJBQUwsQ0FBdUJnQixjQUF2QixDQUFzQyxRQUF0QyxFQUFnREQsTUFBaEQsR0FBeUQsSUFBekQ7QUFDSCxHQTVESTtBQTZETEcsRUFBQUEsZUE3REssNkJBNkRZO0FBQ2IsU0FBS2xCLGlCQUFMLENBQXVCZSxNQUF2QixHQUFnQyxLQUFoQztBQUNILEdBL0RJO0FBZ0VMSSxFQUFBQSxhQWhFSywyQkFnRVU7QUFDWCxTQUFLaEIsZ0JBQUwsQ0FBc0JZLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FsRUk7QUFvRUxLLEVBQUFBLGNBcEVLLDRCQW9FVztBQUNaLFNBQUtqQixnQkFBTCxDQUFzQlksTUFBdEIsR0FBK0IsS0FBL0I7QUFDSCxHQXRFSTtBQXVFTE0sRUFBQUEsR0FBRyxFQUFDLGFBQVNDLEtBQVQsRUFBZUMsZUFBZixFQUErQjtBQUMvQixTQUFLdkIsaUJBQUwsQ0FBdUJlLE1BQXZCLEdBQWdDLEtBQWhDO0FBQ0EsUUFBSVMsRUFBRSxHQUFHLENBQVQ7O0FBQ0EsUUFBRzlCLFFBQVEsQ0FBQytCLEtBQVQsQ0FBZUMsUUFBZixJQUF5QkgsZUFBZSxDQUFDSSxJQUF6QyxJQUErQ2pDLFFBQVEsQ0FBQytCLEtBQVQsQ0FBZUcsYUFBZixJQUE4QkwsZUFBZSxDQUFDTSxTQUFoRyxFQUEwRztBQUN0RyxXQUFJLElBQUlDLENBQVIsSUFBYXBDLFFBQVEsQ0FBQ3FDLFlBQXRCLEVBQW1DO0FBQy9CLFlBQUdyQyxRQUFRLENBQUNxQyxZQUFULENBQXNCRCxDQUF0QixFQUF5QkUsS0FBekIsSUFBZ0NULGVBQWUsQ0FBQ1MsS0FBaEQsSUFBeUR0QyxRQUFRLENBQUNxQyxZQUFULENBQXNCRCxDQUF0QixFQUF5QkcsUUFBekIsSUFBbUMsT0FBL0YsRUFBdUc7QUFDbkd2QyxVQUFBQSxRQUFRLENBQUNxQyxZQUFULENBQXNCRCxDQUF0QixFQUF5QkcsUUFBekIsR0FBb0MsTUFBcEM7QUFDQXZDLFVBQUFBLFFBQVEsQ0FBQ3FDLFlBQVQsQ0FBc0JELENBQXRCLEVBQXlCSSxXQUF6QixHQUF1Q1gsZUFBZSxDQUFDWSxJQUF2RDtBQUNBekMsVUFBQUEsUUFBUSxDQUFDcUMsWUFBVCxDQUFzQkQsQ0FBdEIsRUFBeUJNLE1BQXpCLEdBQWtDYixlQUFlLENBQUNhLE1BQWxEO0FBQ0ExQyxVQUFBQSxRQUFRLENBQUNxQyxZQUFULENBQXNCRCxDQUF0QixFQUF5Qk8sT0FBekIsR0FBbUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlELElBQUosRUFBWCxJQUF1QixJQUF2QixHQUE4QmYsZUFBZSxDQUFDaUIsSUFBakY7QUFDQTlDLFVBQUFBLFFBQVEsQ0FBQytCLEtBQVQsQ0FBZUMsUUFBZixJQUEyQkgsZUFBZSxDQUFDSSxJQUEzQztBQUNBakMsVUFBQUEsUUFBUSxDQUFDK0IsS0FBVCxDQUFlRyxhQUFmLElBQWdDTCxlQUFlLENBQUNNLFNBQWhEOztBQUNBLGNBQUduQyxRQUFRLENBQUMrQyxXQUFULENBQXFCbEIsZUFBZSxDQUFDbUIsRUFBckMsRUFBeUMsQ0FBekMsS0FBNkMsQ0FBaEQsRUFBa0Q7QUFDOUNDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDSCxXQUZELE1BRUs7QUFDRGxELFlBQUFBLFFBQVEsQ0FBQytDLFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxLQUErQyxDQUEvQzs7QUFDQSxnQkFBR2hELFFBQVEsQ0FBQytDLFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxLQUE2QyxFQUFoRCxFQUFtRDtBQUMvQ2hELGNBQUFBLFFBQVEsQ0FBQytDLFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxLQUE2QyxDQUE3QztBQUNBaEQsY0FBQUEsUUFBUSxDQUFDbUQsT0FBVCxDQUFpQkMsS0FBakIsSUFBMEIsQ0FBMUI7QUFDQXBELGNBQUFBLFFBQVEsQ0FBQytDLFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxJQUE4QyxDQUE5QztBQUNIO0FBQ0o7O0FBQ0RDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQXBCLFVBQUFBLEVBQUUsR0FBRyxDQUFMO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsUUFBR0EsRUFBRSxJQUFJLENBQVQsRUFBVztBQUNQLFVBQUc5QixRQUFRLENBQUMrQixLQUFULENBQWVDLFFBQWYsR0FBd0JILGVBQWUsQ0FBQ0ksSUFBeEMsSUFBOENqQyxRQUFRLENBQUMrQixLQUFULENBQWVHLGFBQWYsR0FBNkJMLGVBQWUsQ0FBQ00sU0FBOUYsRUFBd0c7QUFDcEcsWUFBSWtCLEtBQUssR0FBRyx1Q0FBWjtBQUNBLGFBQUtDLFdBQUwsQ0FBaUJELEtBQWpCO0FBQ0gsT0FIRCxNQUdLO0FBQ0QsWUFBSUEsTUFBSyxHQUFHLGlIQUFaO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQkQsTUFBakI7QUFDSDtBQUNKO0FBQ0osR0E1R0k7QUE4R0xFLEVBQUFBLFdBOUdLLHlCQThHUTtBQUNULFNBQUt4QyxjQUFMLENBQW9CTSxNQUFwQixHQUE2QixLQUE3QjtBQUNILEdBaEhJO0FBa0hMbUMsRUFBQUEsUUFsSEssc0JBa0hLO0FBQ04sU0FBSzlDLGFBQUwsQ0FBbUJXLE1BQW5CLEdBQTRCLElBQTVCO0FBQ0EsU0FBS1YsT0FBTCxDQUFhVSxNQUFiLEdBQXNCLEtBQXRCO0FBQ0gsR0FySEk7QUF1SExvQyxFQUFBQSxZQXZISywwQkF1SFM7QUFDVixTQUFLOUMsT0FBTCxDQUFhVSxNQUFiLEdBQXNCLElBQXRCO0FBQ0EsU0FBS1gsYUFBTCxDQUFtQlcsTUFBbkIsR0FBNEIsS0FBNUI7QUFDSCxHQTFISTtBQTRITGlDLEVBQUFBLFdBNUhLLHVCQTRIT0QsS0E1SFAsRUE0SGE7QUFDZCxTQUFLdEMsY0FBTCxDQUFvQk8sY0FBcEIsQ0FBbUMsZ0JBQW5DLEVBQXFEQSxjQUFyRCxDQUFvRSxPQUFwRSxFQUE2RW9DLFlBQTdFLENBQTBGeEQsRUFBRSxDQUFDeUQsS0FBN0YsRUFBb0dDLE1BQXBHLEdBQTZHUCxLQUE3RztBQUNBLFNBQUt0QyxjQUFMLENBQW9CTSxNQUFwQixHQUE2QixJQUE3QjtBQUNILEdBL0hJO0FBZ0lMd0MsRUFBQUEsV0FoSUsseUJBZ0lRO0FBQ1QsU0FBSy9DLGVBQUwsQ0FBcUJPLE1BQXJCLEdBQThCLElBQTlCO0FBQ0gsR0FsSUk7QUFtSUx5QyxFQUFBQSxXQW5JSyx5QkFtSVE7QUFDVCxTQUFLaEQsZUFBTCxDQUFxQk8sTUFBckIsR0FBOEIsS0FBOUI7QUFDSCxHQXJJSTtBQXNJTDBDLEVBQUFBLFFBdElLLHNCQXNJSztBQUNOLFNBQUtuRCxXQUFMLENBQWlCUyxNQUFqQixHQUEwQixJQUExQjtBQUNILEdBeElJO0FBeUlMMkMsRUFBQUEsUUF6SUssc0JBeUlLO0FBQ04sU0FBS3BELFdBQUwsQ0FBaUJTLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0gsR0EzSUk7QUE0SUw0QyxFQUFBQSxhQTVJSywyQkE0SVU7QUFDWCxTQUFLcEQsZ0JBQUwsQ0FBc0JRLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0E5SUk7QUErSUw2QyxFQUFBQSxhQS9JSywyQkErSVU7QUFDWCxTQUFLckQsZ0JBQUwsQ0FBc0JRLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0g7QUFqSkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIHVzZXJkYXRhID0gcmVxdWlyZSgndXNlcmRhdGEnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXlfZmxpZ2h0c193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHdhcmVob3VzZV93aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZWZsaWdodHM6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZsaWdodHM6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3Bfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBidWlsZGluZ3Nfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBzZXR0aW5nX3dpbmRvd3M6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmdfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIFxuICAgIH0sXG4gICAgc2hvd2FsbGZsaWdodHMoKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmdldENoaWxkQnlOYW1lKFwiaW5uZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHNob3dmbHlpbmcoKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmdldENoaWxkQnlOYW1lKFwiaW5uZXJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb3NlYWxsZmxpZ2h0cygpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd3dhcmVob3VzZSgpe1xuICAgICAgICB0aGlzLndhcmVob3VzZV93aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2xvc2V3YXJlaG91c2UoKXtcbiAgICAgICAgdGhpcy53YXJlaG91c2Vfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgZmx5OmZ1bmN0aW9uKGV2ZW50LGN1c3RvbUV2ZW50RGF0YSl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBnbyA9IDA7XG4gICAgICAgIGlmKHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsPj1jdXN0b21FdmVudERhdGEuZnVlbCYmdXNlcmRhdGEubGVmdHMubGVmdHBhc3Nlbmdlcj49Y3VzdG9tRXZlbnREYXRhLnBhc3Nlbmdlcil7XG4gICAgICAgICAgICBmb3IodmFyIG8gaW4gdXNlcmRhdGEuYWlycGxhbmVkYXRhKXtcbiAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10ubGV2ZWw9PWN1c3RvbUV2ZW50RGF0YS5sZXZlbCAmJiB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmc9PSdmYWxzZScpe1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uaXNmbHlpbmcgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5kZXN0aW5hdGlvbiA9IGN1c3RvbUV2ZW50RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10ucmV3YXJkID0gY3VzdG9tRXZlbnREYXRhLnJld2FyZDtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmVuZHRpbWUgPSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLzEwMDAgKyBjdXN0b21FdmVudERhdGEudGltZTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEubGVmdHMubGVmdGZ1ZWwgLT0gY3VzdG9tRXZlbnREYXRhLmZ1ZWw7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmxlZnRzLmxlZnRwYXNzZW5nZXIgLT0gY3VzdG9tRXZlbnREYXRhLnBhc3NlbmdlcjtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVsxXT09Myl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVswXSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVswXT09MTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMV0rPTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWxsZmlsZS5zdGFycyArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZ28gPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ28gPT0gMCl7XG4gICAgICAgICAgICBpZih1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbDxjdXN0b21FdmVudERhdGEuZnVlbHx8dXNlcmRhdGEubGVmdHMubGVmdHBhc3NlbmdlcjxjdXN0b21FdmVudERhdGEucGFzc2VuZ2VyKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgZW5vdWdoIGZ1ZWwgb3IgcGFzc2VuZ2Vycyc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93d2FybmluZyhpbm5lcik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgYW4gYXZpbGFibGUgcGxhbmUgb2YgdGhlIHJlcXVpcmVkIHR5cGUuXFxuQnV5IGEgbmV3IHBsYW5lIG9yIHdhaXQgZm9yIHRoZSBjdXJyZW50IGZsaWdodHMgdG8gcmV0dXJuLidcbiAgICAgICAgICAgICAgICB0aGlzLnNob3d3YXJuaW5nKGlubmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBoaWRld2FybmluZygpe1xuICAgICAgICB0aGlzLndhcm5pbmdfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB0b2FjdGl2ZSgpe1xuICAgICAgICB0aGlzLmFjdGl2ZWZsaWdodHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mbGlnaHRzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB0b2ZsaWdodGxpc3QoKXtcbiAgICAgICAgdGhpcy5mbGlnaHRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlZmxpZ2h0cy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2hvd3dhcm5pbmcoaW5uZXIpe1xuICAgICAgICB0aGlzLndhcm5pbmdfd2luZG93LmdldENoaWxkQnlOYW1lKFwid2FybmluZ193aW5kb3dcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGlubmVyO1xuICAgICAgICB0aGlzLndhcm5pbmdfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzaG93c2V0dGluZygpe1xuICAgICAgICB0aGlzLnNldHRpbmdfd2luZG93cy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZXNldHRpbmcoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5nX3dpbmRvd3MuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93c2hvcCgpe1xuICAgICAgICB0aGlzLnNob3Bfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlc2hvcCgpe1xuICAgICAgICB0aGlzLnNob3Bfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd2J1aWxkaW5ncygpe1xuICAgICAgICB0aGlzLmJ1aWxkaW5nc193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVidWlsZGluZ3MoKXtcbiAgICAgICAgdGhpcy5idWlsZGluZ3Nfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0pO1xuIl19