/* const kareAlani=function(kenar){
  let alan=kenar**2;
  console.log(alan);
  return alan;

  return kenar **2;
}
 */

/* const kareAlani=(kenar)=>{
   return kenar **2;
 }
const sonuc = kareAlani(9);
console.log(sonuc); */


const erdem = function(){
  return 'Erdem';
}
const sonuc=erdem();
console.log(sonuc);


/* const fatura = function(urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
} */

/* Arrow function olarak yazmak istersem. Profesyonel kullanimda genelde ARROW function kullanilir */
const fatura = (urunler, vergi)=>{
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
}

console.log(fatura([10,20,30],0.25))