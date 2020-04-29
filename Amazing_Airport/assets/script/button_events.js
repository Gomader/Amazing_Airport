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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {

    },

    update (dt) {
        
    },
    showallflights(){
        this.my_flights_window.active = true;   
    },
    closeallflights(){
        this.my_flights_window.active = false;
    },
    showwarehouse(){
        this.warehouse_window.active = true;
    },
    closewarehouse(){
        this.warehouse_window.active = false;
    },
    ownairplanefly(){
        
    },
    fly:function(event,customEventData){
        this.my_flights_window.active = false;
        var go = 0;
        if(userdata.lefts.leftfuel>=customEventData.fuel&&userdata.lefts.leftpassenger>=customEventData.passenger){
            for(var o in userdata.airplanedata){
                if(userdata.airplanedata[o].level==customEventData.level && userdata.airplanedata[o].isflying=="false"){
                    userdata.airplanedata[o].isflying = "true";
                    userdata.airplanedata[o].destination = customEventData.name;
                    userdata.airplanedata[o].reward = customEventData.reward;
                    userdata.airplanedata[o].endtime = Date.parse(new Date())/1000 + customEventData.time;
                    userdata.lefts.leftfuel -= customEventData.fuel;
                    userdata.lefts.leftpassenger -= customEventData.passenger;
                    go = 1;
                    break;
                }
            }
        }else{

        }
        if(go == 0){
            console.log("You dont have landing airplane");//here can make a new window
        }
    },
    sellairplane(event,customEventData){
        userdata.airplanedata.splice(customEventData.n,1);
    }
});
