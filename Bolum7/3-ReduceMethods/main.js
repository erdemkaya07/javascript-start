//

const points=[70,75,25,35,10,80,27];

const result=points.reduce((value,point) => {
if(point > 50) {
  value++;
}
return value;
},0 /* Value degeri */);

console.log(result);


const students= [
  {name: 'erdem', point:40},
  {name: 'can', point:60},
  {name: 'aylin', point:30},
  {name: 'kaya', point:100},
  {name: 'can', point:80},
  {name: 'osman', point:50},
  {name: 'burak', point:60},
  {name: 'erdi', point:40},
];

const canTotal=students.reduce((value,student) => {
  if(student.name == 'can') {
    value+=student.point;
  }
  return value;
},0)

console.log(canTotal)