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
        endtime:cc.Integer
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.endtime = this.node.getChildByName("t").getComponent(cc.Label).string;
    },

    update (dt) {
        var t = this.endtime - (Date.parse(new Date())/1000);
        var text;
        if(t>0){
            text = (Math.floor(t/60)).toString() + " m " + (t%60).toString() + " s";
            this.node.getChildByName("complete").active = false;
        }else{
            text = "0 m 0 s";
            this.node.getChildByName("complete").active = true;
        }
        this.node.getChildByName("inners").getChildByName("Time").getComponent(cc.Label).string = text;
    },
});
