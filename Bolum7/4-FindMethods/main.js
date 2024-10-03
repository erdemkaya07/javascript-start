const points=[70,75,25,35,10,80,27];
// Belirtilen kosuldan sonra ki ilk kosulu getirir sikinti su karsilayan ikinci degeri console basmaazzz!
const highPoint=points.find(point => {
  return point>70;
})

console.log(highPoint);