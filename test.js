import chai, { use, request } from 'chai';
import chaiHttp from 'chai-http';
import app from './server'; // Adjust the path to your Express app

const { expect } = chai;
use(chaiHttp);

let token = '';

describe('Bank OTP Sync API', function() {
  // Test login
  it('should login and return a token', function(done) {
    request(app)
      .post('/login')
      .send({ username: 'benjamin27', password: 'Nokia@123' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        token = res.body.token; // Save the token for later use
        done();
      });
  });

  // Test receive-otp
  it('should receive OTP and store it', function(done) {
    request(app)
      .post('/receive-otp')
      .set('Authorization', `Bearer ${token}`)
      .send({ otp: '123456' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'OTP received and stored successfully');
        done();
      });
  });

  // Test verify-otp
  it('should verify OTP successfully', function(done) {
    request(app)
      .post('/verify-otp')
      .set('Authorization', `Bearer ${token}`)
      .send({ otp: '123456' })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'OTP verified successfully');
        done();
      });
  });
});
