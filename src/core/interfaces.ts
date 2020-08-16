import Component from './Component';

export interface ICWOptions {
  components: Array<new () => Component>;
}


