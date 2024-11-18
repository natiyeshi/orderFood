document.addEventListener("scroll", (event) => {
    y = window.scrollY
    x = window.scrollX
    if(y > 270){
        document.querySelector("nav").style.background = "rgb(0, 0, 0,.7)"
    }else{
        document.querySelector("nav").style.background = "none"
    }
    
})  

let foods =  [
    { name:"ktfo",amount:200,place:"kk", image:"dd.jpg" ,ind:0,available:"Available"},
    { name:"chechebsa",amount:60,place:"kk", image:"photo_2023-02-16_17-40-28.jpg" ,ind:1,available:"Available"},
    { name:"tra sga",amount:300,place:"teachers", image:"photo_2023-02-16_17-40-44.jpg" ,ind:2,available:"Available"},
    { name:"frfr",amount:35,place:"A+", image:"photo_2023-02-16_17-40-59.jpg" ,ind:3,available:"Available"},
    { name:"misir",amount:50,place:"kk", image:"photo_2023-02-16_17-40-36.jpg" ,ind:4,available:"Available"},
    { name:"tbs",amount:150,place:"A+", image:"photo_2023-02-16_17-40-36.jpgphoto_2023-02-16_17-40-36.jpg" ,ind:5,available:"Available"},
    { name:"pasta",amount:50,place:"teachers", image:"photo_2023-02-16_17-41-20.jpg" ,ind:6,available:"Available"},
    { name:"shro",amount:50,place:"A+", image:"photo_2023-02-16_17-40-15.jpg" ,ind:7,available:"Available"},
    { name:"beyaynet",amount:50,place:"KK", image:"ff.jpg" ,ind:8,available:"Available"},
    { name:"dinch",amount:50,place:"kbnesh", image:"photo_2023-02-16_17-51-06.jpg" ,ind:9,available:"Available"},
    { name:"burger",amount:50,place:"kbnesh", image:"photo_2023-02-16_17-41-28.jpg" ,ind:10,available:"Available"},
    { name:"pizza",amount:50,place:"A+", image:"photo_2023-02-16_17-50-06.jpg" ,ind:11,available:"Available"},
    { name:"lazagna",amount:50,place:"kbnesh", image:"photo_2023-02-16_17-39-14.jpg" ,ind:12,available:"Available"},
]

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



function changeItems(target){
    foodContainer.innerHTML = ""
    for(itr of foods){
        if(itr.place == target || target == "all")
            foodContainer.innerHTML += card(itr.name,itr.amount,itr.image,itr.place,itr.ind,itr.available)
    }
}



function card(name,amount,image,place,ind,av){
    str = ""
    if(av == "Available"){
        str = `<div class="delete blue" onclick="soldOut(${ind},this)">${av}</div>`
    } else{
        str = `<div class="delete red" onclick="soldOut(${ind},this)">${av}</div>`
    }
    return  `
            <div class="card">
            <div class="image">
                <img src="/assets/img/${image}" width="350px" height="250px" alt="">
            </div>
            <div class="head">${name}</div>
            <div class="task">
                ${str}
                <div class="cart" onclick="showUpdate(${ind},true)">Update</div>
            </div>
                <div class="disc">
                    <strong>Place :</strong><i>${place}</i><br><br>
                    <strong>Amount :</strong><i>${amount} Birr</i>
                 <br>
                </div>
            </div>  
    `
}


for(itr of foods){
    foodContainer.innerHTML += card(itr.name,itr.amount,itr.image,itr.place,itr.ind,itr.available)
 }

arr = []
function soldOut(index,element){
  if(element.innerHTML != "Available"){
    foods[index].available = "Available"
    element.innerHTML = "Available"
    element.classList.remove("red")
    element.classList.add("blue")
  } else{
    foods[index].available = "Sold out"
    element.innerHTML = "Sold out"
    element.classList.remove("blue")
    element.classList.add("red") 
  }
}


function up(price,name,place,index){
    return `
            <div class="updated-file">
            <h1>update</h1>
            <div>
                <label for="">price</label>
                <input type="text" id="price" value="${price}">
                <label for="">name</label>
                <input type="text" id="name" value="${name}">
                <label for="">place</label>
                <input type="text" id="place" value="${place}"> 
                <button onclick="updateFinish(${index})">update</button>
            </div>
        </div>
    `
}

function showUpdate(index,bool){
    if(!bool){
        document.querySelector(".blure-bg").style.display = "none"
        return
    }
    document.querySelector(".blure-bg").innerHTML = up(foods[index].amount,foods[index].name,foods[index].place,index)
    document.querySelector(".blure-bg").style.display = "flex"

}

 
function updateFinish(ind){
    document.querySelector(".blure-bg").style.display = "none"

    price = document.querySelector("#price").value
    names = document.querySelector("#name").value
    place = document.querySelector("#place").value
    
    foods[ind].amount = price
    foods[ind].name = names
    foods[ind].place = place
    changeItems('all')
}

