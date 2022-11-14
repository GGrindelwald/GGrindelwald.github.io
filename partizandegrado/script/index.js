function append(parentId, childTag, childId) {
 let parent = document.getElementById(parentId)
 let child = document.createElement(childTag)
 child.id = childId
 parent.appendChild(child)
}

append("head", "link", "link1")
append("head", "link", "link2")

var link1 = document.getElementById("link1")
var link2 = document.getElementById("link1")

document.title = "Pagina Home - Partizan Degrado"
link1.rel = "stylesheet"
link1.href = "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
link2.rel = "stylesheet"
link2.href = "style/menu.css"

append("body", "div", "menu")
append("menu", "ul", "ul")
append("ul", "li", "li1")
append("ul", "li", "li2")
append("ul", "li", "li3")
append("li1", "a", "a1")
append("li2", "a", "a2")
append("li3", "a", "a3")

var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")

a1.href = "index.html"
a1.innerHTML = "Pagina Home"
a2.href = "#"
a2.innerHTML = "Chi siamo"
a3.href = "login.html"
a3.innerHTML = "Area Membri"
