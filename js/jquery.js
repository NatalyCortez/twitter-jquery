$(document).ready(function(){
	var $tweetArea = $('textarea');
	var $tweetBtn = $('#tweet-btn');
	var $messages = $('#messages');
	var $counter = $('#count');
	var MAXCHARACTER = 140;

	$tweetArea.on('input',function(){
		var tweetCharacter = $(this).val().length;
		console.log(tweetCharacter);
	if(tweetCharacter > MAXCHARACTER){
		alert('El texto es demasiado largo.');
		$tweetBtn.prop('disabled',true);				
		$tweetArea.val('');
	} else if (tweetCharacter == false) {
		$tweetBtn.prop('disabled',true);		
	} else {
		console.log('Usted puede publicar su post!.');
		$tweetBtn.prop('disabled',false);
	}
	});
	/*VERSIÓN 0.0.2*/
	

	/*VERSIÓN 0.0.6 (EXTRA)*/
	$tweetBtn.on('click',function(event){
		event.preventDefault();
		var textTweet = $tweetArea.val();
		var $hour = moment().format('LT');
	$(messages).append('<p>'+textTweet+ '<br>' + $hour +'</p>');
		
		$tweetArea.val('');		
		$tweetBtn.prop('disabled',true);						
	});
});



