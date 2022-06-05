import app from '../src/application'
import * as request from 'supertest';

describe('Mood router', () => {
  it('It checks if handler is returning an array', async () => {
    await request(app)
      .get('/events')
      .expect(200)
      .expect(function(res) {
        expect(res.body[0]).not.toBe(null);
      });
  })
});
