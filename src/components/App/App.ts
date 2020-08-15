import Component from '../../core/Component';

export default class App extends Component {
  dataForRender: string = '';
  constructor(private Components: Component[]) {
    super();
    this.Components.forEach((Component) => (this.dataForRender += Component.render()));
  }
  render() {    
    return this.dataForRender;
  }
}
