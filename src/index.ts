import './styles/rebootStyles.scss';
import './styles/variables.scss';
import './styles/main.scss';
import TablePage from './pages/TablePage/TablePage';
import { find } from './utils/helpFunctionsForHTML';

const rootElement = find('#appMountPoint');

rootElement.insertAdjacentElement('beforeend', TablePage.render());
