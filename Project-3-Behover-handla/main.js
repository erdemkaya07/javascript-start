const correctAnswers=['ja','ja','ja','ja','ja','ja'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');


form.addEventListener('submit', e => {
  e.preventDefault();
  let score=0;
  const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,];
    userAnswers.forEach((answer, index)=> {
      if(answer === correctAnswers[index]){
        score +=16;
        console.log(score);
      }
    })

    result.classList.remove('d-none');
    let point=0;
    const print=setInterval(() => {
      result.querySelector('#percentage').textContent="  " + `${point}%`;
      if(point === score) {
        clearInterval(print);
      } else {
        point++;
      }
    }, 5);
})