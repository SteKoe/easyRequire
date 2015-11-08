# easyRequire

Easy Require is a module to load js files in large node.js projects without the '../../../' notation. 
This should enable you to revise your folder structure

***

##Usage

When first using the Init Function is required. That is best left in your index.js.

```javascript
var easyRequire = require('easyRequire');
easyRequire.inti(__dirname + '/pathToYourFiles')
    .then(function(){
          var yourModule = easyRequire.getModule('yourModule');
        //your code
    })
```

In all of the following files you can load your own js as follows:

```javascript
var easyRequire = require('easyRequire');
var yourModule = easyRequire.getModule('yourModule');
```

###Bevor

```javascript
var yourModule = require('./../.../../../app/service/yourModule.js');
```

###After

```javascript
var easyRequire = require('easyRequire');
var yourModule = easyRequire.getModule('yourModule');
```

###TODO
 * Add a filter for modules to be loaded via easyRequire