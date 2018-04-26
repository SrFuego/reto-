$(document).ready(function(){

    $(".fancybox").fancybox();

});

$(document).on("click", ".alert", function(e) {
    bootbox.alert("Hello world!", function() {
        console.log("Alert Callback");
    });
});

$(document).ready(function(){

    $(".btn-send").click(function(){
        var hj = $('input[]').val();
        alert(hj);
    });

});

/* MenÃº Responsive */
$(document).ready(function(){
    //MENU
    $('#btn-open-menu').on('click',function(){
        $('.menu-rp').css('width','100%');
        $('.menu-rp').css('height','100%');
        $('.menu-rp').css('overflow','visible');
    });
    $('#btn-close-menu').on('click',function(){
        $('.menu-rp').css('width','0%');
        $('.menu-rp').css('height','0%');
        $('.menu-rp').css('overflow','hidden');
    });

    $(".fancybox").fancybox();

});

$(document).on("scroll", function(){

    //sacamos el desplazamiento actual de la pÃ¡gina
    var desplazamientoActual = $(document).scrollTop();

    //compruebo si debo mostrar el botÃ³n
    if(desplazamientoActual > 10){
        $('.h-back1').css('background-color','#0047bbd1');
        $('.sec-logo').css('width','30%');

        $('.sec-menu').css('width','70%');

        $('.logo-menu').css('width','145px');


    }

    if(desplazamientoActual < 10){
        $('.h-back1').css('background-color','#0047bbd1');
        $('.sec-logo').css('width','');

        $('.sec-menu').css('width','');
        $('.logo-menu').css('width','');
    }

});

/* Efecto de Header */

$(document).ready(function(){
    $('.h-header-oculto').hide();
    $('.h-header').show();

    $(document).on('scroll',function(){
        var medida = $(document).scrollTop();
        if(medida < 50){
            $('.h-header-oculto').hide();
            $('.h-header').show("slow");
        }
        if(medida > 50){
            $('.h-header-oculto').show("slow");
            $('.h-header').hide();
        }
    });
});

/* Otros efectos con scroll y animate */

$(document).ready(function(){
    $(document).on('scroll',function(){
        // $('#ini-sect1-servicios').css('opacity','0');
        // $('#ini-sect2-servicios').css('opacity','0');
        var medida1 = $(document).scrollTop();
        if ($(window).width()>=767) {
            if(medida1 > 20){
                // $('#ini-sect1-servicios').css('opacity','1');
                // $('#ini-sect1-servicios').addClass("animacionDer");
                $('#ini-img-redondo1').addClass("animacionImg");
                $('#ini-servicios-txt1').addClass("animaciontxt");

            }
            if(medida1 > 20){
                // $('#ini-sect2-servicios').css('opacity','1');
                // $('#ini-sect2-servicios').addClass("animacionIzq");
                $('#ini-img-redondo2').addClass("animacionImg");
                $('#ini-servicios-txt2').addClass("animaciontxt");
            }
            if(medida1 > 1000) {
                $('#ini-servicio1').addClass("animacion-servicio1");
                $('#ini-servicio2').addClass("animacion-servicio2");
                $('#ini-servicio3').addClass("animacion-servicio3");
                $('#ini-servicio1').addClass("scale1");
                $('#ini-servicio2').addClass("scale2");
                $('#ini-servicio3').addClass("scale3");
            }
        }

        if ($(window).width()>=992) {
            if(medida1 > 20){
                // $('#ini-sect1-servicios').css('opacity','1');
                // $('#ini-sect1-servicios').addClass("animacionDer");
                $('#ini-img-redondo1').addClass("animacionImg");
                $('#ini-servicios-txt1').addClass("animaciontxt");

            }
            if(medida1 > 550){
                // $('#ini-sect2-servicios').css('opacity','1');
                // $('#ini-sect2-servicios').addClass("animacionIzq");
                $('#ini-img-redondo2').addClass("animacionImg");
                $('#ini-servicios-txt2').addClass("animaciontxt");
            }
            if(medida1 > 1000) {
                $('#ini-servicio1').addClass("animacion-servicio1");
                $('#ini-servicio2').addClass("animacion-servicio2");
                $('#ini-servicio3').addClass("animacion-servicio3");
                $('#ini-servicio1').addClass("scale1");
                $('#ini-servicio2').addClass("scale2");
                $('#ini-servicio3').addClass("scale3");
            }
        }





        // if ($(window).width()>=767) {
        //      if(medida1 > 50){
        //       $('#ini-sect1-servicios').addClass("animated bounceInRight");
        //       $('#ini-img-redondo1').addClass("animated zoomIn");

        //     }
        //     if(medida1 > 650){
        //       $('#ini-sect2-servicios').addClass("animated bounceInLeft");
        //       $('#ini-img-redondo2').addClass("animated zoomIn");
        //     }
        // }

        // if ($(window).width()>=992) {
        //       if(medida1 > 10){
        //       $('#ini-sect1-servicios').addClass("animated bounceInRight");
        //       $('#ini-img-redondo1').addClass("animated zoomIn");

        //     }
        //     if(medida1 > 400){
        //       $('#ini-sect2-servicios').addClass("animated bounceInLeft");
        //       $('#ini-img-redondo2').addClass("animated zoomIn");
        //     }
        // }

        // if ($(window).width()>=1200) {
        //     if(medida1 > 150){;
        //       $('#ini-sect1-servicios').addClass("animated bounceInRight");
        //       $('#ini-img-redondo1').addClass("animated zoomIn");

        //     }
        //     if(medida1 > 650){
        //       $('#ini-sect2-servicios').addClass("animated bounceInLeft");
        //       $('#ini-img-redondo2').addClass("animated zoomIn");
        //     }
        // }

    });
});


