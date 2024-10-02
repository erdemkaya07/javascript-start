const username='erdems';
const pattern=/^[a-z]{6,10}$/;

let sonuc=pattern.test(username);
console.log(sonuc);

if(sonuc) {
  console.log('basarili');
} else {
  console.log('basarisiz');
}


/* let sonuc=username.search(pattern);
console.log(sonuc); */