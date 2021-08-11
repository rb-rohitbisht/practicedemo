const data= [
    {
        id : 0,
        img : './images/pic1.jpg',
        name : 'Girls T-shirt',
        price : 190,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : './images/pic2.jpg',
        name : 'Girls T-shirt',
        price : 300,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : './images/pic3.jpg',
        name : 'Boys T-shirt',
        price : 240,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : './images/pic4.jpg',
        name : 'Boys Jeans',
        price : 285,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : './images/pic5.jpg',
        name : 'Boys T-shirt',
        price : 200,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : './images/pic7.jpg',
        name : 'Boys T-shirt',
        price : 220,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : './images/pic8.jpg',
        name : 'Boys T-shirt Blue',
        price : 160,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : './images/pic9.jpg',
        name : 'Boys Jeans',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : './images/pic10.jpg',
        name : 'Girls Jeans',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : './images/pic11.jpg',
        name : 'Boys Jeans',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 10,
        img : './images/pic12.jpg',
        name : ' T-shirt Black',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : './images/pic13.jpg',
        name : 'Boys T-shirt',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
];

let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})


//click event to display details page
for( i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail);
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : $ ' +data[getId].price;
    youSave.innerHTML= 'You save : ($ ' + data[getId].save + ')';
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
        document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}

// const menu= [
//     {
//         id : 0,
//         img : './images/pic1.jpg',
//         name : 'Girls T-shirt',
//         price : 190,
//         save : 25,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 1,
//         img : './images/pic2.jpg',
//         name : 'Girls T-shirt',
//         price : 300,
//         save : 50,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 2,
//         img : './images/pic3.jpg',
//         name : 'Boys T-shirt',
//         price : 240,
//         save : 30,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 3,
//         img : './images/pic4.jpg',
//         name : 'Boys Jeans',
//         price : 285,
//         save : 35,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 4,
//         img : './images/pic5.jpg',
//         name : 'Boys T-shirt',
//         price : 200,
//         save : 15,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 5,
//         img : './images/pic7.jpg',
//         name : 'Boys T-shirt',
//         price : 220,
//         save : 25,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 6,
//         img : './images/pic8.jpg',
//         name : 'Boys T-shirt Blue',
//         price : 160,
//         save : 20,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 7,
//         img : './images/pic9.jpg',
//         name : 'Boys Jeans',
//         price : 100,
//         save : 10,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
//     {
//         id : 8,
//         img : './images/pic10.jpg',
//         name : 'Girls Jeans',
//         price : 100,
//         save : 10,
//         delievery : 'In 3 - 4 days',
//         itemInCart: false
//     },
    // {
    //     id : 9,
    //     img : './images/pic11.jpg',
    //     name : 'Boys Jeans',
    //     price : 100,
    //     save : 10,
    //     delievery : 'In 3 - 4 days',
    //     itemInCart: false
    // },
    // {
    //     id : 10,
    //     img : './images/pic12.jpg',
    //     name : ' T-shirt Black',
    //     price : 100,
    //     save : 10,
    //     delievery : 'In 3 - 4 days',
    //     itemInCart: false
    // },
    // {
    //     id : 11,
    //     img : './images/pic13.jpg',
    //     name : 'Boys T-shirt',
    //     price : 100,
    //     save : 10,
    //     delievery : 'In 3 - 4 days',
    //     itemInCart: false
    // },
// ];

// show list of item 
// let listsItems = document.getElementsByClassName("all-items")


// console.log("workinng")
// function renderListItems(){
//     data.map((item)=>{
//         let ItemEle =  document.createElement("div")

//         ItemEle.innerHTML =` <div class="item-container" id=${item.id}>
//     <div class="card-item">
//         <img src=${item.img} alt="img" id="card-img">
//         <p id="item-name">${item.name}</p>
//     </div>
//     <i class="fa fa-shopping-cart" id="add-to-cart"></i>
//     <i class="fa fa-heart" id="icon"></i>
//     <h3 id="item-price">Price : $ ${item.price}</h3>            
// </div>`;
    
//     console.log("workinng")
//      listsItems.appendChild(ItemEle)
//     })
// }

// renderListItems()

// for(let i = 0 ; i <= menu.length ; i = i +1){
//     let item = menu[i]
//      let ItemEle =  document.createElement("div")
//      ItemEle.setAttribute('class','item-container')
    //  ItemEle.setAttribute('id','menu.id')
// ItemEle.className = "item-container"
// ItemEle.id = `${item.id}`
// console.log(ItemEle.id)
//             ItemEle.innerHTML =` 
//         <div class="card-item">
//             <img src=${item.img} alt="img" id="card-img">
//             <p id="item-name">${item.name}</p>
//         </div>
//         <i class="fa fa-shopping-cart" id="add-to-cart"></i>
//         <i class="fa fa-heart" id="icon"></i>
//         <h3 id="item-price">Price : $ ${item.price}</h3>            
//     `;
        
//        console.log(i,menu.length ,item ,ItemEle, listsItems)
       
    //    listsItems.appendChild(ItemEle)
//        document.getElementById("all-items").appendChild(ItemEle)
// }

//update
// for(let i = 0 ; i <= data.length ; i = i +1){
//     let item = data[i]
//      let ItemEle =  document.createElement("div")
// ItemEle.className = "title-container"
// console.log("working")

//             ItemEle.innerHTML =` 
//             <h1 id="title">Recently added</h1>
//             <button type="button" id="item-btn">View All</button>
//             </div>
//             <div class="card">
//             <div class="item-container" id=${item.id}>
//         <div class="card-item">
//             <img src=${item.img} alt="img" id="card-img">
//             <p id="item-name">${item.name}</p>
//         </div>
//         <i class="fa fa-shopping-cart" id="add-to-cart"></i>
//         <i class="fa fa-heart" id="icon"></i>
//         <h3 id="item-price">Price : $ ${item.price}</h3>  
//             </div>  
//             </div>    
//     `;
        
//        console.log(i,data.length ,item ,ItemEle, listsItems)
       
    //    listsItems.appendChild(ItemEle)
//        document.getElementById("all-items").appendChild(ItemEle)
// }
