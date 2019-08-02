var movies = [
    {
      title: 'The Avengers',
      year: '2012',
      imdbId: 'tt0848228',
      type: 'movie',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
    },
  {
    title: 'Avengers: Infinity War',
    year: '2018',
    imdbId: 'tt4154756',
    type: 'movie',
    poster:
    'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
  },
  {
    title: 'Avengers: Age of Ultron',
    year: '2015',
    imdbId: 'tt2395427',
    type: 'movie',
    poster:
    'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
  },
  {
    title: 'Avengers: Endgame',
    year: '2019',
    imdbId: 'tt4154796',
    type: 'movie',
    poster:
    'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'
  },
  {
    title: 'The Avengers',
    year: '1998',
    imdbId: 'tt0118661',
    type: 'movie',
    poster:
    'https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
  },
  {
    title: 'The Avengers: Earth\'s Mightiest Heroes',
    year: '2010–2012',
    imdbId: 'tt1626038',
    type: 'series',
    poster:
    'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'
  },
  {
    title: 'Ultimate Avengers',
    year: '2006',
    imdbId: 'tt0491703',
    type: 'movie',
    poster:
    'https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg'
  },
  {
    title: 'Ultimate Avengers II',
    year: '2006',
    imdbId: 'tt0803093',
    type: 'movie',
    poster:
    'https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
  },
  {
    title: 'Avengers Assemble',
    year: '2013–',
    imdbId: 'tt2455546',
    type: 'series',
    poster:
    'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg'
  },
  {
    title: 'The Avengers',
    year: '1961–1969',
    imdbId: 'tt0054518',
    type: 'series',
    poster:
    'https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg'
  }
  ];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.imdbId},
        React.createElement('h2', {}, 'Tytuł: ' + movie.title),
        React.createElement('p', {}, 'Typ: ' + movie.type),
        React.createElement('p', {}, 'Rok produkcji: ' + movie.year),
        React.createElement('img', {src: movie.poster} ),
        React.createElement('a', {href: 'https://www.imdb.com/title/' + movie.imdbId, target: "_blank"}, 'W bazie danych IMDb')
      );
  });

var element = 
React.createElement('div', {className: 'container'},
    React.createElement('h1', {}, "Lista filmów AVENGERS"),
    React.createElement('ul', {className: 'movie'}, moviesElements)
    ); 

ReactDOM.render(element, document.getElementById('app'));

