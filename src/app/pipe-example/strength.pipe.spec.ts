import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  });

  it('create an instance', () => {
    pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('providing no value returns fallback', () => {
    expect(pipe.transform(5)).toBe('5 (weak)');
  });

  it('providing a value returns value', () => {
    expect(pipe.transform(10)).toBe('10 (strong)');
  });

  it('asking for https returns https', () => {
    expect(pipe.transform(25)).toBe('25 (unbelievable)');
  });
});
