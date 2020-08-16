import TablePage from './pages/TablePage/TablePage';
import './styles/rebootStyles.scss';
import './styles/variables.scss';
import './styles/formControls.scss';
import './styles/main.scss';
import { find } from './utils/helpFunctionsForHTML';

const rootElement = find('#appMountPoint');

rootElement.insertAdjacentElement('beforeend', TablePage.render());
