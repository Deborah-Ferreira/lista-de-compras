function removeItem(event) {
  const item = event.target.closest('.input-wrapper');
  item.remove();
  if (item) {
    const footer = document.querySelector('footer.alert');
    footer.classList.remove('hide');
  }
}
function deleteAlert() {
  const footer = document.querySelector('footer.alert');
  footer.classList.add('hide');
}
function addItem() {
  const itemText = document.getElementById('newItemText').value;
  if (itemText === "") {
    alert("Por favor, digite o nome do item.");
    return;
  }
  if (itemText) {
    const footer = document.querySelector('footer.alert');
    footer.classList.add('hide');
  }
  const list = document.getElementsByClassName('list')[0];
  const newItem = document.createElement('div');
  newItem.className = 'input-wrapper';
  newItem.innerHTML = `
    <input type="checkbox" name="${itemText}">
    <div class="input-checkbox"></div>  
    <label for="${itemText}">${itemText}</label>
    <span class="lixeira" onclick="removeItem(event)"></span>
  `;
  list.appendChild(newItem);
  document.getElementById('newItemText').value = "";
}
