let currentUser = null;

// =====================
// CREATE USER
// =====================
async function createUser() {
  const res = await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "user_" + crypto.randomUUID() })
  });

  const data = await res.json();
  currentUser = data;

  render();
}

// =====================
// LOGIN USER (NOVO)
// =====================
async function loginUser(name) {
  const res = await fetch(`/users/login/${name}`);
  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  currentUser = data;
  render();
}

// =====================
// OPEN LOOTBOX
// =====================
async function openLootBox() {
  if (!currentUser) return alert("Faça login primeiro!");

  const res = await fetch(`/users/${currentUser.id}/lootbox/open`, {
    method: "POST"
  });

  const data = await res.json();
  currentUser = await refreshUser();

  render(data.message);
}

// =====================
// DELETE ITEM (NOVO)
// =====================
async function deleteItem(name) {
  await fetch(`/users/${currentUser.id}/item`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  currentUser = await refreshUser();
  render("Item removido");
}

// =====================
// DELETE USER (NOVO)
// =====================
async function deleteUser() {
  await fetch(`/users/${currentUser.id}`, {
    method: "DELETE"
  });

  currentUser = null;
  render("Usuário removido");
}

// =====================
// LOAD USERS (LISTA + LOGIN CLICK)
// =====================
async function loadUsers() {
  const res = await fetch("/users");
  const users = await res.json();

  document.getElementById("result").innerHTML = users.map(u => `
    <div style="margin-bottom:10px;">
      <b>${u.name}</b><br>
      Coins: ${u.coins}<br>
      Items: ${u.inventory.map(i => i.name).join(", ") || "nenhum"}<br>

      <button onclick="loginUser('${u.name}')">Logar</button>
    </div>
    <hr>
  `).join("");
}

// =====================
// REFRESH USER STATE
// =====================
async function refreshUser() {
  if (!currentUser) return null;

  const res = await fetch(`/users/login/${currentUser.name}`);
  return await res.json();
}

// =====================
// RENDER UI
// =====================
function render(message = "") {
  const el = document.getElementById("result");

  if (!currentUser) {
    el.innerHTML = `
      <p>Nenhum usuário logado</p>
      <button onclick="createUser()">Criar Usuário</button>
      <button onclick="loadUsers()">Ver Usuários</button>
    `;
    return;
  }

  el.innerHTML = `
    <h3>${currentUser.name}</h3>
    <p>Coins: ${currentUser.coins}</p>

    <button onclick="openLootBox()">Abrir Lootbox</button>
    <button onclick="deleteUser()">Deletar Usuário</button>
    <button onclick="loadUsers()">Ver Todos Usuários</button>

    <h4>Inventário</h4>
    ${
      currentUser.inventory.map(i => `
        <div>
          ${i.name} (${i.rarity})
          <button onclick="deleteItem('${i.name}')">remover</button>
        </div>
      `).join("") || "vazio"
    }

    <p>${message}</p>
  `;
}