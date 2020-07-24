var mostrarBaraja={
    mostrar:function(){
    //bucle sobre la baraja
    for(var i=0; i <baraja.length;i++){
         
            document.getElementById('mostrarBaraja').innerHTML+=
            `<img class='cartalista' src='baraja-svg/${baraja[i].imagen}'>`
    
        }
    }
}
document.getElementById('mostrarBaraja').onclick= mostrarBaraja.mostrar;