$(document).ready(function(){
	$("form").on('submit', function(event){
		var tweet = $("textarea").val();
		event.preventDefault();
		$("body").append('<div class="columna__derecha--post">'
		+ '<div class="fa-trash-alt">'
		+ '</div>'
		+ tweet
		+ '</div>')
	});
})