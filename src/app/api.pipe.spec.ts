import { ApiPipe } from './api.pipe';

describe('ApiPipe', () => {
  it('create an instance', () => {
    const pipe = new ApiPipe();
    expect(pipe).toBeTruthy();
  });
});
