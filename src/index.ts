import './styles/rebootStyles.scss';
import './styles/variables.scss';
import './styles/main.scss';
import MainPage from './pages/MainPage/MainPage';
import TablePage from './pages/TablePage/TablePage';

const rootElement: HTMLElement = document.getElementById('appMountPoint');
 


rootElement.innerHTML = TablePage.render() 
