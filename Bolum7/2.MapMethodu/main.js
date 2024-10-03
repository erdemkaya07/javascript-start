const points=[70,75,25,35,10,80,27];

// map methodu array icinde ki veriyi uppdate eder/ekler....
const newPoints=points.map(point => {
  return point +10;
})

console.log(newPoints);

const students= [
  {name: 'erdem', point:40},
  {name: 'elsa', point:60},
  {name: 'aylin', point:30},
  {name: 'kaya', point:100},
];

// sadece guncellemek istedigimiz veriyi secmek istersek
const newStudentsPoints=students.map(student => {
  if(student.point < 50)
{
  student.point += +15;
  return student;
  /* return {name:student.name, point:student.point+15} */
}
else {
  return student;
}
})

console.log(newStudentsPoints)