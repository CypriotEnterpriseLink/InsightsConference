$(window).load(function(){

	$( ".day_dropdown" ).change(function() {
  		if ($( this ).val() == "both"){

  			$(".day1").fadeIn("slow");
  			$(".day2").fadeIn("slow");  			
  		}
  		else if ($( this ).val() == "day1") {
			$(".day2").fadeOut("slow",function() {
    			$(".day1").fadeIn("slow");
  			});
  		}
  		else if ($( this ).val() == "day2") {
			$(".day1").fadeOut("slow",function() {
    			$(".day2").fadeIn("slow");
  			});
  		}
	});

	$( ".theme_dropdown" ).change(function() {
		if ($( this ).val() == "all" && $( ".event_type_dropdown" ).val() == "all"){
			$(".event-spot").each(function() {
			  $( this ).fadeIn("slow");
			});
		}
		else if ($( this ).val() == "all"){
			$(".event-spot").each(function() {
			  if ($( this ).hasClass($( ".event_type_dropdown" ).val()))
				  $( this ).fadeIn("slow");
			});	
		}
		else {
			$(".event-spot").each(function() {
			  $( this ).fadeOut("slow");
			});
			$("." + $( this ).val()).each(function() {
				if ($( this ).hasClass($( ".event_type_dropdown" ).val()) || $( ".event_type_dropdown" ).val() == "all")
				  $( this ).fadeIn("slow");
			});
		}
	});

	$( ".event_type_dropdown" ).change(function() {
		if ($( this ).val() == "all" && $( ".theme_dropdown" ).val() == "all"){
			$(".event-spot").each(function() {
			  $( this ).fadeIn("slow");
			});
		}
		else if ($( this ).val() == "all"){
			$(".event-spot").each(function() {
			  if ($( this ).hasClass($( ".theme_dropdown" ).val()))
				  $( this ).fadeIn("slow");
			});	
		}
		else {
			$(".event-spot").each(function() {
			  $( this ).fadeOut("slow");
			});
			$("." + $( this ).val()).each(function() {
				if ($( this ).hasClass($( ".theme_dropdown" ).val()) || $( ".theme_dropdown" ).val() == "all")
				  $( this ).fadeIn("slow");
			});
		}
	});
});