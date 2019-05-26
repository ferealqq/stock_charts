const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const _ = require('lodash');
const { closestIndexTo,parseISO } = require('date-fns');
const { dataStructure } = require('./structure.js');

const tableName = "data";
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: __dirname+'/data.db',
});


class Financials extends Model{}
Financials.init(dataStructure,{
	sequelize,
	modelName: tableName,
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
		let closest = closestIndexTo(parseISO(object.reportDate),quarterDates);
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
function revenueStats(quarter){
	return {
		totalRevenue: listOfValues(quarter,"totalRevenue"),
		operatingRevenue: listOfValues(quarter,"operatingRevenue"),	
		costOfRevenue: listOfValues(quarter,"costOfRevenue"),	
	};
}
function calculateChangeMedian(stat1,stat2,changeName){
	let changeList = [];
	_.map(stat1,(obj,index)=>{
		let compare = _.find(stat2,{symbol: obj.symbol});
		if(compare && compare[changeName] && obj[changeName]){
			changeList.push(compare[changeName]/obj[changeName]);
		}
	});
	return calculateMedian(changeList); 
}
function calculateRevenueStats(quarters){
	return {
		q2TotalRevenuGrowth: calculateChangeMedian(quarters.q1,quarters.q2,"totalRevenue"),
		q2operatingRevenueGrowth: calculateChangeMedian(quarters.q1,quarters.q2,"operatingRevenue"),
		q2costOfRevenueGrowth: calculateChangeMedian(quarters.q1,quarters.q2,"costOfRevenue"),
		
		q3TotalRevenuGrowth: calculateChangeMedian(quarters.q2,quarters.q3,"totalRevenue"),
		q3operatingRevenueGrowth: calculateChangeMedian(quarters.q2,quarters.q3,"operatingRevenue"),
		q3costOfRevenueGrowth: calculateChangeMedian(quarters.q2,quarters.q3,"costOfRevenue"),
		
		q4TotalRevenuGrowth: calculateChangeMedian(quarters.q3,quarters.q4,"totalRevenue"),
		q4operatingRevenueGrowth: calculateChangeMedian(quarters.q3,quarters.q4,"operatingRevenue"),
		q4costOfRevenueGrowth: calculateChangeMedian(quarters.q3,quarters.q4,"costOfRevenue"),				
	};
}
function calculateProfitMargin({netIncome, totalRevenue}){
	return _.toNumber(netIncome)/_.toNumber(totalRevenue);
}
function calculateDebtEquityRatio({shareholderEquity,totalLiabilities}){
	return _.toNumber(totalLiabilities)/_.toNumber(shareholderEquity);
}
function calculateEquityPercent({shareholderEquity,totalAssets}){
	return _.toNumber(shareholderEquity)/_.toNumber(totalAssets);
}
function calculateStatsQuarter(quarter){
	let profitMargins = [], debt_equityRatios = [], equityPercents = [];
	_.map(quarter,(obj)=>{
		if(obj && obj.netIncome && obj.totalRevenue)
			profitMargins.push(calculateProfitMargin(obj));
		if(obj && obj.shareholderEquity && obj.totalLiabilities)
			debt_equityRatios.push(calculateDebtEquityRatio(obj))
		if(obj && obj.totalAssets && obj.shareholderEquity)
			equityPercents.push(calculateEquityPercent(obj))
	})
	console.log(profitMargins);
	return {
		profitMargin: calculateMedian(profitMargins),
		debt_equityRatio: calculateMedian(debt_equityRatios),
		equityPercent: calculateMedian(equityPercents),
	}
}
function calculateStatMedians(quarters){
	return {
		q1: calculateStatsQuarter(quarters.q1),
		q2: calculateStatsQuarter(quarters.q2),
		q3: calculateStatsQuarter(quarters.q3),
		q4: calculateStatsQuarter(quarters.q4),
	}	
}
function getMedians(data){
	const quarters = sortToQuarters(data);
	const quartersRevenueStats = calculateRevenueStats(quarters);
	const stats = calculateStatMedians(quarters);
	return {
		q1: {
			profitMargin: stats.q1.profitMargin,
			debt_equityRatio: stats.q1.debt_equityRatio,
			equityPercent: stats.q1.equityPercent,
		},
		q2: {
			profitMargin: stats.q2.profitMargin,
			debt_equityRatio: stats.q2.debt_equityRatio,
			equityPercent: stats.q2.equityPercent,
			totalRevenueGrowth: quartersRevenueStats.q2TotalRevenuGrowth,
			operatingRevenueGrowth: quartersRevenueStats.q2operatingRevenueGrowth,
			costOfRevenueGrowth: quartersRevenueStats.q2costOfRevenueGrowth,
		},
		q3: {
			profitMargin: stats.q3.profitMargin,
			debt_equityRatio: stats.q3.debt_equityRatio,
			equityPercent: stats.q3.equityPercent,
			totalRevenueGrowth: quartersRevenueStats.q3TotalRevenuGrowth,
			operatingRevenueGrowth: quartersRevenueStats.q3operatingRevenueGrowth,
			costOfRevenueGrowth: quartersRevenueStats.q3costOfRevenueGrowth,			
		},
		q4: {
			profitMargin: stats.q4.profitMargin,
			debt_equityRatio: stats.q4.debt_equityRatio,
			equityPercent: stats.q4.equityPercent,
			totalRevenueGrowth: quartersRevenueStats.q4TotalRevenuGrowth,
			operatingRevenueGrowth: quartersRevenueStats.q4operatingRevenueGrowth,
			costOfRevenueGrowth: quartersRevenueStats.q4costOfRevenueGrowth,			
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
			return sorted;
		});
	},
	getMedians: ()=>{
		return Financials.findAll().then((data)=>
			getMedians(data)
		);
	}
}