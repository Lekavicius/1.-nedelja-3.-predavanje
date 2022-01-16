// 4.	Date su stranice trougla. Izracunati povrsinu. sqrt(s*(s-a) * (s-b) * (s-c)) ..... s=O/2

let a = 3;
let b = 4;
let c = 5;

let Obim = a+b+c;
let s = Obim/2;
let Povrsina = Math.sqrt(s* (s-a) * (s-b) * (s-c));

console.log(`Povrsina trougla iznosi ${Povrsina}cm.`)


