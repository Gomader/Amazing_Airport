
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/map_move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9243sv63VLqrZlH/7AGkUF', 'map_move');
// script/map_move.js

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
    map: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    var _this = this;

    this.map.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var delta = event.touch.getDelta();

      if (_this.map.x + delta.x <= 2436 && _this.map.x + delta.x >= 0) {
        _this.map.x += delta.x;
      } //if(this.map.y+delta.y<=1125&&this.map.y+delta.y>=0){
      //    this.map.y += delta.y;
      //    console.log(this.map.y);
      //}


      if (delta.y > 5 && _this.map.y == 0) {
        _this.map.runAction(cc.sequence(cc.moveBy(0.5, 0, 300), cc.callFunc(_this.downpage, _this)));
      } else if (delta.y < -5 && _this.map.y == 1125) {
        _this.map.runAction(cc.sequence(cc.moveBy(0.5, 0, -300), cc.callFunc(_this.uppage, _this)));
      }
    });
  },
  uppage: function uppage() {
    this.map.y = 0;
  },
  downpage: function downpage() {
    this.map.y = 1125;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFwX21vdmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXAiLCJ0eXBlIiwiTm9kZSIsInN0YXJ0Iiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwiZXZlbnQiLCJkZWx0YSIsInRvdWNoIiwiZ2V0RGVsdGEiLCJ4IiwieSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZUJ5IiwiY2FsbEZ1bmMiLCJkb3ducGFnZSIsInVwcGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLEdBQUcsRUFBQztBQUNBQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFEUjtBQUVBLGlCQUFRO0FBRlI7QUFoQkksR0FIUDtBQXlCTDtBQUVBO0FBRUFDLEVBQUFBLEtBN0JLLG1CQTZCSTtBQUFBOztBQUNMLFNBQUtILEdBQUwsQ0FBU0ksRUFBVCxDQUFZUixFQUFFLENBQUNNLElBQUgsQ0FBUUcsU0FBUixDQUFrQkMsVUFBOUIsRUFBeUMsVUFBQUMsS0FBSyxFQUFFO0FBQzVDLFVBQUlDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFFBQVosRUFBWjs7QUFDQSxVQUFHLEtBQUksQ0FBQ1YsR0FBTCxDQUFTVyxDQUFULEdBQVdILEtBQUssQ0FBQ0csQ0FBakIsSUFBb0IsSUFBcEIsSUFBMEIsS0FBSSxDQUFDWCxHQUFMLENBQVNXLENBQVQsR0FBV0gsS0FBSyxDQUFDRyxDQUFqQixJQUFvQixDQUFqRCxFQUFtRDtBQUMvQyxRQUFBLEtBQUksQ0FBQ1gsR0FBTCxDQUFTVyxDQUFULElBQWNILEtBQUssQ0FBQ0csQ0FBcEI7QUFDSCxPQUoyQyxDQUs1QztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBR0gsS0FBSyxDQUFDSSxDQUFOLEdBQVEsQ0FBUixJQUFXLEtBQUksQ0FBQ1osR0FBTCxDQUFTWSxDQUFULElBQVksQ0FBMUIsRUFBNEI7QUFDeEIsUUFBQSxLQUFJLENBQUNaLEdBQUwsQ0FBU2EsU0FBVCxDQUFtQmpCLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWWxCLEVBQUUsQ0FBQ21CLE1BQUgsQ0FBVSxHQUFWLEVBQWMsQ0FBZCxFQUFnQixHQUFoQixDQUFaLEVBQWlDbkIsRUFBRSxDQUFDb0IsUUFBSCxDQUFZLEtBQUksQ0FBQ0MsUUFBakIsRUFBMEIsS0FBMUIsQ0FBakMsQ0FBbkI7QUFDSCxPQUZELE1BRU0sSUFBR1QsS0FBSyxDQUFDSSxDQUFOLEdBQVEsQ0FBQyxDQUFULElBQVksS0FBSSxDQUFDWixHQUFMLENBQVNZLENBQVQsSUFBWSxJQUEzQixFQUFnQztBQUNsQyxRQUFBLEtBQUksQ0FBQ1osR0FBTCxDQUFTYSxTQUFULENBQW1CakIsRUFBRSxDQUFDa0IsUUFBSCxDQUFZbEIsRUFBRSxDQUFDbUIsTUFBSCxDQUFVLEdBQVYsRUFBYyxDQUFkLEVBQWdCLENBQUMsR0FBakIsQ0FBWixFQUFrQ25CLEVBQUUsQ0FBQ29CLFFBQUgsQ0FBWSxLQUFJLENBQUNFLE1BQWpCLEVBQXdCLEtBQXhCLENBQWxDLENBQW5CO0FBQ0g7QUFDSixLQWREO0FBZUgsR0E3Q0k7QUE4Q0xBLEVBQUFBLE1BQU0sRUFBQyxrQkFBVTtBQUNiLFNBQUtsQixHQUFMLENBQVNZLENBQVQsR0FBYSxDQUFiO0FBQ0gsR0FoREk7QUFpRExLLEVBQUFBLFFBQVEsRUFBQyxvQkFBVTtBQUNmLFNBQUtqQixHQUFMLENBQVNZLENBQVQsR0FBYSxJQUFiO0FBQ0gsR0FuREksQ0FxREw7O0FBckRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIG1hcDp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5tYXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSxldmVudD0+e1xuICAgICAgICAgICAgdmFyIGRlbHRhID0gZXZlbnQudG91Y2guZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgIGlmKHRoaXMubWFwLngrZGVsdGEueDw9MjQzNiYmdGhpcy5tYXAueCtkZWx0YS54Pj0wKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC54ICs9IGRlbHRhLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmKHRoaXMubWFwLnkrZGVsdGEueTw9MTEyNSYmdGhpcy5tYXAueStkZWx0YS55Pj0wKXtcbiAgICAgICAgICAgIC8vICAgIHRoaXMubWFwLnkgKz0gZGVsdGEueTtcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHRoaXMubWFwLnkpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICBpZihkZWx0YS55PjUmJnRoaXMubWFwLnk9PTApe1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC41LDAsMzAwKSxjYy5jYWxsRnVuYyh0aGlzLmRvd25wYWdlLHRoaXMpKSk7XG4gICAgICAgICAgICB9ZWxzZSBpZihkZWx0YS55PC01JiZ0aGlzLm1hcC55PT0xMTI1KXtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuNSwwLC0zMDApLGNjLmNhbGxGdW5jKHRoaXMudXBwYWdlLHRoaXMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICB1cHBhZ2U6ZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5tYXAueSA9IDA7XG4gICAgfSxcbiAgICBkb3ducGFnZTpmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm1hcC55ID0gMTEyNTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19