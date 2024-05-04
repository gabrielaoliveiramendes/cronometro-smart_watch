const elementosExercicio = document.querySelectorAll('.exercicio');

const elementoTela = document.querySelector('.tela');

const elementoVoltar = document.querySelector('.voltar');

const elementoClose = document.querySelector('.close');
const elementoPlay = document.querySelector('.play');
const elementoPause = document.querySelector('.pause');
const elementoCronometro = document.querySelector('.cronometro');

const elementoHorario = document.querySelector('.horas');

var timer = 0;
var idIntervalo;

const elementoMinuto = document.querySelector('.minuto');
const elementoSegundo = document.querySelector('.segundo');
const elementoCentesimo = document.querySelector('.centesimo');

elementosExercicio.forEach(
    function (elementoExercicio) {
        elementoExercicio.addEventListener("click", 
            function() {
            elementoTela.classList.add("tela--cronometro");
            }
        );
    }
);

elementoVoltar.addEventListener("click", 
    function() {
        elementoTela.classList.remove("tela--cronometro");
        clicouClose();
    });

function clicouClose () {
    elementoCronometro.classList.remove("iniciou");
    clearInterval(idIntervalo);
    timer = 0;
    atualizarCronometro();
}

elementoClose.addEventListener("click", 
    function() {
        clicouClose();
    });

function clicouPlay() {
    elementoCronometro.classList.add("iniciou");
    rodarTimer();
}

elementoPlay.addEventListener("click", 
    function() {
        clicouPlay();
    });

function clicouPause () {
    elementoCronometro.classList.remove("iniciou");
    clearInterval(idIntervalo)
}

elementoPause.addEventListener("click", 
    function() {
        clicouPause();
    });

function atualizarHorario() {
    const horas = new Date().getHours().toString().padStart(2,"0");
    const minutos = new Date().getMinutes().toString().padStart(2,"0");
    const horario = horas + ':' + minutos;

    elementoHorario.innerText = horario;
}

atualizarHorario();

setInterval(() => {
    atualizarHorario();
}, 1000);

function rodarTimer() {
    idIntervalo = setInterval(() => {
        timer = timer + 10;
        atualizarCronometro();
    }, 10);
}

function atualizarCronometro() {
    const minutos = Math.floor(timer / 60000).toString().padStart(2,"0")

    const segundos = Math.floor((timer % 60000) / 1000).toString().padStart(2,"0")

    const centesimos = Math.floor(((timer % 60000) % 1000) / 10).toString().padStart(2,"0")

    const tempoCronometro = minutos + ":" + segundos + "," + centesimos

    elementoMinuto.innerText = minutos;
    elementoSegundo.innerText = segundos;
    elementoCentesimo.innerText = centesimos;
}