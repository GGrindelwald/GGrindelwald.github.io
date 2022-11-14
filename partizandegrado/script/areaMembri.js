function append(parentId, childTag, childId) {
 var parent = document.getElementById(parentId)
 var child = document.createElement(childTag)
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
append("li3", "ul", "ul3")
append("ul3", "li", "li3A")
append("ul3", "li", "li3B")
append("li3A", "a", "a3A")
append("li3B", "a", "a3B")

var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a3A = document.getElementById("a3A")
var a3B = document.getElementById("a3B")

a1.href = "areaMembri.html"
a1.innerHTML = "Pagina Home"
a2.href = "#"
a2.innerHTML = "Chi siamo"
a3.href = "#"
a3.innerHTML = "Guide"
a3A.href = "#"
a3A.innerHTML = "Metodo up al 90%"
a3B.href = "#"
a3B.innerHTML = "Insediamenti culturali"
