# Relatório de Testes de API: API LOOTBOX
**Autor:** Mateus
**Framework:** REST-assured (Java / JUnit 5)

---

## 1. Resumo Executivo
Este repositório apresenta uma suíte de testes automatizados de API desenvolvida com Java, Rest Assured e JUnit 5. O objetivo principal é demonstrar as melhores práticas de Quality Assurance (QA), incluindo a automação de testes de integração, organização de requisições e a validação rigorosa de respostas em APIs REST.

## 2. Detalhes do Ambiente
* **Projeto Avaliado:** API LOOTBOX
* **Framework principal:** REST-assured

## 3. Resultados da Execução
Os testes foram executados e validados com sucesso, apresentando **100% de aprovação**. Não foram identificadas falhas, erros ou comportamentos inesperados durante a execução da suíte automatizada.

### Tabela Resumo de Execução

| Suite de Testes (Módulo) | Testes Executados | Sucessos | Falhas | Erros | Tempo (s) | Status |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **InventoryTests** | 1 | 1 | 0 | 0 | 1.931s | 🟩 PASSED |
| **LootBoxTests** | 1 | 1 | 0 | 0 | 0.093s | 🟩 PASSED |
| **UserTests** | 2 | 2 | 0 | 0 | 0.136s | 🟩 PASSED |
| **TOTAL** | **4** | **4** | **0** | **0** | **4.155s** | **SUCCESS** |

---

## 4. Descrição Escopo dos Testes

* **`InventoryTests.java`** Responsável por validar o endpoint de inventário, garantindo que os itens associados a um usuário sejam retornados corretamente pela API, assegurando a consistência dos dados armazenados.
  
* **`LootBoxTests.java`** Valida o funcionamento do fluxo de abertura de *lootboxes*, verificando se a resposta da API retorna corretamente os itens obtidos e a quantidade de moedas atribuídas ao usuário.
  
* **`UserTests.java`** Valida os principais fluxos relacionados à gestão de usuários, incluindo os cenários de criação, autenticação por nome e remoção de usuários.

> 💡 **Nota de Arquitetura:** Ao final de cada ciclo, os dados gerados durante os testes são automaticamente limpos da base de dados. Isso garante o isolamento total entre as execuções e preserva a integridade do ambiente de testes.
