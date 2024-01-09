// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
} 

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    let movieTitle = [];
    let result = array.filter(movie => movie.director === director && movieTitle.push(movie.title))
    return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let scores = moviesFromDirector.reduce((ac, movie) => ac + movie.score, 0);
  let result = (scores / moviesFromDirector.length.toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movie => movie.title)
      .sort()
      .slice(0, 20)
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let titleAndYear = array.map(movie => ({year: movie.year, title: movie.title}))
  let result = titleAndYear.sort((a, b) => {
    if (a.year !== b.year)
    {
      return a.year - b.year;
    }
    else
    {
      return a.title.localeCompare(b.title);
    }
  });

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let result = array.filter(movie => movie.genre.includes(category));
  if(result.length === 0)
  {
    return 0;
  }
  let reduced = result.reduce((ac, movie) => ac + movie.score, 0);
  let avg = (reduced / result.length);
  return parseFloat(avg.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  return array.map(movie => {
    let match = movie.duration.match(/(\d+)h\s*(\d*)/);

    if (match)
    {
       hours = parseInt(match[1], 10) || 0;
       mins = parseInt(match[2], 10) || 0;
    }

     let durationInMins = hours * 60 + mins;

     return {
      ...movie,
      duration: durationInMins
     }
  })

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let filteredByYear = array.filter(movie => movie.year === year);
  let sortedScore = filteredByYear.sort((a, b) => b.score - a.score);
  let bestScore =[];
  bestScore[0] = sortedScore[0];
  return bestScore;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
