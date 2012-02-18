
function main() {

	query = "Paula Deen";
	$("#querybox").val("Ex: Paula Deen");

	var s = new Spotter("twitter.search",
			{q:query, period:10},
			{buffer:true, bufferTimeout:1000});
			
	registerTweets(s, query);
	s.start();

	$("#searchbutton").click(function() {
		s.stop();
		

		query = $("#querybox").val();
		$("#tweets").empty();
		

		s = new Spotter("twitter.search",
				{q:query, period:10},
				{buffer:true, bufferTimeout:1000});
		
		registerTweets(s, query);		
		s.start();
	});


	
	$("form").submit(function () { return false; });


}







		if (q === query) {

			tweetarr.push(
				$("<div class='tweet span10 offset6" + " " + q + "'>" + arrow + "</div>")
					.prependTo($("#tweets"))
					.hide()
					.slideDown()
			);

			numtweets++;
			if (tweetarr.length > 1) {
				lastTweet = tweetarr.shift();
				lastTweet.fadeOut(function() {
					lastTweet.remove();
				});
			}
		}
	});
}


var query;
$(document).ready(function() {
	main();
});
