const SIMILARS_1 = [2,3,4];  
const SIMILARS_2 = [3,100,1000];  
const SIMILARS_3 = [100,1000,10000];  
const SIMILARS_4 = [1,2,5]; 
const SIMILARS_5 = [1,2,6];  



const GAMES = [
    { id: 1,    name: "cyberpunk",            url: "https://www.somosxbox.com/wp-content/uploads/2022/02/cri%CC%81ticas-a-Cyberpunk-2077-next-gen.jpg",  price: 10},
    { id: 2,    name: "Death Stranding",      url: "https://assets-prd.ignimgs.com/2021/09/23/deathstrandingdirectorscut-review-blogroll-1632387467210.jpg", price: 1000},
    { id: 3,    name: "Smash Ultimate",       url: "https://images.nintendolife.com/adc8dfcee7cd5/1280x720.jpg", price: 2000}, 
    { id: 4,    name: "Mario Kart",           url: "https://www.pockettactics.com/wp-content/sites/pockettactics/2022/09/Mario-kart-tour-revenue-2-550x309.jpg", price: 1500}, 
    { id: 5,    message:"not found"},  
    { id: 6,    message: "Error"   },
    { id: 100,  name: "Zelda Breath Of Wild", url:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg",price: 5500}, 
    { id: 1000, name: "Final fantasy 14",     url:"https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/12/01/ffxiv-final-fantasy-14-subscription-free-to-play.jpeg",     price: 2500}, 
    { id: 10000,name: "The Whitcher 2",       url:"https://images.gog-statics.com/8355e657a19311b158a3553a154e109199d6991c7791a20c3305af1f84d15ed7.jpg", price: 5500},
  ];

  const GAME_TO_PATICIPATE = [GAMES[0], GAMES[1], GAMES[2], GAMES[3],
      {
        id:5, name:"The last of US", url:"https://www.hollywoodreporter.com/wp-content/uploads/2014/03/the_last_of_us.jpg?w=1024", price:"200"
      }
    ];
  
  module.exports = [
    {
      id: "get-products", 
      url: "/api/products", 
      method: "GET", 
      variants: [{ id: "all", type: "json", options: {status: 200, body: GAME_TO_PATICIPATE,},}],
    },
    {
      id: "get-product/1/similars", // route id
      url: "/api/product/1/similars", // url in express format
      method: "GET", // HTTP method
      variants: [{ id: "1",type: "json", options: { status: 200, body: SIMILARS_1,},}],
    },
    {
      id: "get-product/2/similars", // route id
      url: "/api/product/2/similars", // url in express format
      method: "GET", // HTTP method
      variants: [{ id: "2",type: "json", options: { status: 200, body: SIMILARS_2,},}],
    },
    {
      id: "get-product/3/similars", // route id
      url: "/api/product/3/similars", // url in express format
      method: "GET", // HTTP method
      variants: [{ id: "3",type: "json", options: { status: 200, body: SIMILARS_3,},}],
    },
    {
      id: "get-product/4/similars", // route id
      url: "/api/product/4/similars", // url in express format
      method: "GET", // HTTP method
      variants: [{ id: "4",type: "json", options: { status: 200, body: SIMILARS_4,},}],
    },
    {
      id: "get-product/5/similars", // route id
      url: "/api/product/5/similars", // url in express format
      method: "GET", // HTTP method
      variants: [{ id: "5",type: "json", options: { status: 200, body: SIMILARS_5,},}],
    },
    {
      id: "product/1", 
      url: "/api/product/1", 
      method: "GET", 
      variants: [{ id: "1",type: "json", options: { status: 200, body: GAMES[0],},}],
    },
    {
      id: "product/2", 
      url: "/api/product/2", 
      method: "GET", 
      variants: [{ id: "2",type: "json", options: { status: 200, body: GAMES[1],},}],
    },
    {
      id: "product/3", 
      url: "/api/product/3", 
      method: "GET", 
      variants: [{ id: "3",type: "json", options: { status: 200, body: GAMES[2],},}],
    },
    {
      id: "product/4", 
      url: "/api/product/4", 
      method: "GET", 
      variants: [{ id: "4",type: "json", options: { status: 200, body: GAMES[3],},}],
    },
    {
      id: "product/5", 
      url: "/api/product/5", 
      method: "GET", 
      variants: [{ id: "5",type: "json", options: { status: 404, body: GAMES[4],},}],
    },
    {
      id: "product/6", 
      url: "/api/product/6", 
      method: "GET", 
      variants: [{ id: "6",type: "json", options: { status: 500, body: GAMES[5],},}],
    },
    {
      id: "product/100",
      delay: 1000,  
      url: "/api/product/100", 
      method: "GET", 
      variants: [{ id: "100",type: "json", options: { status: 500, body: GAMES[6],},}],
    },
    {
      id: "product/1000",
      delay: 3000,  
      url: "/api/product/1000", 
      method: "GET", 
      variants: [{ id: "1000",type: "json", options: { status: 500, body: GAMES[7],},}],
    },
    {
      id: "product/10000",
      delay: 8000,  
      url: "/api/product/10000", 
      method: "GET", 
      variants: [{ id: "10000",type: "json", options: { status: 500, body: GAMES[8],},}],
    },  
  ];
  