import Component from '../../../core/Component';
import './Toolbar.scss';

export default class Toolbar extends Component {
  render() {
    return `
      <div class="tablePage__toolbar">
        <i class="fas fa-bold"></i>
        <i class="fas fa-italic"></i>
        <div>
          <i class="fas fa-align-left"></i>
          <i class="fas fa-sort-down"></i>
        </div>
        
      </div>
    `;
  }
}
