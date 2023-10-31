const { myFizzBuzz } = require('./myFizzBuzz');

describe('Tests myFizzBuzz function', () => {
  it('must return fizzbuzz for divisibles by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('must return fizz for divisibles by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('must return buzz for divisibles by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('must return num for not divisibles by 5 or 3', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('must return false for not numbers', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  });
});
