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
        flightlist:Array
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function(){
        var list = [
            {"name":"Traning Flight","time":60,"fuel":4,"massenger":12,"reward":10,"level":1},
            {"name":"Small Village","time":180,"fuel":8,"massenger":12,"reward":25,"level":2},
            {"name":"Egypt","time":420,"fuel":10,"massenger":19,"reward":35,"level":3},
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
            a.y -= o*350;
            a.active = true;
            this.node.addChild(a);
        }
        this.node.height = this.flightlist.length * 350 + 10;
    },

    update (dt) {
    },
});
