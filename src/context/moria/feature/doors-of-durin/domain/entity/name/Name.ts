import { AppError } from '@/core/app-error/domain/entity/appError';
import Result, { Ok, ok } from 'true-myth/result';

export class Name {
  public string: string;

  static parse(rawName: string): Result<Name, AppError> {
    if (rawName.length === 0) return Result.err(NameError.TooShort);
    if (rawName.length > 20) return Result.err(NameError.TooLong);

    return ok(new Name(rawName));
  }

  private constructor(string: string) {
    this.string = string;
  }
}

export const name = (): Name => {
  return (Name.parse('Frodo') as Ok<Name, AppError>).value;
};

const NameError = {
  TooShort: new AppError({
    code: 'ERROR_GETTING_NAME_INSTANCE',
    message: 'Слишком короткое имя',
    path: [],
  }),
  TooLong: new AppError({
    code: 'ERROR_GETTING_NAME_INSTANCE',
    message: 'Мы сомневаемся, что это имя',
    path: [],
  }),
};
