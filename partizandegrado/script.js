import './modules/default.js';
import {html, head, title, body} from './modules/HTMLelement.js';
import Page from './modules/HTMLpage.js';

const HOME = new Page("Partizan Degrado - Pagina Home", true, ()=>{
 let link1 = head.append("link");
 let link2 = head.append("link");
 link1.rel = "stylesheet"
 link1.href = "https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
 link2.rel = "stylesheet"
 link2.href = "style/menu.css"
 let menu = body.append('div');
 let list = menu.append('ul');
 let l1 = list.append('li');
 let l2 = list.append('li');
 l1.href = "index.html";
 l1.innerHTML = "Pagina Home";
 l2.href = "login.html";
 l2.innerHTML = "Area Membri";
 console.log("done")
});

HOME.build();
console.log("ok")