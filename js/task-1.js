const listRef = document.querySelector('#categories');


console.log(`В списке ${listRef.children.length} категории.`);

const categoryOfListRef = [...listRef.children];
const titleOfCategory = [];
const quantityCategory = [];
let counter = 0;
    
categoryOfListRef.forEach(category => titleOfCategory.push(category.firstElementChild.textContent));
categoryOfListRef.forEach(category => quantityCategory.push(category.lastElementChild.children.length));


titleOfCategory.forEach(title => {
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${quantityCategory[counter]}`);
    counter += 1;
})