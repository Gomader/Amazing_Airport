
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93IiwiYWN0aXZlZmxpZ2h0cyIsImZsaWdodHMiLCJzaG9wX3dpbmRvdyIsImJ1aWxkaW5nc193aW5kb3ciLCJidXNpbmVzc19mbGlnaHRzX3dpbmRvdyIsInNldHRpbmdfd2luZG93cyIsIndhcm5pbmdfd2luZG93Iiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNob3dhbGxmbGlnaHRzIiwiYWN0aXZlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzaG93Zmx5aW5nIiwiY2xvc2VhbGxmbGlnaHRzIiwic2hvd3dhcmVob3VzZSIsImNsb3Nld2FyZWhvdXNlIiwiZmx5IiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJnbyIsImxlZnRzIiwibGVmdGZ1ZWwiLCJmdWVsIiwibGVmdHBhc3NlbmdlciIsInBhc3NlbmdlciIsIm8iLCJhaXJwbGFuZWRhdGEiLCJsZXZlbCIsImlzZmx5aW5nIiwiZGVzdGluYXRpb24iLCJuYW1lIiwicmV3YXJkIiwiZW5kdGltZSIsIkRhdGUiLCJwYXJzZSIsInRpbWUiLCJhY2hpZXZlbWVudCIsImlkIiwiY29uc29sZSIsImxvZyIsImFsbGZpbGUiLCJzdGFycyIsImlubmVyIiwic2hvd3dhcm5pbmciLCJoaWRld2FybmluZyIsInRvYWN0aXZlIiwidG9mbGlnaHRsaXN0IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzaG93c2V0dGluZyIsImhpZGVzZXR0aW5nIiwic2hvd3Nob3AiLCJoaWRlc2hvcCIsInNob3didWlsZGluZ3MiLCJoaWRlYnVpbGRpbmdzIiwic2hvd2J1c2luZXNzIiwiaGlkZWJ1c2luZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxpQkFBaUIsRUFBQztBQUNkQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFETTtBQUVkLGlCQUFRO0FBRk0sS0FEVjtBQUtSQyxJQUFBQSxnQkFBZ0IsRUFBQztBQUNiRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFESztBQUViLGlCQUFRO0FBRkssS0FMVDtBQVNSRSxJQUFBQSxhQUFhLEVBQUM7QUFDVkgsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBREU7QUFFVixpQkFBUTtBQUZFLEtBVE47QUFhUkcsSUFBQUEsT0FBTyxFQUFDO0FBQ0pKLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURKO0FBRUosaUJBQVE7QUFGSixLQWJBO0FBaUJSSSxJQUFBQSxXQUFXLEVBQUM7QUFDUkwsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBREE7QUFFUixpQkFBUTtBQUZBLEtBakJKO0FBcUJSSyxJQUFBQSxnQkFBZ0IsRUFBQztBQUNiTixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFESztBQUViLGlCQUFRO0FBRkssS0FyQlQ7QUF5QlJNLElBQUFBLHVCQUF1QixFQUFDO0FBQ3BCUCxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFEWTtBQUVwQixpQkFBUTtBQUZZLEtBekJoQjtBQTZCUk8sSUFBQUEsZUFBZSxFQUFDO0FBQ1pSLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURJO0FBRVosaUJBQVE7QUFGSSxLQTdCUjtBQWlDUlEsSUFBQUEsY0FBYyxFQUFDO0FBQ1hULE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURHO0FBRVgsaUJBQVE7QUFGRztBQWpDUCxHQUhQO0FBMENMO0FBRUFTLEVBQUFBLE1BNUNLLG9CQTRDSyxDQUVULENBOUNJO0FBZ0RMQyxFQUFBQSxLQWhESyxtQkFnREksQ0FFUixDQWxESTtBQW9ETEMsRUFBQUEsTUFwREssa0JBb0RHQyxFQXBESCxFQW9ETyxDQUVYLENBdERJO0FBdURMQyxFQUFBQSxjQXZESyw0QkF1RFc7QUFDWixTQUFLZixpQkFBTCxDQUF1QmdCLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0EsU0FBS2hCLGlCQUFMLENBQXVCaUIsY0FBdkIsQ0FBc0MsUUFBdEMsRUFBZ0RELE1BQWhELEdBQXlELEtBQXpEO0FBQ0EsU0FBS2hCLGlCQUFMLENBQXVCaUIsY0FBdkIsQ0FBc0MsT0FBdEMsRUFBK0NELE1BQS9DLEdBQXdELElBQXhEO0FBQ0gsR0EzREk7QUE0RExFLEVBQUFBLFVBNURLLHdCQTRETztBQUNSLFNBQUtsQixpQkFBTCxDQUF1QmdCLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0EsU0FBS2hCLGlCQUFMLENBQXVCaUIsY0FBdkIsQ0FBc0MsT0FBdEMsRUFBK0NELE1BQS9DLEdBQXdELEtBQXhEO0FBQ0EsU0FBS2hCLGlCQUFMLENBQXVCaUIsY0FBdkIsQ0FBc0MsUUFBdEMsRUFBZ0RELE1BQWhELEdBQXlELElBQXpEO0FBQ0gsR0FoRUk7QUFpRUxHLEVBQUFBLGVBakVLLDZCQWlFWTtBQUNiLFNBQUtuQixpQkFBTCxDQUF1QmdCLE1BQXZCLEdBQWdDLEtBQWhDO0FBQ0gsR0FuRUk7QUFvRUxJLEVBQUFBLGFBcEVLLDJCQW9FVTtBQUNYLFNBQUtqQixnQkFBTCxDQUFzQmEsTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQXRFSTtBQXdFTEssRUFBQUEsY0F4RUssNEJBd0VXO0FBQ1osU0FBS2xCLGdCQUFMLENBQXNCYSxNQUF0QixHQUErQixLQUEvQjtBQUNILEdBMUVJO0FBMkVMTSxFQUFBQSxHQUFHLEVBQUMsYUFBU0MsS0FBVCxFQUFlQyxlQUFmLEVBQStCO0FBQy9CLFNBQUt4QixpQkFBTCxDQUF1QmdCLE1BQXZCLEdBQWdDLEtBQWhDO0FBQ0EsUUFBSVMsRUFBRSxHQUFHLENBQVQ7O0FBQ0EsUUFBRy9CLFFBQVEsQ0FBQ2dDLEtBQVQsQ0FBZUMsUUFBZixJQUF5QkgsZUFBZSxDQUFDSSxJQUF6QyxJQUErQ2xDLFFBQVEsQ0FBQ2dDLEtBQVQsQ0FBZUcsYUFBZixJQUE4QkwsZUFBZSxDQUFDTSxTQUFoRyxFQUEwRztBQUN0RyxXQUFJLElBQUlDLENBQVIsSUFBYXJDLFFBQVEsQ0FBQ3NDLFlBQXRCLEVBQW1DO0FBQy9CLFlBQUd0QyxRQUFRLENBQUNzQyxZQUFULENBQXNCRCxDQUF0QixFQUF5QkUsS0FBekIsSUFBZ0NULGVBQWUsQ0FBQ1MsS0FBaEQsSUFBeUR2QyxRQUFRLENBQUNzQyxZQUFULENBQXNCRCxDQUF0QixFQUF5QkcsUUFBekIsSUFBbUMsT0FBL0YsRUFBdUc7QUFDbkd4QyxVQUFBQSxRQUFRLENBQUNzQyxZQUFULENBQXNCRCxDQUF0QixFQUF5QkcsUUFBekIsR0FBb0MsTUFBcEM7QUFDQXhDLFVBQUFBLFFBQVEsQ0FBQ3NDLFlBQVQsQ0FBc0JELENBQXRCLEVBQXlCSSxXQUF6QixHQUF1Q1gsZUFBZSxDQUFDWSxJQUF2RDtBQUNBMUMsVUFBQUEsUUFBUSxDQUFDc0MsWUFBVCxDQUFzQkQsQ0FBdEIsRUFBeUJNLE1BQXpCLEdBQWtDYixlQUFlLENBQUNhLE1BQWxEO0FBQ0EzQyxVQUFBQSxRQUFRLENBQUNzQyxZQUFULENBQXNCRCxDQUF0QixFQUF5Qk8sT0FBekIsR0FBbUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlELElBQUosRUFBWCxJQUF1QixJQUF2QixHQUE4QmYsZUFBZSxDQUFDaUIsSUFBakY7QUFDQS9DLFVBQUFBLFFBQVEsQ0FBQ2dDLEtBQVQsQ0FBZUMsUUFBZixJQUEyQkgsZUFBZSxDQUFDSSxJQUEzQztBQUNBbEMsVUFBQUEsUUFBUSxDQUFDZ0MsS0FBVCxDQUFlRyxhQUFmLElBQWdDTCxlQUFlLENBQUNNLFNBQWhEOztBQUNBLGNBQUdwQyxRQUFRLENBQUNnRCxXQUFULENBQXFCbEIsZUFBZSxDQUFDbUIsRUFBckMsRUFBeUMsQ0FBekMsS0FBNkMsQ0FBaEQsRUFBa0Q7QUFDOUNDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDSCxXQUZELE1BRUs7QUFDRG5ELFlBQUFBLFFBQVEsQ0FBQ2dELFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxLQUErQyxDQUEvQzs7QUFDQSxnQkFBR2pELFFBQVEsQ0FBQ2dELFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxLQUE2QyxFQUFoRCxFQUFtRDtBQUMvQ2pELGNBQUFBLFFBQVEsQ0FBQ2dELFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxLQUE2QyxDQUE3QztBQUNBakQsY0FBQUEsUUFBUSxDQUFDb0QsT0FBVCxDQUFpQkMsS0FBakIsSUFBMEIsQ0FBMUI7QUFDQXJELGNBQUFBLFFBQVEsQ0FBQ2dELFdBQVQsQ0FBcUJsQixlQUFlLENBQUNtQixFQUFyQyxFQUF5QyxDQUF6QyxJQUE4QyxDQUE5QztBQUNIO0FBQ0o7O0FBQ0RDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQXBCLFVBQUFBLEVBQUUsR0FBRyxDQUFMO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsUUFBR0EsRUFBRSxJQUFJLENBQVQsRUFBVztBQUNQLFVBQUcvQixRQUFRLENBQUNnQyxLQUFULENBQWVDLFFBQWYsR0FBd0JILGVBQWUsQ0FBQ0ksSUFBeEMsSUFBOENsQyxRQUFRLENBQUNnQyxLQUFULENBQWVHLGFBQWYsR0FBNkJMLGVBQWUsQ0FBQ00sU0FBOUYsRUFBd0c7QUFDcEcsWUFBSWtCLEtBQUssR0FBRyx1Q0FBWjtBQUNBLGFBQUtDLFdBQUwsQ0FBaUJELEtBQWpCO0FBQ0gsT0FIRCxNQUdLO0FBQ0QsWUFBSUEsTUFBSyxHQUFHLGlIQUFaO0FBQ0EsYUFBS0MsV0FBTCxDQUFpQkQsTUFBakI7QUFDSDtBQUNKO0FBQ0osR0FoSEk7QUFrSExFLEVBQUFBLFdBbEhLLHlCQWtIUTtBQUNULFNBQUt4QyxjQUFMLENBQW9CTSxNQUFwQixHQUE2QixLQUE3QjtBQUNILEdBcEhJO0FBc0hMbUMsRUFBQUEsUUF0SEssc0JBc0hLO0FBQ04sU0FBSy9DLGFBQUwsQ0FBbUJZLE1BQW5CLEdBQTRCLElBQTVCO0FBQ0EsU0FBS1gsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLEtBQXRCO0FBQ0gsR0F6SEk7QUEySExvQyxFQUFBQSxZQTNISywwQkEySFM7QUFDVixTQUFLL0MsT0FBTCxDQUFhVyxNQUFiLEdBQXNCLElBQXRCO0FBQ0EsU0FBS1osYUFBTCxDQUFtQlksTUFBbkIsR0FBNEIsS0FBNUI7QUFDSCxHQTlISTtBQWdJTGlDLEVBQUFBLFdBaElLLHVCQWdJT0QsS0FoSVAsRUFnSWE7QUFDZCxTQUFLdEMsY0FBTCxDQUFvQk8sY0FBcEIsQ0FBbUMsZ0JBQW5DLEVBQXFEQSxjQUFyRCxDQUFvRSxPQUFwRSxFQUE2RW9DLFlBQTdFLENBQTBGekQsRUFBRSxDQUFDMEQsS0FBN0YsRUFBb0dDLE1BQXBHLEdBQTZHUCxLQUE3RztBQUNBLFNBQUt0QyxjQUFMLENBQW9CTSxNQUFwQixHQUE2QixJQUE3QjtBQUNILEdBbklJO0FBb0lMd0MsRUFBQUEsV0FwSUsseUJBb0lRO0FBQ1QsU0FBSy9DLGVBQUwsQ0FBcUJPLE1BQXJCLEdBQThCLElBQTlCO0FBQ0gsR0F0SUk7QUF1SUx5QyxFQUFBQSxXQXZJSyx5QkF1SVE7QUFDVCxTQUFLaEQsZUFBTCxDQUFxQk8sTUFBckIsR0FBOEIsS0FBOUI7QUFDSCxHQXpJSTtBQTBJTDBDLEVBQUFBLFFBMUlLLHNCQTBJSztBQUNOLFNBQUtwRCxXQUFMLENBQWlCVSxNQUFqQixHQUEwQixJQUExQjtBQUNILEdBNUlJO0FBNklMMkMsRUFBQUEsUUE3SUssc0JBNklLO0FBQ04sU0FBS3JELFdBQUwsQ0FBaUJVLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0gsR0EvSUk7QUFnSkw0QyxFQUFBQSxhQWhKSywyQkFnSlU7QUFDWCxTQUFLckQsZ0JBQUwsQ0FBc0JTLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FsSkk7QUFtSkw2QyxFQUFBQSxhQW5KSywyQkFtSlU7QUFDWCxTQUFLdEQsZ0JBQUwsQ0FBc0JTLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0FySkk7QUFzSkw4QyxFQUFBQSxZQXRKSywwQkFzSlM7QUFDVixTQUFLdEQsdUJBQUwsQ0FBNkJRLE1BQTdCLEdBQXNDLElBQXRDO0FBQ0gsR0F4Skk7QUF5SkwrQyxFQUFBQSxZQXpKSywwQkF5SlM7QUFDVixTQUFLdkQsdUJBQUwsQ0FBNkJRLE1BQTdCLEdBQXNDLEtBQXRDO0FBQ0g7QUEzSkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIHVzZXJkYXRhID0gcmVxdWlyZSgndXNlcmRhdGEnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbXlfZmxpZ2h0c193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHdhcmVob3VzZV93aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZWZsaWdodHM6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZsaWdodHM6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3Bfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBidWlsZGluZ3Nfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBidXNpbmVzc19mbGlnaHRzX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dGluZ193aW5kb3dzOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzaG93Zmx5aW5nKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9zZWFsbGZsaWdodHMoKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3d3YXJlaG91c2UoKXtcbiAgICAgICAgdGhpcy53YXJlaG91c2Vfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3Nld2FyZWhvdXNlKCl7XG4gICAgICAgIHRoaXMud2FyZWhvdXNlX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGZseTpmdW5jdGlvbihldmVudCxjdXN0b21FdmVudERhdGEpe1xuICAgICAgICB0aGlzLm15X2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgZ28gPSAwO1xuICAgICAgICBpZih1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbD49Y3VzdG9tRXZlbnREYXRhLmZ1ZWwmJnVzZXJkYXRhLmxlZnRzLmxlZnRwYXNzZW5nZXI+PWN1c3RvbUV2ZW50RGF0YS5wYXNzZW5nZXIpe1xuICAgICAgICAgICAgZm9yKHZhciBvIGluIHVzZXJkYXRhLmFpcnBsYW5lZGF0YSl7XG4gICAgICAgICAgICAgICAgaWYodXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmxldmVsPT1jdXN0b21FdmVudERhdGEubGV2ZWwgJiYgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmlzZmx5aW5nPT0nZmFsc2UnKXtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmlzZmx5aW5nID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uZGVzdGluYXRpb24gPSBjdXN0b21FdmVudERhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLnJld2FyZCA9IGN1c3RvbUV2ZW50RGF0YS5yZXdhcmQ7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5lbmR0aW1lID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKS8xMDAwICsgY3VzdG9tRXZlbnREYXRhLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmxlZnRzLmxlZnRmdWVsIC09IGN1c3RvbUV2ZW50RGF0YS5mdWVsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5sZWZ0cy5sZWZ0cGFzc2VuZ2VyIC09IGN1c3RvbUV2ZW50RGF0YS5wYXNzZW5nZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMV09PTMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMF0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLmFjaGlldmVtZW50W2N1c3RvbUV2ZW50RGF0YS5pZF1bMF09PTEwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzFdKz0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFsbGZpbGUuc3RhcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzBdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XG4gICAgICAgICAgICAgICAgICAgIGdvID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGdvID09IDApe1xuICAgICAgICAgICAgaWYodXNlcmRhdGEubGVmdHMubGVmdGZ1ZWw8Y3VzdG9tRXZlbnREYXRhLmZ1ZWx8fHVzZXJkYXRhLmxlZnRzLmxlZnRwYXNzZW5nZXI8Y3VzdG9tRXZlbnREYXRhLnBhc3Nlbmdlcil7XG4gICAgICAgICAgICAgICAgbGV0IGlubmVyID0gJ0RvIG5vdCBoYXZlIGVub3VnaCBmdWVsIG9yIHBhc3NlbmdlcnMnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd3dhcm5pbmcoaW5uZXIpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGlubmVyID0gJ0RvIG5vdCBoYXZlIGFuIGF2aWxhYmxlIHBsYW5lIG9mIHRoZSByZXF1aXJlZCB0eXBlLlxcbkJ1eSBhIG5ldyBwbGFuZSBvciB3YWl0IGZvciB0aGUgY3VycmVudCBmbGlnaHRzIHRvIHJldHVybi4nXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93d2FybmluZyhpbm5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaGlkZXdhcm5pbmcoKXtcbiAgICAgICAgdGhpcy53YXJuaW5nX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9hY3RpdmUoKXtcbiAgICAgICAgdGhpcy5hY3RpdmVmbGlnaHRzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmxpZ2h0cy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9mbGlnaHRsaXN0KCl7XG4gICAgICAgIHRoaXMuZmxpZ2h0cy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZWZsaWdodHMuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHNob3d3YXJuaW5nKGlubmVyKXtcbiAgICAgICAgdGhpcy53YXJuaW5nX3dpbmRvdy5nZXRDaGlsZEJ5TmFtZShcIndhcm5pbmdfd2luZG93XCIpLmdldENoaWxkQnlOYW1lKFwiaW5uZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpbm5lcjtcbiAgICAgICAgdGhpcy53YXJuaW5nX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgc2hvd3NldHRpbmcoKXtcbiAgICAgICAgdGhpcy5zZXR0aW5nX3dpbmRvd3MuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVzZXR0aW5nKCl7XG4gICAgICAgIHRoaXMuc2V0dGluZ193aW5kb3dzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd3Nob3AoKXtcbiAgICAgICAgdGhpcy5zaG9wX3dpbmRvdy5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZXNob3AoKXtcbiAgICAgICAgdGhpcy5zaG9wX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3didWlsZGluZ3MoKXtcbiAgICAgICAgdGhpcy5idWlsZGluZ3Nfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlYnVpbGRpbmdzKCl7XG4gICAgICAgIHRoaXMuYnVpbGRpbmdzX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3didXNpbmVzcygpe1xuICAgICAgICB0aGlzLmJ1c2luZXNzX2ZsaWdodHNfd2luZG93LmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlYnVzaW5lc3MoKXtcbiAgICAgICAgdGhpcy5idXNpbmVzc19mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG59KTtcbiJdfQ==