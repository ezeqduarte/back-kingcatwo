let users= [
    {
  
      name: "Cris",
      lastName: "Zamora",
      photo: "https://images-ext-1.discordapp.net/external/AaGXNWjBfTQM_FBN6QaS51ejDwQDyftAInt_Glx_2q8/%3Fe%3D2147483647%26v%3Dbeta%26t%3DpDt_38Kp_RgyP03pDpHRx5OVAQ29EofuCzG3IKquX2I/https/media-exp1.licdn.com/dms/image/C5603AQGarh-w4fGyXw/profile-displayphoto-shrink_800_800/0/1651807208548?width=671&height=671",
      age: 28,
      email: "criszamo@gmail.com",
      password: "c8buenastoronjas",
      code: 589,
      verified: true,
      logged: true,
    },
    {
  
      name: "Mateo",
      lastName: "Calvo",
      photo:"https://images-ext-2.discordapp.net/external/KEVn6jYrLFf6PCvLepJ2QjS3TpVcL8Q0KcDWW_8Ma1Q/http/www.urologistica.com.ar/wp-content/uploads/2020/09/dr-calvo.png",
      age: 23,
      email: "calvoelking10@gmail.com",
      password: "godno7889",
      code: 119,
      verified: true,
      logged: true,
    },
  
    {
  
      name: "Julian Omar",
      lastName: "Maruca",
      photo: "https://images-ext-1.discordapp.net/external/TrNsJLLweAuy5pDKnJfsouaIJ6iaVuEsoiOKIWSsRww/https/pbs.twimg.com/profile_images/1414697526565945345/tEhUY3-c_400x400.jpg",
      age: 23,
      email: "julimaruca3@gmail.com",
      password: "3p3pjulim",
      code: 354,
      verified: true,
      logged: true,
    },
  
    {
  
      name: "Miriam",
      lastName: "Duarte",
      photo:"https://images-ext-1.discordapp.net/external/q8YlokvWSqCVSmqluYnLLFRP6ztdPVLSYaWhJ1CVza0/%3Fe%3D1669852800%26v%3Dbeta%26t%3DQ1mIfa15tKYIIUPXB8eN64sG2QoRFomZTE2uPt18JGI/https/media-exp1.licdn.com/dms/image/C4D03AQHrKwj7MqsRVg/profile-displayphoto-shrink_200_200/0/1603465158145",
      age: 31,
      email: "miriamd15@gmail.com",
      password: "matesx3aldia8",
      code: 777,
      verified: true,
      logged: true,
    },
  ];
  
  require("dotenv").config();
  require("../../config/database");
  const User = require("../User");
  
  users.forEach((user) => {
   User.create({
      name: user.name,
      lastName: user.lastName, 
      photo: user.photo,
      age: user.age,
      email: user.email, 
      password: user.password,
      code: user.code,
      verified: user.verified,
      logged: user.logged,
    });
  });