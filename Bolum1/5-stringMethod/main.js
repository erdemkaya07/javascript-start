let adSoyad="Yuce Erdem Kaya";

let son=adSoyad.lastIndexOf('m');
console.log(son);


/* SLICE -> Baslangic ve bitis degeri */
let bastanSona=adSoyad.slice(0,5);
console.log(bastanSona);

/* Kacinci indexden baslayarak kac index daha alacagini */

let bastanSonaSubstr=adSoyad.substr(5,5);
console.log(bastanSonaSubstr);

/* Yer Degistime Methodu */

let yerDegistirme=adSoyad.replace('m', 'x');
console.log(yerDegistirme);