
define(['jquery'], function($){
	

	var Methods = {
		test: function(){
			$('#foo').text("jquery is live");
		},
		doFirst: function(callback){
			console.log("do this first from the sandbox");
			callback();
		}
	};
	return Methods;
});