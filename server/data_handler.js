const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const _ = require('lodash');
const { closestIndexTo } = require('date-fns');
const sequelize = new Sequelize('finance_financials','this','',{
	host: "localhost",
	dialect: 'mysql',
});


const financialStructureMysql = {
	id:{
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	symbol: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: 'compositeIndex',
		autoIncrement: false,
	},	
	reportDate: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: 'compositeIndex',
		autoIncrement: false,
	},	
	grossProfit: {
		type: Sequelize.INTEGER,
	},
	costOfRevenue: {
		type: Sequelize.INTEGER,
	},
	operatingRevenue: {
		type: Sequelize.INTEGER,
	},	
	totalRevenue: {
		type: Sequelize.INTEGER,
	},
	operatingIncome: {
		type: Sequelize.INTEGER,
	},	
	netIncome: {
		type: Sequelize.INTEGER,
	},
	profitMargin: {
		type: Sequelize.INTEGER,
	},
	researchAndDevelopment:{
		type: Sequelize.INTEGER,
	},
	operatingExpense:{
		type: Sequelize.INTEGER,
	},
	currentAssets:{
		type: Sequelize.INTEGER,
	},
	totalAssets:{
		type: Sequelize.INTEGER,
	},
	totalLiabilities:{
		type: Sequelize.INTEGER,
	},
	currentCash:{
		type: Sequelize.INTEGER,
	},
	currentDebt:{
		type: Sequelize.INTEGER,
	},
	shortTermDebt:{
		type: Sequelize.INTEGER,
	},
	longTermDebt:{
		type: Sequelize.INTEGER,
	},
	totalCash:{
		type: Sequelize.INTEGER,
	},
	totalDebt:{
		type: Sequelize.INTEGER,
	},
	shareholderEquity:{
		type: Sequelize.INTEGER,
	},
	cashChange:{
		type: Sequelize.INTEGER,
	},
	cashFlow:{
		type: Sequelize.INTEGER,
	},
	operatingGainsLosses:{
		type: Sequelize.INTEGER,
	},
	debt_equityRatio: {
		type: Sequelize.FLOAT,
	},
    equityPercent:{
    	type: Sequelize.FLOAT,
    },
};

class Financials extends Model{}
Financials.init(financialStructureMysql,{
	sequelize,
	modelName: 'finance_industry_us',
	timestamps: false,
})

function sortToQuarters(data){
	let quarters  = {
		q1: [],
		q2: [], 
		q3: [],
		q4: [],
	};
	let quarterDates = [new Date(2018,3),new Date(2018,6),new Date(2018,9),new Date(2018,12)];
	let keys = Object.keys(quarters);
	_.map(data,(object)=>{
		let closest = closestIndexTo(object.reportDate,quarterDates);
		quarters[keys[closest]].push(object)
	});
	return quarters;	
}

function calculateMedian(values){
	if(values.length===0) return 0;

	values.sort((a,b)=>a-b)

	let position = Math.floor(values.length/2);

	return values[position]
}
function listOfValues(list,valueName){
	return _.map(list,(object)=>object[valueName]);
}
function getMedians(data){
	const quarters = sortToQuarters(data);
	console.log(quarters.q1[0]);
	console.log(calculateMedian(listOfValues(quarters.q1,"profitMargin")));
	return {
		q1: {
			profitMargin: calculateMedian(listOfValues(quarters.q1,"profitMargin")),
			debt_equityRatio: calculateMedian(listOfValues(quarters.q1,"debt_equityRatio")),
			equityPercent: calculateMedian(listOfValues(quarters.q1,"equityPercent"))
		},
		q2: {
			profitMargin: calculateMedian(listOfValues(quarters.q2,"profitMargin")),
			debt_equityRatio: calculateMedian(listOfValues(quarters.q2,"debt_equityRatio")),
			equityPercent: calculateMedian(listOfValues(quarters.q2,"equityPercent"))
		},
		q3: {
			profitMargin: calculateMedian(listOfValues(quarters.q3,"profitMargin")),
			debt_equityRatio: calculateMedian(listOfValues(quarters.q3,"debt_equityRatio")),
			equityPercent: calculateMedian(listOfValues(quarters.q3,"equityPercent"))
		},
		q4: {
			profitMargin: calculateMedian(listOfValues(quarters.q4,"profitMargin")),
			debt_equityRatio: calculateMedian(listOfValues(quarters.q4,"debt_equityRatio")),
			equityPercent: calculateMedian(listOfValues(quarters.q4,"equityPercent"))
		},
	};
}		

module.exports = {
	getData: function(){
		return Financials.findAll();
	},
	dataSortedBySymbols: ()=>{
		return Financials.findAll().then((data)=>{
			const sorted = {};
			let arr = [data[0]];
			_.reduce(data,(prev,current)=>{
				if(prev.symbol !== current.symbol){
					sorted[prev.symbol] = arr;
					arr = [current];
				}else
					arr.push(current);

				return current; 
			});
			return {
				data: sorted,
				median_data: getMedians(data),
			};
		});
	},
}