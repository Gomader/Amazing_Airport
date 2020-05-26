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
        stand:cc.Integer,
        window:{
            type:cc.Node,
            default:null
        },
        warning_window:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let anim = this.getComponent(cc.Animation);
        anim.play('up_loading');
        anim.on('finished',this.onFinished,this);
    },

    start () {
    },

    update (dt) {

    },

    onFinished(){
        let anim = this.getComponent(cc.Animation);
        for(var o in userdata.standstate){
            if(userdata.standstate[o].state == false){
                if(o == 0){
                    anim.play('1');
                    anim.play('o1');
                }else if(o == 1){
                    anim.play('2');
                    anim.play('o2');
                }else if(o == 2){
                    anim.play('3');
                    anim.play('o3');
                }else if(o == 3){
                    anim.play('4');
                    anim.play('o4');
                }else if(o == 4){
                    anim.play('5');
                    anim.play('o5');
                }
                break;
            }
        }
        anim.off('finished',this.onFinished,this);
        this.destroy();
    },
});
