const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).not.toBeUndefined()
    expect(typeof (createItem('banana', 'kg', 1.99, 20))).toBe('object');
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 })
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toHaveProperty('quantity', 0);
    expect(createItem('banana', 'kg', 1.99, undefined)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 0 })
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(banana, 'kg', 1.99, 20).toThrow('O nome do item deve ser uma string'));
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem(('banana', 'kg', -1.99, 20)).toThrow('O preço do item deve ser maior que zero'));
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0, 20).toThrow('O preço do item deve ser maior que zero'))
  });
});