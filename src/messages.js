function addMessage(event) {
  event.preventDefault();

  // console.log('Hello this is add message function call!')

  const comment = document.getElementById('message-form-comment').value;
  const divElement = document.createElement('div');
  divElement.textContent = comment;
  divElement.classList.add('message-list-item')
  document.getElementById('message-list').appendChild(divElement)
}
