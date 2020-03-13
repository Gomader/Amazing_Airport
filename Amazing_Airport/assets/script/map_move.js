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
        map:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.map.on(cc.Node.EventType.TOUCH_MOVE,event=>{
            var delta = event.touch.getDelta();
            if(this.map.x+delta.x<=2436&&this.map.x+delta.x>=0){
                this.map.x += delta.x;
            }
            //if(this.map.y+delta.y<=1125&&this.map.y+delta.y>=0){
            //    this.map.y += delta.y;
            //    console.log(this.map.y);
            //}
            if(delta.y>5&&this.map.y==0){
                this.map.runAction(cc.sequence(cc.moveBy(0.5,0,300),cc.callFunc(this.downpage,this)));
            }else if(delta.y<-5&&this.map.y==1125){
                this.map.runAction(cc.sequence(cc.moveBy(0.5,0,-300),cc.callFunc(this.uppage,this)));
            }
        })
    },
    uppage:function(){
        this.map.y = 0;
    },
    downpage:function(){
        this.map.y = 1125;
    }

    // update (dt) {},
});
