const menu = [
    {
      name: "Biftek",
      price: "5$",
      img: "https://www.tarifinisevdim.com/uploads/recipe-photos/1920x1280/evde-lezzetli-biftek-pisirmenin-7-puf-noktasi-e69c6e.Jpeg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias pariatur placeat voluptatem error? Commodi cupiditate sapiente tempore deleniti BİFTEK",
      type: "Dinner",
    },
    {
      name: "Serpme Kahvalti",
      price: "3$",
      img: "https://i.pinimg.com/originals/7e/2c/32/7e2c3247152411ad7459fee0c0f2dc49.jpg",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias pariatur placeat voluptatem error? Commodi cupiditate sapiente tempore deleniti SERPME KAHVALTASI",
      type: "Breakfast",
    },
    {
      name: "Spagetti",
      price: "4$",
      img: "https://i.lezzet.com.tr/images-xxlarge/domates-soslu-spagetti-6183f20b-f88d-4e19-99d5-f337c8cedb4e",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates alias pariatur placeat voluptatem error? Commodi cupiditate sapiente tempore deleniti SPAGETTİ",
      type: "Lunch",
    },
    {
      name: "Chocolate ice cream",
      price: "1$",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKEJsTWEQjdlEG95d6kZ0rc_Ueo_AZM6g7g&usqp=CAU",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eligendi excepturi facilis, consectetur autem voluptatum tempore voluptates CHOCOLATE ",
      type: "Shakes",
    },
  ];
  
  
  
  
  
  let createElement  = (typ)=>{
    
    menu.forEach(obj=>{
      let {name,price,img,text,type} = obj
    if(typ ===type || typ=="All"){
      
    let createItemMenu = document.createElement("menu");
    
     createItemMenu.className = "row row-cols-1 row-cols-md-2 g-4";
    
     document.body.appendChild(createItemMenu);
  
     let craeteItemArticle = document.createElement("article");
     craeteItemArticle.className = "col";
     createItemMenu.appendChild(craeteItemArticle);
  
     let createItemCard = document.createElement("div");
     createItemCard.className = "card";
     craeteItemArticle.appendChild(createItemCard);
  
     let createItemImg = document.createElement("img");
     createItemImg.className = "card-img-top";
     createItemCard.appendChild(createItemImg);
     createItemImg.src = img
     
     
     let craeteItemSection = document.createElement("section");
     craeteItemSection.className = "card-body";
     createItemCard.appendChild(craeteItemSection);
  
     let craeteItemh5 = document.createElement("h5");
     craeteItemh5.className = "card-title";
     craeteItemh5.innerText = name;
     let createItemPrice = document.createElement("span")
     createItemPrice.id = "price"
     craeteItemh5.appendChild(createItemPrice)
     createItemPrice.innerText = price
  
     craeteItemSection.appendChild(craeteItemh5);
     let createItemP = document.createElement("p");
     createItemP.className = "card-explain";
     createItemP.innerText =
       text;
     
  
     craeteItemSection.appendChild(createItemP);
     
     
    //  let image = document.querySelector(".card-img-top");
    //  console.log(image);
    //  let pay = document.querySelector("#price");
    //  let partFeed = document.querySelector(".card-title");
    //  let partExplain = document.querySelector(".card-explain");
  
    }
     
    })
    
  }
  window.addEventListener("load",createElement("All"))
   
  
  
  
  
  
  const click = document.querySelector(".btn-group");
  click.addEventListener("click", (e) => {
  
    createElement(e.target.innerText)
    
  
  });
// let  item = menu.map(item=>{
//  if(item.type==="breakfast"){  image.src = item.img;
//   pay.innerText = item.price
//   partFeed.innerText = item.type
//   partExplain.innerText = item.text}
// })
