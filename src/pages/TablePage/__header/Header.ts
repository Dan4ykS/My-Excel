import Component from '../../../core/Component';
import './Header.scss';

class Header extends Component {
  render() {
    return `
      <div class="tablePage__header">Шапка для таблицы</div>
    `;
  }
}

export default new Header();
