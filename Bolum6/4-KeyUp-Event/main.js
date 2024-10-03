const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');
const usernamePattern=/^[a-z]{6,12}$/;

form.addEventListener('submit', e=>{
  e.preventDefault(); //Form gonderirken Sayfanin yenilenmesini engeller.
  const username=form.username.value;
  if(usernamePattern.test(username)){
    message.textContent='Basarili';
  } else {
    message.textContent='Lutfen hepsini kucuk harf 6-12 karakter arasi giriniz.'

  }
})

form.username.addEventListener('keyup', e => {
  /* console.log(e.target.value) */
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class','success');
  } else {
    form.username.setAttribute('class','error');
  }
})