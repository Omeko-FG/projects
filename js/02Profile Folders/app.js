const reviews = [
  {
    name: "Jesicca Willams",
    job: "FULSTUCK DEVELOPER",
    img: "https://st2.depositphotos.com/1017228/8091/i/600/depositphotos_80915680-stock-photo-businesswoman-standing-with-folder-in.jpg",
    information:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae maiores beatae, tempore amet ipsam exercitationem inventore asperiores nam. Quia, porro nulla nesciunt ex odit et culpa corporis suscipit iusto.  1",
  },
  {
    name: "Maria",
    job: "PYTHON DEVELOPER",
    img: "https://st.depositphotos.com/1037987/4845/i/950/depositphotos_48459163-stock-photo-portrait-of-female-university-student.jpg",
    information:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae maiores beatae, tempore amet ipsam exercitationem inventore asperiores nam. Quia, porro nulla nesciunt ex odit et culpa corporis suscipit iusto.  2",
  },
  {
    name: "Manuela",
    job: "WEB DESİGNER",
    img: "https://st4.depositphotos.com/12982378/25187/i/600/depositphotos_251879625-stock-photo-smiling-student-red-shirt-sitting.jpg",
    information:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae maiores beatae, tempore amet ipsam exercitationem inventore asperiores nam. Quia, porro nulla nesciunt ex odit et culpa corporis suscipit iusto.  3",
  },
  {
    name: "İdris",
    job: "AWS DEVELOPER",
    img: "https://st4.depositphotos.com/1017228/25743/i/600/depositphotos_257433610-stock-photo-handsome-young-man-working-on.jpg",
    information:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae maiores beatae, tempore amet ipsam exercitationem inventore asperiores nam. Quia, porro nulla nesciunt ex odit et culpa corporis suscipit iusto.  4",
  },
  {
    name: "Ayhsan",
    job: "MANANGMENT ASSİSTANT",
    img: "https://static8.depositphotos.com/1008303/880/i/600/depositphotos_8803246-stock-photo-asian-college-student.jpg",
    information:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae maiores beatae, tempore amet ipsam exercitationem inventore asperiores nam. Quia, porro nulla nesciunt ex odit et culpa corporis suscipit iusto.  5",
  },
  {
    name: "Büşra",
    job: "Data Scientist",
    img: "https://st2.depositphotos.com/1524643/6792/i/600/depositphotos_67921957-stock-photo-businesswoman.jpg",
    information:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae maiores beatae, tempore amet ipsam exercitationem inventore asperiores nam. Quia, porro nulla nesciunt ex odit et culpa corporis suscipit iusto.  6",
  },
];
const profilPhoto =document.querySelector("img");
console.log(profilPhoto.getAttributeNames()[0]);
const name = document.getElementById("name")
const job = document.getElementById("section__job")
console.log(job);
const information = document.getElementById("information")
console.log(information);
const LessThanSign = document.getElementById("less_than_sign");
console.log(LessThanSign);
const moreThanSign = document.getElementById("more_than_sign");
console.log(moreThanSign);
// let counter2 = reviews.length-1
// console.log(counter2);
// LessThanSign.addEventListener("click", (e) => {
//   if (counter > 0) {
//     counter--;
//     profilPhoto.src = reviews[counter].img;
//     job.innerText = reviews[counter].job;
//     information.innerText = reviews[counter].information;
//   }
//   console.log(counter);
// });
// moreThanSign.addEventListener("click", (e) => {
//   if (counter < reviews.length-1) {
//     counter++;
//     profilPhoto.src = reviews[counter].img;
//     job.innerText = reviews[counter].job;
//     information.innerText = reviews[counter].information;
//   }
//   console.log(counter);
// });
let counter = 0;
const changes = (counter) => {
  profilPhoto.src = reviews[counter].img;
  job.innerText = reviews[counter].job;
  information.innerText = reviews[counter].information;
};
moreThanSign.addEventListener("click", (e) => {
  if (counter < reviews.length - 1) {
    counter++;
    changes(counter);
  }
  console.log(counter);
});
LessThanSign.addEventListener("click", (e) => {
  if (counter > 0) {
    counter--;
    changes(counter);
  }
  console.log(counter);
});
