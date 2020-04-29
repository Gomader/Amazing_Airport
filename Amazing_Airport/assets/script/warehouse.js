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
        model:{
            type:cc.Node,
            default:null
        },
        level_one:cc.SpriteFrame,
        level_two:cc.SpriteFrame,
        level_three:cc.SpriteFrame,
        level_four:cc.SpriteFrame,
        level_five:cc.SpriteFrame,
        level_six:cc.SpriteFrame,
        level_seven:cc.SpriteFrame,
        level_eight:cc.SpriteFrame,
        level_nine:cc.SpriteFrame,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var line;
        for(var o in userdata.airplanedata){
            let a = cc.instantiate(this.model);
            if(userdata.airplanedata[o].level==1){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_one;
            }else if(userdata.airplanedata[o].level == 2){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_two;
            }else if(userdata.airplanedata[o].level == 3){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_three;
            }else if(userdata.airplanedata[o].level == 4){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_four;
            }else if(userdata.airplanedata[o].level == 5){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_five;
            }else if(userdata.airplanedata[o].level == 6){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_six;
            }else if(userdata.airplanedata[o].level == 7){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_seven;
            }else if(userdata.airplanedata[o].level == 8){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_eight;
            }else if(userdata.airplanedata[o].level == 9){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_nine;
            }
            a.getChildByName("level").getComponent(cc.Label).string = "Level " + userdata.airplanedata[o].level.toString();
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = a.getChildByName("sell");
            clickEventHandler.component = "warehouse";
            clickEventHandler.handler = "sellairplane";
            clickEventHandler.customEventData = o;
        
            var button = a.getChildByName("sell").getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);
            line = Math.floor(o/5);
            var n = o%5;
            a.x += 340*n+40;
            a.y -= line*440 + 20;
            a.active = true;
            this.node.addChild(a);
        }
        this.node.height = line*430+10;
    },

    start () {

    },

    update (dt) {
    },
    sellairplane(event,customEventData){
        event.target.getParent().destroy();
        userdata.airplanedata.splice(customEventData,1);
        this.onLoad();
    },
});
