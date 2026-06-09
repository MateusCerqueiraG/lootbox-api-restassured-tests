const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "WEB")));

const DB_PATH = path.join(__dirname, "db.json");

// =====================
// DB
// =====================
function readDB() {
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return data ? JSON.parse(data) : { users: [], nextUserId: 1 };
  } catch {
    return { users: [], nextUserId: 1 };
  }
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

// =====================
// ITEMS
// =====================
const items = [
  { name: "Wooden Sword", rarity: "common" },
  { name: "Iron Sword", rarity: "rare" },
  { name: "Magic Staff", rarity: "epic" },
  { name: "Dragon Blade", rarity: "legendary" }
];

function getRandomItem() {
  const roll = Math.random() * 100;

  if (roll < 70) return items[0];
  if (roll < 90) return items[1];
  if (roll < 99) return items[2];
  return items[3];
}

// =====================
// CREATE USER
// =====================
app.post("/users", (req, res) => {
  const db = readDB();
  const { name } = req.body;

  const exists = db.users.find(u => u.name === name);
  if (exists) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const user = {
    id: db.nextUserId++,
    name,
    inventory: [],
    coins: 0
  };

  db.users.push(user);
  saveDB(db);

  res.status(201).json(user);
});

// =====================
// GET USERS
// =====================
app.get("/users", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

// =====================
// LOGIN USER
// =====================
app.get("/users/login/:name", (req, res) => {
  const db = readDB();

  const user = db.users.find(u => u.name === req.params.name);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.json(user);
});

// =====================
// LOOTBOX
// =====================
app.post("/users/:id/lootbox/open", (req, res) => {
  const db = readDB();

  const user = db.users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const item = getRandomItem();

  const exists = user.inventory.some(i => i.name === item.name);

  if (exists) {
    user.coins += 100;
    saveDB(db);

    return res.json({
      message: "Item duplicado convertido em coins",
      item,
      coins: user.coins
    });
  }

  user.inventory.push(item);
  saveDB(db);

  res.json({
    message: "Item recebido",
    item,
    coins: user.coins
  });
});

// =====================
// GET USER INVENTORY
// =====================
app.get("/users/:id/inventory", (req, res) => {
  const db = readDB();

  const user = db.users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.json(user);
});

// =====================
// DELETE ITEM
// =====================
app.delete("/users/:id/item", (req, res) => {
  const db = readDB();

  const user = db.users.find(u => u.id === Number(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const { name } = req.body;

  user.inventory = user.inventory.filter(i => i.name !== name);

  saveDB(db);

  res.json({ message: "Item removido", inventory: user.inventory });
});

// =====================
// DELETE USER (CORRIGIDO)
// =====================
app.delete("/users/:id", (req, res) => {
  const db = readDB();

  const id = Number(req.params.id);

  const index = db.users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  db.users.splice(index, 1);
  saveDB(db);

  res.json({ message: "Usuário removido com sucesso" });
});

// =====================
app.listen(3000, () => {
  console.log("Lootbox API rodando 🚀");
});