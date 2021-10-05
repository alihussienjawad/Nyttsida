
let products=[
 {
    name:"RAW",
    tag:"1",
    price:475,
    incart:0,
    like:0,
    discount:5
 },
 {
    name:"PUMPIS",
    tag:"2",
    price:170,
    incart:0,
    like:0,
    discount:3
 },
 {
    name:"SALLE",
    tag:"3",
    price:630,
    incart:0,
    like:0,
    discount:5
 },
 {
    name:"SUNNAN Dekoration/Vas ",
    tag:"4",
    price:360,
    incart:0,
    like:0,
    discount:2
 },
 
 {
    name:"Ljushållare Face",
    tag:"5",
    price:135,
    incart:0,
    like:0,
    discount:2
 },
 {
    name:"Tidningsställ Elula",
    tag:"6",
    price:582,
    incart:0,
    like:0,
    discount:2
 },
 {
    name:"Mysigt Hem",
    tag:"7",
    price:1886,
    incart:0,
    like:0,
    discount:2
 },
 {
    name:"Collier Presentband",
    tag:"8",
    price:45,
    incart:0,
    like:0,
    discount:2
 },
 {
    name:"Julgranshänge",
    tag:"9",
    price:285,
    incart:0,
    like:0,
    discount:2
 },

];


//////////////////////////////
 /*   
  let heart_btn=document.querySelectorAll('.fa-heart');
  for (let i=0;i<heart_btn.length;i++){
    heart_btn[i].addEventListener('click',()=>{
              heartNumbers();
       });
  }



  function heartNumbers(){
      let heartNumber=localStorage.getItem('heartNumber');
    
      
      heartNumber=parseInt(heartNumber);
       //console.log(productNumber)

       if(heartNumber>=0){
       
        localStorage.setItem('heartNumber',heartNumber+1);
       }
       else{
        localStorage.setItem('heartNumber',1);

       }
       heartNumber=localStorage.getItem('heartNumber');
      document.querySelector('#heart_no').textContent=heartNumber;  
  } 
 */

/************** */
    
  let cart_btn=document.querySelectorAll('.cart-btn');
  for (let i=0;i<cart_btn.length;i++){
       cart_btn[i].addEventListener('click',()=>{
              cartNumbers(products[i]);
              
       });
  }
  


  function cartNumbers(product){
     
      let productNumber=localStorage.getItem('cartNumber');
    
      
       productNumber=parseInt(productNumber);
       //console.log(productNumber)

       if(productNumber>=0){
       
        localStorage.setItem('cartNumber',productNumber+1);
       }
       else{
        localStorage.setItem('cartNumber',1);

       }
       productNumber=localStorage.getItem('cartNumber');
      document.querySelector('#cart_no').textContent=productNumber;  

      setItem(product);
      totalCost(product);
  }



  function setItem(product){
    let cartItems=localStorage.getItem('productInCart');
     cartItems=JSON.parse(cartItems);

    
     if(cartItems!=null)
    {

        if(cartItems[product.tag]==undefined){
             cartItems={
               ...cartItems,
               [product.tag]:product
              }
            }
             cartItems[product.tag].incart+=1;
     
     }else{
   
        product.incart=1;
        cartItems={
            [product.tag]:product
           }
     }
     localStorage.setItem("productInCart",JSON.stringify(cartItems));
  }
  

  function totalCost(product)
  {
     let totalCost=localStorage.getItem('totalCost');
     let totalDiscount=localStorage.getItem('totalDiscount');
    
     totalDiscount=parseInt(totalDiscount);
     if(totalCost !=null){
        totalCost=parseInt(totalCost);
        totalCost=totalCost+product.price;
        totalDiscount=totalDiscount+product.discount;
     }else{
        totalCost=product.price;
        totalDiscount=product.discount;
     }
     localStorage.setItem('totalCost',totalCost);
     localStorage.setItem('totalDiscount',totalDiscount);
  }


  function displayCart(){
    let inCartProduct=localStorage.getItem('productInCart');
    let totalcostend=localStorage.getItem('totalCost');
    let totalDiscount=localStorage.getItem('totalDiscount');
     

    inCartProduct=JSON.parse(inCartProduct);
    totalDiscount=parseInt(totalDiscount);
    let productContainer=document.querySelector('.products2');
    //console.log(inCartProduct);
    if(inCartProduct && productContainer){
        productContainer.innerHTML='';
        Object.values(inCartProduct).map(item=>{
            productContainer.innerHTML+= `
           
            <div class="product1">
             <div class="product-title">
             <ion-icon onclick="deletObj(${item.tag})" id="ion-close" name="close-circle-outline"></ion-icon>
             <img class="item-img" src="./images/${item.tag}.png">
            
             <span>${item.name}</span>
             </div>
            <div class="price">${item.price} kr</div>
            <div class="quentity">
            <ion-icon name="remove-circle-outline" onclick="dicr_obj(${item.tag})"></ion-icon>
            <span id="incartspan">${item.incart}</span>
            <ion-icon name="add-circle-outline" onclick="incr_obj(${item.tag})"></ion-icon>
            </div>
            <div class="total">
            <span>${item.price*item.incart} kr</span>
            </div>
            </div>
           
            `;
          
        });

        productContainer.innerHTML+= `
        <div class="totalcost">
        <h1>Total Discount:${totalDiscount} kr</h1>
        </div>
       
        <div class="totalcost">
        <h1>Total Cost:${totalcostend} kr</h1>
        </div>
        `
    }
    
  }

