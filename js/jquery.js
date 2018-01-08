$(document).ready(function(){
	var $tweetArea = $('textarea');
	var $tweetBtn = $('#tweet-btn');
	var $messages = $('#messages');
	var $counter = $('#count');
	var $span = $('span');
	var MAXCHARACTER = 140;

	$tweetArea.on('input',function(){
		var tweetCharacter = ($(this).val()).trim().length;
		var totalCharacters = MAXCHARACTER - tweetCharacter;		
		$counter.text(totalCharacters);
		$span.removeClass('seagreen');
		$span.removeClass('orangered');
		$span.removeClass('red');		
	if (tweetCharacter > MAXCHARACTER ) {
		$tweetBtn.prop('disabled',true);
		$span.addClass('red');
		$span.removeClass('orangered');
	}
	else if (totalCharacters <= 10 && totalCharacters >= 0) {
		$tweetBtn.prop('disabled',false);		
		$span.addClass('orangered');
		$span.removeClass('red');
		$span.removeClass('seagreen');
	}
	else if (totalCharacters <= 20 && totalCharacters > 10){
		$tweetBtn.prop('disabled',false);		
		$span.addClass('seagreen');
		$span.removeClass('orangered');
	}
	else if (totalCharacters == false) {
		$tweetBtn.prop('disabled',true);		
	} 
	else {
		$tweetBtn.prop('disabled',false);
	}
	});
	
	/* VERSIÓN 0.0.6 (EXTRA)*/
	$tweetBtn.on('click',function(event){
		event.preventDefault();
		var textTweet = $tweetArea.val();
		var $hour = moment().format('LT');
		$(messages).prepend('<p>'+textTweet+ '<br>' + $hour +'</p>');
		$tweetArea.val('');	
		$tweetBtn.prop('disabled',true);
		$counter.text(MAXCHARACTER);
		$span.removeClass('seagreen');
		$span.removeClass('orangered');					
	});
});



