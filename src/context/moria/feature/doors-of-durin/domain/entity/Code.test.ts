import { AppError } from '@/core/app-error/domain/entity/appError';
import { CorrectCode } from './Code';

describe('Code Instance', () => {
  test('Если передан пустой код, экземпляр не будет создан', () => {
    const maybeCode = CorrectCode.parse('');

    expect(maybeCode.isErr).toBeTruthy();
  });

  test('Если передано рандомное заклинание, экземпляр не будет создан', () => {
    const maybeCode = CorrectCode.parse('Annon edhellen, edro hi ammen');

    expect(maybeCode.isOk).toBeFalsy();
    expect(maybeCode.isErr && maybeCode.error).toBeInstanceOf(AppError);
    expect(maybeCode.isErr && maybeCode.error.message).toBe('Неправильный код');
  });

  describe('Если передано слово "друг" по-эльфийски, то создаётся инстанс друга', () => {
    test('На латинице', () => {
      const maybeCode = CorrectCode.parse('mellon');

      expect(maybeCode.isOk).toBeTruthy();
      expect(maybeCode.isOk && maybeCode.value).toBeInstanceOf(CorrectCode);
    });

    test('На кириллице', () => {
      const maybeCode = CorrectCode.parse('мэллон');

      expect(maybeCode.isOk).toBeTruthy();
      expect(maybeCode.isOk && maybeCode.value).toBeInstanceOf(CorrectCode);
    });

    test.skip('На тэнгваре (синдарин)', () => {
      const maybeCode = CorrectCode.parse('tj¸$5^');

      expect(maybeCode.isOk).toBeTruthy();
      expect(maybeCode.isOk && maybeCode.value).toBeInstanceOf(CorrectCode);
    });
  });
});
