
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/creater_user.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cadfzqyC1G3omIigFAepyc', 'creater_user');
// script/creater_user.js

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
    newinput: {
      type: cc.EditBox,
      "default": null
    },
    createnewuser: {
      type: cc.Node,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.opacity = 0;
  },
  start: function start() {
    this.node.runAction(cc.fadeIn(1.0));
  },
  createnewfile: function createnewfile() {
    var userData = {
      name: this.newinput.string,
      stars: 0,
      money: 100,
      airplane: {},
      buildings: {
        uprunway: 1,
        downrunway: 1,
        stand: 1,
        ground_tower: 1,
        terminal: 1,
        fuel_station: 0
      }
    };
    this.originupload(userData);
  },
  originupload: function originupload(userData) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=0", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("userData=" + JSON.stringify(userData));

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        cc.sys.localStorage.setItem('id', xhr.responseText);
        cc.director.loadScene("runway_scene");
      }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY3JlYXRlcl91c2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibmV3aW5wdXQiLCJ0eXBlIiwiRWRpdEJveCIsImNyZWF0ZW5ld3VzZXIiLCJOb2RlIiwib25Mb2FkIiwibm9kZSIsIm9wYWNpdHkiLCJzdGFydCIsInJ1bkFjdGlvbiIsImZhZGVJbiIsImNyZWF0ZW5ld2ZpbGUiLCJ1c2VyRGF0YSIsIm5hbWUiLCJzdHJpbmciLCJzdGFycyIsIm1vbmV5IiwiYWlycGxhbmUiLCJidWlsZGluZ3MiLCJ1cHJ1bndheSIsImRvd25ydW53YXkiLCJzdGFuZCIsImdyb3VuZF90b3dlciIsInRlcm1pbmFsIiwiZnVlbF9zdGF0aW9uIiwib3JpZ2ludXBsb2FkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXNwb25zZVRleHQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFFBQVEsRUFBQztBQUNMQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sT0FESDtBQUVMLGlCQUFRO0FBRkgsS0FoQkQ7QUFvQlJDLElBQUFBLGFBQWEsRUFBQztBQUNWRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1EsSUFERTtBQUVWLGlCQUFRO0FBRkU7QUFwQk4sR0FIUDtBQTZCTDtBQUVBQyxFQUFBQSxNQS9CSyxvQkErQks7QUFDTixTQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsQ0FBcEI7QUFDSCxHQWpDSTtBQW1DTEMsRUFBQUEsS0FuQ0ssbUJBbUNJO0FBQ0wsU0FBS0YsSUFBTCxDQUFVRyxTQUFWLENBQW9CYixFQUFFLENBQUNjLE1BQUgsQ0FBVSxHQUFWLENBQXBCO0FBQ0gsR0FyQ0k7QUF1Q0xDLEVBQUFBLGFBQWEsRUFBQyx5QkFBVTtBQUNwQixRQUFJQyxRQUFRLEdBQUc7QUFDWEMsTUFBQUEsSUFBSSxFQUFHLEtBQUtiLFFBQUwsQ0FBY2MsTUFEVjtBQUVYQyxNQUFBQSxLQUFLLEVBQUcsQ0FGRztBQUdYQyxNQUFBQSxLQUFLLEVBQUcsR0FIRztBQUlYQyxNQUFBQSxRQUFRLEVBQUcsRUFKQTtBQUtYQyxNQUFBQSxTQUFTLEVBQUM7QUFDTkMsUUFBQUEsUUFBUSxFQUFHLENBREw7QUFFTkMsUUFBQUEsVUFBVSxFQUFHLENBRlA7QUFHTkMsUUFBQUEsS0FBSyxFQUFHLENBSEY7QUFJTkMsUUFBQUEsWUFBWSxFQUFHLENBSlQ7QUFLTkMsUUFBQUEsUUFBUSxFQUFHLENBTEw7QUFNTkMsUUFBQUEsWUFBWSxFQUFHO0FBTlQ7QUFMQyxLQUFmO0FBY0EsU0FBS0MsWUFBTCxDQUFrQmIsUUFBbEI7QUFDSCxHQXZESTtBQXdETGEsRUFBQUEsWUFBWSxFQUFDLHNCQUFTYixRQUFULEVBQWtCO0FBQzNCLFFBQUljLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVMsTUFBVCxFQUFpQiwwRUFBakIsRUFBNkYsSUFBN0Y7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxnQkFBSixDQUFxQixjQUFyQixFQUFvQyxtQ0FBcEM7QUFDQUgsSUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVMsY0FBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVwQixRQUFmLENBQXZCOztBQUNBYyxJQUFBQSxHQUFHLENBQUNPLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSVAsR0FBRyxDQUFDUSxVQUFKLElBQWtCLENBQWxCLElBQXdCUixHQUFHLENBQUNTLE1BQUosSUFBYyxHQUFkLElBQXFCVCxHQUFHLENBQUNTLE1BQUosR0FBYSxHQUE5RCxFQUFvRTtBQUNoRXZDLFFBQUFBLEVBQUUsQ0FBQ3dDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsSUFBNUIsRUFBaUNaLEdBQUcsQ0FBQ2EsWUFBckM7QUFDQTNDLFFBQUFBLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtBQUNIO0FBQ0osS0FMRDtBQU1ILEdBbkVJLENBcUVMOztBQXJFSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgICAgICBuZXdpbnB1dDp7XG4gICAgICAgICAgICB0eXBlOmNjLkVkaXRCb3gsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlbmV3dXNlcjp7XG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkZWZhdWx0Om51bGxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVJbigxLjApKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlbmV3ZmlsZTpmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdXNlckRhdGEgPSB7IFxuICAgICAgICAgICAgbmFtZSA6IHRoaXMubmV3aW5wdXQuc3RyaW5nLFxuICAgICAgICAgICAgc3RhcnMgOiAwLFxuICAgICAgICAgICAgbW9uZXkgOiAxMDAsXG4gICAgICAgICAgICBhaXJwbGFuZSA6IHt9LFxuICAgICAgICAgICAgYnVpbGRpbmdzOntcbiAgICAgICAgICAgICAgICB1cHJ1bndheSA6IDEsXG4gICAgICAgICAgICAgICAgZG93bnJ1bndheSA6IDEsXG4gICAgICAgICAgICAgICAgc3RhbmQgOiAxLFxuICAgICAgICAgICAgICAgIGdyb3VuZF90b3dlciA6IDEsXG4gICAgICAgICAgICAgICAgdGVybWluYWwgOiAxLFxuICAgICAgICAgICAgICAgIGZ1ZWxfc3RhdGlvbiA6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcmlnaW51cGxvYWQodXNlckRhdGEpO1xuICAgIH0sXG4gICAgb3JpZ2ludXBsb2FkOmZ1bmN0aW9uKHVzZXJEYXRhKXtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwczovL3d3dy56aGFuZ21pbmd6aGUuY24vYW1hemluZ19haXJwb3J0L2FtYXppbmdfYWlycG9ydC5waHA/bW9kdWxlPTBcIiwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5zZW5kKFwidXNlckRhdGE9XCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcseGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwicnVud2F5X3NjZW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=