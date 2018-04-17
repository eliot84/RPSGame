//GIT: Added pseudocode for the game major milestones to accomplish, 


requirejs.config({
	baseUrl: "assets/js",
	paths: {
		jquery: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery'],
		bootstrap: ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'],
		firebase: ['https://www.gstatic.com/firebasejs/4.12.1/firebase']
	},

	shim: {
		'firebase': {
			exports: 'firebase'
		}
	}
});


require(['jquery', 'sandbox', 'database', 'interface'], function($, sandbox, db, ui){

	
	//sandbox.test();
	//db.test();


	

	db.initialCheck(ui.check);
	//db.initialCheck(check);
	//check();
	



	//sandbox.doFirst(db.test);

/* Pseudocode 
	1. Access from database current users
	2. Set Interface based on database info
	3. allow user to assign themselves to the game and update database
	4. Begin the game
	5. If a user makes a selection show save that selection to the database
	6. Also show graphically on both users games what that user has picked
	7. When both users have picked evaluate
	8. Add score
	9. Play another round
	10. Add chat capability.
*/

	
});



/*
	//HOW TO DO CALL BACKS.
	var firstly = function(callback){
		console.log("This is done firstly.");
		callback();
	}

	var secondly = function(){
		console.log("This is done secondly");
	}

	firstly(secondly);



	//CALL BACKS WITH VARIABLES BEING PASSED ONE FUNCTION TO THE OTHER
	var firstly = function(callback){
		console.log("This is done firstly.");
		var food = "onion soup";
		callback(food);
	}

	var secondly = function(item){
		console.log("This is done secondly" + item);
	}

	firstly(secondly);
*/



