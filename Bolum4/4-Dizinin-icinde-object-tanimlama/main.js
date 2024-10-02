/* const dersler=[
  {isim:'matematik', puan:90},
  {isim:'fizik', puan:50},
  {isim:'kimya', puan:40},
]
 */
let ogrenci={
  ad: 'erdem',
  yas: 29,
  email:'erdem@erdem.com',
  sinif:12,
  dersler:[
    {isim:'matematik', puan:90},
    {isim:'fizik', puan:50},
    {isim:'kimya', puan:40},],
  login:function()
  {
    console.log('Ogrenci giris yapti');
  },
  logout:function()
  {
    console.log('Ogrenci cikis yapti');
  },

  printLessons(){

    console.log(this.dersler);
    /* console.log(this); */
    this.dersler.forEach(ders =>{
      console.log(ders.isim,ders.puan);
    })
  }
};

/* console.log(this); */
ogrenci.printLessons();
