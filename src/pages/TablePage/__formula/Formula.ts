import Component from '../../../core/Component';
import './Formula.scss';

export default class Formula extends Component {
  render() {
    return `
      <div class="tablePage__formula">
        <div class="func">Fx</div>
        <div class="formula" contenteditable spellcheck="false"></div>
      </div>
    `;
  }
}

