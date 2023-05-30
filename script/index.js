let products = [
  {
    id: 1,
    img: "https://i.postimg.cc/3xRRTXGD/wallpaperflare-com-wallpaper-2.jpg",
    name: "Wetback Cabin",
    location: "Transylvania, Romanian",
    description:
      "If you are looking to get away from the buzz of the modern world and get yourself spooked, this lovely home located deep within Transylvanian woods is the best choice.",
    specs:
      "3 bedrooms, 1 bathroom, fully furnished, located deep within the woods for ultimate privacy.",
    price: "€1.5m",
    purchase: "Purchase Property"
  },
  {
    id: 2,
    img: "https://i.postimg.cc/tCnSmfS1/wallpaperflare-com-wallpaper-3.jpg",
    name: "Anger House",
    location: "Sibiu, Romania",
    description:
      "Located within no mans land in the Romanian civil war of 1818, the previous owners fell victim to the ills of war. It is said that their presence can still be felt after 11pm.",
    specs:
      "2 bedrooms, bathroom that includes shower, unfurnished, attic, barn has been reinforced after the civil war. ",
    price: "€2.3m",
    purchase: "Purchase Property"
  },
  {
    id: 3,
    img: "https://i.postimg.cc/y87PzXFK/wallpaperflare-com-wallpaper-6.jpg",
    name: "Hospital Para Los Condenados",
    location: "Seville, Spain",
    description:
      "For people who are not interested in holding on sanity any longer, this place is perfect. Previously used as a hospital in Renaissance times, many patients were experimented on using forbidden methods. These experiments were the cause of scores of untimely deaths.",
    specs:
      "20 bedrooms, 3 bathrooms, 6 toilets, place has been vacant since the 1580s.",
    price: "€9.8m",
    purchase: "Purchase Property"
  },
  {
    id: 4,
    img: "https://i.postimg.cc/KjpYk4SY/wallpaperflare-com-wallpaper-5.jpg",
    name: "Kaisers Flucht",
    location: "Stuttgart, Germany",
    description:
      "Previously owned by a German Kaiser who used it as a getaway from his duties as emperor. One fateful night the Kaiser had murdered his 2 daughters along with his wife and then proceeded to commit suicide. It is said that the walls of this lovely estate was speaking to him weeks building up to this tragedy.",
    specs:
      "6 bedrooms, 6 bathooms fully equipped with baths and showers, olympic pool, view of the city, a lovely garden for our tree huggers.",
    price: "€6.7m",
    purchase: "Purchase Property"
  },
];
let disProducts = document.querySelector(".products");
products.forEach((data) => {
  disProducts.innerHTML += `
    <div class="card m-3 p-1 text-black" style="width: 100vh;">
  <img src="${data.img}" class="card-img-top img-fluid w-100 h-100" alt="...">
  <div class="card-body">
    <h3 class="card-title">${data.name}</h3>
    <h4 class="card-location">${data.location}</h4>
    <p class="card-text">${data.description}</p>
    <li class="card-text">${data.specs}</li>
    <li>${data.price}</li>
    <a href="#" class="btn d-block m-2">${data.purchase}</a>
  </div>
</div>`;
});
