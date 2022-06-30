const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso o parâmetro for indefinido, retorna undefined', () => {
    const actual = handlerElephants();

    expect(actual).toBeUndefined();
  });

  it('caso o parâmetro for inexistente, retorna "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants(null);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual).toBe(expected);
  });

  it('verifica se passar uma chave, retorna seu valor', () => {
    const actual = handlerElephants('name');
    const expected = 'elephants';

    expect(actual).toBe(expected);
  });

  it('verifica se retorna o nome de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(actual).toEqual(expected);
  });

  it('caso for passado errado um parâmetro, retorna null', () => {
    const actual = handlerElephants('rafa');

    expect(actual).toEqual(null);
  });
});
