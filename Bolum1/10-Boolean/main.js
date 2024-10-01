/* Boolean TRUE ve FALSE degeri dondurur */

console.log(true, false, 'true', 'false');


let email="erdem@kaya.com";
let adSoyad=['Erdem', 'Kaya', 'Aylin'];
/* include methodu "iceriyor mu" sorusuna cevap verir  */

let varmi=email.includes('@');
console.log(varmi);

let varmi2=adSoyad.includes('Ahmet')
console.log(varmi2);


let yas=29;
console.log(yas == 29);  /* esit mi == */
console.log(yas == 33);  /* esit mi == */
console.log(yas != 33);  /* esit degil mi == */
console.log(yas > 26);  /* buyuk mu == */
console.log(yas < 26);  /* kucuk mu == */



let ad = 'erdem'
console.log(ad == 'erdem');
