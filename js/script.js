//key API: https://api.themoviedb.org/3/movie/550?api_key=54a6d59873b14d17cd7ea35eed688e38

var app = new Vue({
  el: "#root",
  data: {
    // apiKey: "54a6d59873b14d17cd7ea35eed688e38",
    queryInput: "",
    libreria: []
  },
  methods: {
    ricerca: function() {
      // let search = this.queryInput;
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=54a6d59873b14d17cd7ea35eed688e38&query=" + this.queryInput)
      .then(risposta => {
        let movie = risposta.data.results;
        console.log(movie);
        this.libreria = movie;
        // console.log(this.libreria);

      });
    }
  }

});
