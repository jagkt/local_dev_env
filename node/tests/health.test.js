const request = require('supertest');
const app = require('../index'); // ensure module.exports = app

describe('Health Check', () => {
  it('should return ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
