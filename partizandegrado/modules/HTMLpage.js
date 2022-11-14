import {HTMLelement, html, head, title, body} from './HTMLelement.js';

class HTMLpage {
 #title;
 #build;
 #reset;
 constructor(pagetitle, reset, contents) {
  this.#title = pagetitle;
  this.#reset = !!reset;
  this.#build = contents;
 }
 build() {
  if (this.#reset) {
   body.clear();
  }
  this.#build();
  title.init(this.#title);
 }
}

export default HTMLpage;
