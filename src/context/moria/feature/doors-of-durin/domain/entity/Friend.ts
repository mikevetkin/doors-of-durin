import { AppError } from '@/core/app-error/domain/entity/appError';
import Result, { Ok, ok } from 'true-myth/result';

export class Friend {
  readonly greeting: string;

  static parse(code: string): Result<Friend, AppError> {
    try {
      switch (code) {
        case 'mellon':
          return ok(new Friend('Welcome to Moria'));
        case 'мэллон':
          return ok(new Friend('Добро пожаловать в Морию'));
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

  private constructor(greeting: string) {
    this.greeting = greeting;
  }
}

export const friend = (): Friend => {
  return (Friend.parse('mellon') as Ok<Friend, AppError>).value;
};
