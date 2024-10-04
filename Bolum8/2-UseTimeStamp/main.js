const startDate=new Date('03/28/1991 8:40:00');
const now=new Date;
console.log(startDate);

const diff=now.getTime()-startDate.getTime();
console.log(diff)

const mins=Math.round(diff/1000/60);
const hours=Math.round(mins/60);
const days=Math.round(hours/24);
const years=Math.round(days/365);
console.log(`Fodelsedagen ${mins}`);
console.log(`Jag födes ${hours}`);
console.log(`Jag födes ${days}`);
console.log(`Jag födes ${years}`);



