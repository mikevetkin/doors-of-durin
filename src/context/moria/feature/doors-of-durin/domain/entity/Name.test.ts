import { Name } from './Name';

describe('Name Instance', () => {
  test('Если передана пустая строка, имя не будет создано', () => {
    const maybeName = Name.parse('');

    expect(maybeName.isErr).toBeTruthy();
  });

  test('Если передана строка длиннее 20 символов, имя не будет создано', () => {
    const maybeName = Name.parse('Asadf askldfj laksdfasd');

    expect(maybeName.isErr).toBeTruthy();
  });

  test('Если передано имя длиннее 0 символов и короче 20, то имя будет создано', () => {
    const maybeName = Name.parse('Frodo');

    expect(maybeName.isOk).toBeTruthy();
    expect(maybeName.isOk && maybeName.value).toBeInstanceOf(Name);
    expect(maybeName.isOk && maybeName.value.string).toBe('Frodo');
  });
});