function onreloadpage(){
    let productNumber=localStorage.getItem('cartNumber');
  //  let heartNumber=localStorage.getItem('heartNumber');
    if(productNumber !=null){
        document.querySelector('#cart_no').textContent=productNumber; 
    }
    else{
        document.querySelector('#cart_no').textContent=0;
    }

   /*  if(heartNumber){
        document.querySelector('#heart_no').textContent=heartNumber; 
    }
    else{
        document.querySelector('#heart_no').textContent=0;
    } */
}





// ------delet in cart------
function deletObj(tag)
{ 
   
    var answer = window.confirm("Do You Want To Remove This Product?");
    
    if(answer){
                let inCartProduct=localStorage.getItem('productInCart');
                let totalCost=localStorage.getItem('totalCost');
                let cartNumber=localStorage.getItem('cartNumber');
                let totalDiscount=localStorage.getItem('totalDiscount');

                cartNumber=parseInt(cartNumber);
                totalCost=parseInt(totalCost);
                totalDiscount=parseInt(totalDiscount);
                inCartProduct=JSON.parse(inCartProduct);
                //console.log(tag);
            //  console.log(inCartProduct);

            if(inCartProduct !=null)
            { 
                let incart=inCartProduct[tag].incart;
                let discount=inCartProduct[tag].discount;
                let price=inCartProduct[tag].price;
                let quentity=inCartProduct[tag].incart;

                cartNumber-=incart;
                totalDiscount=totalDiscount-discount*quentity;
                let totalCostOfThis=price*quentity;
                totalCost-=totalCostOfThis;
                
                delete(inCartProduct[tag]);
                

                localStorage.setItem('productInCart',JSON.stringify(inCartProduct)); 
                localStorage.setItem('totalCost',totalCost);
                localStorage.setItem('cartNumber',cartNumber);
                localStorage.setItem('totalDiscount',totalDiscount);
            }
            displayCart();
            onreloadpage();
}
}
//----remove from cart-------
function incr_obj(tag)
{
    let inCartProduct=localStorage.getItem('productInCart');
    let totalCost=localStorage.getItem('totalCost');
    let cartNumber=localStorage.getItem('cartNumber');
    let totalDiscount=localStorage.getItem('totalDiscount');

    cartNumber=parseInt(cartNumber);
    totalCost=parseInt(totalCost);
    totalDiscount=parseInt(totalDiscount);
    inCartProduct=JSON.parse(inCartProduct);

   if(inCartProduct !=null)
   { 
       inCartProduct[tag].incart+=1;
       inCartProduct[tag].discount+inCartProduct[tag].discount;
       cartNumber+=1;
       totalDiscount+=inCartProduct[tag].discount;
       totalCost+=inCartProduct[tag].price;

     localStorage.setItem('productInCart',JSON.stringify(inCartProduct)); 
     localStorage.setItem('totalCost',totalCost);
     localStorage.setItem('cartNumber',cartNumber);
     localStorage.setItem('totalDiscount',totalDiscount);
   }
   displayCart();
   onreloadpage();
}
//---- Adding into a cart----
function dicr_obj(tag)
{
    let inCartProduct=localStorage.getItem('productInCart');
    let totalCost=localStorage.getItem('totalCost');
    let cartNumber=localStorage.getItem('cartNumber');
    let totalDiscount=localStorage.getItem('totalDiscount');

    cartNumber=parseInt(cartNumber);
    totalCost=parseInt(totalCost);
    totalDiscount=parseInt(totalDiscount);
    inCartProduct=JSON.parse(inCartProduct);

   if(inCartProduct !=null)
   {  
       if(inCartProduct[tag].incart>1)
       {
       inCartProduct[tag].incart-=1;
       inCartProduct[tag].discount-inCartProduct[tag].discount;
       cartNumber-=1;
       totalDiscount-=inCartProduct[tag].discount;
       totalCost-=inCartProduct[tag].price;

     localStorage.setItem('productInCart',JSON.stringify(inCartProduct)); 
     localStorage.setItem('totalCost',totalCost);
     localStorage.setItem('cartNumber',cartNumber);
     localStorage.setItem('totalDiscount',totalDiscount);
   }
   displayCart();
   onreloadpage();
}
    
}
//---------------------------



//call functions//
onreloadpage();
displayCart();















/*  


document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});

let countDate = new Date('aug 1, 2021 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();
	gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
	let h = Math.floor((gap % (days)) / (hours));
	let m = Math.floor((gap % (hours)) / (minutes));
	let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);

var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
}); */