const points=[70,75,25,35,10,80,27];
const arrayIndex=points.findIndex(point => point == 35)
points[arrayIndex]=45;

console.log(points)


const students= [
  {name: 'erdem', point:40},
  {name: 'can', point:60},
  {name: 'aylin', point:30},
  {name: 'kaya', point:100},
];

const objectIndex=students.findIndex(student => student.name == 'can');
students[objectIndex].point='100';

console.log(students)