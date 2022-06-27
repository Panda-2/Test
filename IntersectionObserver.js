//Elemento que sera observado
const img = document.getElementById("imagen1");

//Función que se ejecutara dependiendo del elemento
const LoadImage = (input, observer) => {
    input.forEach(element => {
        if(element.isIntersecting){
            console.log("Image in viewPort");
        }
    });
};

//Objeto que permite ejecutar una función segun el scroll, Argumentos(function, object)
const observer = new IntersectionObserver(LoadImage, {
    root: null, //Objeto
    rootMargin: '0px 0px 0px 0px', //Margen segun pantalla o viewport
    threshold: 1.0 //en que momento se ejecutara, 1.0(cuando carga la imagen completa), 0.5
});

observer.observe(Image); //Quien sera observado