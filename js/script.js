var owl = $('.owl-carousel.carousel1');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000
});

var owl = $('.owl-carousel.carousel2');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:5000
});

var owl = $('.owl-carousel.carousel3');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000
});



// const counter = 
// $(function(){
//     const tempo_intervalo = 4; //ms -> define a velocidade da animação
//     const tempo = 2000; //ms -> define o tempo total da animaçao

//     $('.counter-up').each(function() {  
//     let count_to = parseInt($(this).data('countTo'));
//     let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
//     let incremento = count_to / intervalos; //quanto cada contador deve aumentar
//     let valor = 0;
//     let el = $(this);
    
//     let timer = setInterval(function() {
//         if (valor >= count_to){ //se já contou tudo tem de parar o timer
//         valor = count_to;
//         clearInterval(timer);
//         }
        
//         let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
//         el.text(texto);
//         valor += incremento;      
//     }, tempo_intervalo);
//     });
// });

// Seleciona o elemento que contém os contadores
var elem = $('.row.number.wow.animate__animated.animate__fadeInUp');

// Função auxiliar que verifica se o scroll esta sob o elemento
function isScrolledIntoView(elem)
{
    console.log('elem: ', elem);
    var docViewTop = $(window).scrollTop();
    console.log('docViewTop: ', docViewTop);
    var docViewBottom = docViewTop + $(window).height();
    console.log('docViewBottom: ', docViewBottom);

    var elemTop = $(elem).offset().top;
    console.log('elemTop: ', elemTop);
    var elemBottom = elemTop + $(elem).height();
    console.log('elemBottom: ', elemBottom);
    console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Variavel auxiliar par previnir varias execuções
var executed = false; 

$(window).on('scroll', function() {
    if(isScrolledIntoView(elem)) {
        
        console.log('Achou elemento');
        
        if(!executed) {
            console.log('Executou');

            // Marca como executado
            executed = true;
            $(function(){
                // Código sendo executado
                console.log('esta executando');
                const tempo_intervalo = 4; //ms -> define a velocidade da animação
                const tempo = 2000; //ms -> define o tempo total da animaçao

                $('.counter-up').each(function() {  
                    let count_to = parseInt($(this).data('count-to'));
                    let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
                    let incremento = count_to / intervalos; //quanto cada contador deve aumentar
                    let valor = 0;
                    let el = $(this);

                    let timer = setInterval(function() {
                    if (valor >= count_to){ //se já contou tudo tem de parar o timer
                    valor = count_to;
                    clearInterval(timer);
                    }

                    let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                    el.text(texto);
                    valor += incremento;      
                    }, tempo_intervalo);
                });
            });  
        }         
    }

}); 

 


    $(window).on("scroll", function(){
        if($(window).scrollTop() > 10) {
            $('#contf').addClass("newstyle");
            $('.nav-item').addClass("lia");
            $('#btn').addClass("btnew");
            $('#btn').addClass("btnew:hover");
        } else {
            $('#contf').removeClass("newstyle");
            $('.nav-item').removeClass("lia");
            $('#btn').removeClass("btnew");
            $('#btn').removeClass("btnew:hover");
        }
    });

