$(document).ready(function(){
	$("form").on('submit', function(event){
		var tweet = $("textarea").val();
		event.preventDefault();

		var twett = `
			<div class="contenedor__derecha--post">
				<i class="twett__delete fas fa-trash-alt"></i>
				${ tweet }
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
  $('.contenedor').on('click', '.twett__delete fas fa-trash-alt',  function(){
  	$(this).parent().fadeOut(400);
	})
})