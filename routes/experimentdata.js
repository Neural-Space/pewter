var express = require('express');
var jsonfile = require('jsonfile')
var router = express.Router();
var fs = require('fs');
var rootfolder = './experimentdata/';
/* GET users listing. */
router.get('/', function(req, res, next) {
	var filename = req.query.fname;
	var fileContent = jsonfile.readFileSync(rootfolder+req.query.fname);
	fileContent.status = 1;
	res.json(fileContent);
});



module.exports = router;
