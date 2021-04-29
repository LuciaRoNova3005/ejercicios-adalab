const firstnameElement = document.querySelector('.firstname');
const secondnameElement = document.querySelector('.secondname');
const titleElement = document.querySelector('.title');
titleElement.innerHTML = titleElement.innerHTML + secondnameElement.innerHTML;
titleElement.innerHTML = titleElement.innerHTML + firstnameElement.innerHTML;