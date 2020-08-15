import Component from './Component';

export default class PageWrapper extends Component {
  private dataForRender: string = '';
  constructor(private Components: Component[]) {
    super();
    this.Components.forEach((Component) => (this.dataForRender += Component.render()));
  }
  render() {
    return this.dataForRender;
  }
}