// CÃ³digo de Renxo:

// $(document).ready(function(){
//    $(document).on('scroll',function(){
//      var medida = $(document).scrollTop();
//      if(medida>10){
//          $('.h-back').css('border-bottom','1px solid #979797');
//          $('.h-back').css('border-bottom','1px solid #979797');
//          if (  $(window).width()>=767) {
//                $('.login-s1').css('padding-top','37px');
//                $('#imagenlogo').css('width','75%');
//                $('.redes-s1').css('margin-top','31px');
//                $('.links-ini-s1').css('margin-top','4px');
//          }
//          if (  $(window).width()>=992) {
//                  $('.login-s1').css('padding-top','33px');
//                  $('#imagenlogo').css('width','116%');
//                  $('.redes-s1').css('margin-top','29px');
//            }
//            if (  $(window).width()>=1200) {
//                    $('.login-s1').css('padding-top','40px');
//                    $('.redes-s1').css('margin-top','31px');
//              }
//      }
//      else{
//            $('.h-back').css('border-bottom','0px solid #979797');
//            $('.h-back').css('transition','all 0.1s');
//            if (  $(window).width()>=767 && medida<10) {
//                  $('.login-s1').css('padding-top','54px');
//                  $('#imagenlogo').css('width','90%');
//                  $('.redes-s1').css('margin-top','50px');
//            }
//            if (  $(window).width()>=992 && medida<10 ) {
//                  $('.login-s1').css('padding-top','54px');
//                  $('#imagenlogo').css('width','160%');
//                  $('.redes-s1').css('margin-top','60px');
//            }   if (  $(window).width()>=1200) {
//                  $('.logo-s1').css('width','20%');
//                  $('.login-s1').css('margin-left','244px');
//                  $('.redes-s1').css('margin-top','47px');

//            }

//      }

//    });
// });


// Hover de Redes Sociales:
$(function(){
    $( ".h-redesSoc-img1" ).hover(
        function() {
            // alert('hola1');
            $( ".h-redesSoc-img1" ).attr( "src","app/img/cambios/1.png" );
        }, function() {
            $( ".h-redesSoc-img1" ).attr( "src","app/img/cambios/icono1.png" );
            // alert('hola2');
        }
    );
    $( ".h-redesSoc-img2" ).hover(
        function() {
            // alert('hola1');
            $( ".h-redesSoc-img2" ).attr( "src","app/img/cambios/2.png" );
        }, function() {
            $( ".h-redesSoc-img2" ).attr( "src","app/img/cambios/icono2.png" );
            // alert('hola2');
        }
    );
    $( ".h-redesSoc-img3" ).hover(
        function() {
            // alert('hola1');
            $( ".h-redesSoc-img3" ).attr( "src","app/img/cambios/3.png" );
        }, function() {
            $( ".h-redesSoc-img3" ).attr( "src","app/img/cambios/icono3.png" );
            // alert('hola2');
        }
    );

});


// Servicios:

