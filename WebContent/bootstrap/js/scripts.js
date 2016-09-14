
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch([
                    "bootstrap/img/backgrounds/2.jpg"
	              , "bootstrap/img/backgrounds/5.jpg"
	              , "bootstrap/img/backgrounds/4.jpg"
	              , "bootstrap/img/backgrounds/6.jpg"
	             ], {duration: 3000, fade: 750});
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    $("#nav-two a").each(function(i) {
	      if (i != 0) {
	        $("#beep-two")
	          .clone()
	          .attr("id", "beep-two" + i)
	          .appendTo($(this).parent());
	      }
	      $(this).data("beeper", i);
    })
    .mouseenter(function() {
    	$("#beep-two" + $(this).data("beeper"))[0].play();
    });
  $("#beep-two").attr("id", "beep-two0");
});
