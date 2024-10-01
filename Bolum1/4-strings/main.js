console.log("Merhaba Dunya");
let email ="erdem@erdem.com";
console.log(email);

// Birlestirme

let ad ="Erdem";
let soyad ="Kaya";
let adSoyad= ad + " " + soyad;

console.log(adSoyad);

// Karakterleri cekme

console.log(adSoyad[6]);

// Kac karakter

console.log(adSoyad.length);

/* if(adSoyad.length > 0)
{

} */


/* METHODLAR */

console.log(adSoyad.toUpperCase());
let kucukAdSoyad=adSoyad.toLocaleLowerCase();
console.log(kucukAdSoyad);


/* INDEX */

let index=adSoyad.indexOf('K');
console.log("K nin buludugu index:" + " " +index);