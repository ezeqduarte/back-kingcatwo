let itineraries = [
  {
    citiId: "636d266347cadae084d4c193",
    name: "Ateneo",
    photo: [
      "https://i0.wp.com/fueradeeje.com/wp-content/uploads/2019/11/1.jpg?resize=1024%2C768&ssl=1",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Yenny_Ateneo_Grand_Splendid.jpg/1200px-Yenny_Ateneo_Grand_Splendid.jpg",
      "https://www.metro951.com/wp-content/uploads/2019/01/Librer%C3%ADas-del-Mundo-El-Ateneo-Grand-Splendid-en-Buenos-Aires-Argentina.png",
    ],
    description:
      "The Ateneo is the biggest library in America. In the past Ateneo was theatre but actually you can read books and enjoy a coffee.",
    price: 0,
    duration: 2,
    userId: "636d231d496430c95104ed88",
  },
  {
    citiId: "636d266347cadae084d4c193",
    name: "El caminito",
    photo: [
      "https://enviajes.cl/wp-content/uploads/2021/07/Buenos-Aires-Caminito-Enviajes.jpg",
      "http://laguiadebuenosaires.com/wp-content/uploads/2018/06/caminito-800.jpg",
      "https://i.ytimg.com/vi/PZGP3bLQvt0/maxresdefault.jpg",
    ],
    description:
      "The Caminito is one of the most popular places in Buenos Aires, full of colors, food places and tipical structures",
    price: 0,
    duration: 3,
    userId: "636d2302496430c95104ed86",
  },
  {
    citiId: "636d266347cadae084d4c194",
    name: "Ramen House",
    photo: [
      "https://images-ext-1.discordapp.net/external/YDpNb59ooWCC7S-58wZD6YjNHD4hRdPzhD79xy1DPQI/https/cdn.theculturetrip.com/wp-content/uploads/2013/09/4214974706_c08285fdff_b-1024x768.jpg?width=901&height=676",
      "https://media.discordapp.net/attachments/1026888381814288424/1037160998848704603/unknown.png",
      "https://media.cntraveler.com/photos/5aa2d664be28d60dd24cfdd4/16:9/w_2560%2Cc_limit/GettyImages-544515748.jpg",
    ],
    description:
      "If you had a Japanese grandmother who wanted to make you a large bowl of chicken noodle soup, shed (hopefully) make the equivalent of Afuris chicken and yuzu-based ramen. The place itself is only a counter (almost all ramen shops are) where you order classic ramen bowls from a ticketing machine in front and then basically surround the cooks. The broth here is light, but the grilled char-siu (pork) provides just enough substance and smokiness. Afuri is also in a cool neighborhood and is ideal for an on-the-go ramen stop when you still want to be able to move after you eat. Also, hangovers - its good for those.",
    price: 10,
    duration: 2,
    userId: "636d2325496430c95104ed8a",
  },
  {
    citiId: "636d266347cadae084d4c194",
    name: "1 Day Private Mt Fuji Tour",
    photo: [
      "https://images-ext-1.discordapp.net/external/xkMolEWE-kRb2TXbvQQ3oOSxIhGz0Vh4sO6pqJKUOHY/https/media.tacdn.com/media/attractions-splice-spp-674x446/06/73/17/63.jpg",
      "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/02/Mount-Fuji-New.jpg",
      "https://passionpassport-1.s3.amazonaws.com/wp-content/uploads/2018/01/09185958/mt-fuji-weekend-%40ytksato-e1517088415679-1200x588.jpg",
    ],
    description:
      "The Caminito is one of the most popular places in Buenos Aires, full of colors, food places and tipical structures",
    price: 437,
    duration: 12,
    userId: "636d2302496430c95104ed86",
  },
  {
    citiId: "636d266347cadae084d4c18e",
    name: "Bateaux Parisiens Seine River Gourmet Dinner & Sightseeing Cruise",
    photo: [
      "https://images-ext-2.discordapp.net/external/tqKrGWzRa_ejt2yEzicMgCXFXugLumE60jEgOsm2A5s/https/i.ytimg.com/vi/3ibIzoRc8RM/maxresdefault.jpg?width=1202&height=676",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7e/6d/7a.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/7e/6d/44.jpg",
    ],
    description:
      "Ensure a memorable night out in Paris with a gourmet dinner cruise along the Seine River. Float past the city’s famed monuments, such as the Eiffel Tower, Louvre Museum, and Ile de la Cité aboard a luxury Bateaux Parisiens riverboat. Soak up the magic of Paris from an onboard dining room while enjoying a gourmet 3-course meal. Please note that Champagne and live music are also included on select 8:30pm departures.",
    price: 700,
    duration: 3,
    userId: "636d231d496430c95104ed88",
  },
  {
    citiId: "636d266347cadae084d4c18e",
    name: "Torre Eiffel tour",
    photo: [
      "https://media.tacdn.com/media/attractions-splice-spp-720x480/0b/d1/9f/57.jpg",
      "https://cdn2.civitatis.com/francia/paris/galeria/barco-torre-eiffel.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6a/25/77/caption.jpg?w=1200&h=-1&s=1",
    ],
    description:
      "Bypass the long lines at the Eiffel Tower with this tour that includes summit access. After fast track, skip-the-line access, proceed to the second level to survey the city from the viewing platforms while listening to commentary about Paris culture, traditions, and history. Then, proceed to the summit to see Gustave Eiffel's private apartments and sip Champagne from the onsite bar (own expense).",
    price: 50,
    duration: 2,
    userId: "636d2333496430c95104ed8c",
  },
  {
    citiId: "636d266347cadae084d4c18f",
    name: "Legendary Venice St. Mark's Basilica with Terrace Access & Doge's Palace",
    photo: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/74/cf.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/74/d0.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/9f/e9/21.jpg",
    ],
    description:
      "Delve into Venetian history on this tour that showcases two of the city's most iconic structures and sheds light on the stories behind them both. Enjoy skip-the-line access to both popular attractions. Your first stop is legendary St. Marks Basilica. Wander around the mosaic-covered interior and Byzantine treasures while a local guide fills you in on how this collection came to be. Enjoy the stunning view on Piazza San Marco with your special access to St Marks balcony, then continue to the Doges Palace to explore the former political heart of Venice.",
    price: 35,
    duration: 3,
    userId: "636d2333496430c95104ed8c",
  },
  {
    citiId: "636d266347cadae084d4c18f",
    name: "Venice In a Day: Basilica San Marco, Doges Palace & Gondola ride",
    photo: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/74/85.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3b/bc/39.jpg",
      "https://i.insider.com/60c0e8078afda0001895d55b?width=700",
    ],
    description:
      "First time in Venice? Maximize your time in the city with a full-day itinerary that ticks off all the most memorable attractions. Stroll across the Rialto Bridge and browse the lively Rialto fish market, then hop aboard a traditional gondola for a romantic cruise along the Grand Canal. Next, access St. Marks Basilica and gaze down over the city from the cathedrals rooftop terrace. Finally, enjoy skip-the-line entrance to the grandiose Doges Palace. This small-group tour is limited to 20 people ensuring a personalized experience.",
    price: 58,
    duration: 7,
    userId: "636d2302496430c95104ed86",
  },
  {
    citiId: "636d266347cadae084d4c18b",
    name: "Rio de Janeiro Hang Gliding Experience",
    photo: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/98/26/58.jpg",
      "https://www.wanderingearl.com/wp-content/uploads/2018/12/Rio-de-Janeiro-Hang-Gliding-Just-Fly.jpg",
      "https://cdn.getyourguide.com/img/tour/5a78ea66d1b5e.jpeg/99.jpg",
    ],
    description:
      "Soar above the city of Rio de Janeiro aboard a hang glider during this 4-hour adventure. Accompanied by a fully certified instructor, launch from the Tijuca Forest National Park, and glide over the lush, verdant Mata Atlantica (Atlantic Forest). Take in views of some of Rio's most famous landmarks, such as Sugar Loaf Mountain, the Rocinha Favela, and the Christ the Redeemer Statue atop Corcovado Mountain. Touch down for a gentle landing on the white sands of Sao Conrado Beach. Round-trip transportation is available for additional cost, but a video DVD of your hang-gliding experience is included.",
    price: 30,
    duration: 4,
    userId: "636d2333496430c95104ed8c",
  },
  {
    citiId: "636d266347cadae084d4c18b",
    name: "Favela Walking Tour in Rio de Janeiro",
    photo: [
      "https://cdn.getyourguide.com/img/tour/5b3c75870bdac.jpeg/146.jpg",
      "https://www.localriotours.com.br/wp-content/uploads/2021/09/Favela-Tour.jpg",
      "https://cdn.getyourguide.com/img/tour/6022b51ee3592.jpeg/146.jpg",
    ],
    description:
      "Explore Rocinha Favela, the largest favela in Latin America, during this 4-hour guided educational tour. Walk through the local community with your guide to learn about what life is like there. Interact with members of the community, learn about the history of Rocinha and gain a deeper understanding of the economic and political factors that shape Rio society.",
    price: 5,
    duration: 4,
    userId: "636d231d496430c95104ed88",
  },
  {
    citiId: "636d266347cadae084d4c18d",
    name: "Total London Experience with London Eye, Tower of London, St Paul's",
    photo: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/a2.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/85/cf/d5.jpg",
    ],
    description:
      "Visit some of London's most iconic landmarks on this full-day tour, including a Thames River cruise and a ride on the famous London Eye. Take a tour of St. Pauls Cathedral and admire panoramic views of the capital from your air-conditioned coach. Theres a chance to get a taste of Royal London too, as you tour the notorious Tower of London, view the Crown Jewels and watch the traditional Changing of the Guard ceremony at Buckingham Palace.",
    price: 60,
    duration: 10,
    userId: "636d2302496430c95104ed86",
  },
  {
    citiId: "636d266347cadae084d4c18d",
    name: "Best of London Including Tower of London, Changing of the Guard, with a Cream Tea or London Eye Upgrade",
    photo: [
      "https://www.londoneye.com/media/oympfbtd/22747_london-eye_1a_wheel_099_rgb_ns-psd.jpg",
      "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE",
      "https://www.londoneye.com/media/keihp45b/22747_london-eye_1b_c_pod-to-pod_039_rgb_ns.jpg",
    ],
    description:
      "See the English capitals top landmarks on this most comprehensive of London magical tours. Take a tour of beautiful St Pauls Cathedral, then make a photo stop at Westminster Abbey. Watch the Changing of the Guard at Buckingham Palace and visit the Tower of London, where you'll have free time for lunch (own expense). Enjoy an extended river sightseeing cruise, and upgrade to cap everything with a London Eye flight or cream tea at Harrods.",
    price: 100,
    duration: 9,
    userId: "636d2325496430c95104ed8a",
  },
];

require("dotenv").config();
require("../../config/database");
const Itinerary = require("../Itinerary");

itineraries.forEach((itinerary) => {
  Itinerary.create({
    cityId: itinerary.citiId,
    name: itinerary.name,
    photo: itinerary.photo,
    description: itinerary.description,
    price: itinerary.price,
    duration: itinerary.duration,
    userId: itinerary.userId,
  });
});
