// identificar qndo o usuario utiliza o scrool
// calcular a distancia entre o topo da pagina e o scroll
// calcular a distancia entre o top da pagina e o elemento que deseja animar
// comparar as duas distancias anteriores
// adicionar uma classe com css animation ou transitio ao elemento animado

/*var $target = $('.anime'),
    animationClass = 'anime-start',

function animeScroll() {
     var documentTop = $(document).scrollTop();   
     
     $target.each(function() {
        var itemTop = $(this).offset().top;

        if(documentTop > itemTop) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
     });
}

animeScroll();*/

/*
jQuery(document).ready(function($) {

    var controlNavbar = false;

    $(document).scroll(function(e){

        var scrollTop = $(document).scrollTop();

        if(scrollTop > $('.navbar').height()) {

            if(controlNavbar == false) {
                
                $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
                $('.navbar').hide();
                $('.navbar').fadeIn('slow');
                controlNavbar = true;
            }

        } else {

            if(controlNavbar == true) {
                $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
                controlNavbar = false;
            }

        }

    });

});
/*
