let hotels = [
    {
      name: "The Harbourview",
      photo: [
        "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        " https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      capacity: 40000,
      description:
        "In this modern hotel located in a cristal skycraper you can enjoy te best comodities and is only 2 mins to the bus.",
      cityId: "636d266347cadae084d4c189", 
      userId: "636d1e66dbb2d08117b1c7c2", 
    },
    {
      name: "Hyatt Place Bangkok Sukhumvit",
      photo: [
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        " https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
      ],
      capacity: 10000,
      description:
        "A modern hotel full of informal restaurants is just 3 min of luxury shops in the comercial Emporium center.",
      cityId: "636d266347cadae084d4c18a",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Cisne Azul",
      photo: [
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        " https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656__340.jpg",
        "https://cdn.pixabay.com/photo/2018/11/09/09/25/interior-3804121_960_720.jpg",
      ],
      capacity: 10000,
      description:
        "A beautiful and relaxing place close to the beach, nice for couples or families.",
      cityId: "636d266347cadae084d4c18b",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Steigenberger Hotel El Tahrir Cairo",
      photo: [
        "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
        " https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768553_960_720.jpg",
      ],
      capacity: 25000,
      description:
        "Steigenberger is a reallly luxury and giant hotel at Cairo with beautiful wievs.",
      cityId: "636d266347cadae084d4c18c",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Tea-Time",
      photo: [
        "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_960_720.jpg ",
        " https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_960_720.jpg ",
        "https://cdn.pixabay.com/photo/2019/12/26/18/41/lamp-4720975_960_720.jpg",
      ],
      capacity: 8000,
      description:
        "If you like tea and bakery come to Tea-Time hotel in London, ideal for families and couples.",
      cityId: "636d266347cadae084d4c18d",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "LaFleur Monclaire",
      photo: [
        "https://cdn.pixabay.com/photo/2015/09/18/01/02/pool-944908_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/04/28/22/14/room-2269591_960_720.jpg ",
        "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
      ],
      capacity: 5000,
      description:
        "LaFleaur Monclaire is one of the top rated hotels in Paris, a really good option for families with pets.",
      cityId: "636d266347cadae084d4c18e",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Isola Sacra",
      photo: [
        "https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219_960_720.jpg ",
        "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg ",
        "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256__340.jpg",
      ],
      capacity: 2000,
      description:
        "Isola Sacra has a really good gastronomy, if you are a pizza and pasta lover this is the place.",
      cityId: "636d266347cadae084d4c18f",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "The Grand Uddhav",
      photo: [
        "https://cdn.pixabay.com/photo/2016/08/26/20/30/hotel-1623064__340.jpg ",
        "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168__340.jpg ",
        "https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594__340.jpg ",
      ],
      capacity: 60000,
      description:
        "Grand Uddhav is a luxury option for the most demanding clients, expensive but worth it.",
      cityId: "636d266347cadae084d4c190",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Erten Konak Hotel",
      photo: [
        "https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg ",
        "https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452__340.jpg ",
        "https://cdn.pixabay.com/photo/2014/06/05/08/12/hotel-lobby-362568__340.jpg",
      ],
      capacity: 15000,
      description:
        "Come and enjoy the best service and native food at Erten Konak.",
      cityId: "636d266347cadae084d4c191",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Berjaya Times Square Hotel",
      photo: [
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
        "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ],
      capacity: 8000,
      description:
        "Berjaya has the most beautiful pool and an excellent attention, a good option if you like to stay at the hotel",
      cityId: "636d266347cadae084d4c192",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Hilton",
      photo: [
        "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ],
      capacity: 18000,
      description:
        "It is an famous Argentinian hotel, usually u gonna find a lot of celebrities in the principal hall.",
      cityId: "636d266347cadae084d4c193",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
    {
      name: "Keihan Tsukiji Ginza Grande",
      photo: [
        "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1600  ",
        "https://images.pexels.com/photos/7786785/pexels-photo-7786785.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ],
      capacity: 23000,
      description:
        "Keihan is one of the most wanted hotels in Tokyo, known for its ecellent native food and massages",
      cityId: "636d266347cadae084d4c194",
      userId: "636d1e66dbb2d08117b1c7c2",
    },
  ];
  
  require("dotenv").config();
  require("../../config/database");
  const Hotel = require("../Hotel");
  
  hotels.forEach((hotel) => {
    Hotel.create({
      name: hotel.name,
      photo: hotel.photo,
      capacity: hotel.capacity,
      description: hotel.description,
      cityId: hotel.cityId,
      userId:hotel.userId
    });
  });