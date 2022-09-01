/* Detectar cambio de pestaña */
//visibilitychange: Evento que se ejecuta al cambiar de pestaña
window.addEventListener('visibilitychange', (e) => {
    //visibilityState: Permite saber si nuestra pestaña esta vissible
    const message = (e.target.visibilityState == "visible") ? "show" : "hide";

    console.log(message);
});

//Detected if you have connection
window.addEventListener('online', () => {
    console.log("With Connection");
});

window.addEventListener('offline', () => {
    console.log("Without Connection");
})

//Change events by media
const mediaQuery = matchMedia("{max-width: 480px}");

mediaQuery.addEventListener('change', () => {
    if(mediaQuery.matches){
        console.log("mobile");
        return;
    }
    
    console.log("destok");
})