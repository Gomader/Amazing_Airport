
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
    }
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
  ownairplanefly: function ownairplanefly() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYnV0dG9uX2V2ZW50cy5qcyJdLCJuYW1lcyI6WyJ1c2VyZGF0YSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm15X2ZsaWdodHNfd2luZG93IiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwic2hvd2FsbGZsaWdodHMiLCJldmVudCIsImN1c3RvbUV2ZW5EYXRhIiwiYWN0aXZlIiwiY2xvc2VhbGxmbGlnaHRzIiwib3duYWlycGxhbmVmbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGlCQUFpQixFQUFDO0FBQ2RDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQURNO0FBRWQsaUJBQVE7QUFGTTtBQURWLEdBSFA7QUFVTDtBQUVBQyxFQUFBQSxNQVpLLG9CQVlLLENBRVQsQ0FkSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFvQkxDLEVBQUFBLE1BcEJLLGtCQW9CR0MsRUFwQkgsRUFvQk8sQ0FFWCxDQXRCSTtBQXVCTEMsRUFBQUEsY0F2QkssMEJBdUJVQyxLQXZCVixFQXVCZ0JDLGNBdkJoQixFQXVCK0I7QUFDaEMsU0FBS1QsaUJBQUwsQ0FBdUJVLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0gsR0F6Qkk7QUEwQkxDLEVBQUFBLGVBMUJLLDZCQTBCWTtBQUNiLFNBQUtYLGlCQUFMLENBQXVCVSxNQUF2QixHQUFnQyxLQUFoQztBQUNILEdBNUJJO0FBNkJMRSxFQUFBQSxjQTdCSyw0QkE2QlcsQ0FFZjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG52YXIgdXNlcmRhdGEgPSByZXF1aXJlKCd1c2VyZGF0YScpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBteV9mbGlnaHRzX3dpbmRvdzp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBcbiAgICB9LFxuICAgIHNob3dhbGxmbGlnaHRzKGV2ZW50LGN1c3RvbUV2ZW5EYXRhKXtcbiAgICAgICAgdGhpcy5teV9mbGlnaHRzX3dpbmRvdy5hY3RpdmUgPSB0cnVlOyAgIFxuICAgIH0sXG4gICAgY2xvc2VhbGxmbGlnaHRzKCl7XG4gICAgICAgIHRoaXMubXlfZmxpZ2h0c193aW5kb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBvd25haXJwbGFuZWZseSgpe1xuICAgICAgICBcbiAgICB9XG59KTtcbiJdfQ==