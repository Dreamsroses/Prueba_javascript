$(document).ready(function(){
	$("#post").on('submit', function(event){
		var tweet = $("textarea").val();
		event.preventDefault();

		var tweet = `
		<div class="contenedor__derecha--post">
		<i class="fas fa-user"></i>
		${ tweet }
		<i class="tweet__contador fas fa-heart"></i>
		<i class="tweet__delete fas fa-trash-alt"></i>
		</div>
		`;
		$('.contenedor').prepend(tweet);
		$("textarea").val('');
		$("textarea").focus();
		$('.contenedor__derecha--post').on("click", ".tweet__delete", function(){
			$( ".contenedor" ).remove('');
		})

/*		$("body").append(
		'<div class="contenedor__derecha--post">'
		+ '<div class="fa-trash-alt">'
		+ '</div>'
		+ tweet
		+ '</div>')*/
	});
	$('.contenedor__derecha').on('click', '.tweet__delete', function(){
		$(this).parent().fadeOut(900);
	})
});

console.clear(); 

//Subir imagen
$('#uploader').submit(function(evt){
	evt.preventDefault();
  // Crear la lectura
  var reader = new FileReader();
  // Tomar la imagen
  var file = $(evt.target).find('input[type="file"]').get(0).files[0];
  reader.readAsDataURL(file);
  reader.onload = function(e){
  	console.log('The image was load');
  	$('#image__perfil').attr('src', e.target.result);
  }
});

//Contador de Likes
var contador = 0;
$('.tweet__contador').click(function(){ 
	if (contador < 20 ) {
		contador++;
	} else if (contador = contador++) {
		contador = 0;
	}
	document.getElementById("display").innerHTML = contador;
})
