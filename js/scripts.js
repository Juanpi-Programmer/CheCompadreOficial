//boton de exit hamburguesa
$('#btn-ex').css("display", "none");

//iframe spotify
$('.culturaPresente').hide();
$('.fuerteImpacto').hide();
//boton de exit discos
$('#exDisc').hide();
$('#exDiscFuerte').hide();

eventListener();
/*Llamados */
function eventListener() {
    const btn_movil = document.querySelector('#btn-hambur').addEventListener('click', desplegarBoton);
    const btn_exit = document.querySelector('#btn-ex').addEventListener('click', quitarBoton);

    const reprod_cult = document.querySelector('#reprodCulturaPresente').addEventListener('click', reproducirCult);
    const reprod_fuert = document.querySelector('#reprodFuerteImpacto').addEventListener('click', reproducirFuerteImpacto);
    const cerrar_cult = document.querySelector('#exDisc').addEventListener('click', cerrarDiscos);
    const cerrar_fuert = document.querySelector('#exDiscFuerte').addEventListener('click', cerrarDiscosFuerteImpacto);
    
    const cult_presente = document.querySelector('.cult_present').addEventListener('click', cambiarFondo);
    const fuert_impact = document.querySelector('.fuert_impact').addEventListener('click', cambiarFondoFuerte);


    animacionWOW();
    fechaFooter();
    scrollNav();
}

/*MENU DESPLEGABLE*/
function desplegarBoton(e) {
    e.preventDefault();
    $('.conte-movil').show("slow");
    $('#btn-hambur').css("display", "none");
    $('#btn-ex').css("display", "block");
}

function quitarBoton(e) {
    e.preventDefault();
    $('.conte-movil').hide("slow");
    $('#btn-hambur').css("display", "block");
    $('#btn-ex').css("display", "none");
}

//Reproducir
function reproducirCult(e) {
    e.preventDefault();
    $('#reprodCulturaPresente').hide();
    $('.culturaPresente').fadeIn();
    $('#exDisc').show();
}
function reproducirFuerteImpacto(e) {
    e.preventDefault();
    $('#reprodFuerteImpacto').hide();
    $('.fuerteImpacto').fadeIn();
    $('#exDiscFuerte').show();
}
//Cerrar discos
function cerrarDiscos(e) {
    e.preventDefault();
    $('#reprodCulturaPresente').show();
    $('.culturaPresente').fadeOut();
    $('#exDisc').hide();
}
function cerrarDiscosFuerteImpacto(e) {
    e.preventDefault();
    $('#reprodFuerteImpacto').show();
    $('.fuerteImpacto').fadeOut();
    $('#exDiscFuerte').hide();
}

//Animacion WOW
function animacionWOW() {
    $('.title').addClass('wow animated bounceInRight');
    $('.vide').addClass('wow animated pulse');
}

//Capturar año para footer
function fechaFooter() {
    const fecha = new Date();
    let ano = fecha.getFullYear();
    $('#fecha').text(ano);
}

//Scroll NAV 
function scrollNav() {
    let animate = true;
    let nav = document.querySelector('.nav-principal');
    window.addEventListener("scroll", movePage);

    function movePage() {
        if (this.pageYOffset > 100) {
            if (animate) {
                nav.classList.add('alternativo-nav');
                animate = false;
            }
        } else {
            nav.classList.remove('alternativo-nav');
            animate = true;
        }
    }
}

//Cambiar Fondo
function cambiarFondo(e) {
    e.preventDefault();
    $('body').css({
        'background-image': 'url(./img/fondoCultura.jpg)'
    });
}

function cambiarFondoFuerte(e) {
    e.preventDefault();
    $('body').css({
        'background-image': 'url(./img/fondoFuerte.jpg)'
    });
}
