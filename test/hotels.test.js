const app = require("../app"); //Requiero app
const chai = require("chai"); //Descargo chai
const assert = chai.assert; //Me traigo assert de chai, una propiedad que servia para 
const request = require("supertest");

describe("GET HOTELS", function () {   //Describe es un grupo de test, y ahi uso get hotels
  it("Deberia testear que es un array", function (done) {
    request(app) //hago una request a la app
      .get("/api/hotels/")  // traigo hotels de api. hotels
      .expect((response) => {  //le digo que la respuesta que espero sea:
        
        assert.typeOf(response.body.Hotels, "array", "Es un array"); // que assert.typeOf me muestre un array 
      })
      .end(function (err, res) { //.end para terminar la funcion y en caso de que eso pase retorna un done con un error
        if (err) {
          return done(err);
        }

        done()  ;  //en caso de que no haya problema retorna un done sin error.
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



describe("POST HOTELS", function () {
  it("Deberia testear que es un number", function (done) {
    request(app)
      .post("/api/hotels/")
      .send({
        name: "The Big Bolivar",
        photo: "Bolivar.png",
        capacity: 23213123,
        description: "Bolivar",
        userId: "636d1e66dbb2d08117b1c7c2"  ,
        cityId: "636d266347cadae084d4c18b",
      })
      .expect((response) => {
      
        assert.typeOf(response.body.hotelCreated.capacity, "number", "Es un number");
      })
      .expect(201)

      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        done();
      });
  });

  // it("Deberia testear que capacity es un number", function (done) {
  //   request(app)
  //     .get("/api/hotels/")
  //     .expect((response) => {
  //       response.body.Hotels.forEach((hotel) =>
  //         assert.typeOf(hotel, "object", "Es un objeto")
  //       );
  //     })
  //     .end(function (err, res) {
  //       if (err) {
  //         return done(err);
  //       }

  //       done();
  //     });
  // });
});
