// variabili chiamata api
const urlMovie = "https://api.themoviedb.org/3/search/movie?";
const urlSerie = "https://api.themoviedb.org/3/search/tv?";
const apiKey = "api_key=54a6d59873b14d17cd7ea35eed688e38&query=";

var app = new Vue({
  el: "#root",
  data: {
    showIntro: true, //show titolo intro
    urlImg: 'https://image.tmdb.org/t/p/w342', //url fissa immagini
    queryInput: "", //input utente
    libreriaMovie: [], //arrayfilm
    libreriaSerie: [],       //arrayserie
    listaGeneri: []
  },
  // mounted: function() {
  //   axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=54a6d59873b14d17cd7ea35eed688e38")
  //   .then(risposta => {
  //     let genere = risposta.data.genres;
  //     this.listaGeneri = genere;
  //     console.log(this.listaGeneri);
  //   });
  // },
  methods: {
    //chiamata film con input utente
    ricerca: function() {
      axios.get(urlMovie + apiKey + this.queryInput)
      .then(risposta => {
        let movie = risposta.data.results;
        this.libreriaMovie = movie;
      });
      // chiamata serie con input utente
      axios.get(urlSerie + apiKey + this.queryInput)
      .then(result => {
        let serie = result.data.results;
        this.libreriaSerie = serie;

      });
      // mettere titolo intro non visibile
      this.showIntro = false;
      // azzerare barra ricerca
      this.queryInput = "";
    },
  }

});
