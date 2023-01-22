// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,set,} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfTyOskSj8Id9PlMiqDzALWJHa1dl7QHY",
  authDomain: "todo-272df.firebaseapp.com",
  projectId: "todo-272df",
  storageBucket: "todo-272df.appspot.com",
  messagingSenderId: "762377388158",
  appId: "1:762377388158:web:ccdec76459c0199acad82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const db = getDatabase();
var a = document.getElementById("inputtask");

window.addtodoitem = function () {
  var obj = {
    task: a.value,
  };
  obj.id = Math.random().toString().slice(2);
  let reference = ref(db, `tasks/${obj.id}/`);
  set(reference, obj);
  console.log(obj);
  var li = document.createElement("Li");
  var b = document.createTextNode(a.value);
  li.appendChild(b);
  var delbtn = document.createElement("button");

  var deltext = document.createTextNode("Delete");
  delbtn.appendChild(deltext);
  li.appendChild(delbtn);
  delbtn.setAttribute("class", "stylebutton");
  delbtn.setAttribute("onclick", "deletetask(this)");

  var editbutton = document.createElement("button");
  var edittext = document.createTextNode("edit");
  editbutton.appendChild(edittext);
  li.appendChild(editbutton);
  mainlist.appendChild(li);

  editbutton.setAttribute("class", "stylebutton");
  editbutton.setAttribute("onclick", "edittask(this)");
  console.log(li);
};



var mainlist = document.getElementById("mainList");
var mainlist = document.getElementById("mainList");
window.deletetask = function (element) {
  element.parentNode.remove();
};
window.edittask = function (element) {
  console.log(element.parentNode);
  element.parentNode.firstChild.nodeValue = prompt();
};
window.deleteitems = function () {
  mainlist.innerHTML = "";
  inp.value = "";
};
