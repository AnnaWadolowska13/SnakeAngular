import { MyScoresPipe } from './my-scores.pipe';

describe('MyScoresPipe', () => {
  it('create an instance', () => {
    const pipe = new MyScoresPipe();
    expect(pipe).toBeTruthy();
  });
});
