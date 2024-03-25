import { AppError } from '@/core/app-error/domain/entity/appError';
import Result, { Ok, ok } from 'true-myth/result';

export class Name {
  public string: string;

  static parse(rawName: string): Result<Name, AppError> {
    try {
      if (rawName.length === 0) throw NameError.ToShort;
      if (rawName.length > 20) throw NameError.ToLong;

      return ok(new Name(rawName));
    } catch (error) {
      return Result.err(error as AppError);
    }
  }

  private constructor(string: string) {
    this.string = string;
  }
}

export const name = (): Name => {
  return (Name.parse('Frodo') as Ok<Name, AppError>).value;
};

const NameError = {
  ToShort: new AppError({
    code: 'ERROR_GETTING_NAME_INSTANCE',
    message: 'Слишком короткое имя',
    path: [],
  }),
  ToLong: new AppError({
    code: 'ERROR_GETTING_NAME_INSTANCE',
    message: 'Мы сомневаемся, что это имя',
    path: [],
  }),
};
