//Bugunun tarihini saatini alma

const now=new Date();
console.log(now);
console.log(typeof now);
console.log('Year: ',now.getFullYear());
console.log('Month: ',now.getMonth()+1); //Array olarak tutuldugu icin 0. indexi
console.log('Date: ',now.getDate());
console.log('Day: ',now.getDay()); ////Array olarak tutuldugu icin 0. indexi
console.log('Hours: ',now.getHours());
console.log('Minutes: ',now.getMinutes());
console.log('Seconds: ',now.getSeconds());

console.log('timestamp: ',now.getTime()); 
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
