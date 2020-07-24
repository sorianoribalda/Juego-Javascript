var croupier={
    nombre:'Peter',
    mano:[],
    mezclar:function (a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
},
    repartirJugador:function(){
        //baraja[0];//primera carta
        //baraja[baraja.length-1];//última carta
        jugador.mano[jugador.mano.length]=baraja[0];
       console.log(jugador.mano);
        document.getElementById('jugador').innerHTML="<img class='cartaalta' src='baraja-svg/"+baraja[0].imagen+"'>";

        //elimina carta
        baraja.splice(0,1);
       
    },
     repartirCroupier:function(){
       croupier.mano[croupier.mano.length]=baraja[0];
         console.log(croupier.mano);
         document.getElementById('croupier').innerHTML="<img class='cartaalta' src='baraja-svg/"+baraja[0].imagen+"'>";
        baraja.splice(0,1);
},
    compararCartas: function(){
        if(croupier.mano[0].valor > jugador.mano[0].valor){
    
        //console.log('gana la banca');
        document.getElementById('display').innerHTML='¡La banca gana!';
        }
    
        if(croupier.mano[0].valor<jugador.mano[0].valor){
        //console.log('gana jugador');
        document.getElementById('display').innerHTML='¡Gana jugador!';
        }
    
        if(croupier.mano[0].valor===jugador.mano[0].valor){
        //console.log('empate');
        document.getElementById('display').innerHTML='¡Empate!';
        }
    
}
    
}