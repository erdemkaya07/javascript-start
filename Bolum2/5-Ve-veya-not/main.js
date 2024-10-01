/* ve operatöru &&  ve operatöru kullaniminda ikiside dogru olmak zorunda */
/* veya operatöru || veya operatörunde herhangi bir dogru console gelir ve icinde olanlari ekrana basar*/
/* not operatöru ! dir.  */

const yeniSifre="jng!sfsjs";
if(yeniSifre.length >=12 && yeniSifre.includes('!')) {
  console.log("Sifre yeterince uzun ve guclu aferin");
}
else if(yeniSifre.length >=8) {
  console.log("Sifre 8 karakterden fazla... neden 12den deegeel");
}
else {
  console.log("8 karakterden daha uzun sifre yaz loooooo")
}

const control=false;
if(!control){
  console.log('Kontrol basarili');
}