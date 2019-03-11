import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('check pipe for strength value 5', () => {
    expect(pipe.transform(5)).toBe('5 (weak)');
  });

  it('check pipe for strength value 10', () => {
    expect(pipe.transform(10)).toBe('10 (strong)');
  });

  it('check pipe for strength value 25', () => {
    expect(pipe.transform(25)).toBe('25 (unbelievable)');
  });
});
