const category = document.querySelectorAll('#categories > li.item');
console.log(`В списке ${category.length} категории.`)

category.forEach(node => {  
  const title = node.querySelector('h2').textContent;
  const amountElement = node.querySelectorAll('li').length;  
  console.log(`Категория: ${title}, Количество элементов: ${amountElement}`);
})




  



