const points=[70,75,25,35,10,80,27];

//Elemanlari tek tek gezer kosul dogruysa geri doner degilse arrayden cikarir

const studentesPassed=points.filter(points => {
  return points > 50;
})

console.log(studentesPassed)



const students= [
  {name: 'erdem', passed:true},
  {name: 'elsa', passed:false},
  {name: 'aylin', passed:true},
  {name: 'kaya', passed:false},
];

const passStudents=students.filter(student=> {
    return student.passed;
})

console.log(passStudents);