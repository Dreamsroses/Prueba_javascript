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
		$("#post__texto").val('');
		$("#post__texto").focus();
});

//Delete Tweet
$('.contenedor').on('click', '.tweet__delete', function(){
	$(this).parent().fadeOut(900);
});

//Contador de Likes
$('.contenedor').on('click', '.tweet__contador', function(){
	$(this).css("color", "#E80C7A");
	var contador = $(this).find(".display__contador").text();
	var numero = parseInt($(".display__contador").html()) + 1;
	$(this).find(".display__contador").text(numero);
});
//   $(".display__contador").html(numero);
//	console.log(contador);

/*		$("body").append(
		'<div class="contenedor__derecha--post">'
		+ '<div class="fa-trash-alt">'
		+ '</div>'
		+ tweet
		+ '</div>')*/

//Subir imagen
$('#uploader').submit(function(evt){
	evt.preventDefault();
	  // Crear la lectura
	  var reader = new FileReader();
	  // Tomar la imagen
	  var file = $(evt.target).find('input[type="file"]').get(0).files[0];
	  reader.readAsDataURL(file);
	  reader.onload = function(e){
	  console.log('La imagen fue cargada Satisfactoriamente');
	  $('#image__perfil').attr('src', e.target.result);
	  $("#image").change(function(evt){
	  var image='assets/images/profile_picture.png/'+$(this).val();
	  $('#image__perfil').attr('src', image);
		});
	  }
	});
});

// console.clear();
//Contador de Likes
/*var contador = 0;
$('.tweet__contador').click(function(){
	if (contador < 50 ) {
		contador++;
	} else if (contador = contador++) {
		contador = 0;
	}
	document.getElementById("display__contador").innerHTML = contador;	
})*/

// Modificar color del icono heart
