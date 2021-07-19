console.log('hello new6');


/*// element selector
// 1 single element selector
// 2 multiple element selector

*/
 let var1 = document.getElementById("ch");
  // var1 = var1.className;
  //var1 = var1.childNodes;
// var1 = var1.parentNode;
  // var1.style.color = 'yellow';
  // var1.innerText ='rohit bisht';
   //var1.innerHTML = '<i> rohit bisht</i>'


 //console.log(var1);
   
 let sel = document.querySelector('#demo')
  sel = document.querySelector('div');
     // sel.style.color = 'green';

   console.log(sel);
  
   let val2 = document.getElementsByClassName('child');
    val2 = document.getElementsByClassName('container');
    
   //console.log(val2.getElementsByClassName('child'));
   val2 = document.getElementsByClassName('container');
   
   console.log(val2);

    Array.from(val2).forEach(function(element) {
        console.log(element);
        element.style.color='green';


    });

    let prac = document.querySelector('#change');
      prac.style.color = 'red';
      prac.innerText = 'welcome to this tutorial'
      prac.innerHTML = '<h1> <i> hello buddy </i> </h1>'
    console.log(prac);








