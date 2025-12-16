// src/data/movies.js
 const movies = [
  // 🎬 ACTION (10)
  {
    id: 1,
    title: "The Dark Knight",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "EXeTwQWrcwY",
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    trailer: "hEJnMQG9ev8",
  },
  {
    id: 3,
    title: "Gladiator",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    trailer: "owK1qxDselE",
  },
  {
    id: 4,
    title: "John Wick",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    trailer: "2AUmvWm5ZDQ",
  },
  {
    id: 5,
    title: "Mission: Impossible - Fallout",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    trailer: "wb49-oV0F78",
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "TcMBFSGVi1c",
  },
  {
    id: 7,
    title: "Die Hard",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    trailer: "2TQ-pOvI6Xo",
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    trailer: "giXco2jaZ_4",
  },
  {
    id: 9,
    title: "Black Panther",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "xjDjIWPwcPU",
  },
  {
    id: 10,
    title: "The Equalizer",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
    trailer: "VjctHUEmutw",
  },

  // 🎭 DRAMA (10)
  {
    id: 11,
    title: "Forrest Gump",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    trailer: "bLvqoHBptjg",
  },
  {
    id: 12,
    title: "The Shawshank Redemption",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    trailer: "PLl99DlL6b4",
  },
  {
    id: 13,
    title: "The Godfather",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    trailer: "sY1S34973zA",
  },
  {
    id: 14,
    title: "Fight Club",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    trailer: "qtRKdVHc-cE",
  },
  {
    id: 15,
    title: "The Green Mile",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    trailer: "Ki4haFrqSrw",
  },
  {
    id: 16,
    title: "Whiplash",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg",
    trailer: "7d_jQycdQGo",
  },
  {
    id: 17,
    title: "Parasite",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    trailer: "5xH0HfJHsaY",
  },
  {
    id: 18,
    title: "The Pursuit of Happyness",
    genre: "Drama",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f6l9rghSHORkWLurUGJhaKAiyjY.jpg",
    trailer: "DMOBlEcRuw8",
  },
  {
    id: 19,
    title: "A Beautiful Mind",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
    trailer: "aS_d0Ayjw4o",
  },
  {
    id: 20,
    title: "12 Angry Men",
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
    trailer: "TEN-2uTi2c0",
  },

  // 😱 HORROR (10)
  {
    id: 21,
    title: "Get Out",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    trailer: "DzfpyUB60YY",
  },
  {
    id: 22,
    title: "The Conjuring",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    trailer: "k10ETZ41q5o",
  },
  {
    id: 23,
    title: "A Quiet Place",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    trailer: "WR7cc5t7tv8",
  },
  {
    id: 24,
    title: "It",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    trailer: "FnCdOQsX5kc",
  },
  {
    id: 25,
    title: "The Exorcist",
    genre: "Horror",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5x0CeVHJI8tcDx8tUUwYHQSNILq.jpg",
    trailer: "YDGw1MTEe9k",
  },
  {
    id: 26,
    title: "Hereditary",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
    trailer: "V6wWKNij_1M",
  },
  {
    id: 27,
    title: "Scream",
    genre: "Horror",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ssnWDQ03c3FsWoIgCVlS9u17Fku.jpg",
    trailer: "AWm_mkbdpCA",
  },
  {
    id: 28,
    title: "The Nun",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    trailer: "pzD9zGcUNrw",
  },
  {
    id: 29,
    title: "Us",
    genre: "Horror",
    poster: "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
    trailer: "hNCmb-4oXJA",
  },
  {
    id: 30,
    title: "The Ring",
    genre: "Horror",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gghD2ZIPjMzLnnBuT3AZQGYnIW9.jpg",
    trailer: "yzR2GY-ew8I",
  },

  // 😂 COMEDY (10)
  {
    id: 31,
    title: "Superbad",
    genre: "Comedy",
    poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    trailer: "4eaZ_48ZYog",
  },
  {
  id: 32,
  title: "Deadpool",
  genre: "Comedy",
  poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
  trailer: "ONHBaC-pfsk"
},
  {
    id: 33,
    title: "21 Jump Street",
    genre: "Comedy",
    poster: "https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    trailer: "RLoKtb4c4W0",
  },
  {
    id: 34,
    title: "The Other Guys",
    genre: "Comedy",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wNEHNqo3MgHmj3BUiPSqqq5czcm.jpg",
    trailer: "D6WOoUG1eNo",
  },
  {
    id: 35,
    title: "Dumb and Dumber",
    genre: "Comedy",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4LdpBXiCyGKkR8FGHgjKlphrfUc.jpg",
    trailer: "l13yPhimE3o",
  },
  {
    id: 36,
    title: "Step Brothers",
    genre: "Comedy",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tY2FpgzPVx92JrYveWt4bn3cMyD.jpg",
    trailer: "Qir2ZsJrLkk",
  },
  {
    id: 37,
    title: "Tropic Thunder",
    genre: "Comedy",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg",
    trailer: "T-6YhRZowgc",
  },
  {
    id: 38,
    title: "The Intern",
    genre: "Comedy",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u7o3TwUgukRzTIyPwdMVdqmMRMD.jpg",
    trailer: "ZU3Xban0Y6A",
  },
  {
    id: 39,
    title: "Crazy Rich Asians",
    genre: "Comedy",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    trailer: "ZQ-YX-5bAs0",
  },
  {
    id: 40,
    title: "Home Alone",
    genre: "Comedy",
    poster: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    trailer: "jEDaVHmw7r4",
  },

  // ❤️ ROMANCE (10)
  {
    id: 41,
    title: "Titanic",
    genre: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    trailer: "2e-eXJ6HgkQ",
  },
  {
    id: 42,
    title: "The Notebook",
    genre: "Romance",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    trailer: "FC6biTjEyZw",
  },
  {
    id: 43,
    title: "La La Land",
    genre: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    trailer: "0pdqf4P9MB8",
  },
  {
    id: 44,
    title: "Pride & Prejudice",
    genre: "Romance",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v5gShop7147X33ytbcC2u05KDuc.jpg",
    trailer: "1dYv5u6v55Y",
  },
  {
    id: 45,
    title: "Me Before You",
    genre: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    trailer: "Eh993__rOxA",
  },
  {
    id: 46,
    title: "The Fault in Our Stars",
    genre: "Romance",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kcVuktIlrn9SAN1uBmPDnocTQmF.jpg",
    trailer: "9ItBvH5J6ss",
  },
  {
    id: 47,
    title: "500 Days of Summer",
    genre: "Romance",
    poster: "https://image.tmdb.org/t/p/w500/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg",
    trailer: "PsD0NpFSADM",
  },
  {
    id: 48,
    title: "Before Sunrise",
    genre: "Romance",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg",
    trailer: "25v7N34d5HE",
  },
  {
    id: 49,
    title: "Notting Hill",
    genre: "Romance",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hHRIf2XHeQMbyRb3HUx19SF5Ujw.jpg",
    trailer: "4RI0QvaGoiI",
  },
  {
    id: 50,
    title: "Call Me by Your Name",
    genre: "Romance",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mZ4gBdfkhP9tvLH1DO4m4HYtiyi.jpg",
    trailer: "Z9AYPxH5NTM",
  },

  // 🚀 SCI-FI (10)
  {
  id: 51,
  title: "Inception",
  genre: "Sci-Fi",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
  trailer: "YoHD9XEInc0"
},
{
  id: 52,
  title: "Interstellar",
  genre: "Sci-Fi",
  poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  trailer: "zSWdZVtXT7E"
},
{
  id: 53,
  title: "The Matrix",
  genre: "Sci-Fi",
  poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  trailer: "vKQi3bBA1y8"
},
{
  id: 54,
  title: "Blade Runner 2049",
  genre: "Sci-Fi",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  trailer: "gCcx85zbxz4"
},
{
  id: 55,
  title: "Dune: Part One",
  genre: "Sci-Fi",
  poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  trailer: "n9xhJrPXop4"
},
{
  id: 56,
  title: "Avatar",
  genre: "Sci-Fi",
  poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
  trailer: "5PSNL1qE6VY"
},
{
  id: 57,
  title: "The Martian",
  genre: "Sci-Fi",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg",
  trailer: "ej3ioOneTy8"
},
{
  id: 58,
  title: "Edge of Tomorrow",
  genre: "Sci-Fi",
  poster: "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
  trailer: "vw61gCe2oqI"
},
{
  id: 59,
  title: "Ex Machina",
  genre: "Sci-Fi",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/weiMWhPoxMdGu89zE0UDbzQhCF.jpg",
  trailer: "EoQuVnKhxaM"
},
{
  id: 60,
  title: "Tenet",
  genre: "Sci-Fi",
  poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  trailer: "AZGcmvrTX9M"
},

  {
  id: 61,
  title: "Toy Story",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
  trailer: "KYz2wyBy3kc"
},
{
  id: 62,
  title: "Finding Nemo",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
  trailer: "SPHfeNgogVs"
},
{
  id: 63,
  title: "The Lion King",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  trailer: "4sj1MT05lAA"
},
{
  id: 64,
  title: "Up",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
  trailer: "ORFWdXl_zJ4"
},
{
  id: 65,
  title: "Zootopia",
  genre: "Animation",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
  trailer: "jWM0ct-OLsM"
},
{
  id: 66,
  title: "Frozen",
  genre: "Animation",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
  trailer: "TbQm5doF_Uc"
},
{
  id: 67,
  title: "Coco",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  trailer: "Ga6RYejo6Hk"
},
{
  id: 68,
  title: "How to Train Your Dragon",
  genre: "Animation",
  poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
  trailer: "oKiYuIsPxYk"
},
{
  id: 69,
  title: "Spirited Away",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
  trailer: "ByXuk9QqQkk"
},
{
  id: 70,
  title: "The Incredibles",
  genre: "Animation",
  poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
  trailer: "eZbzbC9285I"
},

]
export default  movies;