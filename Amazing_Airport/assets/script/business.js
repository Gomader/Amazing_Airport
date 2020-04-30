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
        flightlist:Array,
        time:cc.Integer,
        level_one:cc.SpriteFrame,
        level_two:cc.SpriteFrame,
        level_three:cc.SpriteFrame,
        level_four:cc.SpriteFrame,
        level_five:cc.SpriteFrame,
        level_six:cc.SpriteFrame,
        level_seven:cc.SpriteFrame,
        level_eight:cc.SpriteFrame,
        level_nine:cc.SpriteFrame,
        content:{
            type:cc.Node,
            default:null
        },
        model:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        var list = [
            [],
            [1,1,0,2],
            [1,0,1,2],
            [2,1,0,5],
            [2,0,2,5],
            [3,1,0,8],
            [3,0,4,8],
            [4,1,0,12],
            [4,0,6,12],
            [5,1,0,15],
            [5,0,10,15],
            [6,1,0,20],
            [6,0,14,20],
            [7,1,0,24],
            [7,0,18,24],
            [8,1,0,30],
            [8,0,22,30],
            [9,1,0,35],
            [9,0,25,35]
        ]
        this.flightlist = list;
        this.startclock();
    },

    start () {
        for(var o in userdata.businesslist){
            let a = cc.instantiate(this.model);
            a.getChildByName("inners").getChildByName("Cost").getChildByName("fuel").getComponent(cc.Label).string = userdata.businesslist[o][1];
            a.getChildByName("inners").getChildByName("Cost").getChildByName("passenger").getComponent(cc.Label).string = userdata.businesslist[o][2];
            a.getChildByName("inners").getChildByName("Reward").getChildByName("Reward").getComponent(cc.Label).string = userdata.businesslist[o][3];
            if(userdata.businesslist[o][0]==1){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_one;
            }else if(userdata.businesslist[o][0] == 2){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_two;
            }else if(userdata.businesslist[o][0] == 3){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_three;
            }else if(userdata.businesslist[o][0] == 4){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_four;
            }else if(userdata.businesslist[o][0] == 5){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_five;
            }else if(userdata.businesslist[o][0] == 6){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_six;
            }else if(userdata.businesslist[o][0] == 7){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_seven;
            }else if(userdata.businesslist[o][0] == 8){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_eight;
            }else if(userdata.businesslist[o][0] == 9){
                a.getChildByName("inners").getChildByName("Airport").getComponent(cc.Sprite).spriteFrame = this.level_nine;
            }
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = a.getChildByName("allow");
            clickEventHandler.component = "business";
            clickEventHandler.handler = "fly";
            clickEventHandler.customEventData = userdata.businesslist;
        
            var button = a.getChildByName("allow").getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);
        }
    },
    update (dt) {},

    startclock(){
        this.callback = function(){
            if(this.time < 5){
                this.time += 1;
            }else{
                this.time = 0;
                if(userdata.businesslist.length<2){
                    let r = Math.floor(Math.random()*19);
                    if(r!=0&&r!=19){
                        userdata.businesslist.push(this.flightlist[r]);
                    }
                }
            }
        }
        this.schedule(function(){
            this.callback();
        },1)
    },
    fly(event,customEventData){
        
    }
});
