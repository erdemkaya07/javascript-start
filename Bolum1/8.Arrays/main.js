/* String dizilim */
let  isimler = ['Erdem', 'can', 'ayse'];
console.log(isimler[1]);

isimler[1] = 'Ali';
console.log(isimler[1]);


/* Number */

let yaslar=[3,18,25,50];
console.log(yaslar[3]);


/* Karmasik string ve number */

let rastgele=['erdem', 'kaya', 20,25,40];
console.log(rastgele);
console.log(rastgele.length);

/* Aralara karakter basma ornegi , - . gibi karakterler */

let tireli=isimler.join('-');
console.log(tireli);

let virgullu=isimler.join(',');
console.log(virgullu);


let sira=isimler.indexOf('Erdem');
console.log(sira);


/* concat metodu ekleme islemi */

let ekle = isimler.concat(['huseyin', 'abuzzer']);
console.log(ekle);

/* Push metodu bir diziye eleman eklenmek istendiginde  --- POP da son elemani almak icin veya cikarmak icin */

let elemanekle=isimler.push('Aylin');
console.log(isimler);

isimler.pop();  /* POP en son elemani cikartir */
console.log(isimler);