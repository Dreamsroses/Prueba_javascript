$(document).ready(function(){
	$("form").on('submit', function(event){
		var tweet = $("textarea").val();
		event.preventDefault();

		var twett = `
			<div class="contenedor__derecha--post">
			    <i class="fas fa-user"></i>
				${ tweet }
				<i class="fas fa-heart"></i>
				<i class="twett__delete fas fa-trash-alt"></i>
			</div>
		`;
		$("body").append(twett);
/*		$("body").append(
		'<div class="contenedor__derecha--post">'
		+ '<div class="fa-trash-alt">'
		+ '</div>'
		+ tweet
		+ '</div>')*/
	});
  $('.contenedor__derecha--post').on('click', '.twett__delete', function(){
  	$(this).parent().fadeOut(900);
	})
})