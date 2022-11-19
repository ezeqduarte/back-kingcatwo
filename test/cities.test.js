const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET CITIES", function () {
  it("Deberia testear que es un array", function (done) {
    request(app)
      .get("/api/cities/")
      .expect((response) => {
        assert.typeOf(response.body.cities, "array", "Es un array");
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
      .get("/api/cities/")
      .expect((response) => {
        response.body.cities.forEach((city) =>
          assert.typeOf(city, "object", "Es un objeto")
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
