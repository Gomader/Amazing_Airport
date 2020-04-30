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
            money : 100,
            airplane : {},
            buildings:{
                uprunway : 1,
                downrunway : 1,
                stand : 1,
                ground_tower : 1,
                terminal : 1,
                fuel_station : 0
            }
        };
        this.originupload(userData);
    },
    originupload:function(userData){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=0", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("userData=" + JSON.stringify(userData));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                cc.sys.localStorage.setItem('id',xhr.responseText);
                cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
                cc.director.loadScene("runway_scene");
            }
        };
    }

    // update (dt) {},
});
