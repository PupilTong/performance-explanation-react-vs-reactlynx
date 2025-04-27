import lynx from '../dist/lynx/main.json' with { type: 'json' };
import "@lynx-js/web-core";
import type { LynxView } from '@lynx-js/web-core';
import "@lynx-js/web-core/index.css";
import "./main.css";
class RawText extends HTMLElement {
  constructor() {
    super();
  }
  static observedAttributes = ['text'];
  #text?:Text;
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'text') {
      if (oldValue!==newValue) {
        this.#text?.remove();
        this.#text = undefined;
        if (newValue) {
          this.#text = document.createTextNode(newValue);
          this.appendChild(this.#text);
        }
      }
    }
  }
}
customElements.define('raw-text', RawText);


function startLynxView(nm:string) {
  const lynxView = document.createElement('lynx-view') as LynxView;
  lynxView.customTemplateLoader = () => {
    return lynx as any;
  }
  lynxView.initData = nm==='main' ? {index : 0} : {index : 1};
  lynxView.url = 'lynx://main';
  lynxView.setAttribute('style','height:50vh;width:100vw');
  // lynxView.setAttribute('thread-strategy','all-on-ui');
  const root = document.getElementById(nm)!;
  root.appendChild(lynxView);
}

startLynxView('main');
startLynxView('main1');