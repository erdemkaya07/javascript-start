const section=document.querySelector('section');
console.log(section.children);
//HTML Collectionde foreach donulmez- ARRAY"e donmen lazim

console.log(Array.from(section.children));

Array.from(section.children).forEach(child =>{
  child.classList.add('section-element');
})

const baslik=document.querySelector('h2');
console.log(baslik.parentElement);
console.log(baslik.nextElementSibling); //ayni hizada ki bir sonra kardesine ulas
console.log(baslik.previousElementSibling); //ayni hizada ki bir sonra kardesine ulas
console.log(baslik.parentElement.parentElement);