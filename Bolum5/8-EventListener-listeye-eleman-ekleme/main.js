const button=document.querySelector('button');

/* button.addEventListener('click', () =>{
  console.log('Tiklandi');
}) */
const ul=document.querySelector('ul');
ul.addEventListener('click',e=>{
  console.log(e);
  console.log(e.target);

  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
})


/* liElemanlari.forEach(eleman => {
  eleman.addEventListener('click',e=>{
    console.log(e);
    console.log(e.target);
    console.log('li"ye tikladi');
    e.target.style.color='blue';
  })
})  */
const liElemanlari=document.querySelectorAll('li');
liElemanlari.forEach(eleman => {
  eleman.addEventListener('click',e=>{
    e.stopPropagation(); // eventin sadece LI icin calismasini ve digerlerinin etkilenmemesi icin
   /*  e.target.remove(); */
  })
})


button.addEventListener('click',() =>{
  const li=document.createElement('li');
  li.textContent='Yeni Li'
  ul.append(li); // append sonuna ekler 
  /* ul.prepend(li);  *///basina ekler
})




/* ul.remove() */