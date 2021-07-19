console.log('hello new8');
let element = document.createElement('div');
element.className='child';
element.innerText ='child5';
let change = document.querySelector('div.container');
console.log(change);
change.appendChild(element);

console.log(element);

let list = document.createElement('li');
list.innerText = 'new3';
let newchange = document.querySelector('ul.list');
newchange.appendChild(list);

console.log(list);
console.log(newchange);

let elem2 = document.createElement('h2');
  elem2.className ='elem2';
  elem2.id = 'elem2';
  let node = document.createTextNode('hello this is replace example');
  elem2.append(node);
  list.replaceWith(elem2);
  let elem3 = document.getElementById('list1');
  //elem3.removeChild(document.getElementById('li'));
  console.log(elem2);
