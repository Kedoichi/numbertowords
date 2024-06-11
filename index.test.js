const  { convertNumberToWords } = require('./index');

describe('Time to words', () => {
  it('Handles one', () => {
    const numberInWords = convertNumberToWords(1);
    expect(numberInWords).toBe('one');
  });

  it('Handles numbers between 10 and 20', () => {
    const numberInWords = convertNumberToWords(14);
    expect(numberInWords).toBe('fourteen');
  });

  it('Handles numbers between 20 and 100', () => {
    const numberInWords = convertNumberToWords(27);
    expect(numberInWords).toBe('twenty seven');
  });

  it('Handles numbers between 100 and 1000', () => {
    const numberInWords = convertNumberToWords(754);
    expect(numberInWords).toBe('seven hundred and fifty four');
  });

  it('Handles numbers rounded to the nearest hundred', () => {
    const numberInWords = convertNumberToWords(900);
    expect(numberInWords).toBe('nine hundred');
  });

  it('Handles numbers between 1000 and 10000', () => {
    const numberInWords = convertNumberToWords(4521);
    expect(numberInWords).toBe('four thousand five hundred and twenty one');
  });

  it('Handles numbers between 10000 and 100000', () => {
    const numberInWords = convertNumberToWords(20975);
    expect(numberInWords).toBe('twenty thousand nine hundred and seventy five');
  });

  it('Handles numbers rounded to the nearest hundred thousand', () => {
    const numberInWords = convertNumberToWords(800000);
    expect(numberInWords).toBe('eight hundred thousand');
  });

  it('Handles numbers between 100000 and 1000000', () => {
    const numberInWords = convertNumberToWords(999999);
    expect(numberInWords).toBe('nine hundred and ninety nine thousand nine hundred and ninety nine');
  });
});