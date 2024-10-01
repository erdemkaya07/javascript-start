/* const a = (callBacka) => {
  let yas=40;
  callBacka(yas);
};
a(function(value){
  console.log(value);
})
 */


let ogrenciler=['erdem', 'kaya', 'aylin', 'elsa'];

ogrenciler.forEach(function(){
  console.log("selam");
})

ogrenciler.forEach(function(kisi,index){
  console.log(kisi,index);
})


const ogrenci = (kisi, index) => {
  console.log(`${index} - ${kisi}`);
}
ogrenciler.forEach(ogrenci);