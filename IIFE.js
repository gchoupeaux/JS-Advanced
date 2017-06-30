/*
IIFE immediately invoked function expression
also called
self invoked/executed anonymous function

Execute the function right away as soon as you define it, and will be called once

Define and executed in the same sentence
*/

// IIFE
(function(num){
	return (num+1);
})(4); // arguments are here

// an other way of writing IIFEE
// less usual
(function(num){
	return (num+1);
}(5));

// Or also if the function does nor return anything
!function(n){console.log(n)}(1);
~function(n){console.log(n)}(2);
-function(n){console.log(n)}(3);
+function(n){console.log(n)}(4);

// Use of IIFE => minify JQuery
// minify window.JQuery to a dollar sign
// reducing the scope look up $ is only available within this functon
/*
(function($){
	$(this).addClass('MyClass');
})(window.JQuery);
*/

// How to write a JavaScript library using IIFEE
var counter = (function(){
	var i = 0;
	return {
		get:function(){
			return i;
		},
		set: function(val){
			i = val;
		},
		increment: function(){
			i++;
		}
	};
})();

console.log(counter.get());
counter.set(5);
counter.increment();
console.log(counter.get());
