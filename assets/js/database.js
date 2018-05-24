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
  /*var setup = database.ref("games/setup");

      setup.set({
        roomA: { name: "ed", choice: "", wins: 0, total: 0}
        name: "ed",
        choice: "",
        wins: 0,
        losses: 0 
      });
  */

    function uniqueId(){
              return Math.random().toString(36).substr(2, 16);
            }



    var Methods = {

      initialCheck: function(callback){
        var availability = database.ref("games/setup");
        availability.once("value", function(snapshot){

          var toy = JSON.stringify( snapshot.val() );
          console.log("This is setup snapshot: " + toy[3] );
          console.log(availability.getKey() );
          console.log( snapshot.numChildren() );

          snapshot.forEach(function (childSnapshot){
            var value = childSnapshot.val();
        
          });

          
          if(snapshot.numChildren() < 2){
            var gameName = uniqueId();



            availability.update({
              [gameName]: {player1: "ed", player2: "", player1Choice: "", player2Choice: "", player1Wins: 0, player2Wins: 0, total: 0}
            });
          }
          else{
            var room = snapshot.key;
            console.log("room is: " + room );
          }
        });


        //TEST BOX
        var playerRef = database.ref("itworks/");
        playerRef.on("value", function(snapshot){
       // console.log("the child" + playerRef.child() );
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