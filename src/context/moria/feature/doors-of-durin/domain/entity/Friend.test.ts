import { Friend } from './Friend';

describe('Friend Instance', () => {
  test('Если сказан пустой код, экземпляр не будет создан', () => {
    const maybeFriend = Friend.parse('');

    expect(maybeFriend.isErr).toBeTruthy();
  });

  test('Если сказано рандомное заклинание, экземпляр не будет создан', () => {
    const maybeFriend = Friend.parse('Annon edhellen, edro hi ammen');

    expect(maybeFriend.isErr).toBeTruthy();
  });

  test('Если сказать по-эльфийски друг, то инстанс друга будет создан', () => {
    const maybeFriend = Friend.parse('mellon');

    expect(maybeFriend.isOk).toBeTruthy();
  });
});
