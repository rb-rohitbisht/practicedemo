const menu= [
    {
        id : 0,
        img : './images/pic1.jpg',
        name : 'Girls T-shirt',
        price : 190
        
    },
    {
        id : 1,
        img : './images/pic2.jpg',
        name : 'Girls T-shirt',
        price : 300
       
    },
    {
        id : 2,
        img : './images/pic3.jpg',
        name : 'Boys T-shirt',
        price : 240
       
    },
    {
        id : 3,
        img : './images/pic4.jpg',
        name : 'Boys Jeans',
        price : 285
        
    },
    {
        id : 4,
        img : './images/pic5.jpg',
        name : 'Boys T-shirt',
        price : 200
        
    },
    {
        id : 5,
        img : './images/pic7.jpg',
        name : 'Boys T-shirt',
        price : 220
        
    },
    {
        id : 6,
        img : './images/pic8.jpg',
        name : 'Boys T-shirt Blue',
        price : 160
       
    },
    {
        id : 7,
        img : './images/pic9.jpg',
        name : 'Boys Jeans',
        price : 100
        
    },
    {
        id : 8,
        img : './images/pic10.jpg',
        name : 'Girls Jeans',
        price : 100
      
    },
    {
        id : 9,
        img : './images/pic11.jpg',
        name : 'Boys Jeans',
        price : 100
        
    },
    {
        id : 10,
        img : './images/pic12.jpg',
        name : ' T-shirt Black',
        price : 100
       
    },
    {
        id : 11,
        img : './images/pic13.jpg',
        name : 'Boys T-shirt',
        price : 100
       
    },
];

// for(let i = 0 ; i <=menu.length ; i = i +1){
//     let item =menu[i]
//      let ItemEle =  document.createElement("div")
// ItemEle.className = "item-container"
// ItemEle.id = item.id
//             ItemEle.innerHTML =` 
//         <div class="card-item">
//             <img src=${item.img} alt="img" id="card-img">
//             <p id="item-name">${item.name}</p>
//         </div>
//         <i class="fa fa-shopping-cart" id="add-to-cart"></i>
//         <i class="fa fa-heart" id="icon"></i>
//         <h3 id="item-price">Price : $ ${item.price}</h3>            
//     `;
        
//        console.log(imenu.length ,item ,ItemEle, listsItems)
       
//     //    listsItems.appendChild(ItemEle)
//        document.getElementById("all-items").appendChild(ItemEle)
// }

// const sectionCenter = document.getElementsByClassName('card');
// console.log(sectionCenter)
// window.addEventListener("DOMContentLoaded", function () {
//     diplayMenuItems(menu);
    
//   });
//   function diplayMenuItems(menuItems) {
//     let displayMenu = menuItems.map(function (item) {
// console.log(item);
// ItemEle.innerHTML =` 
// <div class="card-item">
//     <img src=${item.img} alt="img" id="card-img">
//     <p id="item-name">${item.name}</p>
// </div>
// <i class="fa fa-shopping-cart" id="add-to-cart"></i>
// <i class="fa fa-heart" id="icon"></i>
// <h3 id="item-price">Price : $ ${item.price}</h3>            
// `;
       
//     });
//     displayMenu = displayMenu.join("");
//   console.log(displayMenu);

//   document.getElementById("all-items").appendChild(ItemEle)
//     }

// let listsItems = document.getElementsByClassName("all-items")
// console.log(listsItems)

let listsItems = document.getElementsByClassName('card')
console.log(listsItems)
console.log("workinng")

for(let i = 0 ; i <= menu.length ; i = i +1){
    let items = menu[i]
     let item =  document.createElement("div")
     item.setAttribute('class','item-container')
     item.id = items.id;

     item.innerHTML =` 
             <div class="card-item">
                <img src=${items.img} alt="img" id="card-img">
                  <p id="item-name">${items.name}</p>
              </div>
              <i class="fa fa-shopping-cart" id="add-to-cart"></i>
              <i class="fa fa-heart" id="icon"></i>
              <h3 id="item-price">Price : $ ${items.price}</h3>            
          `;

// let div1 = document.createElement('div');
// div1.setAttribute('class','card-item');
// item.appendChild(div1);
// let img1 = document.createElement('img');
// img1.setAttribute('id','card-img');
// img1.src = './images/pic1.jpg';
// div1.appendChild(img1);
// let p1 = document.createElement('p');
// p1.setAttribute('id','item-name');
// p1.innerText = 'Girls T-shirt';
// div1.appendChild(p1);

// let icon1 = document.createElement('i');
// icon1.setAttribute('class','fa fa-shopping-cart');
// icon1.setAttribute('id','add-to-cart');
// item.appendChild(icon1);

// let heart = document.createElement('i');
// heart.setAttribute('class',"fa fa-heart");
// heart.setAttribute('id','icon');
// item.appendChild(heart);

// let price1 = document.createElement('h3');
// price1.setAttribute('id','item-price');
// price1.innerText = 'Price : $ 190';
// item.appendChild(price1);



console.log(i,menu.length ,items ,item, listsItems)

document.getElementById("all-items").appendChild(item)
}
