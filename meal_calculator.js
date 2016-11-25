var Diner = function(name){
	this.name = name;
	this.total = null;
	this.tip = null;
	this.dishes = []
};

Diner.prototype.allDishes = function(item, price){
	var meal = {
		dishName : item,
		price : price
	}
	this.dishes.push(meal);
};

Diner.prototype.addPrice = function(){

};

Diner.prototype.tax = function(){

};

Diner.prototype.tip = function(){

};





var Bill = function(diners,){
	this.diners = diners;
	this.totalBill = null;
	this.totalTaxes = null;
	this.totalTips = null;
};

Bill.prototype.billTotal = function(){

};

Bill.prototype.taxesTotal = function(){

};

Bill.prototype.tipsTotal = function(){

};

var data = {

};




var Kristen = new Diner('Kristen');
Kristen.allDishes('Lobster Sandwich', 15);
Kristen.allDishes('Spicy Beef Salad', 5);