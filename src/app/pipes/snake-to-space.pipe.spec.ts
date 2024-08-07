import { SnakeToSpacePipe } from './snake-to-space.pipe';

describe('SnakeToSpacePipe', () => {
  it('should transform strings correctly', () => {
    const pipe = new SnakeToSpacePipe();

    expect(pipe.transform('hello_world')).toBe('hello world');
    expect(pipe.transform('he_world')).toBe('he world');
  });
});
