//ui

define(['jquery'], function($){

  var Methods = {
  	    check: function(state){
			if(state){
				$(".box").css("background-color", "purple");
		    }
	    }
  };
  return Methods;
});