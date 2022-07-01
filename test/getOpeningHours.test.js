const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Caso horas for maior que 12, retorna um erro', () => {
    expect(() => getOpeningHours('Monday', '15:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  it('Caso a abreviação estiver errada, retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '4:00-BM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Caso não seja passado um número como parâmetro, retorna um erro', () => {
    expect(() => getOpeningHours('Sunday', 'string')).toThrowError(new Error('The hour should represent a number'));
  });

  it('Caso seja passado um mês inexistente, retorna um erro', () => {
    expect(() => getOpeningHours('Fridai', '9:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  it('Verifica se getOpeningHours é uma função', () => {
    const actual = typeof getOpeningHours;
    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('Caso os dois parâmetros estejam corretos, retorna o zoo aberto', () => {
    const actual = getOpeningHours('Tuesday', '1:00-PM');
    const expected = 'The zoo is open';

    expect(actual).toBe(expected);
  });

  it('Caso minutos forem maior que 59, retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '4:89-PM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  it('Caso for enviado um horário após o de fechamento, retorna um erro', () => {
    const actual = getOpeningHours('Thursday', '8:30-PM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });
});
