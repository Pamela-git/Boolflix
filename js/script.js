//key API: https://api.themoviedb.org/3/movie/550?api_key=54a6d59873b14d17cd7ea35eed688e38

var app = new Vue({
  el: "#root",
  data: {
    active: true,
    hide: false,
    showIntro: true,
    posizione: 0,
    queryInput: "",
    libreriaMovie: [],
    libreriaSerie: [],
  },
  methods: {
    ricerca: function() {
      // let search = this.queryInput;
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=54a6d59873b14d17cd7ea35eed688e38&query=" + this.queryInput)
      .then(risposta => {
        var movie = risposta.data.results;
        // console.log(this.libreria);
        this.libreriaMovie = movie;
        this.showIntro = false;

      });

      axios.get("https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=" + this.queryInput)
      .then(result => {
        var serie = result.data.results;
        // console.log(this.libreria);
        this.libreriaSerie = serie;
      });

      this.queryInput = "";
    },
  }

});
