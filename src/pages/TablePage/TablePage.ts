import ComponentWrapper from '../../core/ComponentWrapper';
import Header from './__header/Header';
import Toolbar from './__toolbar/Toolbar';
import Formula from './__formula/Formula';
import Table from './__table/Table';

export default new ComponentWrapper('tablePage',{ components: [Header, Toolbar, Formula, Table] });
