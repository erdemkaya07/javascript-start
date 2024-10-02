let ogrenci={
  ad: 'erdem',
  yas: 29,
  email:'erdem@erdem.com',
  sinif:12,
  dersler:['matematik', 'fizik', 'kimya'],
  login:function()
  {
    console.log('Ogrenci giris yapti');
  },
  logout:function()
  {
    console.log('Ogrenci cikis yapti');
  },
};


ogrenci.login();
ogrenci.logout();