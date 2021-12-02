"use strict";
let number = 5;
const leftBorderWidth = 1;
const obj = {
    name: "John",
    age: 25,
    isMarried: false,
};
console.log(obj.name);
console.log(obj['age'])
let array = ['plum.png', 'orange.jpg', 'apple.bmp'];
const result = confirm("Are you okey?")


const category = "toys";
console.log(`https://someurl.com/${category}/5`)
console.log('xdxd')
console.log('123x');


const numbeOfFilms = prompt('How many times you watch this film?')
const personalMovieDB = {
    count: numbeOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
const a = prompt('What last film you watch?'),
      b = prompt('You opinion?'),
      c = prompt('What last film you watch?'),
      d = prompt('You opinion?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
