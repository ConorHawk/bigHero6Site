$( document ).ready(function(){

	//sets the default character info to be shown
	$(".info-active").slideToggle();

	//When the window is resize, run the checkSize function.
	$( window ).resize(function(){
		checkSize();
		changeBackgroundImage();
	});

	//creates a variable that will control the resolution of the background images
	var bgSize = "desk-bg";

	//creates a function checkSize that checks the size of the screen and 
	//adjusts the bgSize to fit.
	function checkSize(){

		//If the window size is greated than 767 px
		if ($(window).width() > 767) {

			//changes the bgSize variable to desk-bg
			bgSize = "-desk-bg.jpg";

		//if the screen size is smaller than 767 px
		} else {

			//changes the bgSize to mob-bg
			bgSize = "-mob-bg.jpg";
		}
	}

	//creates a function that sets the active class on the active char thumbnail div
	function setActiveCharacter (){

		//if there is char-active class on a sibling of the character portraits
		if ($(selectedActive).siblings(".char-active").length) {

			//removes the active class from all character portraits
			$(selectedActive).siblings(".char-active").removeClass("char-active");

			//adds the active class to the character portait that has been clicked
			$(selectedActive).addClass("char-active");

			} else {

			//add the active class to the clicked character portrait. There is
			//no need to remove the class as there is none.
			$(selectedActive).addClass("char-active");
		}
	}

	function changeBackgroundImage(){
	//changes the background image to match the clicked character.
			//relies on correct file naming
			$(".char-info-flex").css("background-image","url(images/"+clickedId+bgSize);

	}

	function changeDisplayedInfo(){

		//if there is an active class on the character information div
		if ($(".char-info").siblings(".info-active").length) {

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
	}

	//runs the check size function when the page loads
	checkSize();

	//sets the first hero bg (hiro) to be the correct resolution
	$(".char-info-flex").css("background-image","url(images/hiro"+bgSize);

	//when you click a character portrait
	$(".char").click(function(){

		//stores the clicked div in a global variable so that the other
		//functions can use it
		selectedActive = this;

		//stores the id of the selected character into a variable
		clickedId = $(this).attr("id");

		//changes the active thumbnail when the character thumbnails are clicked
		setActiveCharacter();

		//Changes the info when the character thumbnails are clicked
		changeDisplayedInfo();

		changeBackgroundImage();

	});
});