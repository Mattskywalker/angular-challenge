# Angular Challenge 🚀

## 💡 Descrição

Este projeto é uma aplicação em **Angular 7** que simula uma consulta de CPF para exibição de dados de cooperados. A aplicação segue dois fluxos principais:

- **Fluxo de sucesso (😄)**: Quando o CPF informado é válido e está cadastrado na base de dados, o usuário é redirecionado para uma segunda tela com os dados do cooperado.
- **Fluxo de erro (😢)**: Quando o CPF é inválido ou não encontrado, mensagens apropriadas são exibidas.

---

## 📄 Requisitos Funcionais

### ❌ Caminho de Insucesso (Infeliz)

- Inserir um CPF inválido (ex: `111.111.111-11`) deve exibir a mensagem:
  ```
  O CPF digitado não é válido
  ```
- Validações de formulário devem funcionar corretamente (ex: `required`, `minLength`, `maxLength`, `pattern`).
- Inserir um CPF válido que **não exista** na base de dados deve exibir a mensagem:
  ```
  Cooperado não encontrado
  ```

### ✅ Caminho de Sucesso (Feliz)

- Inserir um CPF válido **e existente** deve redirecionar o usuário à segunda tela com os dados do cooperado.

#### CPFs cadastrados de exemplo:

- `438.265.920-50` — Meu CPF 😄
- `881.628.750-00` — Mariane de Souza Oliveira (a mesma exibida no figma)

---

## ▶️ Como Rodar o Projeto

### Requisitos

- **Node.js** `v16.20.2`
- **Angular CLI** compatível com Angular 7

### Backend (API)

A API está incluída no próprio projeto. Para executá-la:

```bash
npm run start-api
```

A API estará disponível em:

```
http://localhost:3000
```

---

### Frontend (Angular)

Para rodar o frontend:

```bash
ng serve
```

A aplicação estará disponível em:

```
http://localhost:4200/
```

> Todas as rotas são redirecionadas automaticamente para a página **Home**.

---

## ⚠️ Problemas Conhecidos

- Os ícones da interface (barra de navegação, ações, etc.) foram substituídos por **Material Icons**, pois os originais do Figma não estavam acessíveis.
- Os testes unitários **não estão executando corretamente**, possivelmente devido a incompatibilidades entre versões do Karma, Webpack e Jasmine.

---

## 📝 Observações

- Os componentes visuais da interface (como botões e menus) foram incluídos para manter a fidelidade ao design proposto no Figma.
- Toda a lógica de validação e fluxo de CPF está **100% implementada e funcional** ✅

---

Desenvolvido com 💙 por Mateus Martins
