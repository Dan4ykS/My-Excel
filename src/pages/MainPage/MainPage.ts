import ComponentWrapper from '../../core/ComponentWrapper';
import Header from './__header/Header';
import Dashboard from './__dashboard/Dashboard';
import Recent from './__recent/Recent';

export default new ComponentWrapper('mainPage', { components: [Header, Dashboard, Recent] });
