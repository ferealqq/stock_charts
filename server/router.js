const express = require('express');
const router = express.Router();
const { dataSortedBySymbols,getMedians } = require('./data_handler.js');

router.get("/data",(req,res)=>{
	dataSortedBySymbols().then((data)=>{
		res.json({
			data,
		});
	});
});

router.get("/medians",(req,res)=>{
	getMedians().then((medians)=>{
		res.json({
			median_data: medians,
		})
	})
});

module.exports = router;