$( document ).ready(function(){

	//sets the default character info to be shown
	$(".info-active").slideToggle();

	//when you click a character portrait
	$(".char").click(function(){

		//stores the id of the selected character into a variable
		var clickedId= $(this).attr("id");



		//if there is char-active class on a sibling of the character portraits
		if ($(this).siblings(".char-active").length) {

			//removes the active class from all character portraits
			$(this).siblings(".char-active").removeClass("char-active");

			//adds the active class to the character portait that has been clicked
			$(this).addClass("char-active");
		} else {

			//add the active class to the clicked character portrait. There is
			//no need to remove the class as there is none.
			$(this).addClass("char-active");
		}



		//if there is an active class on the character information div
		if ($(".char-info").siblings(".info-active").length) {

			$(".char-info-flex").css("background-image","url(images/"+clickedId+"-mob-bg.jpg");

			//slides the current active div away
			$(".info-active").slideToggle("fast",function(){

				//When the previous slide completes, remove all active classes from the info divs
				$(".char-info").siblings(".info-active").removeClass("info-active");

				//takes the id name from the clicked character portrait and combines it with
				//with -info to create a complete class. This relies on proper naming conventions
				//in the html
				$("."+clickedId+"-info").addClass("info-active");

				//Slides out the active element
				$(".info-active").slideToggle("fast");

			});
		} 
	});
});