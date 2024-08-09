import { SnakeToSpacePipe } from './snake-to-space.pipe';

describe('SnakeToSpacePipe', () => {
  it('should transform strings correctly', () => {
    const pipe = new SnakeToSpacePipe();

    expect(pipe.transform('hello_world')).toBe('hello world');
    expect(pipe.transform('he_world')).toBe('he world');
  });

  it('should return empty if string is null or undefined correctly', () => {
    const pipe = new SnakeToSpacePipe();

    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});
