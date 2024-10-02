//Attribute nedir? href,clas,style bunlardir

const link=document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','https://www.boztraining.com');
link.textContent='Erdem Kaya';




/* Class ismi degistirme */
const pDegeri=document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class', 'erdem');
console.log(pDegeri);
pDegeri.setAttribute('style', 'color:red')