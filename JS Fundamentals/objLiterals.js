const movie1 = {
  title: "The Avengers",
  year: 2012,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },
  getDetails() {
    console.log(`
      Title: ${this.title}
      Year: ${this.year}
      Genere: ${this.genre}
      Cast: ${this.cast} 
    `);
  },
};

// console.log(movie.title);
movie1.getDetails();

// const detail = "year";

// movie.getMovieDetails(detail);

// console.log(movie.cast.main_lead);

const movie2 = {
  title: "Movie2",
  year: 2018,
  genre: "Action, Sci-Fi, Thriller",
  cast: {
    main_lead: "Robert Downey Jr.",
    others: "Chris Evans",
  },

  getDetails() {
    console.log(`
        Title: ${this.title}
        Year: ${this.year}
        Genere: ${this.genre}
        Cast: ${this.cast} 
      `);
  },
};

movie2.getDetails();
