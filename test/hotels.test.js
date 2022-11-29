const app = require("../app"); //Requiero app
const chai = require("chai"); //Descargo chai
const assert = chai.assert; //Me traigo assert de chai, una propiedad que servia para
const request = require("supertest");

describe("GET HOTELS", function () {
  //Describe es un grupo de test, y ahi uso get hotels
  it("Deberia testear que es un array", function (done) {
    request(app) //hago una request a la app
      .get("/api/hotels/") // traigo hotels de api. hotels
      .expect((response) => {
        //le digo que la respuesta que espero sea:

        assert.typeOf(response.body.Hotels, "array", "Es un array"); // que assert.typeOf me muestre un array
      })
      .end(function (err, res) {
        //.end para terminar la funcion y en caso de que eso pase retorna un done con un error
        if (err) {
          return done(err);
        }

        done(); //en caso de que no haya problema retorna un done sin error.
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

// describe("POST HOTELS", function () {
//   it("Deberia testear que es un number", function (done) {
//     request(app)
//       .post("/api/hotels/")
//       .send({
//         name: "The Big Bolivar",
//         photo: "Bolivar.png",
//         capacity: 23213123,
//         description: "Bolivar",
//         userId: "636d1e66dbb2d08117b1c7c2"  ,
//         cityId: "636d266347cadae084d4c18b",
//       })
//       .expect((response) => {

//         assert.typeOf(response.body.hotelCreated.capacity, "number", "Es un number");
//       })
//       .expect(201)

//       .end(function (err, res) {
//         if (err) {
//           return done(err);
//         }

//         done();
//       });
//   });

// });

describe("DELETE HOTEL", function () {
  it("Deberia testear que el hotel se elimino correctamente", function (done) {
    const id = "6384f46072d62fc913d86362";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEzNDg5YzBjNjViOTc3NjYwZDAzMSIsIm5hbWUiOiJFemVxdWllbCIsInBob3RvIjoiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM_cT10Ym46QU5kOUdjU0NzYTQ3MFhFVkMzQjBCWGxYbEJCbTAzY1M4akQyRmpVekZUbU5zZzlHQ3hIRzhOY1I4RWo5MkI4bllZbnQ4aTJ5LU1rJnVzcXA9Q0FVIiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njk2NTg2ODAsImV4cCI6MTY2OTc0NTA4MH0.11ewyvg-E5EQ2bUGoj-1gQJiN8gThSjhqVd4fEfwapA";

    request(app)
      .delete(`/api/hotels/${id}`)
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
