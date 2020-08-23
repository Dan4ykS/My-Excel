import { capitalize } from './utils';

export default abstract class DomListener {
  constructor(protected $root: HTMLElement, protected listeners: string[]) {}

  protected initDomListeners(): void {
    this.listeners.forEach((listener) => {
      const elemMethod = `on${capitalize(listener)}`;
      if (!this[elemMethod]) {
        throw new Error(`Метод ${elemMethod} не опредлен у компонента ${this['name'] || ''}`);
      }
      this.$root.addEventListener(listener, this[elemMethod]);
    });
  }

  protected removeDomListeners(): void {
    this.listeners.forEach((listener) => {
      const elemMethod = `on${capitalize(listener)}`;
      this.$root.removeEventListener(listener, this[elemMethod]);
    });
  }
}
