console.log('hello new9');
// events tutorial

document.getElementById('change').addEventListener
("mouseover",function(){
    console.log('hello this is caused by event');
   // location.href ='//www.codewithharry.com';
   // location.href = '//www.youtube.com';

});

let btn = document.getElementById('button');
btn.addEventListener("click",fun1);
function fun1(e){
    location.href = '//www.youtube.com';
    console.log('you just click on button',e);
    location.href = '//www.youtube.com';

}
document.body.style.backgroundColor = 'red';
document.body.style.backgroundColor = 'green';