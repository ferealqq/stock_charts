const express = require('express');
const path = require('path');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./router.js');
const NODE_ENV = process.env.NODE_ENV;

function requireHttps(req,res,next){
	if(!req.secure && 
		req.get('x-forwarded-proto') !== 'https' &&
		NODE_ENV === 'production'){
		return res.redirect('https://'+req.get('host') + req.url);
	}
	next();
}

if(NODE_ENV === 'production')
	app.use(requireHttps);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(helmet())
const PORT = process.env.PORT || 8080;

app.use('/api/',router);

app.listen(PORT);