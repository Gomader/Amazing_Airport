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
        warning_window:{
            type:cc.Node,
            default:null
        },
        window:{
            type:cc.Node,
            default:null
        },
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
        goods:Array
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {
        console.log("hi");
        var good = [
            [{"money":100,"level":1},{"level":1,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":250,"level":2},{"level":2,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":1000,"level":3},{"level":3,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":3000,"level":4},{"level":4,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":8000,"level":5},{"level":5,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":10000,"level":6},{"level":6,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":25000,"level":7},{"level":7,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":40000,"level":8},{"level":8,"isflying":"false","destination":"null","endtime":0,"reward":0}],
            [{"money":100000,"level":9},{"level":9,"isflying":"false","destination":"null","endtime":0,"reward":0}]
        ]
        this.goods = good;
        for(var o in this.goods){
            console.log(o)
            let a = cc.instantiate(this.model);
            if(this.goods[o][0].level==1){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_one;
            }else if(this.goods[o][0].level == 2){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_two;
            }else if(this.goods[o][0].level == 3){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_three;
            }else if(this.goods[o][0].level == 4){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_four;
            }else if(this.goods[o][0].level == 5){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_five;
            }else if(this.goods[o][0].level == 6){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_six;
            }else if(this.goods[o][0].level == 7){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_seven;
            }else if(this.goods[o][0].level == 8){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_eight;
            }else if(this.goods[o][0].level == 9){
                a.getChildByName("airplane_pic").getComponent(cc.Sprite).spriteFrame = this.level_nine;
            }
            a.getChildByName("level").getComponent(cc.Label).string = "Level " + this.goods[o][0].level.toString();
            a.getChildByName("buy").getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = this.goods[o][0].money;
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = a.getChildByName("buy");
            clickEventHandler.component = "shop";
            clickEventHandler.handler = "checkbuy";
            clickEventHandler.customEventData = this.goods[o];
        
            var button = a.getChildByName("buy").getComponent(cc.Button);
            button.clickEvents.push(clickEventHandler);

            line = Math.floor(o/5);
            var n = o%5;
            a.x += 340*n+40;
            a.y -= line*440 + 20;
            a.active = true;
            this.node.addChild(a);
        }
    },

    // update (dt) {},

    checkbuy(event,customEventData){
        if(userdata.allfile.buildings.stand > userdata.airplanedata.length && userdata.allfile.money>=customEventData[0].money&&(userdata.allfile.buildings.uprunway>=customEventData[0].level || userdata.allfile.buildings.downrunway>=customEventData[0].level)){
            userdata.allfile.money -= customEventData[0].money;
            userdata.airplanedata.push(customEventData[1]);
        }else if(userdata.allfile.money < customEventData[0].money){
            let text = "You don't have enough money!";
            this.showwarning(text);
        }else if(userdata.allfile.buildings.stand <= userdata.airplanedata.length){
            let text = "Please have enought stand to load your airplanes!\nUplevel your stand!";
            this.showwarning(text);
        }else if(userdata.allfile.buildings.uprunway<customEventData[0].level || userdata.allfile.buildings.downrunway<customEventData[0].level){
            let text = "You don't have enough level runway!\nPlease up level your runway";
            this.showwarning(text);
        }
    },

    showwarning(inner){
        let a = cc.instantiate(this.warning_window);
        a.getChildByName("warning_window").getChildByName("inner").getComponent(cc.Label).string = inner;
        a.active = true;
        this.window.addChild(a);
    },
    hidewarning(){
        this.window.destroyAllChidren();
    },
});
