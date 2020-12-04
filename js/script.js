const urlMovie = "https://api.themoviedb.org/3/search/movie?";
const urlSerie = "https://api.themoviedb.org/3/search/tv?";
const apiKey = "api_key=54a6d59873b14d17cd7ea35eed688e38&query=";

var app = new Vue({
  el: "#root",
  data: {
    active: true,
    hide: false,
    showIntro: true,
    posizione: 0,
    urlImg: 'https://image.tmdb.org/t/p/w342',
    queryInput: "",
    libreriaMovie: [],
    libreriaSerie: []
  },
  methods: {
    ricerca: function() {
      // let search = this.queryInput;
      axios.get(urlMovie + apiKey + this.queryInput)
      .then(risposta => {
        var movie = risposta.data.results;
        this.libreriaMovie = movie;
      });

      axios.get(urlSerie + apiKey + this.queryInput)
      .then(result => {
        var serie = result.data.results;
        this.libreriaSerie = serie;

      });
      this.showIntro = false;
      this.queryInput = "";
    },
  }

});
