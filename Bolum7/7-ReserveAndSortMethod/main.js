//Siralama islemleri icin buyukten kucuge veya kucukten buyuge



const names=['can', 'tuba', 'elif', 'hakan', 'osman'];

names.sort(); // from A to Z
names.reverse(); // from Z to A
console.log(names)


const points=[70,75,25,3,10,80,27];

/* points.sort()
points.reverse() */

points.sort((a,b)=>b-a);
console.log(points);



const students= [
  {name: 'erdem', point:40},
  {name: 'can', point:60},
  {name: 'aylin', point:30},
  {name: 'kaya', point:100},
];


/* students.sort((a,b) => {
  if(a.point >b.point) {
    return -1;
  }
  else if(b.point > a.point) 
  {
    return 1;
  }
  else {
    return 0;
  }
}); */

students.sort((a,b) => b.point -a.point);

console.log(students);

