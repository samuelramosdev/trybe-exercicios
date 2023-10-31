const { encode, decode } = require('./encodeDecode');

describe('Tests encode, decode functions', () => {
  it('typeof must be function', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('must encode only the vowel "a" in "1"', () => {
    expect(encode('ana')).toBe('1n1');
  });

  it('must encode only the vowel "e" in "2"', () => {
    expect(encode('ele')).toBe('2l2');
  });

  it('must encode only the vowel "i" in "3"', () => {
    expect(encode('xixi')).toBe('x3x3');
  });

  it('must encode only the vowel "o" in "4"', () => {
    expect(encode('ovo')).toBe('4v4');
  });

  it('must encode only the vowel in "5"', () => {
    expect(encode('nu')).toBe('n5');
  });

  it('must decode only the number "1" in "a"', () => {
    expect(decode('1')).toBe('a');
  });

  it('must decode only the number "2" in "e"', () => {
    expect(decode('2')).toBe('e');
  });

  it('must decode only the number "3" in "i"', () => {
    expect(decode('3')).toBe('i');
  });

  it('must decode only the number "4" in "o"', () => {
    expect(decode('4')).toBe('o');
  });

  it('must decode only the number "5" in "u"', () => {
    expect(decode('5')).toBe('u');
  });

  it('must return the same number of characteres', () => {
    expect(encode('aeiou').length).toEqual(5);
  });
});
