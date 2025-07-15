const movies= [ 
{ movieName: 'Movie D', movieHero: 'Hero A', movieGenre: 'Action', releaseDate: '2020-01-15' }, 
{ movieName: 'Movie A', movieHero: 'Hero B', movieGenre: 'Drama', releaseDate: '2019-06-10' }, 
{ movieName: 'Movie B', movieHero: 'Hero C', movieGenre: 'Comedy', releaseDate: '2021-12-25' }, 
{ movieName: 'Movie C', movieHero: 'Hero D', movieGenre: 'Horror', releaseDate: '2018-04-05'}
]; 

var newmovies=movies.sort((a,b)=>a.movieName.localeCompare(b.movieName));
console.log(newmovies);