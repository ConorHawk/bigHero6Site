$( document ).ready(function(){
		$(".char").click(function(){

			var clickedId= $(this).attr("id");
 
		if ($(this).siblings(".char-active").length) {
			$(this).siblings(".char-active").removeClass("char-active");
			$(this).addClass("char-active");
		} else {
			$(this).addClass("char-active");
		}


		if ($(".char-info").siblings(".info-active").length) {
			$(".char-info").siblings(".info-active").removeClass("info-active");
			$("."+clickedId+"-info").addClass("info-active");
		} else {
			$(".char-info").addClass("info-active");
		}

	});
});