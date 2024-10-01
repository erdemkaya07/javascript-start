 const ulum = document.querySelector('.main');

 let ogrenciler=['erdem', 'kaya', 'aylin', 'elsa'];

 let html=``;

 ogrenciler.forEach(ogrenci =>{
  html +=`<li>${ogrenci}</li>`
 })

 console.log(html);

ulum.innerHTML=html;