import { CorrectCode, correctCode } from './Code';
export class Friend {
  code: CorrectCode;

  constructor(params: Friend) {
    this.code = params.code;
  }
}

export const friend = (): Friend => {
  return new Friend({ code: correctCode() });
};
