var fs = require('fs-extra');
var Bluebird = require('Bluebird');

exports = module.exports = (function (){
    var items = {};

    return {
        init: init,
        getModule: buildModule
    };

    function init(path){
        return new Bluebird(function (resolve, reject){
            fs.walk(path)
                .on('data', function (item){
                    _mapModule(item.path);
                })
                .on('end', function (){
                    resolve();
                })
                .on('error', function (err){
                    reject(err);
                });
        });
    }

    function buildModule(module){
        return require(items[module]);
    }

    function _mapModule(path){
        if (path.indexOf('.js') > -1) {
            var moduleName = path.split('\\').pop().split('.js')[0];
            items[moduleName] = path;
        }
    }
})();


