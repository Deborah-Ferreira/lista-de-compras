function removeItem(event) {
  // Remove item da lista(caixa)
  const item = event.target.closest('.input-wrapper');
  item.remove(); 
  // Remover a class hide para emitir mensagem de item removido
  if (item) {
    const footer = document.querySelector('footer.alert');
    footer.classList.remove('hide');
  }
} 
// Função para adicionar a class hide para desaparecer a mensagem de item removido
function deleteAlert() {
  const footer = document.querySelector('footer.alert');
  footer.classList.add('hide');
} 
function addItem() {
  const itemText = document.getElementById('newItemText').value;
  // Mensagem emitida quando enviado input vazio 
  if (itemText === "") {
    alert("Por favor, digite o nome do item.");
    return;
  } 
  // Desaparece mensagem de item removido, quando input é preenchido novamente
  if (itemText) {
    const footer = document.querySelector('footer.alert');
    footer.classList.add('hide');
  }  
  // Seleciona a class para aparecer o item(caixa) dos elementos
  const list = document.getElementsByClassName('list')[0];
  const newItem = document.createElement('div');
  newItem.className = 'input-wrapper';
  // Item da lista adicionado pelo usuário, através da interpolação de strings
  newItem.innerHTML = `
    <input type="checkbox" name="${itemText}">
    <div class="input-checkbox"></div>  
    <label for="${itemText}">${itemText}</label>
    <span class="lixeira" onclick="removeItem(event)"></span>
  `;
  // Adicionar um filho ou seja uma nova caixa que será apresentada após preenchimento do input
  list.appendChild(newItem);
  document.getElementById('newItemText').value = "";
}
