const express = require('express');
const router = express.Router();
const { dataSortedBySymbols } = require('./data_handler.js');

router.get("/data",(req,res)=>{
	dataSortedBySymbols().then((object)=>{
		res.json({
			data: object.data,
			median_data: object.median_data,
		});
	});
});

module.exports = router;