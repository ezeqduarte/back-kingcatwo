let cities = [
    {
  
      name: "Hong Kong",
      continent: "Asia",
      photo:
        "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      population: 7400000,
      userId: "636d2302496430c95104ed86",
    },
    {
  
      name: "Bangkok",
      continent: "Asia",
      photo: "https://images.pexels.com/photos/3538236/pexels-photo-3538236.jpeg",
      population: 8000000,
      userId: "636d2302496430c95104ed86",
    },
    {
  
      name: "Rio de Janeiro",
      continent: "America",
      photo:
        "https://images.pexels.com/photos/10254833/pexels-photo-10254833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      population: 6700000,
      userId: "636d2302496430c95104ed86",
    },
    {
  
      name: "El Cairo",
      continent: "Africa",
      photo:
        "https://images.pexels.com/photos/13402991/pexels-photo-13402991.jpeg",
      population: 9500000,
      userId: "636d231d496430c95104ed88",
    },
    {
    
      name: "London",
      continent: "Europe",
      photo:
        "https://images.pexels.com/photos/1427578/pexels-photo-1427578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      population: 9000000,
      userId: "636d231d496430c95104ed88",
    },
    {
  
      name: "Par­is",
      continent: "Europe",
      photo:
        "https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=16",
      population: 2000000,
      userId: "636d231d496430c95104ed88",
    },
    {
  
      name: "Venice",
      continent: "Europe",
      photo:
        "https://images-ext-1.discordapp.net/external/HsI_eZB1_ZhOBVhIIXrMSl3T0bJUzm_ZZmx_86G2MGE/https/images8.alphacoders.com/437/437746.jpg?width=1082&height=676",
      population: 3000000,
      userId: "636d2325496430c95104ed8a",
    },
    {
   
      name: "Delhi",
      continent: "Asia",
      photo:
        "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      population: 18000000,
      userId: "636d2325496430c95104ed8a",
    },
    {
   
      name: "Estambul",
      continent: "Europe",
      photo:
        "https://images.pexels.com/photos/11077076/pexels-photo-11077076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      population: 1800000,
      userId: "636d2325496430c95104ed8a",
    },
    {
  
      name: "Kuala Lumpur",
      continent: "Asia",
      photo:
        "https://images.pexels.com/photos/6016676/pexels-photo-6016676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      population: 3000000,
      userId: "636d2333496430c95104ed8c",
    },
    {
  
      name: "Buenos Aires",
      continent: "America",
      photo:
        "https://www.patagonline.com/wp-content/uploads/2020/12/obelisco-buenos-aires-scaled.jpg",
      population: 2000000,
      userId: "636d2333496430c95104ed8c",
    },
    {
  
      name: "Tokyo",
      continent: "Asia",
      photo:
        "https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/japon_tokio_montefuji_shutterstock_756354574_sean_pavone_shutterstock.jpg?itok=3nrPOQvT",
      population: 7500000,
      userId: "636d2333496430c95104ed8c",
    },
  ];
  
  require("dotenv").config();
  require("../../config/database");
  const City = require("../City");
  
  
  cities.forEach(city=>{
  
    City.create({
  
      name: city.name,
      continent: city.continent,
      photo: city.photo,
      population: city.population,
      userId:  city.userId
  
  
    })
  })