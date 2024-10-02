/* const hata=document.querySelector('p'); */ // ->Bu durumda html etiketi icinde ilk P etiketini secer
/* const hata=document.querySelector('.error'); */ // ->Bu durumda html etiketi icinde ilk error clasi secer
/* const hata=document.querySelector('div.error'); // ->Bu durumda div etiketi icinde error clasi secer

console.log(hata); */

// ******** querySelector sadece ilk elemanlari veya belirtilen elemani secer
// ******* querySelectorAll ise html etiketi altinda ki ornegin P etiketi secimisse hepsini secer

const hatalar=document.querySelectorAll('p');
console.log(hatalar);
console.log(hatalar[0]);


hatalar.forEach(hata => {
  console.log(hata)
})