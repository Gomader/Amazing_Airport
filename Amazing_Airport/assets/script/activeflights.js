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
        scroll:{
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
        data:Array,
        window:{
            type:cc.Node,
            default:null
        }
    },

    onLoad:function(){
        var h = 0;
        for(var o in userdata.airplanedata){
            if(userdata.airplanedata[o].isflying=='true'){
             let a = cc.instantiate(this.scroll);
             let level = userdata.airplanedata[o].level;
             h+=1;
             if(level == 1){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_one;
             }else if(level == 2){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_two;
             }else if(level == 3){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_three;
             }else if(level == 4){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_four;
             }else if(level == 5){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_five;
             }else if(level == 6){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_six;
             }else if(level == 7){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_seven;
             }else if(level == 8){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_eight;
             }else if(level == 9){
                 a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_nine;
             }
             a.getChildByName("inners").getChildByName("Destination").getComponent(cc.Label).string = userdata.airplanedata[o].destination;
             a.getChildByName("inners").getChildByName("Reward").getChildByName("Reward").getComponent(cc.Label).string = userdata.airplanedata[o].reward;
             a.getChildByName("t").getComponent(cc.Label).string = userdata.airplanedata[o].endtime;

             var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = a.getChildByName("complete");
            clickEventHandler.component = "activeflights";
            clickEventHandler.handler = "playloadaction";
            clickEventHandler.customEventData = o;

            var button = a.getChildByName("complete").getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);

             a.y -= (h-1)*350;
            a.active = true;
            this.node.addChild(a);
            }
        }
        this.node.height = h * 350 + 10;
    },

    start () {
        
    },

    update (dt) {
    },
    playloadaction(event,customEventData){//here I have not write the animation,if done, can let follow codes to be a button
        bill();
    },
    bill(){
        userdata.airplanedata[customEventData].destination = 'null';
        userdata.airplanedata[customEventData].endtime = 0;
        userdata.airplanedata[customEventData].isflying = 'false';
        userdata.allfile.money += userdata.airplanedata[customEventData].reward;
        userdata.airplanedata[customEventData].reward = 0;
        event.target.getParent().destroy();
        this.window.distroyAllChildren();
    }
});
