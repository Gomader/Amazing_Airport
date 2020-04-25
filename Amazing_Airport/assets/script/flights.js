// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
        flightlist:Array,
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

    onLoad:function(){
        var list = [
            {"name":"Traning Flight","time":60,"fuel":4,"passenger":12,"reward":10,"level":1},
            {"name":"Small Village","time":180,"fuel":8,"passenger":12,"reward":25,"level":2},
            {"name":"Egypt","time":420,"fuel":10,"passenger":19,"reward":35,"level":3},
        ]
        this.flightlist = list;
    },

    start () {
        for(var o in this.flightlist){
            let a = cc.instantiate(this.scroll);
            a.getChildByName("inners").getChildByName("Destination").getComponent(cc.Label).string = this.flightlist[o].name;
            let t = (Math.floor(this.flightlist[o].time/60)).toString() + " m " + (this.flightlist[0].time%60).toString() + " s";
            a.getChildByName("inners").getChildByName("Time").getComponent(cc.Label).string = t;
            a.getChildByName("inners").getChildByName("Cost").getChildByName("fuel").getComponent(cc.Label).string = this.flightlist[0].fuel;
            a.getChildByName("inners").getChildByName("Cost").getChildByName("passenger").getComponent(cc.Label).string = this.flightlist[0].massenger;
            a.getChildByName("inners").getChildByName("Reward").getChildByName("Reward").getComponent(cc.Label).string = this.flightlist[0].reward;
            if(this.flightlist[o].level==1){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_one;
            }else if(this.flightlist[o].level==2){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_two;
            }else if(this.flightlist[o].level == 3){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_three;
            }else if(this.flightlist[o].level == 4){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_four;
            }else if(this.flightlist[o].level == 5){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_five;
            }else if(this.flightlist[o].level == 6){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_six;
            }else if(this.flightlist[o].level == 7){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_seven;
            }else if(this.flightlist[o].level == 8){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_eight;
            }else if(this.flightlist[o].level == 9){
                a.getChildByName("inners").getChildByName("Airplane").getComponent(cc.Sprite).spriteFrame = this.level_nine;
            }
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = a.getChildByName("fly");
            clickEventHandler.component = "button_events";
            clickEventHandler.handler = "fly";
            clickEventHandler.customEventData = this.flightlist[o];
        
            var button = a.getChildByName("fly").getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);

            a.getChildByName("fly").getComponent(cc.Button)
            a.y -= o*350;
            a.active = true;
            this.node.addChild(a);
        }
        this.node.height = this.flightlist.length * 350 + 10;
    },

    update (dt) {
    },
});
