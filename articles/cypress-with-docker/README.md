# Cypress com Docker

Fiz uma pesquisa do termo "Cypress with Docker" e aprendi algumas coisas legais listadas abaixo:
- Cypress possui 4 imagens oficiais disponíveis ([factory](https://hub.docker.com/r/cypress/factory)/[base](https://hub.docker.com/r/cypress/base)/[browsers](https://hub.docker.com/r/cypress/browsers)/[included](https://hub.docker.com/r/cypress/included))
- É possivel executar o Cypress com Docker em um único comando 🤯 (confira [Arquivos bat/sh](#utilizando-arquivos-batsh))
- Podemos utilizar docker-compose para rodar testes em diferentes navegadores ao mesmo tempo 🤯 (confira [Multi Browsers](#rodando-testes-em-diferentes-navegadores-ao-mesmo-tempo))
- Podemos utilizar docker-compose para rodar testes em paralelo com cypress-split 🤯 (confira [Cypress Split](#rodando-testes-em-paralelo-com-cypress-split))

## Estrutura do projeto
```console
.
├── cypress
│   ├── downloads
│   ├── e2e
|   |   ├── homePage.cy.js
|   |   ├── loginPage.cy.js
|   |   └── oterPage.cy.js
│   ├── fixtures
│   ├── support
│   └── videos
├── .gitignore
├── cy-run.bat
├── cy-run.sh
├── cypress.config.js
├── example-cy-split-docker-compose.yml
├── example-multi-browsers-docker-compose.yml
├── package-lock.json
├── package.json
└── README.md
```
> **Observação**: Para executar o projeto, é necessário que o docker esteja rodando ao menos em segundo plano.

## Utilizando arquivos .bat /.sh

Para executar o Cypress com Docker utilizando os arquivos pré-definidos, basta seguir os seguintes passos:
- No Linux: Execute o comando `./cy-run.sh` no terminal
- No Windows: Execute o comando `.\cy-run.bat` no prompt de comando

## Rodando testes em diferentes navegadores ao mesmo tempo

Se deseja rodar os testes em diferentes navegadores simultaneamente, siga os passos abaixo:
1. Renomeie o arquivo "example-multi-browsers-docker-compose.yml" para "docker-compose.yml"
2. Em seu terminal execute `docker compose up`

## Rodando testes em paralelo com cypress-split

Se deseja rodar os testes em paralelo, utilizando o cypress-split, siga os passos abaixo:
1. Renomeie o arquivo "example-cy-split-docker-compose.yml" para "docker-compose.yml"
2. Em seu terminal execute `docker compose up`

## Referências

Esse repositório foi inspirado nas referencias abaixo, consulte para aprender mais!

- Gleb Bahmutov, [*How to Run Cypress in Docker With a Single Command*](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/), 2019.
- Gleb Bahmutov, [*Run Cypress Specs In Parallel For Free*](https://glebbahmutov.com/blog/cypress-parallel-free/), 2023.
- Anshita Bhasin, [*Cypress Docker Tutorial: A Step-by-Step Guide With Examples*](https://www.lambdatest.com/learning-hub/cypress-docker), 2023.
- Alex Sanzhanov, [*Running Cypress tests in Docker containers using different Docker images*](https://medium.com/testing-with-cypress/running-cypress-tests-in-docker-containers-using-different-docker-images-2dee3450881e), 2023.