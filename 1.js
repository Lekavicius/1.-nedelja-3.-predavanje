// 1.	Date su stranice pravougaonika. Izracunati povrsinu i obim.

const a = 4;
const b = 5;

// console.log(`Povrsina pravougaonika iznosi ${a*b}cm.`);
// console.log(`Obim pravougaonika iznosi ${2*a+2*b}cm.`);
/*
function Obim(a,b){
    return 2*a + 2*b
};
console.log(`Obim pravougaonika iznosi ${Obim(a,b)}cm.`);

function Povrsina(a,b){
    return a*b
};
console.log(`Povrsina pravougaonika iznosi ${Povrsina(a,b)}cm.`) */

function obimIPovrsina(a,b){
    if((a>0) && (b>0)){
        return `Obim pravougaonika iznosi ${2*a + 2*b}cm, a njegova povrsina ${a*b}cm.`
    }
    else{
         return 'Stranice pravougaonika moraju biti vece od nule.'
    }
}
console.log(obimIPovrsina(a,b));


