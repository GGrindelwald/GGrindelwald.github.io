import "./modules/default.js";
import {html, head, title, body} from "./modules/HTMLelement.js";
import Page from "./modules/HTMLpage.js";

const HOME = new Page("Partizan Degrado - Pagina Home", true, ()=>{
 let link1 = head.append("link");
 let link2 = head.append("link");
 link1.setAttribute("rel", "stylesheet");
 link1.setAttribute("rel", "https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
 link2.setAttribute("rel", "stylesheet");
 link2.setAttribute("href", "./style/menu.css");
 let menu = body.append('div');
 menu.id = "menu";
 let list = menu.append("ul");
 let l1 = list.append("li");
 let l2 = list.append("li");
 let a1 = l1.append("a");
 let a2 = l2.append("a");
 a1.setAttribute("href", "./index.html");
 a1.init("Pagina Home");
 a2.setAttribute("href", "./login.html");
 a2.init("Area Membri");
});

HOME.build();