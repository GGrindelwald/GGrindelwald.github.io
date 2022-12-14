import {HTMLelement, html, head, title, body} from './HTMLelement.js';

class HTMLpage {
 #title;
 #build;
 #reset;
 constructor(title, reset, contents) {
  this.#title = title;
  this.#reset = !!reset;
  this.#build = contents;
 }
 build() {
  if (this.#reset) {
   body.clear();
  }
  this.#build();
  document.title = this.#title;
 }
}

export default HTMLpage;
