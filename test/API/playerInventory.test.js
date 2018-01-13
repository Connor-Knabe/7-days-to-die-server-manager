var supertest = require('supertest');

describe('GET /api/player/inventory @api', function () {
  it('should return OK (200)', function (done) {
    supertest(sails.hooks.http.app)
      .get('/api/player/inventory')
      .query({
        steamId: sails.testUser.steamId,
        serverId: sails.testServer.id
      })
      .expect(200, done);
  });
  it('should return JSON', function (done) {
    supertest(sails.hooks.http.app)
      .get('/api/player/inventory')
      .query({
        steamId: sails.testUser.steamId,
        serverId: sails.testServer.id
      })
      .expect('Content-Type', /json/, done);
  });
  it('should error when no steamId given', function (done) {
    supertest(sails.hooks.http.app)
      .get('/api/player/inventory')
      .query({
        serverId: sails.testServer.id
      })
      .expect(400, done);
  });
  it('should error when no serverId given', function (done) {
    supertest(sails.hooks.http.app)
      .get('/api/player/inventory')
      .query({
        steamId: sails.testUser.steamId,
      })
      .expect(400, done);
  });
});