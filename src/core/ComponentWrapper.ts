import { create } from '../utils/helpFunctionsForHTML';
import { ICWOptions } from './interfaces';

export default class ComponentWrapper {
  private elementsForRender: string = '';
  constructor(private wrapperSelector: string, private options: ICWOptions) {}
  protected getRoot(): HTMLElement {
    const $root = create('div');
    this.options.components.forEach((Component) => (this.elementsForRender += Component.render()));
    $root.insertAdjacentHTML('beforeend', this.elementsForRender);
    $root.classList.add(this.wrapperSelector);
    return $root;
  }
  render(): HTMLElement {
    return this.getRoot();
  }
}
