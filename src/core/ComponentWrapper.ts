import { create } from '../utils/helpFunctionsForHTML';
import { ICWOptions } from './interfaces';

export default class ComponentWrapper {
  constructor(private wrapperSelector: string, private options: ICWOptions) {}
  private getRoot(): HTMLElement {
    const $root = create('div'),
      { components } = this.options;

    $root.classList.add(this.wrapperSelector);
    components.forEach((Component, index) => {
      const component = new Component($root);
      if (index === 2) {
        window[`c`] = component;
      }
      $root.insertAdjacentHTML('beforeend', component.render());
      console.log($root);
      component.init();
    });

    return $root;
  }
  render(): HTMLElement {
    return this.getRoot();
  }
}
