const students= [
  {name: 'erdem', point:40},
  {name: 'can', point:60},
  {name: 'aylin', point:30},
  {name: 'kaya', point:100},
  {name: 'can', point:80},
  {name: 'osman', point:60},
  {name: 'burak', point:30},
  {name: 'erdi', point:20},
];

// Puani 50 den dusuk olanlari don
const filtered=students.filter(student => student.point < 50);

const plusPoint=filtered.map(student => {
  return `${student.name} adli ogrencinin yeni notu ${student.point +15}`;
})

console.log(plusPoint);

const newNotes=students.filter(student => student.point < 50)
.map(student => `${student.name} adli ogrencinin yeni notu ${student.point +15}`);
console.log(newNotes);