var express = require('express');
var fs = require("fs");
var router = express.Router();
var folderStructure = './experimentdata/';
var replaceall = require("replaceall");

/* GET users listing. */
router.post('/', function(req, res, next) {
	//console.log(req.body.data)
  var data = JSON.stringify(req.body);
  data = data.slice(2,-5);
  data= replaceall('\\"','"',data);
  var jsondata = JSON.parse(data);
  //console.log(jsondata);
  saveDataToDisk(data,jsondata.expName + ".json");
  res.json({ status: 1 });
});

module.exports = router;

function saveDataToDisk(data,filename){
	fs.writeFileSync(folderStructure+filename, data);
    console.log("The file was saved!");
} 
