$(document).ready(function() {
    $(".pokemon").click(function() {
      $(this).addClass('animation');
	setTimeout( function() {
		$('.pokemon').removeClass('animation');
	}, 400);
        document.getElementById('game').contentWindow.location.reload(true);
    });
    
    
;


jQuery(document).ready(function($){
    $('#game').iframeTracker({
        blurCallback: function(){
            $('.container2').fadeOut()
            $('button').fadeOut()
        }
    });
});

});

