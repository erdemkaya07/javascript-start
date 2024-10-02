/* const pdegeri=document.querySelector('p');
console.log(pdegeri.innerText);

pdegeri.innerText='Erdem Kaya Javascript Kurs'; */

/* const pdegeri=document.querySelectorAll('p');
console.log(pdegeri);

pdegeri.forEach(a => {
  console.log(a.innerText);
  a.innerText += ' yeni alan' //+= olani korur yanina string olarak ekler
}) */


const icerik=document.querySelector('.icerik');
console.log(icerik.innerHTML);


icerik.innerHTML +='<h2>Vue Js, React.js, Angular JS</h2>'


const ogrenciler=['erdem', 'kaya', 'aylin', 'kaya'];

ogrenciler.forEach(ogrenci => {
  icerik.innerHTML += `<p>${ogrenci}</p>`
})