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
        stands:{
            type:cc.Node,
            default:null
        },
        airplane:{
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

    onLoad:function(){
    },

    start () {

    },

    update (dt) {
        for(var i = 0; i < userdata.allfile.buildings.stand; i++){
            let a = cc.instantiate(this.stands);
            a.active = true;
            a.x -= i*300;
            this.node.addChild(a);
        }
        for(var o in userdata.airplanedata){
            var w = 0;
            if(userdata.airplanedata[o].isflying=='false'){
                let a = cc.instantiate(this.airplane);
                if(userdata.airplanedata[o].level==1){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_one;
                }else if(userdata.airplanedata[o].level==2){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_two;
                }else if(userdata.airplanedata[o].level==3){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_three;
                }else if(userdata.airplanedata[o].level==4){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_four;
                }else if(userdata.airplanedata[o].level==5){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_five;
                }else if(userdata.airplanedata[o].level==6){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_six;
                }else if(userdata.airplanedata[o].level==7){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_seven;
                }else if(userdata.airplanedata[o].level==8){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_eight;
                }else if(userdata.airplanedata[o].level==9){
                    a.getComponent(cc.Sprite).spriteFrame = this.level_nine;
                }
                a.x -= w*300;
                a.active = true;
                this.node.addChild(a);
                w += 1;
            }
        }
    },
});
