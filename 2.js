// 2.	Date su cena i kolicina novca. Izracunati kusur.

let cena = 119;
let kolicinaNovca = 100;

/*let kusur = kolicinaNovca-cena
console.log(`Vas kusur iznosi ${kusur} RSD.`);*/

/*function Kusur(cena,kolicinaNovca){
    return kolicinaNovca-cena
};
console.log(`Vas kusur iznosi ${Kusur(cena,kolicinaNovca)} RSD.`);*/

function kusur(cena,kolicinaNovca){
    if(cena<kolicinaNovca){
        console.log(`Vas kusur iznosi ${kolicinaNovca-cena} RSD.`)
    }
    else if(cena>kolicinaNovca){
        console.log(`Fali Vam jos ${cena-kolicinaNovca} RSD.`)
    }
    else{
        console.log('Platili ste tacan iznos.')
    }
}

console.log(kusur(cena,kolicinaNovca));

// Izbaci mi resenje, ali mi ispod resenja izbacuje i undefined. Zasto?

/*
function kusur(cena,kolicinaNovca){
    if(cena<kolicinaNovca){
        return `Vas kusur iznosi ${kolicinaNovca-cena} RSD.`
    }
    else if(cena>kolicinaNovca){
        return `Fali Vam jos ${cena-kolicinaNovca} RSD.`
    }
    else{
        return 'Platili ste tacan iznos.'
    }
}
console.log(kusur(cena,kolicinaNovca)); */