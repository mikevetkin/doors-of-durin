import { AppError } from '@/core/appError/domain/entity/appError';
import { Friend } from './Friend';

describe('Friend Instance', () => {
  test('Если передан пустой код, экземпляр не будет создан', () => {
    const maybeFriend = Friend.parse('');

    expect(maybeFriend.isErr).toBeTruthy();
  });

  test('Если передано рандомное заклинание, экземпляр не будет создан', () => {
    const maybeFriend = Friend.parse('Annon edhellen, edro hi ammen');

    expect(maybeFriend.isOk).toBeFalsy();
    expect(maybeFriend.isErr && maybeFriend.error).toBeInstanceOf(AppError);
    expect(maybeFriend.isErr && maybeFriend.error.message).toBe(
      'Неправильный код для друга'
    );
  });

  describe('Если передано слово "друг" по-эльфийски, то создаётся инстанс друга', () => {
    test('На латинице', () => {
      const maybeFriend = Friend.parse('mellon');

      expect(maybeFriend.isOk).toBeTruthy();
      expect(maybeFriend.isOk && maybeFriend.value).toBeInstanceOf(Friend);
      expect(maybeFriend.isOk && maybeFriend.value.greeting).toBe(
        'Welcome to Moria'
      );
    });

    test('На кириллице', () => {
      const maybeFriend = Friend.parse('мэллон');

      expect(maybeFriend.isOk).toBeTruthy();
      expect(maybeFriend.isOk && maybeFriend.value).toBeInstanceOf(Friend);
      expect(maybeFriend.isOk && maybeFriend.value.greeting).toBe(
        'Добро пожаловать в Морию'
      );
    });

    test('На тэнгваре (синдарин)', () => {
      const maybeFriend = Friend.parse('tj¸$5^');

      expect(maybeFriend.isOk).toBeTruthy();
      expect(maybeFriend.isOk && maybeFriend.value).toBeInstanceOf(Friend);
      expect(maybeFriend.isOk && maybeFriend.value.greeting).toBe(
        'yj$zt^`V 5`C t7Y`B`C'
      );
    });
  });
});
