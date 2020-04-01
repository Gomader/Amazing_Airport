
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
      money: 0,
      clean: 100,
      airplane: {
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        level5: 0,
        level6: 0,
        level7: 0,
        level8: 0,
        level9: 0
      },
      buildings: {
        uprunway: 1,
        downrunway: 1,
        stand: 1,
        control_tower: 0,
        ground_tower: 1,
        repair_center: 0,
        terminal: 1,
        fuel_station: 0
      }
    };
    this.originupload(userData);
  },
  originupload: function originupload(userData) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=0", true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY3JlYXRlcl91c2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibmV3aW5wdXQiLCJ0eXBlIiwiRWRpdEJveCIsImNyZWF0ZW5ld3VzZXIiLCJOb2RlIiwib25Mb2FkIiwibm9kZSIsIm9wYWNpdHkiLCJzdGFydCIsInJ1bkFjdGlvbiIsImZhZGVJbiIsImNyZWF0ZW5ld2ZpbGUiLCJ1c2VyRGF0YSIsIm5hbWUiLCJzdHJpbmciLCJzdGFycyIsIm1vbmV5IiwiY2xlYW4iLCJhaXJwbGFuZSIsImxldmVsMSIsImxldmVsMiIsImxldmVsMyIsImxldmVsNCIsImxldmVsNSIsImxldmVsNiIsImxldmVsNyIsImxldmVsOCIsImxldmVsOSIsImJ1aWxkaW5ncyIsInVwcnVud2F5IiwiZG93bnJ1bndheSIsInN0YW5kIiwiY29udHJvbF90b3dlciIsImdyb3VuZF90b3dlciIsInJlcGFpcl9jZW50ZXIiLCJ0ZXJtaW5hbCIsImZ1ZWxfc3RhdGlvbiIsIm9yaWdpbnVwbG9hZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVzcG9uc2VUZXh0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Rkw7O0FBbkZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgICAgIG5ld2lucHV0OntcbiAgICAgICAgICAgIHR5cGU6Y2MuRWRpdEJveCxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVuZXd1c2VyOntcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZUluKDEuMCkpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVuZXdmaWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB1c2VyRGF0YSA9IHsgXG4gICAgICAgICAgICBuYW1lIDogdGhpcy5uZXdpbnB1dC5zdHJpbmcsXG4gICAgICAgICAgICBzdGFycyA6IDAsXG4gICAgICAgICAgICBtb25leSA6IDAsXG4gICAgICAgICAgICBjbGVhbiA6IDEwMCxcbiAgICAgICAgICAgIGFpcnBsYW5lIDoge1xuICAgICAgICAgICAgICAgIGxldmVsMTowLFxuICAgICAgICAgICAgICAgIGxldmVsMjowLFxuICAgICAgICAgICAgICAgIGxldmVsMzowLFxuICAgICAgICAgICAgICAgIGxldmVsNDowLFxuICAgICAgICAgICAgICAgIGxldmVsNTowLFxuICAgICAgICAgICAgICAgIGxldmVsNjowLFxuICAgICAgICAgICAgICAgIGxldmVsNzowLFxuICAgICAgICAgICAgICAgIGxldmVsODowLFxuICAgICAgICAgICAgICAgIGxldmVsOTowXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnVpbGRpbmdzOntcbiAgICAgICAgICAgICAgICB1cHJ1bndheSA6IDEsXG4gICAgICAgICAgICAgICAgZG93bnJ1bndheSA6IDEsXG4gICAgICAgICAgICAgICAgc3RhbmQgOiAxLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xfdG93ZXIgOiAwLFxuICAgICAgICAgICAgICAgIGdyb3VuZF90b3dlciA6IDEsXG4gICAgICAgICAgICAgICAgcmVwYWlyX2NlbnRlciA6IDAsXG4gICAgICAgICAgICAgICAgdGVybWluYWwgOiAxLFxuICAgICAgICAgICAgICAgIGZ1ZWxfc3RhdGlvbiA6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcmlnaW51cGxvYWQodXNlckRhdGEpO1xuICAgIH0sXG4gICAgb3JpZ2ludXBsb2FkOmZ1bmN0aW9uKHVzZXJEYXRhKXtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwczovLzE0MC4xNDMuMTI2LjczL2FtYXppbmdfYWlycG9ydC9hbWF6aW5nX2FpcnBvcnQucGhwP21vZHVsZT0wXCIsIHRydWUpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICB4aHIuc2VuZChcInVzZXJEYXRhPVwiICsgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInJ1bndheV9zY2VuZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19