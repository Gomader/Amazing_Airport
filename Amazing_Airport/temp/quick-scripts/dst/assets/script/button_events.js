
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
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {},
  showallflights: function showallflights() {
    this.allflight.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFsbGZpbGUiLCJPYmplY3QiLCJidXNpbmVzc19mbGlnaHQiLCJ0eXBlIiwiTm9kZSIsInVzZXJfZmxpZ2h0IiwiYWxsZmxpZ2h0Iiwic2hvcCIsIndhcmVob3VzZSIsInNldHRpbmciLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwic2hvd2FsbGZsaWdodHMiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLE9BQU8sRUFBQ0MsTUFoQkE7QUFpQlJDLElBQUFBLGVBQWUsRUFBRztBQUNkQyxNQUFBQSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ1EsSUFETTtBQUVkLGlCQUFRO0FBRk0sS0FqQlY7QUFxQlJDLElBQUFBLFdBQVcsRUFBRztBQUNWRixNQUFBQSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ1EsSUFERTtBQUVWLGlCQUFRO0FBRkUsS0FyQk47QUF5QlJFLElBQUFBLFNBQVMsRUFBRztBQUNSSCxNQUFBQSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ1EsSUFEQTtBQUVSLGlCQUFRO0FBRkEsS0F6Qko7QUE2QlJHLElBQUFBLElBQUksRUFBRztBQUNISixNQUFBQSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ1EsSUFETDtBQUVILGlCQUFRO0FBRkwsS0E3QkM7QUFpQ1JJLElBQUFBLFNBQVMsRUFBRztBQUNSTCxNQUFBQSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ1EsSUFEQTtBQUVSLGlCQUFRO0FBRkEsS0FqQ0o7QUFxQ1JLLElBQUFBLE9BQU8sRUFBRztBQUNOTixNQUFBQSxJQUFJLEVBQUNQLEVBQUUsQ0FBQ1EsSUFERjtBQUVOLGlCQUFRO0FBRkY7QUFyQ0YsR0FIUDtBQThDTDtBQUVBTSxFQUFBQSxNQWhESyxvQkFnREssQ0FFVCxDQWxESTtBQW9ETEMsRUFBQUEsS0FwREssbUJBb0RJLENBRVIsQ0F0REk7QUF3RExDLEVBQUFBLE1BeERLLGtCQXdER0MsRUF4REgsRUF3RE8sQ0FFWCxDQTFESTtBQTJETEMsRUFBQUEsY0EzREssNEJBMkRXO0FBQ1osU0FBS1IsU0FBTCxDQUFlUyxNQUFmLEdBQXdCLElBQXhCO0FBQ0g7QUE3REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxudmFyIHVzZXJkYXRhID0gcmVxdWlyZSgndXNlcmRhdGEnKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGJhcjoge1xuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgYWxsZmlsZTpPYmplY3QsXG4gICAgICAgIGJ1c2luZXNzX2ZsaWdodCA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB1c2VyX2ZsaWdodCA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBhbGxmbGlnaHQgOiB7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcCA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICB3YXJlaG91c2UgOiB7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dGluZyA6IHtcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMuYWxsZmxpZ2h0LmFjdGl2ZSA9IHRydWVcbiAgICB9XG59KTtcbiJdfQ==