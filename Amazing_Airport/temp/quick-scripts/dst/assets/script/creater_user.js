
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
        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY3JlYXRlcl91c2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibmV3aW5wdXQiLCJ0eXBlIiwiRWRpdEJveCIsImNyZWF0ZW5ld3VzZXIiLCJOb2RlIiwib25Mb2FkIiwibm9kZSIsIm9wYWNpdHkiLCJzdGFydCIsInJ1bkFjdGlvbiIsImZhZGVJbiIsImNyZWF0ZW5ld2ZpbGUiLCJ1c2VyRGF0YSIsIm5hbWUiLCJzdHJpbmciLCJzdGFycyIsIm1vbmV5IiwiYWlycGxhbmUiLCJidWlsZGluZ3MiLCJ1cHJ1bndheSIsImRvd25ydW53YXkiLCJzdGFuZCIsImdyb3VuZF90b3dlciIsInRlcm1pbmFsIiwiZnVlbF9zdGF0aW9uIiwib3JpZ2ludXBsb2FkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZXNwb25zZVRleHQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFFBQVEsRUFBQztBQUNMQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sT0FESDtBQUVMLGlCQUFRO0FBRkgsS0FoQkQ7QUFvQlJDLElBQUFBLGFBQWEsRUFBQztBQUNWRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1EsSUFERTtBQUVWLGlCQUFRO0FBRkU7QUFwQk4sR0FIUDtBQTZCTDtBQUVBQyxFQUFBQSxNQS9CSyxvQkErQks7QUFDTixTQUFLQyxJQUFMLENBQVVDLE9BQVYsR0FBb0IsQ0FBcEI7QUFDSCxHQWpDSTtBQW1DTEMsRUFBQUEsS0FuQ0ssbUJBbUNJO0FBQ0wsU0FBS0YsSUFBTCxDQUFVRyxTQUFWLENBQW9CYixFQUFFLENBQUNjLE1BQUgsQ0FBVSxHQUFWLENBQXBCO0FBQ0gsR0FyQ0k7QUF1Q0xDLEVBQUFBLGFBQWEsRUFBQyx5QkFBVTtBQUNwQixRQUFJQyxRQUFRLEdBQUc7QUFDWEMsTUFBQUEsSUFBSSxFQUFHLEtBQUtiLFFBQUwsQ0FBY2MsTUFEVjtBQUVYQyxNQUFBQSxLQUFLLEVBQUcsQ0FGRztBQUdYQyxNQUFBQSxLQUFLLEVBQUcsR0FIRztBQUlYQyxNQUFBQSxRQUFRLEVBQUcsRUFKQTtBQUtYQyxNQUFBQSxTQUFTLEVBQUM7QUFDTkMsUUFBQUEsUUFBUSxFQUFHLENBREw7QUFFTkMsUUFBQUEsVUFBVSxFQUFHLENBRlA7QUFHTkMsUUFBQUEsS0FBSyxFQUFHLENBSEY7QUFJTkMsUUFBQUEsWUFBWSxFQUFHLENBSlQ7QUFLTkMsUUFBQUEsUUFBUSxFQUFHLENBTEw7QUFNTkMsUUFBQUEsWUFBWSxFQUFHO0FBTlQ7QUFMQyxLQUFmO0FBY0EsU0FBS0MsWUFBTCxDQUFrQmIsUUFBbEI7QUFDSCxHQXZESTtBQXdETGEsRUFBQUEsWUFBWSxFQUFDLHNCQUFTYixRQUFULEVBQWtCO0FBQzNCLFFBQUljLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxJQUFKLENBQVMsTUFBVCxFQUFpQiwwRUFBakIsRUFBNkYsSUFBN0Y7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxnQkFBSixDQUFxQixjQUFyQixFQUFvQyxtQ0FBcEM7QUFDQUgsSUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVMsY0FBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVwQixRQUFmLENBQXZCOztBQUNBYyxJQUFBQSxHQUFHLENBQUNPLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSVAsR0FBRyxDQUFDUSxVQUFKLElBQWtCLENBQWxCLElBQXdCUixHQUFHLENBQUNTLE1BQUosSUFBYyxHQUFkLElBQXFCVCxHQUFHLENBQUNTLE1BQUosR0FBYSxHQUE5RCxFQUFvRTtBQUNoRXZDLFFBQUFBLEVBQUUsQ0FBQ3dDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsSUFBNUIsRUFBaUNaLEdBQUcsQ0FBQ2EsWUFBckM7QUFDQTNDLFFBQUFBLEVBQUUsQ0FBQ3dDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0NQLElBQUksQ0FBQ0MsU0FBTCxDQUFlcEIsUUFBZixDQUF4QztBQUNBaEIsUUFBQUEsRUFBRSxDQUFDNEMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FwRUksQ0FzRUw7O0FBdEVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIG5ld2lucHV0OntcbiAgICAgICAgICAgIHR5cGU6Y2MuRWRpdEJveCxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVuZXd1c2VyOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDEuMCkpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVuZXdmaWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB1c2VyRGF0YSA9IHsgXG4gICAgICAgICAgICBuYW1lIDogdGhpcy5uZXdpbnB1dC5zdHJpbmcsXG4gICAgICAgICAgICBzdGFycyA6IDAsXG4gICAgICAgICAgICBtb25leSA6IDEwMCxcbiAgICAgICAgICAgIGFpcnBsYW5lIDoge30sXG4gICAgICAgICAgICBidWlsZGluZ3M6e1xuICAgICAgICAgICAgICAgIHVwcnVud2F5IDogMSxcbiAgICAgICAgICAgICAgICBkb3ducnVud2F5IDogMSxcbiAgICAgICAgICAgICAgICBzdGFuZCA6IDEsXG4gICAgICAgICAgICAgICAgZ3JvdW5kX3Rvd2VyIDogMSxcbiAgICAgICAgICAgICAgICB0ZXJtaW5hbCA6IDEsXG4gICAgICAgICAgICAgICAgZnVlbF9zdGF0aW9uIDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9yaWdpbnVwbG9hZCh1c2VyRGF0YSk7XG4gICAgfSxcbiAgICBvcmlnaW51cGxvYWQ6ZnVuY3Rpb24odXNlckRhdGEpe1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vd3d3LnpoYW5nbWluZ3poZS5jbi9hbWF6aW5nX2FpcnBvcnQvYW1hemluZ19haXJwb3J0LnBocD9tb2R1bGU9MFwiLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIixcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgeGhyLnNlbmQoXCJ1c2VyRGF0YT1cIiArIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJyx4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJydW53YXlfc2NlbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==