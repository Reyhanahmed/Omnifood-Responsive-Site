$(document).ready(function(){

	/* For sticky navbar */
	$('.js--section-features').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass("sticky");
		}else{
			$('nav').removeClass("sticky");
		}
	}, {
		offset: "60px"
	});


	/* Scroll on buttons */
	
});