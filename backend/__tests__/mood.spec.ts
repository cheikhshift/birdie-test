import app from '../src/application'
import * as request from 'supertest';

describe('Mood router', () => {
  it('checks if handler is returning an array', async () => {
    await request(app)
      .get('/events?page=0&limit=1')
      .expect(200)
      .expect(function(res) {
        expect(res.body[0]).not.toBe(null);
        expect(res.body.length).toBe(1);
      });
  })

  it('checks if event_counts is returning a number', async () => {
    await request(app)
      .get('/count_events')
      .expect(200)
      .expect(function(res) {
        expect(res.body.result).not.toBe(undefined); 
      });
  })
});
