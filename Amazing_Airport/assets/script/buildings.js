// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var userdata = require('userdata');

cc.Class({
    extends: cc.Component,

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
        uprunway:cc.Integer,
        downrunway:cc.Integer,
        stand:cc.Integer,
        ground_tower:cc.Integer,
        terminal:cc.Integer,
        fuel_station:cc.Integer,
        warning_window:{
            type:cc.Node,
            default:null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.uprunway = userdata.allfile.buildings.uprunway;
        this.downrunway = userdata.allfile.buildings.downrunway;
        this.stand = userdata.allfile.buildings.stand;
        this.ground_tower = userdata.allfile.buildings.ground_tower;
        this.terminal = userdata.allfile.buildings.terminal;
        this.fuel_station = userdata.allfile.buildings.fuel_station;
        this.start();
    },

    start () {
        this.node.getChildByName("uprunway").getChildByName("Now_level").getComponent(cc.Label).string = "Lv " + this.uprunway.toString();
        if(this.uprunway<10){
            this.node.getChildByName("uprunway").getChildByName("Up_level").getChildByName("Background").getChildByName("money").getComponent(cc.Label).string = this.uprunway*this.uprunway*this.uprunway*1000;
        }else{
            this.node.getChildByName("uprunway").getChildByName("Up_level").active = false;
        }


        this.node.getChildByName("downrunway").getChildByName("Now_level").getComponent(cc.Label).string = "Lv " + this.downrunway.toString();
        if(this.downrunway<10){
            this.node.getChildByName("downrunway").getChildByName("Up_level").getChildByName("Background").getChildByName("money").getComponent(cc.Label).string = this.downrunway*this.downrunway*this.downrunway*1000;
        }else{
            this.node.getChildByName("downrunway").getChildByName("Up_level").active = false;
        }


        this.node.getChildByName("stand").getChildByName("Now_level").getComponent(cc.Label).string = "Lv " + this.stand.toString();
        if(this.stand<10){
            this.node.getChildByName("stand").getChildByName("Up_level").getChildByName("Background").getChildByName("money").getComponent(cc.Label).string = this.stand*this.stand*this.stand*1000;
        }else{
            this.node.getChildByName("stand").getChildByName("Up_level").active = false;
        }


        this.node.getChildByName("ground_tower").getChildByName("Now_level").getComponent(cc.Label).string = "Lv " + this.ground_tower.toString();
        if(this.ground_tower<10){
            this.node.getChildByName("ground_tower").getChildByName("Up_level").getChildByName("Background").getChildByName("money").getComponent(cc.Label).string = this.ground_tower*this.ground_tower*this.ground_tower*1000;
        }else{
            this.node.getChildByName("ground_tower").getChildByName("Up_level").active = false;
        }


        this.node.getChildByName("terminal").getChildByName("Now_level").getComponent(cc.Label).string = "Lv " + this.terminal.toString();
        if(this.terminal<10){
            this.node.getChildByName("terminal").getChildByName("Up_level").getChildByName("Background").getChildByName("money").getComponent(cc.Label).string = this.terminal*this.terminal*this.terminal*1000;
        }else{
            this.node.getChildByName("terminal").getChildByName("Up_level").active = false;
        }


        this.node.getChildByName("fuel_station").getChildByName("Now_level").getComponent(cc.Label).string = "Lv " + this.fuel_station.toString();
        if(this.fuel_station<10){
            this.node.getChildByName("fuel_station").getChildByName("Up_level").getChildByName("Background").getChildByName("money").getComponent(cc.Label).string = this.fuel_station*this.fuel_station*this.fuel_station*1000;
        }else{
            this.node.getChildByName("fuel_station").getChildByName("Up_level").active = false;
        }
    },

    update (dt) {
        this.uprunway = userdata.allfile.buildings.uprunway;
        this.downrunway = userdata.allfile.buildings.downrunway;
        this.stand = userdata.allfile.buildings.stand;
        this.ground_tower = userdata.allfile.buildings.ground_tower;
        this.terminal = userdata.allfile.buildings.terminal;
        this.fuel_station = userdata.allfile.buildings.fuel_station;
    },
    uluprunway(){
        let money = this.uprunway*this.uprunway*this.uprunway*1000;
        if(userdata.allfile.money>=money){
            userdata.allfile.money -= money;
            userdata.allfile.buildings.uprunway += 1;
        }else{
            let text = "You do not have enough money!";
            this.showwarning(text);
        }
        this.onLoad();
    },
    uldownrunway(){
        let money = this.downrunway*this.downrunway*this.downrunway*1000;
        if(userdata.allfile.money>=money){
            userdata.allfile.money -= money;
            userdata.allfile.buildings.downrunway += 1;
        }else{
            let text = "You do not have enough money!";
            this.showwarning(text);
        }
        this.onLoad();
    },
    ulstand(){
        let money = this.stand*this.stand*this.stand*1000;
        if(this.stand<this.ground_tower&&userdata.allfile.money>=money){
            userdata.allfile.money -= money;
            userdata.allfile.buildings.stand += 1;
        }else if(this.stand>=this.ground_tower){
            let text = "Please up level ground tower first!";
            this.showwarning(text);
        }else{
            let text = "You do not have enough money!";
            this.showwarning(text);
        }
        this.onLoad();
    },
    ulground(){
        let money = this.ground_tower*this.ground_tower*this.ground_tower*1000;
        if(userdata.allfile.money>=money){
            userdata.allfile.money -= money;
            userdata.allfile.buildings.ground_tower += 1;
        }else{
            let text = "You do not have enough money!";
            this.showwarning(text);
        }
        this.onLoad();
    },
    ulterminal(){
        let money = this.terminal*this.terminal*this.terminal*1000;
        if(userdata.allfile.money>=money){
            userdata.allfile.money -= money;
            userdata.allfile.buildings.terminal += 1;
        }else{
            let text = "You do not have enough money!";
            this.showwarning(text);
        }
        this.onLoad();
    },
    ulfuel(){
        let money = this.fuel_station*this.fuel_station*this.fuel_station*1000;
        if(userdata.allfile.money>=money){
            userdata.allfile.money -= money;
            userdata.allfile.buildings.fuel_station += 1;
        }else{
            let text = "You do not have enough money!";
            this.showwarning(text);
        }
        this.onLoad();
    },
    showwarning(inner){
        this.warning_window.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
        this.warning_window.active = true;
    },
    hidewarning(){
        this.warning_window.active = false;
    },
});
