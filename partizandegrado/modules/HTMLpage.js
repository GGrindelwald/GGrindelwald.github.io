import {HTMLelement, html, head, title, body} from './HTMLelement.js';

class HTMLpage {
 #title;
 #build;
 constructor(title, reset, ...contents) {
  class Element extends HTMLelement {
   
  }
  this.#title = title;
  this.#build = contents;
 }
 build() {
  if (reset) {
   body.clear();
  }
  this.#build();
  title.init(this.#title);
 }
}

export default HTMLpage;
