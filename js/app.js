document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  
})

const handleFormSubmit = function (){
  event.preventDefault()

  const theForm = document.querySelector('#new-item-form');

  const newListItem = document.createElement('li');
  newListItem.textContent = `
  Title: ${event.target.title.value}
  Author: ${event.target.author.value}
  Category: ${event.target.category.value}`;

  const resultList = document.querySelector('#reading-list');
  
  resultList.appendChild(newListItem);
  theForm.reset();
}