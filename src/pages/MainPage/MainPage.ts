import Component from '../../core/Component';
import PageWrapper from '../../core/PageWrapper';
import Header from './__header/Header';
import Dashboard from './__dashboard/Dashboard';
import Recent from './__recent/Recent';

export default new PageWrapper([Header, Dashboard, Recent]);
