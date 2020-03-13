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
        newinput:{
            type:cc.EditBox,
            default:null
        },
        createnewuser:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.opacity = 0;
    },

    start () {
        this.node.runAction(cc.fadeIn(1.0));
    },

    createnewfile:function(){
        var userData = {
            name : this.newinput.string,
            stars : 0,
            money : 0,
            fuel : 10,
            maxfuel : 10,
            passenger : 0,
            maxpassenger : 10,
            airplane : [0,0,0,0,0,0,0,0,0,0],
            uprunway : 1,
            downrunway : 1,
            stand : 1,
            control_tower : 0,
            ground_tower : 1,
            repair_center : 0,
            terminal : 1,
            fuel_station : 0
        };
        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.director.loadScene("runway_scene")));
    }


    // update (dt) {},
});
