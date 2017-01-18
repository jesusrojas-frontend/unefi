$(document).ready(function(){
  var banner = {
    padre: $('#banner'),
    numeroSlides: $('#banner').children('.item').length,
    posicion: 1
  }

  banner.padre.children('.item').first().css({
		'left': 0
	});

  $('#banner-next').on('click',function (e) {
    e.preventDefault();
    siguiente();
  });
  $('#banner-prev').on('click',function (e) {
    e.preventDefault();
    anterior();

  });
  /*setInterval(function () {
    siguiente()
  }, 5000);*/
  function siguiente() {
    if(banner.posicion < banner.numeroSlides){

	 		banner.padre.children().not('.active').css({
	 			'left': '100%'
	 		});
	 		$('#banner .active').removeClass('active').next().addClass('active').animate({
		 		'left': '0'
		 	});
	 		$('#lista_item .active').removeClass('active').next().addClass('active');

	 		$('#banner .active').prev().animate({
	 			'left': '-100%'
	 		});
		 	banner.posicion = banner.posicion + 1;
      console.log("Posicion: "+banner.posicion + " Cantidad: "+banner.numeroSlides);
	 	}else {

      $('#banner .active').animate({
	 			'left': '-100%'
	 		});
	 		banner.padre.children().not('.active').css({
	 			'left': '100%'
	 		});

	 		$('#banner .active').removeClass('active');
	 		banner.padre.children('.item').first().addClass('active').animate({
	 			'left': '0'
	 		});
	 		banner.posicion = 1;
      console.log("Posicion: "+banner.posicion + " Cantidad: "+banner.numeroSlides);
      console.log("Estas otra vez en el principio");
	 	}
  }
  function anterior() {
    if(banner.posicion > 1){

	 		banner.padre.children().not('.active').css({
	 			'left': '-100%'
	 		});

	 		$('#banner .active').removeClass('active').prev().addClass('active').animate({
		 		'left': '0'
		 	});
		 	$('#banner-botones .active').removeClass('active').prev().addClass('active');


	 		$('#banner .active').next().animate({
	 			'left': '100%'
	 		});
	 		banner.posicion = banner.posicion - 1;
      console.log("Posicion: "+banner.posicion + " Cantidad: "+banner.numeroSlides);
	 	}else {

	 		$('#banner .active').animate({
	 			'left': '100%'
	 		});

	 		banner.padre.children().not('.active').css({
	 			'left': '-100%'
	 		});
	 		$('#banner .active').removeClass('active');
	 		banner.padre.children('.item').last().addClass('active').animate({
	 			'left': '0'
	 		});
	 		banner.posicion = banner.numeroSlides;
      console.log("Posicion: "+banner.posicion + " Cantidad: "+banner.numeroSlides);
	 	}
  }
});
