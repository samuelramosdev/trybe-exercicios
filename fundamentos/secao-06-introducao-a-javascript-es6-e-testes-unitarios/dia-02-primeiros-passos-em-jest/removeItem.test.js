const { removeItem } = require('./removeItem');

describe('tests removeItem funtion', () => {
  it('must remove the item', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('musnt remove an invalid item', () => {
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
