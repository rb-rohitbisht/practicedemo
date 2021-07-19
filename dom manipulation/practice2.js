console.log('hello welcome');

let cont= document.querySelector('.no');
cont= document.querySelector('.container');
console.log(cont);
console.log(cont.childNodes);
console.log(cont.children);
 let node = cont.childNodes[5].nodeName;
 let nodeType = cont.childNodes[5].nodeType;
 console.log(node);
  console.log(nodeType);

/* nodeType
1  = element
2  = attribute
3  = text
8  = comment
9  = document
10  = doc type  */

let value = document.querySelector('.new');
console.log(value);
console.log(value.childNodes);
console.log(value.children);
//console.log(value.parentNode);
console.log(value.childNodes[3]);

//console.log(value);
let value1 = document.querySelector('.sum');
   console.log(value1);
   console.log(value1.childNodes);
   console.log(value1.children);
   console.log(value1.children[0].children);
   console.log(value1.firstChild);
   console.log(value1.firstElementChild);
   console.log(value1.lastElementChild);

   console.log(container);
   console.log(container.firstElementChild);
console.log(container.firstElementChild.nextElementSibling);






