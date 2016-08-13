var juice = 0;
var sundwich = 0;

document.getElementById('js-reset').onclick = function () {
	juice = sundwich = 0;
};
document.getElementById('js-sandwitch').onclick = function () {
	sundwich = sundwich + 1;
};
document.getElementById('js-juise').onclick = function () {
	juice = juice + 1;
};
document.getElementById('js-finish').onclick = function () {
	var priceSund = sundwich * 2;
	var priceJuice = juice * 1;

	var price = priceSund + priceJuice;
	if(price < 3){
		alert("Not enough items for an order");
	}else if(price > 7){
		alert("Too many items for one order");
	}else{
		alert("You have to pay: " + price +"$");
	}
};