$(document).ready(function(){
    // $('#ser-backg-txt3').remove('animated bounceInUp');
    $('#ser-backg-txt31').hide();
    $('#ser-backg-txt32').hide();
    $('#ser-backg-txt33').hide();
    $('#ser-backg-txt34').hide();

    $( "#ser-backg31" ).click(function() {
        // alert('hola');
        // $('#ser-backg-txt31').show();
        // $('.animated.bounceInUp').remove();
        // $('#ser-backg-txt31').addClass('animated bounceInUp');
        $("#ser-backg-txt31").toggle();

        $('#ser-backg-txt32').hide();
        $('#ser-backg-txt33').hide();
        $('#ser-backg-txt34').hide();
        // $('#ser-backg-txt32').remove('animated bounceInUp');
        // $('#ser-backg-txt33').remove('animated bounceInUp');
        // $('#ser-backg-txt34').remove('animated bounceInUp');
        // $('ser-backg-txt3').addClass('bounceInUp');
    });



    $( "#ser-backg32" ).click(function() {
        // alert('hola');
        // $('#ser-backg-txt32').show();
        // $('.animated.bounceInUp').remove();
        // $('#ser-backg-txt32').addClass('animated bounceInUp');
        $("#ser-backg-txt32").toggle();
        $('#ser-backg-txt31').hide();

        $('#ser-backg-txt33').hide();
        $('#ser-backg-txt34').hide();
        // $('#ser-backg-txt31').addClass('animated bounceOutUp');
        // $('#ser-backg-txt33').addClass('animated bounceOutUp');
        // $('#ser-backg-txt34').addClass('animated bounceOutUp');
        // $('ser-backg-txt3').addClass('bounceInUp');
    });




    $( "#ser-backg33" ).click(function() {
        // alert('hola');
        // $('#ser-backg-txt33').show();
        // $('.animated.bounceInUp').remove();
        // $('#ser-backg-txt33').addClass('animated bounceInUp');
        $("#ser-backg-txt33").toggle();
        $('#ser-backg-txt31').hide();
        $('#ser-backg-txt32').hide();

        $('#ser-backg-txt34').hide();
        // $('#ser-backg-txt32').addClass('animated bounceOutUp');
        // $('#ser-backg-txt31').addClass('animated bounceOutUp');
        // $('#ser-backg-txt34').addClass('animated bounceOutUp');
        // $('ser-backg-txt3').addClass('bounceInUp');
    });



    $( "#ser-backg34" ).click(function() {
        // alert('hola');
        // $('#ser-backg-txt34').show();
        // $('.animated.bounceInUp').remove();
        // $('#ser-backg-txt34').addClass('animated bounceInUp');
        $("#ser-backg-txt34").toggle();
        $('#ser-backg-txt31').hide();
        $('#ser-backg-txt32').hide();
        $('#ser-backg-txt33').hide();

        // $('#ser-backg-txt32').addClass('animated bounceOutUp');
        // $('#ser-backg-txt33').addClass('animated bounceOutUp');
        // $('#ser-backg-txt31').addClass('animated bounceOutUp');
        // $('ser-backg-txt3').addClass('bounceInUp');
    });


});







$(document).ready(function(){
    var pathname = window.location.pathname;

    if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

        $('#activeInicio').css('color','#428bca');
    }
    if (pathname=='/xampp/HDC/signovaMod/signova/nosotros.php') {

        $('#activeNosotros').css('color','#428bca');
    }
    if (pathname=='/xampp/HDC/signovaMod/signova/servicios.php') {

        $('#activeServicios').css('color','#428bca');
    }
    // if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

    //    $('#activoinicio').css('color','#003786');
    // }
    // if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

    //    $('#activoinicio').css('color','#003786');
    // }


// MENU2:
    if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

        $('#activeInicio2').css('color','#428bca');
    }
    if (pathname=='/xampp/HDC/signovaMod/signova/nosotros.php') {

        $('#activeNosotros2').css('color','#428bca');
    }
    if (pathname=='/xampp/HDC/signovaMod/signova/servicios.php') {

        $('#activeServicios2').css('color','#428bca');
    }
    // if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

    //    $('#activoinicio').css('color','#003786');
    // }
    // if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

    //    $('#activoinicio').css('color','#003786');
    // }



// Mobile:
    if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

        $('#activeInicioM').css('border-bottom','solid 2px white');
    }
    if (pathname=='/xampp/HDC/signovaMod/signova/nosotros.php') {

        $('#activeNosotrosM').css('border-bottom','solid 2px white');
    }
    if (pathname=='/xampp/HDC/signovaMod/signova/servicios.php') {

        $('#activeServiciosM').css('border-bottom','solid 2px white');
    }
    // if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

    //    $('#activoinicio').css('color','#003786');
    // }
    // if (pathname=='/xampp/HDC/signovaMod/signova/index.php') {

    //    $('#activoinicio').css('color','#003786');
    // }
});

$(document).ready(function(){
    $('.sliderclientes').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay:3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$(document).ready(function(){
    $('#activeNosotros').on('click',function(){
        var posicion_boton = $(".nos-sect2").offset().top;
        posicion_boton = posicion_boton - 70;
        var lugar= posicion_boton;

        //hacemos scroll hasta el botÃ³n
        $("html, body").animate({scrollTop:posicion_boton+"px"});
    });
    $('#activeServicios').on('click',function(){
        var posicion_boton = $(".ser-sect3").offset().top;
        posicion_boton = posicion_boton - 90;
        var lugar= posicion_boton;

        //hacemos scroll hasta el botÃ³n
        $("html, body").animate({scrollTop:posicion_boton+"px"});
    });
    $('#activeContactenos').on('click',function(){
        var posicion_boton = $(".pad1-contactenos").offset().top;
        posicion_boton = posicion_boton - 90;
        var lugar= posicion_boton;

        //hacemos scroll hasta el botÃ³n
        $("html, body").animate({scrollTop:posicion_boton+"px"});
    });
});
