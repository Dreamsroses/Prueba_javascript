$(document).ready(function(){
	$("#post").on('submit', function(event){
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
});

console.clear(); // Esto limpia la consola

$('#uploader').submit(function(evt){
  evt.preventDefault();
  
  // Create a reader
  var reader = new FileReader();
  
  // Get the image
  var file = $(evt.target).find('input[type="file"]').get(0).files[0];
  
  reader.readAsDataURL(file);
  
  reader.onload = function(e){
    console.log('The image was load');
    $('#image__perfil').attr('src', e.target.result);
	}
});
