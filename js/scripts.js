//boton de exit hamburguesa
$('#btn-ex').css("display", "none");

//iframe spotify
$('.culturaPresente').hide();
//boton de exit discos
$('#exDisc').hide();

eventListener();
/*Llamados */
function eventListener() {
    const btn_movil = document.querySelector('#btn-hambur').addEventListener('click', desplegarBoton);
    const btn_exit = document.querySelector('#btn-ex').addEventListener('click', quitarBoton);

    const reprod_cult = document.querySelector('#reprodCulturaPresente').addEventListener('click', reproducirCult);
    const cerrar_discos = document.querySelector('#exDisc').addEventListener('click', cerrarDiscos);
    const cult_presente = document.querySelector('.cult_present').addEventListener('click', cambiarFondo);


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
function reproducirCult() {
    $('#reprodCulturaPresente').hide();
    $('.culturaPresente').fadeIn();
    $('#exDisc').show();
}
//Cerrar discos
function cerrarDiscos() {
    $('#reprodCulturaPresente').show();
    $('.culturaPresente').fadeOut();
    $('#exDisc').hide();
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
function cambiarFondo() {
    $('#body-class').css({
        "background-color": 'rgb(238, 255, 83)'
    });
}