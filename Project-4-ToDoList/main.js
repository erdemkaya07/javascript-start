const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input'); //Search class i altinda ki input dedik. Altinda ki demek icin bir bosluk yeterli

const generateTemplate= todo => {
  const html=`
  <li class="list-group-item d-flex justify-content-between align-item-center">
    <span>${todo}</span>
    <i class="fa-regular fa-trash-can delete"></i>
  </li>
  `;
  list.innerHTML+=html;
}

addForm.addEventListener('submit', e =>{
  e.preventDefault(); //sayfa yenilenmesin
  const todo=addForm.add.value.trim(); //Bosluklari kaldirma
  /* console.log(todo); */
  if(todo.length) // Burada bosluk birakip enter a basilirsa gondermesini engelliyoruz
  {
    generateTemplate(todo);
    addForm.reset();//veriyi girip entre bastiktan sonra input icinde ki veriyi resetle
  }
})


list.addEventListener('click', e => {
  if(e.target.classList.contains('delete'))
  {
    e.target.parentElement.remove(); //icon yani delete classinin parenti LI oldugu icin kaldirma islemini boyle yapiyoruz
  }
})


//Search //keyup method
const filterTodos= term => {
  /* console.log(term); */
  /* console.log(list.children);
  console.log(Array.from(list.children)); */
  //icermiyorsa
  Array.from(list.children)
  .filter(todo => !todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.add('filtered'));
  //aramada ki kelimeyi iceriyorsa
  Array.from(list.children)
  .filter(todo => todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.remove('filtered'));

}


search.addEventListener('keyup', ()=> {
  const term=search.value.trim().toLowerCase(); //toLowerCase methodu arama aninda tum karakterleri kucuk gonderir 
  /* console.log(term); */
  filterTodos(term);
})