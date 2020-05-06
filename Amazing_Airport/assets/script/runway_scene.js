
var userdata = require('userdata');

cc.Class({
    extends: cc.Component,

    properties: {
        userid:cc.Integer,
        runway:{
            type:cc.Node,
            default:null
        },
        road:{
            type:cc.Node,
            default:null
        },
        stand:{
            type:cc.Node,
            default:null
        },
        airplaneOnStand:{
            type:cc.Node,
            default:null
        },
        username:{
            type:cc.Label,
            default:null
        },
        stars:{
            type:cc.Label,
            default:null
        },
        fuel:{
            type:cc.ProgressBar,
            default:null
        },
        fuelnum:{
            type:cc.Label,
            default:null
        },
        fuelclock:{
            type:cc.Node,
            default:null
        },
        fuelclocknumber:{
            type:cc.Label,
            default:null
        },
        passenger:{
            type:cc.ProgressBar,
            default:null
        },
        passengernum:{
            type:cc.Label,
            default:null
        },
        passengerclock:{
            type:cc.Node,
            default:null
        },
        passengerclocknumber:{
            type:cc.Label,
            default:null
        },
        coins:{
            type:cc.Label,
            default:null
        },
        warning_window:{
            type:cc.Node,
            default:null
        },
        flyingairplanes:{
            type:cc.Node,
            default:null
        },
        maxfuel:cc.Integer,
        maxpassenger:cc.Integer,
        allclock:Object,
        time:cc.Integer,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.opacity = 0;
        this.userid = cc.sys.localStorage.getItem("id");
        this.allclock = {
            fuelclock : {
                runstate:false,
                timenumber:0
            },
            passengerclock : {
                runstate:false,
                timenumber:0
            }
        },
        userdata.lefts = {
            leftfuel:0,
            leftpassenger:0
        }
        userdata.runwaystate = [false,false];
        userdata.businesslist = [];
        this.newuser();
        this.backtogame();
    },

    start () {
        this.startclock();
        this.node.runAction(cc.fadeIn(1.0));
    },

    update (dt) {
        this.showmap();
    },

    newuser:function(){
        if(this.userid==null){
            cc.director.loadScene("homepage_scene");
        }else{
            this.node.runAction(cc.sequence(cc.callFunc(this.downloadAirplaneData,this),cc.callFunc(this.downloadUserData,this),cc.callFunc(this.inits,this),cc.callFunc(this.downloadAchievementData,this)));
        }
    },

    downloadUserData:function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=1", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if (xhr.responseText != 0){
                    var data = JSON.parse(xhr.responseText);
                    userdata.allfile = data;
                }
            }
        }
    },

    uploadUserData:function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=2", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid + "&userData=" + JSON.stringify(userdata.allfile));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if(xhr.responseText == 1){
                    console.log(1);
                }
            }
        }
    },

    downloadAirplaneData:function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=3", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if (xhr.responseText != 0){
                    console.log(1);
                    var res = eval(xhr.responseText);
                    var airplanelist = [];
                    for(var i in res){
                        airplanelist.push(res[i]);
                    }
                    userdata.airplanedata = airplanelist;
                }
            }
        }
    },

    uploadAirplaneData:function(){
        var list = [];
        for(var i in userdata.airplanedata){
            list.push(JSON.stringify(userdata.airplanedata[i]))
        }
        var data = "[" + list.join(',') + "]";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=4", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid + "&userData=" + data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if(xhr.responseText == 1){
                    console.log(1);
                }
            }
        }
    },

    downloadAchievementData:function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=5", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if (xhr.responseText != 0){
                    console.log(1);
                    var res = eval(xhr.responseText);
                    var achievementlist = [];
                    for(var i in res){
                        achievementlist.push(res[i]);
                    }
                    userdata.achievement = achievementlist;
                }
            }
        }
    },

    uploadAchievementData:function(){
        var list = '';
        for(var o in userdata.achievement){
            list += "[" + userdata.achievement[o].join(',') + "],";
        }
        var data = "[" + list + "]";
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://www.zhangmingzhe.cn/amazing_airport/amazing_airport.php?module=6", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid + "&userData=" + data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if(xhr.responseText == 1){
                    console.log(1);
                }
            }
        }
    },

    backtogame:function(){
        var allfile = JSON.parse(cc.sys.localStorage.getItem("allfile"));
        var maxfuel = allfile.stars * 10 + allfile.buildings.fuel_station * 20 + 10;
        var maxpassenger = allfile.stars * 20 + allfile.buildings.terminal * 20;
        var leavetime = (Date.parse(new Date()) - cc.sys.localStorage.getItem("time"))/1000;
        var left = JSON.parse(cc.sys.localStorage.getItem("lefts"));
        if(left.leftfuel >= maxfuel){
            userdata.lefts.leftfuel = left.leftfuel;
        }else{
            let add = Math.floor(leavetime/60) + left.leftfuel;
            if(add >= maxfuel){
                userdata.lefts.leftfuel = maxfuel;
            }else{
                userdata.lefts.leftfuel = add;
            }
        }
        if(left.leftpassenger >= maxpassenger){
            userdata.lefts.leftpassenger = left.leftpassenger;
        }else{
            let add = Math.floor(leavetime/60) + left.leftpassenger;
            if(add >= maxpassenger){
                userdata.lefts.leftpassenger = maxpassenger;
            }else{
                userdata.lefts.leftpassenger = add;
            }
        }
        cc.sys.localStorage.setItem("lefts",JSON.stringify(userdata.lefts));
    },

    inits:function(){
        var stand = userdata.allfile.buildings.stand;
        var standinit = {"state":false};
        var state = [];
        for(var i = 0;i < stand; i++){
            state.push(standinit);
        }
        userdata.standstate = state;
        for(var o in userdata.airplanedata){
            if(userdata.airplanedata[o].isflying=='false'){
                for(var i = 0; i < stand; i++){
                    if(userdata.standstate[i]==false){
                        userdata.standstate[i] == true;
                    }else{
                        continue;
                    }
                }
            }
        }
    },

    showmap:function(){
        this.runway.getChildByName("up").getChildByName(userdata.allfile.buildings.uprunway.toString()).active = true;
        this.runway.getChildByName("down").getChildByName(userdata.allfile.buildings.downrunway.toString()).active = true;
        if(userdata.allfile.buildings.uprunway>=9&&userdata.allfile.buildings.downrunway>=9){
            this.road.getChildByName("9-9").active = true;
        }else if(userdata.allfile.buildings.uprunway>=6&&userdata.allfile.buildings.downrunway>=6){
            this.road.getChildByName("6-6").active = true;
        }else if(userdata.allfile.buildings.uprunway>=3&&userdata.allfile.buildings.downrunway>=3){
            this.road.getChildByName("3-3").active = true;
        }else{
            this.road.getChildByName("1-1").active = true;
        }
        this.username.string = userdata.allfile.name;
        this.stars.string = userdata.allfile.stars;
        this.coins.string = userdata.allfile.money;
        this.maxfuel = userdata.allfile.stars * 10 + userdata.allfile.buildings.fuel_station * 20 + 10;
        this.maxpassenger = userdata.allfile.stars * 20 + userdata.allfile.buildings.terminal * 20;
        this.fuel.progress = userdata.lefts.leftfuel / this.maxfuel;
        this.fuelnum.string = userdata.lefts.leftfuel.toString() + "/" + this.maxfuel.toString();
        this.passenger.progress = userdata.lefts.leftpassenger / this.maxpassenger;
        this.passengernum.string = userdata.lefts.leftpassenger.toString() + "/" + this.maxpassenger.toString();
        if (userdata.lefts.leftfuel < this.maxfuel && this.allclock.fuelclock.runstate == false){
            this.allclock.fuelclock.runstate = true;
            this.fuelclock.active = true;
        }
        if (userdata.lefts.leftpassenger < this.maxpassenger && this.allclock.passengerclock.runstate == false){
            this.allclock.passengerclock.runstate = true;
            this.passengerclock.active = true;
        }
        let flys = 0;
        for(var o in userdata.airplanedata){
            if(userdata.airplanedata[o].isflying=='true'){
                flys += 1;
            }
        }
        if(flys!=0){
            this.flyingairplanes.active=true;
            this.flyingairplanes.getChildByName("planes").getComponent(cc.Label).string = flys.toString();
        }else{
            this.flyingairplanes.active=false;
        }
    },

    startclock:function(){
        this.callback = function(){

            cc.sys.localStorage.setItem("time",Date.parse(new Date()));

            userdata = require('userdata');

            this.uploadAirplaneData();
            this.uploadAchievementData();
            this.uploadUserData();

            if(this.allclock.fuelclock.runstate==true){
                this.allclock.fuelclock.timenumber += 1;
                if(this.allclock.fuelclock.timenumber == 60){
                    this.allclock.fuelclock.timenumber = 0;
                    userdata.lefts.leftfuel += 1;
                }
                if(this.allclock.fuelclock.timenumber<10){
                    this.fuelclocknumber.string = "0" + this.allclock.fuelclock.timenumber.toString();
                }else{
                    this.fuelclocknumber.string = this.allclock.fuelclock.timenumber.toString();
                }
                if(userdata.lefts.leftfuel>=this.maxfuel){
                    this.allclock.fuelclock.runstate = false;
                    this.allclock.fuelclock.timenumber = 0;
                    this.fuelclock.active = false;
                }
            }

            if(this.allclock.passengerclock.runstate==true){
                this.allclock.passengerclock.timenumber += 1;
                if(this.allclock.passengerclock.timenumber == 60){
                    this.allclock.passengerclock.timenumber = 0;
                    userdata.lefts.leftpassenger += 1;
                }
                if(this.allclock.passengerclock.timenumber<10){
                    this.passengerclocknumber.string = "0" + this.allclock.passengerclock.timenumber.toString();
                }else{
                    this.passengerclocknumber.string = this.allclock.passengerclock.timenumber.toString();
                }
                if(userdata.lefts.leftpassenger>=this.maxpassenger){
                    this.allclock.passengerclock.runstate = false;
                    this.allclock.passengerclock.timenumber = 0;
                    this.passengerclock.active = false;
                }
            }

            if(this.time == 60){
                cc.sys.localStorage.setItem("lefts",JSON.stringify(userdata.lefts));
                cc.sys.localStorage.setItem("allfile",JSON.stringify(userdata.allfile));
                this.time = 0;
            }else{
                this.time += 1;
            }

        }
        this.schedule(function(){
            this.callback();
        },1)
    },
});