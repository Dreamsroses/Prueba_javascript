$(document).ready(function(){
	$("form").on('submit', function(event){
		var tweet = $("textarea").val();
		event.preventDefault();
		$("body").append('<div class="columna__derecha--post">'
		+ '<div class="post__delete">'
		+ '</div>'
		+ tweet
		+ '</div>')
	});
})