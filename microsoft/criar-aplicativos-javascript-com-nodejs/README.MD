# Microsoft Learn - Criar aplicativos Javascript com Node.js

Nesse curso o conteudo abordado foi:
- Gerenciamento de dependencias e dependencias de desenvolvimento
- Scripts npm
- Como debugar o código com vscode
- Como manipular arquivos JSON
- Como criar rotas http com express
- Testes com Jest

> Com base nesses conceitos, foi desenvolvida essa API, restrita apenas ao que foi aprendido durante o curso. A estrutura de pastas e arquivos do projeto está organizada da seguinte forma:

```console
.
├── __tests__
│   └── app.test.js
├── src
│   ├── fakedb
│   │   ├── fakedb.js
│   │   └── fakedb.json
│   ├── app.js
│   └── server.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

Para instalação do projeto execute em seu terminal:
- `git clone https://github.com/davisonalves/applied-learnings.git` : Clona o projeto
- `cd microsoft/criar-aplicativos-javascript-com-nodejs/` : Navega até a pasta do projeto
- `npm install` : Instala o que é necessário criando a pasta node_modules
> Observação: É necessário possuir git e node.js instalados.

Scripts disponíveis:
- `npm start` : Inicia o servidor em http://localhost:300
- `npm test` : Executa os testes com Jest e Supertest
- `npm run test:dev` : Executa os testes com a opção [--watchAll](https://jestjs.io/pt-BR/docs/cli#--watchall)