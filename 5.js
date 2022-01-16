// 5.	Ispisati nasumican broj u intervalu od N do M.

let N = 2;
let M = 6;

function RandomNumber(N,M){
    return Math.random() * (M - N)  + N;
};
console.log(RandomNumber(N,M));

function zaokruzenRandomNumber(N,M){
    return Math.floor(Math.random() * (M - N)  + N);
};
console.log(zaokruzenRandomNumber(N,M));

// Ovo resenje sam izguglao. Kapiram da mi ne treba da znam napamet.