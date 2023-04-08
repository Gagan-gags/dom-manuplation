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
var content, element;

let headerNav = [
  {
    main_nav: ['Home', 'Wishlist']
  }
];
let loginNav = [
  {
    login_Nav: ['Login', 'Sign up']
  }
];

let footerHeading = [
  {
    footerHead: ['Home', 'About us', 'Links', 'Contact us']
  }
]

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
    a.href = list+'.html';
    ul.appendChild(li);
    li.appendChild(a);
    ul.classList.add('nav', 'mx-auto');
    a.classList.add('text-white', 'text-decoration-none');
    li.classList.add('p-3', 'font-large', 'mr-5', 'text-white');
  });
  document.getElementById('navlist').appendChild(ul);
}

function login() {
  let ul = document.createElement('ul');
  loginNav[0].login_Nav.forEach((list, index) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.innerHTML = list;
    a.href = list+'.html';
    ul.appendChild(li);
    li.appendChild(a);
    ul.classList.add('nav', 'loginBtn');
    a.classList.add('text-decoration-none', 'btn');
    if (index === 0) {
      a.classList.add('btn-outline-light', 'text-white');
    } else if (index === 1) {
      a.classList.add('btn-warning', 'text-dark');
    } 
    li.classList.add('p-3', 'font-large', 'mr-5', 'text-white');
  });
  document.getElementById('navlist').appendChild(ul);
}

// Footer nav  
function Footer() {

  footerNavs.forEach((item) => {
    let div = document.createElement('div');
    footerlist.appendChild(div);
    div.classList.add('col-lg-3');
    let ul = document.createElement('ul');
    ul.classList.add('p-0', 'mt-3');
    
    footerHeading[0].footerHead.forEach((list, index) =>{
      let h4 = document.createElement('h4');
      h4.innerText = 'Link';
      h4.classList.add('pt-4', 'text-white', 'pl-0');
      div.appendChild(h4);
    });
    
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

// singleCard list call here
function userData(data) {
  data.slice(0, 4).forEach((item) => {
    singleCard(item);
  });
// favorite();
  document.getElementById('main');
}

function wishlistUserData(data) {
  data.forEach((item) => {
    if(item.fav_status == true) {
      singleCard(item); 
    }
  });
// favorite();
  document.getElementById('main');
}

// Creating the card list here:
function singleCard(item) {
  let div = document.createElement('div');
  let card = document.createElement('div');
  let wishlist = document.createElement('a');
  let icon = document.createElement('i');

  main.appendChild(div);
  div.classList.add('col-lg-3');
  
  card.appendChild(wishlist);
  wishlist.href = "#";
  if(item.fav_status == true){
    wishlist.classList.add('red');
  }
  wishlist.classList.add('favorite');
  wishlist.setAttribute("id", "heart" + item.id);
  wishlist.setAttribute("card-id", item.id);
  wishlist.setAttribute('onclick', "favorite("+ item.id + ")");
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
  let total = data.length;

  let start = 0;
  let end = 4;

  loadMoreBtn.onclick = () =>{
      start = start + 4;
      end = end + 4;    
    let nextArr = data.slice(start, end);
      for(let i = 0; i < nextArr.length; i++){
        singleCard(nextArr[i], setTimeout(5000));
        loaderContainer.style.display = 'block';
      }
  if(end === total){
      loadMoreBtn.style.display = "none";
      loaderContainer.style.display = 'none';
      console.log(end === total);
    }
  }
}

// on click add to wishlist red class active and remove:
function favorite(ID) {

  var objIndex = data.findIndex(obj => obj.id === ID);
  
  data[objIndex].fav_status = !data[objIndex].fav_status;

  var element = document.getElementById('heart'+ID);
    if(data[objIndex].fav_status == true) {
      element.classList.add("red");
    } else{
      element.classList.remove("red");
    }
  localStorage.setItem("data",JSON.stringify(data));
  sessionStorage.setItem("data",JSON.stringify(data));
}

// Add card show and hide form here:
function showOrHideDiv() {
  var v = document.getElementById('showOrHide');
  if(v.style.display === "none"){
    v.style.display = "block";
    v.classList.add("mystyle");
  } else{
    v.style.display = "none"
    v.classList.remove("mystyle");    
  }
  console.log(showOrHideDiv);
}

// create the wishlist page open 
let pageSlug = location.pathname.split('/').slice(2)[0];
console.log(pageSlug);

// login validation




Header();
login()
if(pageSlug == 'test.html') {
  wishlistUserData(data);
} else {
  userData(data);
}
addcard();
Footer();

