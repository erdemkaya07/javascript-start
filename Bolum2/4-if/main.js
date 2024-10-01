/* IF KULLANMI - KOSUL DOGRU MU DEGIL MI */
const yas=19;

if(yas > 18)
{
  console.log("18 yasindan buyuktur");
}else {
  console.log("18 yasindan kucuktur");
}

const adSoyad = ['erdem', 'kaya', 'aylin'];
if(adSoyad.length > 4) {
  console.log('iste benim ogrencilerim');
} else {
  console.log('allah seni allsin');
}


const sifre="jngjs";

if(sifre.length >=8) {
  console.log("Sifre yeterince uzun");
} else {
  console.log("8 karakterden daha uzun sifre yaz loooooo")
}

const yeniSifre="jng12323js";
if(yeniSifre.length >=12) {
  console.log("Sifre yeterince uzun aferin");
}
else if(yeniSifre.length >=8) {
  console.log("Sifre 8 karakterden fazla... neden 12den deegeel");
}
else {
  console.log("8 karakterden daha uzun sifre yaz loooooo")
}