"use strict";
cc._RF.push(module, '660dfXmAJ1O54O3BLVKKhKx', 'runway_scene');
// script/runway_scene.js

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
    userid: cc.Integer,
    runway: {
      type: cc.Node,
      "default": null
    },
    road: {
      type: cc.Node,
      "default": null
    },
    stand: {
      type: cc.Node,
      "default": null
    },
    username: {
      type: cc.Label,
      "default": null
    },
    stars: {
      type: cc.Label,
      "default": null
    },
    fuel: {
      type: cc.ProgressBar,
      "default": null
    },
    fuelnum: {
      type: cc.Label,
      "default": null
    },
    fuelclock: {
      type: cc.Node,
      "default": null
    },
    fuelclocknumber: {
      type: cc.Label,
      "default": null
    },
    passenger: {
      type: cc.ProgressBar,
      "default": null
    },
    passengernum: {
      type: cc.Label,
      "default": null
    },
    passengerclock: {
      type: cc.Node,
      "default": null
    },
    passengerclocknumber: {
      type: cc.Label,
      "default": null
    },
    coins: {
      type: cc.Label,
      "default": null
    },
    maxfuel: cc.Integer,
    maxpassenger: cc.Integer,
    allclock: Object,
    time: cc.Integer
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.opacity = 0;
    this.userid = cc.sys.localStorage.getItem("id");
    this.allclock = {
      fuelclock: {
        runstate: false,
        timenumber: 0
      },
      passengerclock: {
        runstate: false,
        timenumber: 0
      }
    }, userdata.lefts = {
      leftfuel: 0,
      leftpassenger: 0
    };
    this.newuser();
    this.backtogame(cc.sys.localStorage.getItem("stars"));
  },
  start: function start() {
    this.node.runAction(cc.fadeIn(1.0));
    this.startclock();
    this.backtogame(cc.sys.localStorage.getItem("stars"));
  },
  update: function update(dt) {
    this.showmap();
  },
  newuser: function newuser() {
    if (this.userid == null) {
      cc.director.loadScene("homepage_scene");
    } else {
      this.downloadUserData();
    }
  },
  downloadUserData: function downloadUserData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=1", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + this.userid);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        if (xhr.responseText != 0) {
          cc.sys.localStorage.setItem('userData', xhr.responseText);
          userdata.allfile = JSON.parse(xhr.responseText);
        }
      }
    };
  },
  uploadUserData: function uploadUserData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=2", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("id=" + this.userid + "&userData=" + JSON.stringify(userdata.allfile));

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        if (xhr.responseText == 1) {
          console.log(1);
        }
      }
    };
  },
  backtogame: function backtogame(stars) {
    var maxfuel = stars + 10;
    var maxpassenger = stars * 2 + 20;
    var leavetime = (Date.parse(new Date()) - cc.sys.localStorage.getItem("time")) / 1000;
    console.log(leavetime);
    var left = JSON.parse(cc.sys.localStorage.getItem("lefts"));
    console.log(left);

    if (left.leftfuel >= maxfuel) {
      userdata.lefts.leftfuel = left.leftfuel;
    } else {
      var add = Math.floor(leavetime / 60) + left.leftfuel;

      if (add >= maxfuel) {
        userdata.lefts.leftfuel = maxfuel;
      } else {
        userdata.lefts.leftfuel = add;
      }
    }

    if (left.leftpassenger >= maxpassenger) {
      userdata.lefts.leftpassenger = left.leftpassenger;
    } else {
      var add = Math.floor(leavetime / 60) + left.leftpassenger;

      if (add >= maxpassenger) {
        userdata.lefts.leftpassenger = maxpassenger;
      } else {
        userdata.lefts.leftpassenger = add;
      }
    }
  },
  showmap: function showmap() {
    this.runway.getChildByName("up").getChildByName(userdata.allfile.buildings.uprunway.toString()).active = true;
    this.runway.getChildByName("down").getChildByName(userdata.allfile.buildings.downrunway.toString()).active = true;

    if (userdata.allfile.buildings.uprunway >= 9 && userdata.allfile.buildings.downrunway >= 9) {
      this.road.getChildByName("9-9").active = true;
    } else if (userdata.allfile.buildings.uprunway >= 6 && userdata.allfile.buildings.downrunway >= 6) {
      this.road.getChildByName("6-6").active = true;
    } else if (userdata.allfile.buildings.uprunway >= 3 && userdata.allfile.buildings.downrunway >= 3) {
      this.road.getChildByName("3-3").active = true;
    } else {
      this.road.getChildByName("1-1").active = true;
    }

    this.stand.getChildByName(userdata.allfile.buildings.stand.toString()).active = true;
    this.username.string = userdata.allfile.name;
    this.stars.string = userdata.allfile.stars;
    this.coins.string = userdata.allfile.money;
    this.maxfuel = userdata.allfile.stars + 10;
    this.maxpassenger = userdata.allfile.stars * 2 + 20;
    this.fuel.progress = userdata.lefts.leftfuel / this.maxfuel;
    this.fuelnum.string = userdata.lefts.leftfuel.toString() + "/" + this.maxfuel.toString();
    this.passenger.progress = userdata.lefts.leftpassenger / this.maxpassenger;
    this.passengernum.string = userdata.lefts.leftpassenger.toString() + "/" + this.maxpassenger.toString();

    if (userdata.lefts.leftfuel < this.maxfuel && this.allclock.fuelclock.runstate == false) {
      this.allclock.fuelclock.runstate = true;
      this.fuelclock.active = true;
    }

    if (userdata.lefts.leftpassenger < this.maxpassenger && this.allclock.passengerclock.runstate == false) {
      this.allclock.passengerclock.runstate = true;
      this.passengerclock.active = true;
    }

    for (var o in userdata.allfile.airplane) {}
  },
  startclock: function startclock() {
    this.callback = function () {
      cc.sys.localStorage.setItem("time", Date.parse(new Date()));

      if (this.allclock.fuelclock.runstate == true) {
        this.allclock.fuelclock.timenumber += 1;

        if (this.allclock.fuelclock.timenumber == 60) {
          this.allclock.fuelclock.timenumber = 0;
          userdata.lefts.leftfuel += 1;
        }

        if (this.allclock.fuelclock.timenumber < 10) {
          this.fuelclocknumber.string = "0" + this.allclock.fuelclock.timenumber.toString();
        } else {
          this.fuelclocknumber.string = this.allclock.fuelclock.timenumber.toString();
        }

        if (userdata.lefts.leftfuel >= this.maxfuel) {
          this.allclock.fuelclock.runstate = false;
          this.allclock.fuelclock.timenumber = 0;
          this.fuelclock.active = false;
        }
      }

      if (this.allclock.passengerclock.runstate == true) {
        this.allclock.passengerclock.timenumber += 1;

        if (this.allclock.passengerclock.timenumber == 60) {
          this.allclock.passengerclock.timenumber = 0;
          userdata.lefts.leftpassenger += 1;
        }

        if (this.allclock.passengerclock.timenumber < 10) {
          this.passengerclocknumber.string = "0" + this.allclock.passengerclock.timenumber.toString();
        } else {
          this.passengerclocknumber.string = this.allclock.passengerclock.timenumber.toString();
        }

        if (userdata.lefts.leftpassenger >= this.maxpassenger) {
          this.allclock.passengerclock.runstate = false;
          this.allclock.passengerclock.timenumber = 0;
          this.passengerclock.active = false;
        }
      }

      if (this.time == 60) {
        this.uploadUserData();
        cc.sys.localStorage.setItem("lefts", JSON.stringify(userdata.lefts));
        cc.sys.localStorage.setItem("stars", userdata.allfile.stars);
        this.time == 0;
      } else {
        this.time += 1;
      }
    };

    this.schedule(function () {
      this.callback();
    }, 1);
  }
});

cc._RF.pop();