const Sequelize = require('sequelize');

const financialStructureSqlite = {
	id:{
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
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
	createdAt: {
		type: Sequelize.DATE
	},
	updatedAt: {
		type: Sequelize.DATE
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
	}
};
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
const dataStructure = {
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
	operatingExpense:{
		type: Sequelize.INTEGER,
	},
	totalAssets:{
		type: Sequelize.INTEGER,
	},
	totalLiabilities:{
		type: Sequelize.INTEGER,
	},
	shareholderEquity:{
		type: Sequelize.INTEGER,
	},
	debt_equityRatio: {
		type: Sequelize.FLOAT,
	},
    equityPercent:{
    	type: Sequelize.FLOAT,
    },
};

module.exports = {
	financialStructureSqlite,
	financialStructureMysql,
	dataStructure,
}