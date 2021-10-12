require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ?? 3001;

let fieldCardsList = [
  {
    id: 1,
    pic: "",
    name: "Спорт",
    events: 153
  },
  {
    id: 2,
    pic: "",
    name: "Спорт",
    events: 153
  },
  {
    id: 3,
    pic: "",
    name: "Спорт",
    events: 153
  },
  {
    id: 4,
    pic: "",
    name: "Спорт",
    events: 153
  },
  {
    id: 5,
    pic: "",
    name: "Спорт",
    events: 153
  },
  {
    id: 6,
    pic: "",
    name: "Спорт",
    events: 153
  },

];

let directionLeadersList = [

  {
    id: 1,
    pic: "",
    name: "Максим",
    direction: "Спорт"
  },

  {
    id: 2,
    pic: "",
    name: "Максим",
    direction: "Спорт"
  },

  {
    id: 3,
    pic: "",
    name: "Максим",
    direction: "Спорт"
  },

  {
    id: 4,
    pic: "",
    name: "Максим",
    direction: "Спорт"
  },

  {
    id: 5,
    pic: "",
    name: "Максим",
    direction: "Спорт"
  },

  {
    id: 6,
    pic: "",
    name: "Максим",
    direction: "Спорт"
  },
];

let shopperCardsList = [

  {
    id: 1,
    pic: "",
    name: "Термокружка",
    price: 1600,
    isPresent: "на складе"
  },

  {
    id: 2,
    pic: "",
    name: "Термокружка",
    price: 1600,
    isPresent: "на складе"
  },

  {
    id: 3,
    pic: "",
    name: "Термокружка",
    price: 1600,
    isPresent: "на складе"
  },

  {
    id: 4,
    pic: "",
    name: "Термокружка",
    price: 1600,
    isPresent: "на складе"
  },
];

let structurePreviewsList = [

  {
    id: 1,
    pic: "",
    name: "ССК РЭУ",
    events: 1200
  },

  {
    id: 2,
    pic: "",
    name: "ССК РЭУ",
    events: 1200
  },

  {
    id: 3,
    pic: "",
    name: "ССК РЭУ",
    events: 1200
  },

  {
    id: 4,
    pic: "",
    name: "ССК РЭУ",
    events: 1200
  },

  
];

let eventList = [
  {
    id: 1,
    name: "Плехановский кросс 2022",
    manager: "ССК РЭУ",
    direction: "Спорт",
    date: "15.05.2022"
  },

  {
    id: 2,
    name: "Плехановский кросс 2023",
    manager: "ССК РЭУ",
    direction: "Спорт",
    date: "15.05.2023"
  },

  {
    id: 3,
    name: "Плехановский кросс 2024",
    manager: "ССК РЭУ",
    direction: "Спорт",
    date: "15.05.2024"
  },
];

let shopList = [
  {
    id: 1,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка РЭУ",
    price: 1600,
    available: true
  },

  {
    id: 2,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка",
    price: 1600,
    available: false
  },

  {
    id: 3,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  },

  {
    id: 4,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  },

  {
    id: 5,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  },

  {
    id: 6,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  },

  {
    id: 7,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  },

  {
    id: 8,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  },

  {
    id: 9,
    img: "https://www.modi.ru/upload/resize_cache/product/fe3/960_960_1/fe33777be6f4a4b22306d535d9dc0c84.jpg",
    name: "Термокружка Еще",
    price: 1600,
    available: false
  }
];

let users = [
  {
    id: 1,
    studentName: 'Maks'
  }
];


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/Auth", (req, res) => {
  res.json(users);
  
});
app.get("/api/FieldCards", (req, res) => {
  res.json(fieldCardsList);
});

app.get("/api/DirectionLeaders", (req, res) => {
  res.json(directionLeadersList);
});

app.get("/api/ShopperCards", (req, res) => {
  res.json(shopperCardsList);
});

app.get("/api/StructurePreviews", (req, res) => {
  res.json(structurePreviewsList);
});

app.get("/api/Events", (req, res) => {
  res.json(eventList);
});

app.get("/api/Shop", (req, res) => {
  res.json(shopList);
});


app.listen(PORT, () => {
  console.log(`success`);
});
