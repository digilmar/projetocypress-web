# QaproCypressWeb

Projeto de automação de testes web utilizando **Cypress**.

## 🚀 Tecnologias

* [Cypress](https://www.cypress.io/)
* JavaScript
* Node.js
* GitHub

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

* Node.js
* npm

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/digilmar/qaprocypress-web.git
```

Entre na pasta do projeto:

```bash
cd qaprocypress-web
```

Instale as dependências:

```bash
npm install
```

## 🧪 Executando os testes

Para abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```

## 📁 Estrutura do projeto

```text
QaproCypressWeb/
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔄 Integração contínua

Os testes podem ser executados automaticamente através do **GitHub Actions**.

Os workflows ficam localizados em:

```text
.github/workflows/
```

## 📌 Objetivo

Este projeto tem como objetivo automatizar testes funcionais de aplicações web utilizando o Cypress.

## 👤 Autor

Gilmar Figueiredo da Silva