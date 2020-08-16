import { create } from '../utils/helpFunctionsForHTML';
import { ICWOptions } from './interfaces';
import Component from './Component';

export default class ComponentWrapper {
  constructor(private wrapperSelector: string, private options: ICWOptions) {}
  protected getRoot(): HTMLElement {
    const $root = create('div'),
      { components } = this.options;

    $root.classList.add(this.wrapperSelector);
    components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML('beforeend', component.render());
    });
    return $root;
  }
  render(): HTMLElement {
    return this.getRoot();
  }
}
