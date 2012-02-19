
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


function registerTweets(s, q) {
	var tweetarr = [];
	var numtweets = 0;
	var Love_count = 0;
	s.register(function(tweet) {

       if(tweet.text.match(/\slove\s/i)) {
	Love_count = Love_count+1;
	}
	else if(tweet.text.match(/\sdon't\slike\s/i)) {
	Love_count = Love_count-1;
	}
	else if(tweet.text.match(/\slike\s/i)) {
	Love_count = Love_count+1;
	}
	else if(tweet.text.match(/\shate\s/i)) {
	Love_count = Love_count-1;
	}



	if(Love_count > 0){
		var arrow = "<img src='uparrow2.png' alt='uparrow' />";
	}
	else if (Love_count === 0){
		var arrow = "<img src='naught2.png'alt='nominal' />";
	}
	else if (Love_count < 0){
		var arrow = "<img src='downarrow2.png'alt='nominal' />";
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
