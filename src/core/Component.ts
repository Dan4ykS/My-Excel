import DomListener from './DomListener';

export default abstract class Component extends DomListener{
  abstract render(): string;
}
