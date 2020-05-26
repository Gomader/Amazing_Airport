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
        my_flights_window:{
            type:cc.Node,
            default:null
        },
        warehouse_window:{
            type:cc.Node,
            default:null
        },
        activeflights:{
            type:cc.Node,
            default:null
        },
        flights:{
            type:cc.Node,
            default:null
        },
        shop_window:{
            type:cc.Node,
            default:null
        },
        buildings_window:{
            type:cc.Node,
            default:null
        },
        business_flights_window:{
            type:cc.Node,
            default:null
        },
        setting_windows:{
            type:cc.Node,
            default:null
        },
        warning_window:{
            type:cc.Node,
            default:null
        },
        window:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {

    },

    update (dt) {
        
    },
    showallflights(){
        this.hide();
        let a = cc.instantiate(this.my_flights_window);
        a.active = true;
        a.getChildByName("active").active = false;
        a.getChildByName("inner").active = true;
        this.window.addChild(a);
    },
    showflying(){
        this.hide();
        let a = cc.instantiate(this.my_flights_window);
        a.active = true;
        a.getChildByName("active").active = true;
        a.getChildByName("inner").active = false;
        this.window.addChild(a);
    },
    showwarehouse(){
        this.hide();
        let a = cc.instantiate(this.warehouse_window);
        a.active = true;
        this.window.addChild(a);
    },
    fly:function(event,customEventData){
        this.hide();
        var go = 0;
        if(userdata.lefts.leftfuel>=customEventData.fuel&&userdata.lefts.leftpassenger>=customEventData.passenger){
            for(var o in userdata.airplanedata){
                if(userdata.airplanedata[o].level==customEventData.level && userdata.airplanedata[o].isflying=='false'){
                    userdata.airplanedata[o].isflying = 'true';
                    userdata.airplanedata[o].destination = customEventData.name;
                    userdata.airplanedata[o].reward = customEventData.reward;
                    userdata.airplanedata[o].endtime = Date.parse(new Date())/1000 + customEventData.time;
                    userdata.lefts.leftfuel -= customEventData.fuel;
                    userdata.lefts.leftpassenger -= customEventData.passenger;
                    if(userdata.achievement[customEventData.id][1]==3){
                        console.log("r");
                    }else{
                        userdata.achievement[customEventData.id][0] += 1;
                        if(userdata.achievement[customEventData.id][0]==10){
                            userdata.achievement[customEventData.id][1]+=1;
                            userdata.allfile.stars += 1;
                            userdata.achievement[customEventData.id][0] = 0;
                        }
                    }
                    go = 1;
                    break;
                }
            }
        }
        if(go == 0){
            if(userdata.lefts.leftfuel<customEventData.fuel||userdata.lefts.leftpassenger<customEventData.passenger){
                let inner = 'Do not have enough fuel or passengers';
                this.showwarning(inner);
            }else{
                let inner = 'Do not have an avilable plane of the required type.\nBuy a new plane or wait for the current flights to return.'
                this.showwarning(inner);
            }
        }
    },

    toactive(){
        this.window.getChildByName("My_flights_window").getChildByName("active").active = true;
        this.window.getChildByName("My_flights_window").getChildByName("inner").active = false;
    },

    toflightlist(){
        this.window.getChildByName("My_flights_window").getChildByName("active").active = false;
        this.window.getChildByName("My_flights_window").getChildByName("inner").active = true;
    },

    showwarning(inner){
        this.warning_window.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
        let a = cc.instantiate(warning_window);
        a.active = true;
        this.window.addChild(a);
    },
    showsetting(){
        this.hide();
        let a = cc.instantiate(this.setting_windows);
        a.active = true;
        this.window.addChild(a);
    },
    showshop(){
        this.hide();
        let a = cc.instantiate(this.shop_window);
        a.active = true;
        this.window.addChild(a);
    },
    showbuildings(){
        this.hide();
        let a = cc.instantiate(this.buildings_window);
        a.active = true;
        this.window.addChild(a);
    },
    showbusiness(){
        this.hide();
        let a = cc.instantiate(this.business_flights_window);
        a.active = true;
        this.window.addChild(a);
    },
    hide(){
        this.window.destroyAllChildren();
    }
});
