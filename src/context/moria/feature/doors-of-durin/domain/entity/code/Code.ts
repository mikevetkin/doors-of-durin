import { AppError } from '@/core/app-error/domain/entity/appError';
import Result, { ok, err, Ok } from 'true-myth/result';

type Mellon = 'mellon' | 'мэллон';

export class CorrectCode {
  public code: Mellon;

  static parse(code: string): Result<CorrectCode, AppError> {
    switch (code) {
      case 'mellon':
      case 'мэллон':
        return ok(new CorrectCode(code));
      default:
        return err(CodeError.InvalidСode);
    }
  }

  private constructor(code: Mellon) {
    this.code = code;
  }
}

export const correctCode = (): CorrectCode => {
  return (CorrectCode.parse('mellon') as Ok<CorrectCode, AppError>).value;
};

const CodeError = {
  InvalidСode: new AppError({
    code: 'ERROR_GETTING_CORRECT_CODE_INSTANCE',
    message: 'Неправильный код',
    path: [],
  }),
};
