var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var fileNames = readFileNames('./experimentdata');
	if(fileNames.length > 0){
		res.json({status:1,files:fileNames});
	}else{
		res.json({status:0});
	}
});

function readFileNames(dirname, onFileContent, onError) {
	
 	return fs.readdirSync(dirname);
}

module.exports = router;
