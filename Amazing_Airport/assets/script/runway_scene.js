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
        userid:cc.Integer,
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
        this.userid = cc.sys.localStorage.getItem("id");
        this.newuser();
        
    },

    start () {
        this.node.runAction(cc.fadeIn(1.0));
    },

    update (dt) {
        this.allfile = JSON.parse(cc.sys.localStorage.getItem('userData'));
        this.showmap();
    },

    newuser:function(){
        if(this.userid==null){
            cc.director.loadScene("homepage_scene");
        }else{
            this.downloadUserData();
        }
    },

    downloadUserData:function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=1", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if (xhr.responseText != 0){
                    cc.sys.localStorage.setItem("userData",xhr.responseText);
                }
            }
        };
    },

    uploadUserData:function(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://140.143.126.73/amazing_airport/amazing_airport.php?module=2", true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send("id=" + this.userid + "&userData=" + JSON.stringify(this.allfile));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if(xhr.responseText == 1){
                    console.log(1);
                }
            }
        };
    },

    showmap:function(){
        this.runway.getChildByName("up").getChildByName(this.allfile.buildings.uprunway.toString()).active = true;
        this.runway.getChildByName("down").getChildByName(this.allfile.buildings.downrunway.toString()).active = true;
        if(this.allfile.buildings.uprunway>=9&&this.allfile.buildings.downrunway>=9){
            this.road.getChildByName("9-9").active = true;
        }else if(this.allfile.buildings.uprunway>=6&&this.allfile.buildings.downrunway>=6){
            this.road.getChildByName("6-6").active = true;
        }else if(this.allfile.buildings.uprunway>=3&&this.allfile.buildings.downrunway>=3){
            this.road.getChildByName("3-3").active = true;
        }else{
            this.road.getChildByName("1-1").active = true;
        }
        this.stand.getChildByName(this.allfile.buildings.stand.toString()).active = true;
        this.username.string = this.allfile.name;
        this.stars.string = this.allfile.stars;
        this.coins.string = this.allfile.money;
    },

});
