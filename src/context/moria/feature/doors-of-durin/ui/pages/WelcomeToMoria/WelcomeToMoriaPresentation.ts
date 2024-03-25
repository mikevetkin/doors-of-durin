import { Friend } from '../../../domain/entity/traveller/Friend';
import { WelcomeToMoriaViewState } from './WelcomeToMoriaViewState';

const mapGreeting = {
  mellon: 'Welcome to Moria',
  мэллон: 'Добро пожаловать в Морию,',
};

export const welcomeToMoriaPresentation = (
  friend: Friend
): WelcomeToMoriaViewState =>
  new WelcomeToMoriaViewState({
    greeting: `${mapGreeting[friend.code.string]} ${friend.name.string}`,
  });
