# 🎁 Lootbox API Tests

## 🏗️ Sobre o projeto

Este projeto é composto por uma API REST desenvolvida em Node.js que simula um sistema de Lootbox, permitindo a criação de usuários, abertura de lootboxes, gerenciamento de inventário e remoção de itens e usuários.

Além da aplicação, o projeto conta com uma suíte de testes automatizados de API desenvolvida em Java utilizando RestAssured e JUnit 5, com foco em práticas de Quality Assurance (QA), validação de endpoints REST e automação de testes.

Os testes cobrem os principais fluxos da aplicação, incluindo criação de usuários, autenticação por nome, abertura de lootboxes, consulta de inventário e remoção de usuários.

---

## 👨‍💻 Tecnologias utilizadas

### API

* Node.js
* JavaScript
* Express
* JSON File Database

### Testes automatizados

* Java
* RestAssured
* JUnit 5
* Maven

---

## 📋 Funcionalidades da API

* Criar usuário
* Listar usuários
* Login por nome
* Abrir Lootbox
* Consultar inventário
* Remover item do inventário
* Remover usuário

---

## 📝 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

* Node.js
* Java JDK 11 ou superior
* Maven
* VS Code

---

## 🚀 Como rodar o projeto localmente

### Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/lootbox-api-tests.git
cd lootbox-api-tests
```

### Instale as dependências da API

```bash
cd BACK
npm install
```

### Inicie o servidor

```bash
node server.js
```

O servidor será iniciado em:

📍 http://localhost:3000

---

## 🧪 Execução dos testes automatizados

Com a API em execução, abra um novo terminal na raiz do projeto:

```bash
cd lootbox-api-tests
```

Execute:

```bash
mvn clean test
```

O Maven executará automaticamente todos os testes presentes na pasta `src/test/java/tests`.

### Testes disponíveis

* UserTests
* LootBoxTests
* InventoryTests

---

## 🎯 Objetivo do projeto

Praticar:

* Testes automatizados de API REST
* RestAssured
* JUnit 5
* Organização de projetos de automação
* Criação de Services e Models
* Geração dinâmica de dados para testes
* Boas práticas de QA

---

## 👤 Autor

Mateus Cerqueira
