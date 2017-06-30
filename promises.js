// PROMISES

// 1rst example

let promiseToCleanTheRoom = new Promise(function(resolve, reject){
	// cleaning the room
	let isClean = false; //true

	if (isClean){
		resolve('Clean');
	} else {
		reject('not Clean');
	}
});

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('the room is ' + fromResolve);
}).catch(function(fromReject){
	console.log('the room is ' + fromReject);
});

// 2nd example
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' remove Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve( message + ' won Icecream');
  });
};

// one after each other
cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
}).then(function(result){
	console.log('finished ' + result);
})

// if all promise need to be done
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
	console.log('all finished');
});

// if one of them need to be done
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
	console.log('one finished');
});
