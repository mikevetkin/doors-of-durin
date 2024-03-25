import { CorrectCode, correctCode } from '../code/Code';
import { Name, name } from '../name/Name';
export class Friend {
  code: CorrectCode;
  name: Name;

  constructor(params: Friend) {
    this.code = params.code;
    this.name = params.name;
  }
}

export const friend = (): Friend => {
  return new Friend({ code: correctCode(), name: name() });
};
