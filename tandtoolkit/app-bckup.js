"use strict";

let dataInitilize = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    fav_status:false,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    fav_status:false,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    fav_status:false,
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    fav_status:false,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    fav_status:false,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    fav_status:false,
  },
  {
    id: 7,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    fav_status:false,
  },
  {
    id: 8,
    email: "marshall.gagan@rubicotech.in",
    first_name: "Marshall",
    last_name: "Gagan",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    fav_status:false,
  },
  {
    id: 9,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    fav_status:false,
  },
  {
    id: 10,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    fav_status:false,
  },
  {
    id: 11,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    fav_status:false,
  },
  {
    id: 12,
    email: "marshall.gagan@rubicotech.in",
    first_name: "Marshall",
    last_name: "Gagan",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    fav_status:false,
    
  },
  
];

var newUsers = JSON.parse(localStorage.getItem("data"));
const data = (newUsers != null && newUsers.length > 0) ? newUsers : dataInitilize;
//* ************************************** */
console.log(data);
var content, element;

let headerNav = [
  {
    main_nav: ['Home', 'About us', 'Services', 'Gallary', 'Contact us']
}];

let footerNavs = [
  ['Aim', 'Vision', 'Testimonials', 'Career'],
  ['Writing', 'Internships', 'Coding', 'Teaching'],
  ['Home', 'About Us', 'Career', 'What To Do'],
  ['Terms & Condition', 'Privacy & Policy', 'F&Q']
];

// header nav shows 
function Header() {
  let ul = document.createElement('ul');
  headerNav[0].main_nav.forEach((list) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = list;
    a.href = list;
    li.appendChild(a);
    ul.appendChild(li);
    ul.classList.add('nav', 'mx-auto');
    a.classList.add('text-white', 'text-decoration-none');
    li.classList.add('p-3', 'font-large', 'mr-5', 'text-white');
  });
  document.getElementById('navlist').appendChild(ul);
}

// Footer nav  
function Footer() {
  // for (let i = 0; i <= 3; i++) {
  footerNavs.forEach((item) => {
    let div = document.createElement('div');
    footerlist.appendChild(div);
    div.classList.add('col-lg-3');
    let ul = document.createElement('ul');
    ul.classList.add('p-0', 'mt-3');
    let h4 = document.createElement('h4');

    h4.innerText = 'Link';
    h4.classList.add('pt-4', 'text-white', 'pl-0');

    div.appendChild(h4);
    item.forEach(
      (item) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerHTML = item;
        a.href = item;
        div.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(a);
        ul.classList.add('mx-auto');
        a.classList.add('text-white', 'text-decoration-none');
        li.classList.add('pb-2', 'font-large', 'mr-5', 'text-white');
      }
    );
    document.getElementById('footerlist').appendChild(div);
  });
};

/// card list call here
function userData(data) {
  data.slice(0, 4).forEach((item) => {
    singleCard(item);
  });
  //favorite();
  document.getElementById('main');
}

/// Creating the card list here:
function singleCard(item) {
  let div = document.createElement('div');
  let card = document.createElement('div');
  let wishlist = document.createElement('a');
  let icon = document.createElement('i');

  main.appendChild(div);
  div.classList.add('col-lg-3');
  
  card.appendChild(wishlist);
  wishlist.href = "#";
  if(item.fav_status== true){
    wishlist.classList.add('red');
  }
  wishlist.classList.add('favorite');
  wishlist.setAttribute("id", "heart" + item.id);
  wishlist.setAttribute("card-id", item.id);
  wishlist.setAttribute('onclick', "favorite("+ item.fav_status +","+ item.id + ")");
  // wishlist.setAttribute('data-id', item);

  wishlist.appendChild(icon);
  icon.classList.add('fa-solid', 'fa-heart');
  div.setAttribute('data-id', item.id);

  div.classList.add('mb-4');
  div.appendChild(card);
  card.classList.add('card');
  let img = document.createElement('img');
  img.src = item.avatar;

  card.appendChild(img);
  let cardbody = document.createElement('div');
  card.appendChild(cardbody);
  cardbody.classList.add('card-body');

  let h4 = document.createElement('h4');
  h4.innerHTML = item.first_name + " " + item.last_name;
  h4.classList.add('p-1', 'text-secondary');
  cardbody.appendChild(h4);

  let a = document.createElement('a');
  a.innerHTML = item.email;
  a.href = item.email;
  a.classList.add('text-muted');
  cardbody.appendChild(a);
}

/// Load more on click load more fxn here:
function addcard() {
  let loadMoreBtn = document.querySelector('#load-more-btn');
  let loaderContainer = document.querySelector('.spinner');
  loaderContainer.style.display = 'none';
  let total = data.length;

  let start = 0;
  let end = 4;

  loadMoreBtn.onclick = () =>{
      start = start + 4;
      end = end + 4;    
    let nextArr=data.slice(start, end);
      for(let i = 0; i < nextArr.length; i++){
        singleCard(nextArr[i], 3000);
        loaderContainer.style.display = 'block';
      }
     // favorite();
    if(end===total){
      loadMoreBtn.style.display = "none";
      loaderContainer.style.display = 'none';
    }
  }
}

// store the localstorage for add to wihslist
//let favData = [];
// function addWishlist(cardId) {
//   // console.log("adding item to whilist"+cardId);
//   const jsonObj = cardId;
//   // let favData = JSON.parse(localStorage.getItem(favData))
//   // console.log(typeof(favData));
//   favData.push(jsonObj);
//   //console.log(favData);
//  // localStorage.setItem("favData", JSON.stringify(favData));

//   data.forEach((item) => {
//     singleCard(item);
//   });

// }

// function removeWishlist(cardId) {
//   // console.log("Remove item to whilist"+cardId);
//   const jsonObj = JSON.stringify(cardId);
//   localStorage.removeItem("cardId", jsonObj);
//   // send http request
// }

// on click add to wishlist 
function favorite(item,ID){
  var objIndeex = data.findIndex(obj=>obj.id===ID);
   item = !item;
   //console.log(data[objIndeex].fav_status);
  switch(data[objIndeex].fav_status){
    case true:
    data[objIndeex].fav_status = false;
    break;
    case false:
    data[objIndeex].fav_status = true;
    break;
  }
var element = document.getElementById('heart'+ID);
//console.log(element);
if(data[objIndeex].fav_status==true){
  element.classList.add("red");
}else{
  element.classList.remove("red");
}
localStorage.setItem("data",JSON.stringify(data));

console.log(data[objIndeex].fav_status);
// let wishlistButton = document.querySelectorAll('#heart')
// wishlistButton.forEach(wishlist => {
//   wishlist.addEventListener('click', function handleClick(event) {
//   // console.log('box clicked', event);
//   const cardId = this.getAttribute('card-id');
//     // console.log('sdfsdf');
//      if(this.classList.contains('red')){
//        removeWishlist(cardId);
//        this.classList.remove('red');
//      }else{
//        this.classList.add('red');
//        console.log(data);
//        addWishlist(cardId);
//      }
//    });
//   });
}

// add card show and hide form here:
function showOrHideDiv() {
  var v = document.getElementById('showOrHide');
  if(v.style.display === "none"){
    v.style.display = "block";
    v.classList.add("mystyle");
  }else{
    v.style.display = "none"
    v.classList.remove("mystyle");    
  }
}
// if(!localStorage.getItem('data')){
//   const jsonObj = JSON.stringify(data);
//   localStorage.setItem("data", jsonObj);
// }



Header();
// if(newUsers.length>0){
// data = newUsers;
// }
userData(data);
addcard();
Footer();

