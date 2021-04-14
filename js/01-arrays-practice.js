//STEP 1
let favMovies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina ']
console.log(favMovies[1]);
//STEP 2
let movies = new Array(5);
movies[0] = 'Knotting Hill';
movies[1] = 'Breakfast at Tiffanys';
movies[2] = 'Legally Blonde';
movies[3] = 'Harry Potter Movies';
movies[4] = 'The Ring';
console.log(movies[0]);
//STEP 3
let movies = new Array(5);
movies[0] = 'Knotting Hill';
movies[1] = 'Breakfast at Tiffanys';
movies[2] = 'Legally Blonde';
movies[3] = 'Harry Potter Movies';
movies[4] = 'The Ring';
movies.splice(1,2, 'Sabrina', 4,5)
console.log(movies.length);
//STEP 4
let movies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring'];
delete movies[0];
console.log(movies);
//STEP 5
let movies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
for (let movie in movies){
    console.log(movie);
}
//STEP 6
let movies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
for (let i in movies){
    console.log(i);
}
//STEP 7
let movies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
console.log(movies.sort());
//STEP 8
let movies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
let leastFavMovies = ['Down Sizing', 'Hereditary', 'What lies below'];

console.log("Moives I Like:" + "\n" + "\n"  + movies.join('\n') + "\n" + "\n" + "Movies I Regret Watching:" + "\n" + "\n" +leastFavMovies.join('\n'));

//STEP 9
let favMovies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
let leastFavMovies = ['Down Sizing', 'Hereditary', 'What lies below'];
let movies = favMovies.concat(leastFavMovies);
console.log(movies.reverse());

//STEP 10
let favMovies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
let leastFavMovies = ['Down Sizing', 'Hereditary', 'What lies below'];
let movies = favMovies.concat(leastFavMovies);
console.log(movies.slice(-1)[0]);

//STEP 11
let favMovies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
let leastFavMovies = ['Down Sizing', 'Hereditary', 'What lies below'];
let movies = favMovies.concat(leastFavMovies);
console.log(movies[0]);

//STEP 12
let favMovies = ['Knotting Hill', 'Breakfast at Tiffanys' ,'Legally Blonde', 'Harry Potter Movies', 'The Ring', 'Sabrina', 'Cool Runnings'];
let leastFavMovies = ['Down Sizing', 'Hereditary', 'What lies below'];
let movies = favMovies.concat(leastFavMovies);
console.log(movies.indexOf('Down Sizing'))
console.log(movies.indexOf('Hereditary'))
console.log(movies.indexOf('What lies below'))
movies.splice(7,8,'Karate Kid','Side Kick','Enter The Dragon')
console.log(movies);

//STEP 13
let movies = [["Knotting Hill", 1], ["Breakfast at Tiffanys", 2], ["Legally Blonde", 3], ["Harry Potter Movies", 4], ["Sabrina", 5]];
for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i][0]}`);
}
console.log(`${movieNames[0]}`)


//STEP 14
let employees = ['Brent', 'Lauren', 'Katie', 'Avery', 'Everett'];


for (let i = 0; i < employees.length; i++) {
   console.log("Employees:" + '\n' + `${employees[i]}`);
}


//STEP 15
function filterArray(array) {
    array = array.filter(remove);
    return array;
  }
  
  function remove(filterRemove) {
    if(filterRemove !== false || filterRemove !== null || filterRemove !== 0 || filterRemove !== "") {
      return filterRemove;
    }
  }
  
  console.log(filterArray([02, '', 'bll', true, null, false, 0]));

//STEP 16
function randomNumber(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let item = array[randomIndex];
    return item;
}

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let displayRandomNumber = randomNumber(numberArray);
console.log(displayRandomNumber);

//STEP 17
const numberArray = [20, 783, 411, 639, 997, 567, 84, 3, 686, 757];
console.log(Math.max(...numberArray));
