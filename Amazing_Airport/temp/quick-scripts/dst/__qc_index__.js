
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/activeflights');
require('./assets/script/buildings');
require('./assets/script/business');
require('./assets/script/button_events');
require('./assets/script/creater_user');
require('./assets/script/flights');
require('./assets/script/lefttime');
require('./assets/script/map_move');
require('./assets/script/radar_animation');
require('./assets/script/runway_scene');
require('./assets/script/shop');
require('./assets/script/stand');
require('./assets/script/userdata');
require('./assets/script/warehouse');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();