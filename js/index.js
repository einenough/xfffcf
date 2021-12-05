"use strict";
// let number = 5;
// const leftBorderWidth = 1;
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false,
// };
// console.log(obj.name);
// console.log(obj['age'])
// let array = ['plum.png', 'orange.jpg', 'apple.bmp'];
// const result = confirm("Are you okey?")


// const category = "toys";
// console.log(`https://someurl.com/${category}/5`)
// console.log('xdxd')
// console.log('123x');


// const numbeOfFilms = prompt('How many times you watch this film?')
// const personalMovieDB = {
//     count: numbeOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };
// const a = prompt('What last film you watch?'),
//       b = prompt('You opinion?'),
//       c = prompt('What last film you watch?'),
//       d = prompt('You opinion?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// if (4 == 9){
//     console.log('ok')
// } else {
//     console.log('Error!')
// };


// const num = 50;
// if (num < 49) {
//     console.log('idc')
// } else if ( num > 100){ 
//     console.log('A lot')
// } else {
//     console.log('Ok')
// }

// (num === 50) ? console.log('ok') : console.log('a lot');

// const yum = 50;


// switch (yum) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log('Neverno');
//         break;
//     case 50:
//         console.log('its ok');
//         break;
//     default:
//         console.log('everything is not right');
//         break; 
    
// }

// let bum = 50;

// while (bum < 55){
//     console.log(bum);
//     bum++;
// }

// do {
//     console.log(bum);
//     bum++;
// } 
// while (bum < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }
// const numbeOfFilms = prompt('How many times you watch this film?');
// const personalMovieDB = {
//     count: numbeOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };


// for ( let i = 0; i < 2; i++){
//     const a = prompt ('Question'),
//           b = prompt('Second Question');
    
//     if (a != null && b != null && a !='' && b!='' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done!');

//     } else {
//         console.log('error');
//         i--;
//     }
    
 
// }
// console.log(personalMovieDB);
// if (personalMovieDB.count < 10){
//     console.log('hmm');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//     console.log('wowow');
// } else if (personalMovieDB.count > 30){
//     console.log('Kinoman');
// } else {
//     console.log('Error');
// };
// console.log(personalMovieDB);

// let i = 0;
// do {
//    const f = prompt('quest'),
//          v = prompt('2ndquest');
//     i++;
// } while( i < 2 ); 
// let num = 34;
// function showFirstMessage(text){
//     console.log(text);
//      num = 20;
// }
// showFirstMessage('Hello World!');
// console.log(num);

// function rec (){
//     let bum = 70;
//     return bum;
// }
// const  showBum = rec();
// let boom = function(){
//     console.log('Hee')
// };
// let calc = (a,b) => a + b;// в одну строчку можно так.
// let calcу = (a,b) => {
//     console.log('xdxd');
//     return a+b;
// };// в несколько строчек - так.

// let key = 17;
// let hr = (a) => a + key;
// console.log(hr(13));

// let str = 'hahaha'
// console.log(str.toLocaleUpperCase());
// const logged = 'Key World';
// console.log(logged.slice(4,9));
// console.log(logged.substr(5,5));
// const vum = 12.2;
// console.log(Math.round(vum));
// const vest = '12.2px';
// console.log(parseInt(vest));

let numberOfFilms;
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };


function start () {
    numberOfFilms = +prompt('Any question?');

    while (numberOfFilms== '' || numberOfFilms== null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Any question?');

    }
}




function rememberMyFilms () {
    for ( let i = 0; i < 2; i++){
    const a = prompt ('Question'),
          b = prompt('Second Question');
    
    if (a != null && b != null && a !='' && b!='' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');

    } else {
        console.log('error');
        i--;
     }
    }
};



function detectLevelPerson () {
    if (personalMovieDB.count < 10){
            console.log('hmm');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log('wowow');
        } else if (personalMovieDB.count > 30){
            console.log('Kinoman');
        } else {
            console.log('Error');
        };

};
function showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
};

showMyDB();


function writeYourGenres (){
    for ( let i = 1; i <= 3; i++){
        const genre = prompt(`Your favorite genres under number${i}?`)
        personalMovieDB.genres[i-1] = genre;

    }
};

writeYourGenres(); 