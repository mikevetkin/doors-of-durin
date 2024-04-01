import { AppError } from '@/core/app-error/domain/entity/appError';
import Result, { Ok, ok } from 'true-myth/result';

type Mellon = 'mellon' | 'мэллон';

export class CorrectCode {
  public string: Mellon;

  static parse(code: string): Result<CorrectCode, AppError> {
    try {
      switch (code) {
        case 'mellon':
        case 'мэллон':
          return ok(new CorrectCode(code));
      }

      throw new AppError({
        code: 'ERROR_GETTING_CORRECT_CODE_INSTANCE',
        message: 'Неправильный код',
        path: [],
      });
    } catch (error) {
      return Result.err(error as AppError);
    }
  }

  private constructor(string: Mellon) {
    this.string = string;
  }
}

export const correctCode = (): CorrectCode => {
  return (CorrectCode.parse('mellon') as Ok<CorrectCode, AppError>).value;
};
