import Component from './Component';

export interface ICOptions {
  listeners: string[];
}
export interface ICWOptions {
  components: Array<new ($root: HTMLElement) => Component>;
}
