import {getDatabase,ref,get,set,update,remove} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
   
 const db=getDatabase();
  
 var txtV,emailV,numV,subV,msgV

 function sendMsg(event)
{
    event.preventDefault();
    readFormData();
    //code to send data to database

    set(ref(db,"data/" + numV),{
        txt:txtV,email:emailV,num:numV,
        sub:subV,
        msg:msgV
    }).then(()=>{
        alert("data stored")
    }).catch((error)=>{
        alert("Unsuccessful",error);
    });

    clearFormData();
}



let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let register=document.querySelector('.register-form');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


//fireBase code for contact

//getting data from i/p

var txtBox=document.getElementById('txt');
var emailBox=document.getElementById('email');
var numBox=document.getElementById('num');
var subBox=document.getElementById('sub');
var msgBox=document.getElementById('msg');

//getting refrences from button
// var btns=document.getElementById('btn').onclick=sendMsg;
document.getElementById("fff").addEventListener("submit",sendMsg);



//read data from form
function readFormData()
{
    txtV=txtBox.value;
    emailV=emailBox.value;
    numV=numBox.value;
    subV=subBox.value;
    msgV=msgBox.value;
    console.log(txtV,emailV,numV,subV,msgV);
}

//clear data from form

function clearFormData()
{
    txtBox.value="";
    emailBox.value="";
    numBox.value="";
    subBox.value="";
    msgBox.value="";
}



//book now
var pl,ng,di,dout;
function readf(){
    pl=document.getElementById("drop1").value;
    ng=document.getElementById("guests").value;
    di=document.getElementById("datein").value;
    dout=document.getElementById("dateout").value;
    console.log(pl+" "+ng+" "+di+" "+dout);
}
document.getElementById("f2").addEventListener("submit",send);
function send(e){
    e.preventDefault();
    readf();

    set(ref(db,"book/" + di),{
        place:pl,
        guests:ng,
        DateIn:di,
        Dateout:dout,
    }).then(()=>{
        alert("booking done")
    }).catch((error)=>{
        alert("Unsuccessful",error);
    });

    clearFormData();
}


//search
var vl;
document.getElementById("drop2").addEventListener("change",ch);
function ch(){
    // console.log(document.getElementById("drop2"));
    vl=document.getElementById("drop2").value;
    console.log(vl);
    if(vl==1)window.location.href="#leh";
    if(vl==2)window.location.href="#jaipur";
    if(vl==3)window.location.href="#kerela";
    if(vl==4)window.location.href="#sikkim";
    if(vl==5)window.location.href="#mumbai";
    if(vl==6)window.location.href="#kullu";
    if(vl==7)window.location.href="#vrindavan";
    if(vl==8)window.location.href="#lakshdeep";
    if(vl==9)window.location.href="#goa";
}
