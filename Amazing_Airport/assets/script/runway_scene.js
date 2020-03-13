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
        runway:{
            type:cc.Node,
            default:null
        },
        road:{
            type:cc.Node,
            default:null
        },
        stand:{
            type:cc.Node,
            default:null
        },
        username:{
            type:cc.Label,
            default:null
        },
        stars:{
            type:cc.Label,
            default:null
        },
        fuel:{
            type:cc.ProgressBar,
            default:null
        },
        fuelnum:{
            type:cc.Label,
            default:null
        },
        passenger:{
            type:cc.ProgressBar,
            default:null
        },
        passengernum:{
            type:cc.Label,
            default:null
        },
        coins:{
            type:cc.Label,
            default:null
        },
        allfile:Object,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.opacity = 0;
    },

    start () {
        this.node.runAction(cc.fadeIn(1.0));
    },

    update (dt) {
        this.allfile = JSON.parse(cc.sys.localStorage.getItem('userData'));
        this.showmap();
    },

    showmap:function(){
        if(this.allfile==null){
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.director.loadScene("homepage_scene")));
        }else{
            this.runway.getChildByName("up").getChildByName(this.allfile.uprunway.toString()).active = true;
            this.runway.getChildByName("down").getChildByName(this.allfile.downrunway.toString()).active = true;
            if(this.allfile.uprunway>=9&&this.allfile.downrunway>=9){
                this.road.getChildByName("9-9").active = true;
            }else if(this.allfile.uprunway>=6&&this.allfile.downrunway>=6){
                this.road.getChildByName("6-6").active = true;
            }else if(this.allfile.uprunway>=3&&this.allfile.downrunway>=3){
                this.road.getChildByName("3-3").active = true;
            }else{
                this.road.getChildByName("1-1").active = true;
            }
            this.stand.getChildByName(this.allfile.stand.toString()).active = true;
            this.username.string = this.allfile.name;
            this.stars.string = this.allfile.stars;
            this.fuel.progress = this.allfile.fuel / this.allfile.maxfuel;
            var fuelnumber = this.allfile.fuel.toString() + ' / ' + this.allfile.maxfuel.toString();
            this.fuelnum.string = fuelnumber;
            this.passenger.progress = this.allfile.passenger / this.allfile.maxpassenger;
            var passengernumber = this.allfile.passenger.toString() + ' / ' + this.allfile.maxpassenger.toString();
            this.passengernum.string = passengernumber;
            this.coins.string = this.allfile.money;
        }
    }
});
