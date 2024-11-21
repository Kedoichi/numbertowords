const  { convertNumberToWords } = require('./index');

describe('Time to words', () => {
  it('Handles zero', () => {
    const numberInWords = convertNumberToWords(0);
    expect(numberInWords).toBe('zero');
  });
  
  it('Handles one', () => {
    const numberInWords = convertNumberToWords(1);
    expect(numberInWords).toBe('one');
  });
  it('Handles numbers between 10 and 20', () => {
    const numberInWords = convertNumberToWords(14);
    expect(numberInWords).toBe('fourteen');
  });
});
