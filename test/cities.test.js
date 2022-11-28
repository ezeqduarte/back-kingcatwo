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

describe("POST CITIES", function () {
  it("Deberia testear que el name es un string", function (done) {
    request(app)
      .post("/api/cities/")
      .send({
        name: "Mendoza",
        continent: "America",
        photo:
          "https://www.redcabanias.com/blog/wp-content/uploads/2019/06/mm1.jpg",
        population: "13312310",
        userId: "636d1e66dbb2d08117b1c7c2",
      })
      .expect((response) => {
        assert.typeOf(response.body.id.name, "string", "Name es un string");
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });

  it("Deberia testar que hay un error 404 al crear mal un hotel", function (done) {
    request(app)
      .post("/api/citie/")
      .expect(404)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});

describe("DELETE CITIES", function () {
  it("Deberia testear que la ciudad se elimino correctamente", function (done) {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEzNDg5YzBjNjViOTc3NjYwZDAzMSIsIm5hbWUiOiJFemVxdWllbCIsInBob3RvIjoiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM_cT10Ym46QU5kOUdjU0NzYTQ3MFhFVkMzQjBCWGxYbEJCbTAzY1M4akQyRmpVekZUbU5zZzlHQ3hIRzhOY1I4RWo5MkI4bllZbnQ4aTJ5LU1rJnVzcXA9Q0FVIiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njk2NTg2ODAsImV4cCI6MTY2OTc0NTA4MH0.11ewyvg-E5EQ2bUGoj-1gQJiN8gThSjhqVd4fEfwapA";

    const idCity = "6382c589b2f859b8004b0891";

    request(app)
      .delete(`/api/cities/${idCity}`)
      .auth(token, { type: "bearer" })
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });
});
