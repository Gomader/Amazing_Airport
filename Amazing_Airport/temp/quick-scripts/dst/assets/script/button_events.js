
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
    allfile: Object,
    business_flight: {
      type: cc.Node,
      "default": null
    },
    user_flight: {
      type: cc.Node,
      "default": null
    },
    allflight: {
      type: cc.Node,
      "default": null
    },
    shop: {
      type: cc.Node,
      "default": null
    },
    warehouse: {
      type: cc.Node,
      "default": null
    },
    setting: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.allfile = JSON.parse(cc.sys.localStorage.getItem('userData'));
  },
  start: function start() {},
  update: function update(dt) {
    this.allfile = JSON.parse(cc.sys.localStorage.getItem('userData'));
    cc.sys.localStorage.setItem("userData", JSON.stringify(this.allfile));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFsbGZpbGUiLCJPYmplY3QiLCJidXNpbmVzc19mbGlnaHQiLCJ0eXBlIiwiTm9kZSIsInVzZXJfZmxpZ2h0IiwiYWxsZmxpZ2h0Iiwic2hvcCIsIndhcmVob3VzZSIsInNldHRpbmciLCJvbkxvYWQiLCJKU09OIiwicGFyc2UiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxPQUFPLEVBQUNDLE1BaEJBO0FBaUJSQyxJQUFBQSxlQUFlLEVBQUc7QUFDZEMsTUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBRE07QUFFZCxpQkFBUTtBQUZNLEtBakJWO0FBcUJSQyxJQUFBQSxXQUFXLEVBQUc7QUFDVkYsTUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBREU7QUFFVixpQkFBUTtBQUZFLEtBckJOO0FBeUJSRSxJQUFBQSxTQUFTLEVBQUc7QUFDUkgsTUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBREE7QUFFUixpQkFBUTtBQUZBLEtBekJKO0FBNkJSRyxJQUFBQSxJQUFJLEVBQUc7QUFDSEosTUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBREw7QUFFSCxpQkFBUTtBQUZMLEtBN0JDO0FBaUNSSSxJQUFBQSxTQUFTLEVBQUc7QUFDUkwsTUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBREE7QUFFUixpQkFBUTtBQUZBLEtBakNKO0FBcUNSSyxJQUFBQSxPQUFPLEVBQUc7QUFDTk4sTUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBREY7QUFFTixpQkFBUTtBQUZGO0FBckNGLEdBSFA7QUE4Q0w7QUFFQU0sRUFBQUEsTUFoREssb0JBZ0RLO0FBQ04sU0FBS1YsT0FBTCxHQUFlVyxJQUFJLENBQUNDLEtBQUwsQ0FBV2hCLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsQ0FBWCxDQUFmO0FBQ0gsR0FsREk7QUFvRExDLEVBQUFBLEtBcERLLG1CQW9ESSxDQUVSLENBdERJO0FBd0RMQyxFQUFBQSxNQXhESyxrQkF3REdDLEVBeERILEVBd0RPO0FBQ1IsU0FBS2xCLE9BQUwsR0FBZVcsSUFBSSxDQUFDQyxLQUFMLENBQVdoQixFQUFFLENBQUNpQixHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLENBQVgsQ0FBZjtBQUNBbkIsSUFBQUEsRUFBRSxDQUFDaUIsR0FBSCxDQUFPQyxZQUFQLENBQW9CSyxPQUFwQixDQUE0QixVQUE1QixFQUF1Q1IsSUFBSSxDQUFDUyxTQUFMLENBQWUsS0FBS3BCLE9BQXBCLENBQXZDO0FBQ0g7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgYWxsZmlsZTpPYmplY3QsXG4gICAgICAgIGJ1c2luZXNzX2ZsaWdodCA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ZsaWdodCA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBhbGxmbGlnaHQgOiB7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcCA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJlaG91c2UgOiB7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dGluZyA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5hbGxmaWxlID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLmFsbGZpbGUgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJEYXRhXCIsSlNPTi5zdHJpbmdpZnkodGhpcy5hbGxmaWxlKSk7XG4gICAgfSxcblxuXG59KTtcbiJdfQ==