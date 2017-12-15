
function Commands(){
	return {
		like: function (){
			var $like = document.querySelector(".coreSpriteHeartOpen");
			var $unlike = document.querySelector(".coreSpriteHeartFull");
		
			if( $like ){
				$like.click();
			} else if( $unlike ){
				$unlike.click();
			}
		},
		comment: function(){
			var $comment = document.querySelector(".coreSpriteComment");
			if( $comment ){
				setTimeout(() => {
					$comment.click();
				}, 200);
			}
		}
	}
	
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var command = Commands();

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading

		document.addEventListener('keypress', (event) => {
			const keyName = event.key;
			switch (keyName) {
				case 'a': 
					console.log('activity');
					//command.like();
					break;

				case 'c': 
					console.log('comment');
					command.comment();
					break;
				
				case 'e': 
					console.log('explore');
					//command.like();
					break;
				
				case 'f': 
					console.log('follow');
					//command.like();
					break;
	
				case 'l': 
					console.log('like');
					command.like();
					break;
				
				case 's': 
					console.log('save');
					break;
			
				default:
					break;
			}
			//alert('keypress event\n\n' + 'key: ' + keyName);
		});
		// ----------------------------------------------------------

	}
	}, 10);
});