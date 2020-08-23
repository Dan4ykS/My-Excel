import Component from '../../../core/Component';
import './Formula.scss';

export default class Formula extends Component {
  constructor($root: HTMLElement) {
    super($root, {
      listeners: ['input', 'click'],
    });
  }

  render() {
    return `
      <div class="tablePage__formula">
        <div class="func">Fx</div>
        <div class="formula" contenteditable spellcheck="false"></div>
      </div>
    `;
  }

  onInput = (event: Event): void => {
    console.log(this.$root);
    const target = event.target as HTMLElement;
    console.log('Formulda event: ', target.textContent);
  };

  onClick = (event: Event): void => {
    console.log(event.target);
  };
}
