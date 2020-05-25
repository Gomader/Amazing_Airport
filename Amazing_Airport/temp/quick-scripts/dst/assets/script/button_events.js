
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
    var a = cc.instantiate(this.my_flights_window);
    a.active = true;
    a.getChildByName("active").active = false;
    a.getChildByName("inner").active = true;
    this.window.addChild(a);
  },
  showflying: function showflying() {
    var a = cc.instantiate(this.my_flights_window);
    a.active = true;
    a.getChildByName("active").active = true;
    a.getChildByName("inner").active = false;
    this.window.addChild(a);
  },
  showwarehouse: function showwarehouse() {
    var a = cc.instantiate(this.warehouse_window);
    a.active = true;
    this.window.addChild(a);
  },
  fly: function fly(event, customEventData) {
    this.window.destroyAllChildren();
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
    this.window.getChildByName("My_flights_window").getChildByName("active").active = true;
    this.window.getChildByName("My_flights_window").getChildByName("inner").active = false;
  },
  toflightlist: function toflightlist() {
    this.window.getChildByName("My_flights_window").getChildByName("active").active = false;
    this.window.getChildByName("My_flights_window").getChildByName("inner").active = true;
  },
  showwarning: function showwarning(inner) {
    this.warning_window.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
    var a = cc.instantiate(warning_window);
    a.active = true;
    this.window.addChild(a);
  },
  showsetting: function showsetting() {
    this.window.destroyAllChildren();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJ3YXJlaG91c2Vfd2luZG93IiwiYWN0aXZlZmxpZ2h0cyIsImZsaWdodHMiLCJzaG9wX3dpbmRvdyIsImJ1aWxkaW5nc193aW5kb3ciLCJidXNpbmVzc19mbGlnaHRzX3dpbmRvdyIsInNldHRpbmdfd2luZG93cyIsIndhcm5pbmdfd2luZG93Iiwid2luZG93Iiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNob3dhbGxmbGlnaHRzIiwiYSIsImluc3RhbnRpYXRlIiwiYWN0aXZlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhZGRDaGlsZCIsInNob3dmbHlpbmciLCJzaG93d2FyZWhvdXNlIiwiZmx5IiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJnbyIsImxlZnRzIiwibGVmdGZ1ZWwiLCJmdWVsIiwibGVmdHBhc3NlbmdlciIsInBhc3NlbmdlciIsIm8iLCJhaXJwbGFuZWRhdGEiLCJsZXZlbCIsImlzZmx5aW5nIiwiZGVzdGluYXRpb24iLCJuYW1lIiwicmV3YXJkIiwiZW5kdGltZSIsIkRhdGUiLCJwYXJzZSIsInRpbWUiLCJhY2hpZXZlbWVudCIsImlkIiwiY29uc29sZSIsImxvZyIsImFsbGZpbGUiLCJzdGFycyIsImlubmVyIiwic2hvd3dhcm5pbmciLCJ0b2FjdGl2ZSIsInRvZmxpZ2h0bGlzdCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwic2hvd3NldHRpbmciLCJzaG93c2hvcCIsInNob3didWlsZGluZ3MiLCJzaG93YnVzaW5lc3MiLCJoaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQSxXQXBJSyx5QkFvSVE7QUFDVCxTQUFLL0MsTUFBTCxDQUFZZ0Isa0JBQVo7QUFDQSxRQUFJVixDQUFDLEdBQUdyQixFQUFFLENBQUNzQixXQUFILENBQWUsS0FBS1QsZUFBcEIsQ0FBUjtBQUNBUSxJQUFBQSxDQUFDLENBQUNFLE1BQUYsR0FBVyxJQUFYO0FBQ0EsU0FBS1IsTUFBTCxDQUFZVSxRQUFaLENBQXFCSixDQUFyQjtBQUNILEdBeklJO0FBMElMMEMsRUFBQUEsUUExSUssc0JBMElLO0FBQ04sUUFBSTFDLENBQUMsR0FBR3JCLEVBQUUsQ0FBQ3NCLFdBQUgsQ0FBZSxLQUFLWixXQUFwQixDQUFSO0FBQ0FXLElBQUFBLENBQUMsQ0FBQ0UsTUFBRixHQUFXLElBQVg7QUFDQSxTQUFLUixNQUFMLENBQVlVLFFBQVosQ0FBcUJKLENBQXJCO0FBQ0gsR0E5SUk7QUErSUwyQyxFQUFBQSxhQS9JSywyQkErSVU7QUFDWCxRQUFJM0MsQ0FBQyxHQUFHckIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlLEtBQUtYLGdCQUFwQixDQUFSO0FBQ0FVLElBQUFBLENBQUMsQ0FBQ0UsTUFBRixHQUFXLElBQVg7QUFDQSxTQUFLUixNQUFMLENBQVlVLFFBQVosQ0FBcUJKLENBQXJCO0FBQ0gsR0FuSkk7QUFvSkw0QyxFQUFBQSxZQXBKSywwQkFvSlM7QUFDVixRQUFJNUMsQ0FBQyxHQUFHckIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlLEtBQUtWLHVCQUFwQixDQUFSO0FBQ0FTLElBQUFBLENBQUMsQ0FBQ0UsTUFBRixHQUFXLElBQVg7QUFDQSxTQUFLUixNQUFMLENBQVlVLFFBQVosQ0FBcUJKLENBQXJCO0FBQ0gsR0F4Skk7QUF5Skw2QyxFQUFBQSxJQXpKSyxrQkF5SkM7QUFDRixTQUFLbkQsTUFBTCxDQUFZZ0Isa0JBQVo7QUFDSDtBQTNKSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgdXNlcmRhdGEgPSByZXF1aXJlKCd1c2VyZGF0YScpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBteV9mbGlnaHRzX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgd2FyZWhvdXNlX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlZmxpZ2h0czp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZmxpZ2h0czp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcF93aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkaW5nc193aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGJ1c2luZXNzX2ZsaWdodHNfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBzZXR0aW5nX3dpbmRvd3M6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHdhcm5pbmdfd2luZG93OntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3aW5kb3c6e1xuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDpudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgXG4gICAgfSxcbiAgICBzaG93YWxsZmxpZ2h0cygpe1xuICAgICAgICBsZXQgYSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubXlfZmxpZ2h0c193aW5kb3cpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbmRvdy5hZGRDaGlsZChhKTtcbiAgICB9LFxuICAgIHNob3dmbHlpbmcoKXtcbiAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm15X2ZsaWdodHNfd2luZG93KTtcbiAgICAgICAgYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBhLmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGEuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aW5kb3cuYWRkQ2hpbGQoYSk7XG4gICAgfSxcbiAgICBzaG93d2FyZWhvdXNlKCl7XG4gICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUodGhpcy53YXJlaG91c2Vfd2luZG93KTtcbiAgICAgICAgYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbmRvdy5hZGRDaGlsZChhKTtcbiAgICB9LFxuICAgIGZseTpmdW5jdGlvbihldmVudCxjdXN0b21FdmVudERhdGEpe1xuICAgICAgICB0aGlzLndpbmRvdy5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIGdvID0gMDtcbiAgICAgICAgaWYodXNlcmRhdGEubGVmdHMubGVmdGZ1ZWw+PWN1c3RvbUV2ZW50RGF0YS5mdWVsJiZ1c2VyZGF0YS5sZWZ0cy5sZWZ0cGFzc2VuZ2VyPj1jdXN0b21FdmVudERhdGEucGFzc2VuZ2VyKXtcbiAgICAgICAgICAgIGZvcih2YXIgbyBpbiB1c2VyZGF0YS5haXJwbGFuZWRhdGEpe1xuICAgICAgICAgICAgICAgIGlmKHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5sZXZlbD09Y3VzdG9tRXZlbnREYXRhLmxldmVsICYmIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5pc2ZseWluZz09J2ZhbHNlJyl7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5pc2ZseWluZyA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWlycGxhbmVkYXRhW29dLmRlc3RpbmF0aW9uID0gY3VzdG9tRXZlbnREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJkYXRhLmFpcnBsYW5lZGF0YVtvXS5yZXdhcmQgPSBjdXN0b21FdmVudERhdGEucmV3YXJkO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5haXJwbGFuZWRhdGFbb10uZW5kdGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKSkvMTAwMCArIGN1c3RvbUV2ZW50RGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbCAtPSBjdXN0b21FdmVudERhdGEuZnVlbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEubGVmdHMubGVmdHBhc3NlbmdlciAtPSBjdXN0b21FdmVudERhdGEucGFzc2VuZ2VyO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzFdPT0zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzBdICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyZGF0YS5hY2hpZXZlbWVudFtjdXN0b21FdmVudERhdGEuaWRdWzBdPT0xMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVsxXSs9MTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyZGF0YS5hbGxmaWxlLnN0YXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcmRhdGEuYWNoaWV2ZW1lbnRbY3VzdG9tRXZlbnREYXRhLmlkXVswXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZ28gPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ28gPT0gMCl7XG4gICAgICAgICAgICBpZih1c2VyZGF0YS5sZWZ0cy5sZWZ0ZnVlbDxjdXN0b21FdmVudERhdGEuZnVlbHx8dXNlcmRhdGEubGVmdHMubGVmdHBhc3NlbmdlcjxjdXN0b21FdmVudERhdGEucGFzc2VuZ2VyKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgZW5vdWdoIGZ1ZWwgb3IgcGFzc2VuZ2Vycyc7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93d2FybmluZyhpbm5lcik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgaW5uZXIgPSAnRG8gbm90IGhhdmUgYW4gYXZpbGFibGUgcGxhbmUgb2YgdGhlIHJlcXVpcmVkIHR5cGUuXFxuQnV5IGEgbmV3IHBsYW5lIG9yIHdhaXQgZm9yIHRoZSBjdXJyZW50IGZsaWdodHMgdG8gcmV0dXJuLidcbiAgICAgICAgICAgICAgICB0aGlzLnNob3d3YXJuaW5nKGlubmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2FjdGl2ZSgpe1xuICAgICAgICB0aGlzLndpbmRvdy5nZXRDaGlsZEJ5TmFtZShcIk15X2ZsaWdodHNfd2luZG93XCIpLmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2luZG93LmdldENoaWxkQnlOYW1lKFwiTXlfZmxpZ2h0c193aW5kb3dcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9mbGlnaHRsaXN0KCl7XG4gICAgICAgIHRoaXMud2luZG93LmdldENoaWxkQnlOYW1lKFwiTXlfZmxpZ2h0c193aW5kb3dcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2luZG93LmdldENoaWxkQnlOYW1lKFwiTXlfZmxpZ2h0c193aW5kb3dcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpbm5lclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzaG93d2FybmluZyhpbm5lcil7XG4gICAgICAgIHRoaXMud2FybmluZ193aW5kb3cuZ2V0Q2hpbGRCeU5hbWUoXCJ3YXJuaW5nX3dpbmRvd1wiKS5nZXRDaGlsZEJ5TmFtZShcImlubmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaW5uZXI7XG4gICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUod2FybmluZ193aW5kb3cpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2luZG93LmFkZENoaWxkKGEpO1xuICAgIH0sXG4gICAgc2hvd3NldHRpbmcoKXtcbiAgICAgICAgdGhpcy53aW5kb3cuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUodGhpcy5zZXR0aW5nX3dpbmRvd3MpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2luZG93LmFkZENoaWxkKGEpO1xuICAgIH0sXG4gICAgc2hvd3Nob3AoKXtcbiAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNob3Bfd2luZG93KTtcbiAgICAgICAgYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbmRvdy5hZGRDaGlsZChhKTtcbiAgICB9LFxuICAgIHNob3didWlsZGluZ3MoKXtcbiAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1aWxkaW5nc193aW5kb3cpO1xuICAgICAgICBhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2luZG93LmFkZENoaWxkKGEpO1xuICAgIH0sXG4gICAgc2hvd2J1c2luZXNzKCl7XG4gICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUodGhpcy5idXNpbmVzc19mbGlnaHRzX3dpbmRvdyk7XG4gICAgICAgIGEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aW5kb3cuYWRkQ2hpbGQoYSk7XG4gICAgfSxcbiAgICBoaWRlKCl7XG4gICAgICAgIHRoaXMud2luZG93LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgIH1cbn0pO1xuIl19