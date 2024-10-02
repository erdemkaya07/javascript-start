const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');

form.addEventListener('submit', e=>{
  e.preventDefault(); //Form gonderirken Sayfanin yenilenmesini engeller.
  const username=form.username.value;
  const usernamePattern=/^[a-z]{6,12}$/;
  if(usernamePattern.test(username)){
    message.textContent='Basarili';
  } else {
    message.textContent='Lutfen hepsini kucuk harf 6-12 karakter arasi giriniz.'

  }
})