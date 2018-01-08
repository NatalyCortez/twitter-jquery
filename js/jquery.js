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
	if (tweetCharacter > MAXCHARACTER ) {
		$tweetBtn.prop('disabled',true);
	}
	else if (tweetCharacter == false) {
		$tweetBtn.prop('disabled',true);		
	} else {
		$tweetBtn.prop('disabled',false);
	}
	});

	if (tweetCharacter >= MAXCHARACTER - 10){
		$counter.toggleClass('greenyellow');
	}
	else if (tweetCharacter >= MAXCHARACTER - 20){
		$counter.toggleClass('seagreen');
	}
	else {
		$counter.toggleClass('red');
	}

	
	/*VERSIÓN 0.0.6 (EXTRA)*/
	$tweetBtn.on('click',function(event){
		event.preventDefault();
		var textTweet = $tweetArea.val();
		var $hour = moment().format('LT');
		$(messages).prepend('<p>'+textTweet+ '<br>' + $hour +'</p>');
		$tweetArea.val('');	
		$tweetBtn.prop('disabled',true);
		$counter.text(MAXCHARACTER);						
	});
});

if (tweetCharacter >= MAXCHARACTER - 10){
	$counter.toggleClass('greenyellow');
}
else if (tweetCharacter >= MAXCHARACTER - 20){
	$counter.toggleClass('seagreen');
}
else {
	$counter.toggleClass('red');
}


