console.log("database.js is online");

define(['firebase'], function(fb){

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPuEsaNMTBzr54BLl6ELkoXFNPFPna0VE",
    authDomain: "rpsgame-e7954.firebaseapp.com",
    databaseURL: "https://rpsgame-e7954.firebaseio.com",
    projectId: "rpsgame-e7954",
    storageBucket: "rpsgame-e7954.appspot.com",
    messagingSenderId: "943668132811"
  };
  //INITIALIZE FIREBASE
  firebase.initializeApp(config);
  var database = firebase.database();


    var Methods = {
      initialCheck: function(callback){
        var playerRef = database.ref("itworks/");
        playerRef.on("value", function(snapshot){
        console.log(snapshot.val());
        var status = snapshot.val();
        callback(status);
        });
      }
    };
    return Methods;
});

//   players/

/*
  //FIREBASE REFERENCES
  this.playerRef = database.ref("players/");

 //PRIVATE VARIABLES
 //var p1Exists; //Checks if player 1 or 2 exist
 //var p2Exists;
 var numOfPlayers;
 var playerOne;


this.hello = function(){
  console.log("hello hello hello hello hello hello");
}





    ////////////////////////////////////////////
    //Returns the number of players waiting to play.
  	this.playerCount = function(){
      return numOfPlayers;
  	}

    this.playerOneName = function(){
      var objectSeer = JSON.stringify(playerOne);
      console.log("playerone" + playerOne);

      return playerOne.name;
    }


    ////////////////////////////////////////////
    //Creates a new player in the database
    this.newPlayer = function(username, number){
      var playerNumber = number + 1;
    	var ref = db.ref( "/players/" + playerNumber );

    	ref.set({
    		name: username,
    		choice: "",
    		wins: 0,
    		losses: 0
    	});

    	ref.onDisconnect().remove();
     },
     ////////////////////////////////////////////
     ////////////////////////////////////////////


     this.showMe = function(){

     }


});
*/