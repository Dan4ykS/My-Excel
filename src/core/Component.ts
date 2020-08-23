import DomListener from './DomListener';
import { ICOptions } from './interfaces';

export default abstract class Component extends DomListener {
  constructor($root: HTMLElement, options: ICOptions = {listeners: []}) {
    // console.log($root);
    super($root, options.listeners);
  }
  abstract render(): string;

  init(): void {
    this.initDomListeners();
  }

  destroy(): void {
    this.removeDomListeners();
  }
}
