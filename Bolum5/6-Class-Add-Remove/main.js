/* const icerik=document.querySelector('p');
console.log(icerik.classList);

icerik.classList.add('erdem');
icerik.classList.remove('error'); */

const icerik=document.querySelectorAll('p');
console.log(icerik);

icerik.forEach(erdem => {
  if(erdem.textContent.includes('error')){
    erdem.classList.add('error');
  }
  if(erdem.textContent.includes('success')){
    erdem.classList.add('success');
  }
})