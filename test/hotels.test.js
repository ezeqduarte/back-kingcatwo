const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET HOTELS", function () {
  it("Deberia testear que es un array", function (done) {
    request(app)
      .get("/api/hotels/")
      .expect((response) => {
       
        assert.typeOf(response.body.Hotels, "array", "Es un array");
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });

  it("Deberia testear que es un objeto", function (done) {
    request(app)
      .get("/api/hotels/")
      .expect((response) => {
        response.body.Hotels.forEach((hotel) =>
          assert.typeOf(hotel, "object", "Es un objeto")
        );
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});
