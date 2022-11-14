function append(parentId, childTag, childId) {
 var parent = document.getElementById(parentId)
 var child = document.createElement(childTag)
 child.id = childId
 parent.appendChild(child)
}

append("head", "link", "link1")
append("head", "link", "link2")

var link1 = document.getElementById("link1")
var link2 = document.getElementById("link2")

document.title = "Accedi - Partizan Degrado"
link1.rel = "stylesheet"
link1.href = "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
link2.rel = "stylesheet"
link2.href = "style/login.css"

append("body", "div", "div")
append("div", "h1", "h1")
append("div", "input", "username")
append("div", "input", "password")
append("div", "button", "button")

var h1 = document.getElementById("h1")
var username = document.getElementById("username")
var password = document.getElementById("password")
var button = document.getElementById("button")

h1.innerHTML = "Accedi"
username.type = "text"
username.placeholder = "Nome utente"
username.name = "username"
password.type = "password"
password.placeholder = "Password"
password.name = "password"
button.innerHTML = "Accedi"

var users = new Map()

users.set('user', "pass")
users.set('User', "pass")

function check(username, password) {
 for(const[key] of users){
  if (username == key & password == users.get(key)) {
   return true
  }
 }
 return false
}

function wait(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2600);
  });
}

function restart() {
 document.getElementById("button").onclick = () => {
  div.removeChild(alert)
 }
}

function successfulLogin() {
 window.location.href = "areaMembri.html";
}

async function displayAlert() {
 let alert = document.createElement("text")
 alert.innerHTML = " Nome utente o password errati"
 alert.id = "alert"
 let div = document.getElementById("div")
 div.appendChild(alert)
 try {
  let x = await wait(alert)
  div.removeChild(x)
 }
 finally {}
}

document.getElementById("button").onclick = () => {
 try {
  let div = document.getElementById("div")
  let alert = document.querySelector("#alert")
  div.removeChild(alert)
 }
 finally {
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  if (check(username, password) == true) {
   successfulLogin()
  } else {
   displayAlert()
  }
 }
}
