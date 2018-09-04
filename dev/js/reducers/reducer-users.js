/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function(
  state = { movies: {}, activeMovie: {}, searchMovie: {} },
  action
) {
  switch (action.type) {
    case "GET_MOVIES":
      return Object.assign({}, state, { movies: action.payload });
      break;
    case "GET_MOVIE":
      return Object.assign({}, state, { activeMovie: action.payload });
      break;
    case "SEARCH_MOVIE":
      return Object.assign({}, state, { searchMovie: action.payload });
      break;
  }
  return state;
}

// export default function() {
//   return [
//     {
//       imdb_id: "tt6221620",
//       title: "Martian",
//       year: "2015",
//       rated: "",
//       released: "4 May 2015 (Latvia)",
//       runtime: "7 min",
//       genre: "Animation, Short",
//       director: "Nils Skapans",
//       writers: "Nils Skapans",
//       actors: "",
//       plot:
//         "A boy wins a new toy in a claw machine - an ordinary Martian doll. It turns out that things are not that simple, the boy finds himself on Mars and he has to fight with a whole bunch of the Martians.",
//       country: "Latvia",
//       language: "None",
//       metascore: "0",
//       poster:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NDQyODgyMF5BMl5BanBnXkFtZTgwNTgwODU2MDI@._V1_UY268_CR9,0,182,268_AL_.jpg",
//       rating: "5.0",
//       votes: "5",
//       budget: "€60,000",
//       opening_weekend: "N/A",
//       gross: "N/A",
//       production: "Locomotive Productions",
//       type: "",
//       status: "true"
//     },
//     {
//       imdb_id: "tt6565468",
//       title: "Kin",
//       year: "2017",
//       rated: "",
//       released: "",
//       runtime: "15 min",
//       genre: "Short, Drama",
//       director: "Helena Middleton",
//       writers: "Samuel Bailey",
//       actors: "Sunetra Sarker , Jack Hollington , Joseph Quinn",
//       plot:
//         "KIN - When a young man's application for custody of his younger brother in care is rejected, he is forced to come to terms with difficult truths about what's best for his family.",
//       country: "UK",
//       language: "English",
//       metascore: "0",
//       poster:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BOGVjYTliZmEtNDYyYS00YWJkLWJkODYtYjVjMDM4YzZlMTc2XkEyXkFqcGdeQXVyNTk2MjE5NTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       rating: "0",
//       votes: "0",
//       budget: "N/A",
//       opening_weekend: "N/A",
//       gross: "N/A",
//       production: "Vine Hill Films",
//       type: "",
//       status: "true"
//     },

//     {
//       imdb_id: "tt4560436",
//       title: "Mile 22",
//       year: "2018",
//       rated: "",
//       released: "3 August 2018 (USA)",
//       runtime: "0",
//       genre: "Action, Thriller",
//       director: "Peter Berg",
//       writers: "Lea Carpenter , Graham Roland",
//       actors: "Mark Wahlberg , Lauren Cohan , Ronda Rousey",
//       plot: "",
//       country: "USA",
//       language: "English",
//       metascore: "0",
//       poster:
//         "https://ia.media-imdb.com/images/M/MV5BNzUyODk4OTkxNF5BMl5BanBnXkFtZTgwMzY0MDgzNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//       rating: "0",
//       votes: "0",
//       budget: "N/A",
//       opening_weekend: "N/A",
//       gross: "N/A",
//       production: "STX Entertainment, Closest to the Hole Productions, Film 44",
//       type: "movie",
//       status: "true"
//     },
//     {
//       imdb_id: "tt4912910",
//       title: "Mission: Impossible - Fallout",
//       year: "2018",
//       rated: "",
//       released: "27 July 2018 (USA)",
//       runtime: "0",
//       genre: "Action, Adventure, Thriller",
//       director: "Christopher McQuarrie",
//       writers: "Bruce Geller  (television series), Christopher McQuarrie",
//       actors: "Rebecca Ferguson , Vanessa Kirby , Tom Cruise",
//       plot:
//         "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
//       country: "USA",
//       language: "English",
//       metascore: "0",
//       poster:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BZGVmMTRlMTctY2JhNS00Y2Q4LWIxNjItYWYyODg5NTNiZjIxXkEyXkFqcGdeQXVyNDcxNzU3MTE@._V1_UY268_CR16,0,182,268_AL_.jpg",
//       rating: "0",
//       votes: "0",
//       budget: "N/A",
//       opening_weekend: "N/A",
//       gross: "N/A",
//       production: "Bad Robot, Paramount Pictures, Skydance Media",
//       type: "movie",
//       status: "true"
//     },
//     {
//       imdb_id: "tt5821564",
//       title: "The Nun",
//       year: "2018",
//       rated: "",
//       released: "13 July 2018 (USA)",
//       runtime: "0",
//       genre: "Horror, Mystery, Thriller",
//       director: "Corin Hardy",
//       writers: "Gary Dauberman  (screenplay), Gary Dauberman  (story by)",
//       actors: "Taissa Farmiga , Bonnie Aarons , Charlotte Hope",
//       plot:
//         "A priest named Father Burke is sent to Rome to investigate the mysterious death of a nun.",
//       country: "USA",
//       language: "English",
//       metascore: "0",
//       poster:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BYmI5ZTdiMmUtNjg3Ny00ZjVlLTlkNzAtZTRlZTRjZWExNjk4XkEyXkFqcGdeQXVyNjc2Njk1NTg@._V1_UY268_CR41,0,182,268_AL_.jpg",
//       rating: "0",
//       votes: "0",
//       budget: "N/A",
//       opening_weekend: "N/A",
//       gross: "N/A",
//       production: "Atomic Monster, New Line Cinema, Safran Company, The",
//       type: "movie",
//       status: "true"
//     },
//     {
//       imdb_id: "tt5973666",
//       title: "The Apparition",
//       year: "2014",
//       rated: "",
//       released: "May 2014 (USA)",
//       runtime: "4 min",
//       genre: "Short, Crime, Horror",
//       director: "Dillon Hoover",
//       writers: "",
//       actors: "Casey Nicholas-Price , Jay Rock , Roman Sevier",
//       plot:
//         "A young man finds an old camera and a series of unexpected events develop.",
//       country: "USA",
//       language: "English",
//       metascore: "0",
//       poster:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BYjYyNTRlY2YtYTgwMC00MTcyLThlNjQtYzc3ZWVhYjI1OGQ2XkEyXkFqcGdeQXVyNTgzMzk4NDQ@._V1_UY268_CR87,0,182,268_AL_.jpg",
//       rating: "0",
//       votes: "0",
//       budget: "N/A",
//       opening_weekend: "N/A",
//       gross: "N/A",
//       production: "SDSU Productions",
//       type: "",
//       status: "true"
//     }
//   ];
// }
