var cartaMasAlta={
    jugar:function jugar(){
    //desarrollo del juego
        //console.log(baraja);
    croupier.mezclar(baraja);
    //console.log(baraja);
    setTimeout(function(){croupier.repartirJugador()},1000);
//    croupier.repartirJugador();
    //console.log(jugador.mano);
        //console.log(baraja);
        //croupier.repartirCroupier();

    setTimeout(function(){croupier.repartirCroupier()},3000);
    //console.log(croupier.mano);
        //console.log(baraja);
    setTimeout(function(){croupier.compararCartas()},6000);
    }
}
//invocamos al función aquí, lo haremos con un botón o mecanísmo
//jugar();
document.getElementById('cartaalta').onclick= cartaMasAlta.jugar;