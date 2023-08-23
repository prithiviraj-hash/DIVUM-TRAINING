
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByUB3T6T1tbigE4hJMSET5aaNq5mAoJ-I",
  authDomain: "crud-using-firebase-8ba02.firebaseapp.com",
  projectId: "crud-using-firebase-8ba02",
  storageBucket: "crud-using-firebase-8ba02.appspot.com",
  messagingSenderId: "446076341293",
  appId: "1:446076341293:web:7780e862e5c3c609fe3ca4",
  measurementId: "G-06Y96K13E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import{getDatabase,set,get,update,remove,ref,child}
from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"

const db=getDatabase();

var enterID=document.querySelector("#enterid");
var enterName=document.querySelector("#entername");
var enterAge=document.querySelector("#enterage");
var findID=document.querySelector("#findid");
var findName=document.querySelector("#findname");
var findAge=document.querySelector("#findage");


var insertbtn=document.querySelector("#insert");
var updatebtn=document.querySelector("#update");
var removebtn=document.querySelector("#remove");
var findbtn=document.querySelector("#find");


insertbtn.addEventListener('click',Insertdata);
updatebtn.addEventListener('click',Updatedata);
removebtn.addEventListener('click',Removedata);
findbtn.addEventListener('click',Finddata);

function Insertdata()
{

    set(ref(db,"People/" + enterID.value),{
        Name:enterName.value,
        ID:enterID.value,
        Age:enterAge.value,
    })
    .then(()=>{
        alert("DATA ADDED SUCCESSFULLY :)")
    })
    .catch((error)=>{
        alert(error)
    });
}

function Finddata()
{

}

function Updatedata()
{

}

function Removedata()
{
 alert("Alert")
}



