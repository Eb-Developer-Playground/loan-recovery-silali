import { FormatCurrencyPipe } from './format-currency.pipe';

describe('FormatCurrencyPipe', () => {
  it('formats currency correctly', () => {
    const pipe = new FormatCurrencyPipe();
    expect(pipe.transform('10000')).toBe('KES\xa010,000.00');
    expect(pipe.transform('12000')).toBe('KES\xa012,000.00');
    //\xa0 is &nbsp - non breakable space?
  });
});
