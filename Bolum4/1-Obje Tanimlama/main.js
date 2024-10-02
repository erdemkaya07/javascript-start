let ogrenci={
  ad: 'erdem',
  yas: 29,
  email:'erdem@erdem.com',
  sinif:12,
  dersler:['matematik', 'fizik', 'kimya']
};

console.log(ogrenci);
console.log(ogrenci.yas);

ogrenci.yas=20;
console.log(ogrenci.yas);
console.log(ogrenci['email']);
ogrenci['ad']='Aylin';
console.log(ogrenci['ad']);


console.log(typeof ogrenci);