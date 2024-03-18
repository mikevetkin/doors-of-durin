import { AppError } from '@/core/appError/domain/entity/appError';
import Result, { Ok } from 'true-myth/result';

export class Friend {
  readonly string: string;

  static parse(code: string): Result<Friend, AppError> {
    try {
      if (code === 'mellon' || code === 'мэллон' || code === 'tj¸$5^') {
        return Result.ok(new Friend(code));
      }

      throw new AppError({
        code: 'ERROR_GETTING_FRIEND_INSTANCE',
        message: 'Неправильный код для друга',
        path: [],
      });
    } catch (error) {
      return Result.err(error as AppError);
    }
  }

  private constructor(string: string) {
    this.string = string;
  }
}

export const friend = (): Friend => {
  return (Friend.parse('mellon') as Ok<Friend, AppError>).value;
};
