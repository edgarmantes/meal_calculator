var Diner = function(name){
	this.name = name;
	this.total = null;
	this.tip = null;
	this.tax = null;
	this.dishes = []
};

Diner.prototype.allDishes = function(item, price){
	var meal = {
		dishName : item,
		price : price
	};
	this.dishes.push(meal);
};

Diner.prototype.addPrice = function(){
	var price = 0;
	for (var i of this.dishes){
		price += i.price;
	}
	this.total = price;
};

Diner.prototype.taxes = function(){
	var mealTax = this.total * 0.11
	this.tax = mealTax;
};

Diner.prototype.mealTip = function(){
	var tiping = (this.total + this.tax) * 0.15;
	var tipString = tiping.toFixed(2);
	this.tip = Number(tipString);
};





var Bill = function(){
	this.diners = [];
	this.totalBill = null;
	this.totalTaxes = null;
	this.totalTips = null;
};

Bill.prototype.billTotal = function(){
	for ( var i of this.diners){
		this.totalBill += i.total
	};
};

Bill.prototype.taxesTotal = function(){
	for ( var i of this.diners){
		this.totalTaxes += i.tax;
	};
};

Bill.prototype.tipsTotal = function(){
	for ( var i of this.diners){
		this.totalTips += i.tip;
	};
};


var bills = new Bill();




var Kristen = new Diner('Kristen');
Kristen.allDishes('Lobster Sandwich', 15);
Kristen.allDishes('Spicy Beef Salad', 5);
bills.diners.push(Kristen);
Kristen.addPrice();
Kristen.taxes();
Kristen.mealTip();

var Edgar = new Diner('Edgar');
Edgar.allDishes('Lobster', 25);
Edgar.allDishes('Tachos', 10);
bills.diners.push(Edgar);
Edgar.addPrice();
Edgar.taxes();
Edgar.mealTip();

var Jessica = new Diner('Jessica');
Jessica.allDishes('Steak Fillet', 20);
Jessica.allDishes('Chili Cheese Fries', 8);
bills.diners.push(Jessica);
Jessica.addPrice();
Jessica.taxes();
Jessica.mealTip();

bills.billTotal();
bills.taxesTotal();
bills.tipsTotal();


