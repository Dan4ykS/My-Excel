import Component from '../../../core/Component';
import './Header.scss';

export default class Header extends Component {
  render() {
    return `
      <div class="tablePage__header">
        <div class="tableName">
          <i class="fas fa-file-excel"></i>
          <input class="formControl" placeholder="Новая таблица"/>
        </div>
        <div class="tableBtn">
          <i class="far fa-plus-square"></i>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    `;
  }
}
