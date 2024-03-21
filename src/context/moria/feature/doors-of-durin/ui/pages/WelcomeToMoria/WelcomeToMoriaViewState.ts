import { WritingSystem } from '../../../domain/entity/Friend';

export class WelcomeToMoriaViewState {
  greeting: WritingSystem;

  constructor(props: WelcomeToMoriaViewState) {
    this.greeting = props.greeting;
  }
}
