
requirejs.config({
	baseUrl: "assets/js",
	paths: {
		jquery: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery'],
		bootstrap: ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css']
	}
});


require(['sandbox'], function(sandbox){

	sandbox.test();
});






