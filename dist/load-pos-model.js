var transformers=require("./pos-transformers.js"),setter=require("./pos-setter.js"),updater=require("./pos-updater.js"),machines=require("./languages/cur/models/eng-pos-model.json"),loadNERModel=function(){return{machines:machines,setter:setter,updater:updater,transformers:transformers}};module.exports=loadNERModel;