let page = 1;
let movies = "";
let lastMovie;

//Create function observer
const LoadImage = (input, observer) => {
    input.forEach(element => {
        if(element.isIntersecting){
            page++;
            LoadMovies();
        }
    });
};

//Create Observer
let observer = new IntersectionObserver(LoadImage, {
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
});

const LoadMovies = async () => {
    try{
        const response = await fetch(`http://api.themoviesb.org/3/movie/popular?api_key=123&language=es&page=`);

        if(response.status == 200){
            const data =await response.json();

            data.results.forEach((movie) => {
                movies += `
                            <div class="pelicula">
                                <img class="poster" src="http://image.com/${movie.poster_path}">
                                <h3 class="titulo">${movie.title}</h3>
                            </div>`;
            });
        }
        document.getElementById("contenedor").innerHTML = movies;

        if(lastMovie){
            observer.unobserve(lastMovie);
        }

        if(page < 1000){
            const moviesScreen = document.querySelectorAll(".contener .pelicula");
            lastMovie = moviesScreen[moviesScreen.length - 1];
            observer.observe(lastMovie);
        }
    }catch{
        console.log("error");
    }
}