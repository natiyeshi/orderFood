document.addEventListener("scroll", (event) => {
    y = window.scrollY
    x = window.scrollX
    if(y > 570){
        document.querySelector("nav").style.background = "rgb(0, 0, 0,.9)"
    }else{
        document.querySelector("nav").style.background = "none"
    }
    

})  

let foods =  [
    { name:"ktfo",amount:200,place:"kk", image:"dd.jpg" ,ind:0},
    { name:"chechebsa",amount:60,place:"kk", image:"photo_2023-02-16_17-40-28.jpg" ,ind:1},
    { name:"tra sga",amount:300,place:"teachers", image:"photo_2023-02-16_17-40-44.jpg" ,ind:2},
    { name:"frfr",amount:35,place:"A+", image:"photo_2023-02-16_17-40-59.jpg" ,ind:3},
    { name:"misir",amount:50,place:"kk", image:"photo_2023-02-16_17-40-36.jpg" ,ind:4},
    { name:"tbs",amount:150,place:"A+", image:"photo_2023-02-16_17-40-36.jpgphoto_2023-02-16_17-40-36.jpg" ,ind:5},
    { name:"pasta",amount:50,place:"teachers", image:"photo_2023-02-16_17-41-20.jpg" ,ind:6},
    { name:"shro",amount:50,place:"A+", image:"photo_2023-02-16_17-40-15.jpg" ,ind:7},
    { name:"beyaynet",amount:50,place:"KK", image:"ff.jpg" ,ind:8},
    { name:"dinch",amount:50,place:"kbnesh", image:"photo_2023-02-16_17-51-06.jpg" ,ind:9},
    { name:"burger",amount:50,place:"kbnesh", image:"photo_2023-02-16_17-41-28.jpg" ,ind:10},
    { name:"pizza",amount:50,place:"A+", image:"photo_2023-02-16_17-50-06.jpg" ,ind:11},
    { name:"lazagna",amount:50,place:"kbnesh", image:"photo_2023-02-16_17-39-14.jpg" ,ind:12},
]

let orderHistory = []
let cart = []

function card(name,amount,image,place,ind){
    return  `
        <div class="card">
            <div class="image">
                <img src="/assets/img/${image}" width="350px" height="250px" alt="">
            </div>
            <div class="head">${name}</div>
            <div class="task">
                <div class="order" onclick="order(${ind})" >Order</div>
                <div class="cart" onclick="addToCart(${ind},this)">Add to Cart</div>
            </div>
            <pre class="disc">
    price : <strong>${amount} </strong>
    place : <strong>${place} </strong>
            </pre>
        </div>  
    `
}

let foodContainer = document.querySelector(".foods")
let links = document.querySelectorAll(".lists")

links.forEach(element => {
    element.addEventListener("click",()=>{
        element.classList.add("active")
        links.forEach(e => {
            if(e != element){
                e.classList.remove("active")
            }
        })
    })
});

for(itr of foods){
   foodContainer.innerHTML += card(itr.name,itr.amount,itr.image,itr.place,itr.ind)
}

let pop = (img,name,index) =>{
    return  ` <div class="order-card">
                <div class="image">
                    <img id="image" src="${img}" width="400px" alt="">
                </div>
                <div class="head" id="name">${name}</div>
                    <div class="disc">amount  <input style="width:40px;" id="amount" type="number"></div>
                <div class="task">
                    <div class="order" onclick="orderIt(${index},true)">Yes</div>
                    <div class="cart" onclick="orderIt(${index},false)">No</div>
                </div>
            </div> 
        `
}

let orderDiv = (image,name,index)=>{
    return `<div class="card">
                <div class="image">
                    <img src="/assets/img/${image}" width="400px" alt="">
                </div>
                <div class="right">
                    <div class="head">${name}</div>
                    <div class="disc">${name} is good</div>
                    <div class="disc">
                           <span class="remove order" style="background-color:red;" onclick="Remove(${index},'order')"> Remove </span>
                    </div>
                </div>
            </div>`;
}

let cartDiv = (image,name,index)=>{
    return `<div class="card">
                <div class="image">
                    <img src="/assets/img/${image}" width="400px" alt="">
                </div>
                <div class="right">
                    <div class="head">${name}</div>
                    <div class="disc">${name} is good</div>
                    <div class="disc">
                           <span class="remove order" onclick="Remove(${index},'cart')"> Remove </span>
                           <span class="order" onclick="cartToOrder(${index})"> Order </div>
                    </div>
                </div>
            </div>`;
}

function changeItems(target){
    foodContainer.innerHTML = ""
    for(itr of foods){
        if(itr.place == target || target == "all")
            foodContainer.innerHTML += card(itr.name,itr.amount,itr.image,itr.place,itr.ind)
    }
}



function order(index){
    document.querySelector(".blure-bg").style.display = "flex"    
    document.querySelector(".blure-bg").innerHTML = pop("/assets/img/"+foods[index].image,foods[index].name,index) 
}



function orderIt(index,bool){
    if(bool == false){
        document.querySelector(".blure-bg").style.display = "none"    
        return;
    }
    amount = document.querySelector("#amount").value
    if (amount < 1){
        return;
    }
    orderHistory.push(index)

    document.querySelector(".blure-bg .disc").innerHTML = `<audio controls autoplay style="display:none;">
                                                                <source src="./assets/img/1ddfbf70-ae21-11ed-b75a-153d19dc33d6.mp3" type="audio/mp3">
                                                            </audio>`
    document.querySelector(".blure-bg .disc").innerHTML += "Thanks so much for your order! "
    document.querySelector(".blure-bg .order").style.display = "none"
    document.querySelector(".blure-bg .cart").style.background = "blue"
    document.querySelector(".blure-bg .cart").innerHTML = "Finish"
    document.querySelector(".blure-bg .cart").style.color = "white"

}


function addToCart(ind,element){
        cart.push(ind)
        element.style.background = ""
        element.innerHTML = "added"
}

function cartToOrder(index){
    orderHistory.push(index)
    cart.splice(cart.indexOf(index),1)
    showCart(true)
}

function Remove(index,place){
    if(place == "order"){
       orderHistory.splice(orderHistory.indexOf(index),1)
       showOrder(true)
        
    } else{
       cart.splice(cart.indexOf(index),1)
        showCart(true)
    }
}







function showCart(target){
    document.querySelector(".orders").innerHTML = ""
    if(target){
        for(i of cart){
            document.querySelector(".orders").innerHTML += cartDiv(foods[i].image,foods[i].name,i) 
        }
        document.querySelector(".cartOrders").style.display = "flex"
        return;
    }
    
    document.querySelector(".cartOrders").style.display = "none"

}


function showOrder(target){
    document.querySelector(".orders").innerHTML = ""
    if(target){
        for(i of orderHistory){
            document.querySelector(".orders").innerHTML += orderDiv(foods[i].image,foods[i].name,i) 
        }
        document.querySelector(".cartOrders").style.display = "flex"
        return;
    }
    
    document.querySelector(".cartOrders").style.display = "none"

}
