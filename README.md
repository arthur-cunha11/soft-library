# Biblioteca Soft

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conteúdo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Feito com](#feito-com)
- [Estrutura de Arquivos](#estrutura-de-arquivos) 
- [Dados mockados](#dados-mockados)
- [Instalação](#instalação)
- [Execução](#execução)
- [Desenvolvido por](#desenvolvido-por)

## Sobre o projeto

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

Sistema de biblioteca simples para demonstração de funções:
- Login
- Lista de livros
- CRUD de livros

## Feito com

* [React](https://pt-br.reactjs.org/) - Biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web
* [Redux](https://react-redux.js.org/) - Biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.
* [JSON server](https://www.npmjs.com/package/json-server) - Servidor JSON para obter uma API REST sem código.
* [Styled Components](https://styled-components.com/) - Componentes estilizados que permitem que seja descrito CSS real no JavaScript.

## Estrutura de Arquivos

```bash
soft-design-test
├── public/
│   ├── favicon.ico
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Book/
│   │   │   ├── BookList/
│   │   │   │   └── index.tsx
│   │   │   ├── BookPage/
│   │   │   │   └── index.tsx
│   │   │   ├── BookSearch/
│   │   │   │   └── index.tsx
│   │   │   ├── Edit/
│   │   │   │   └── index.tsx
│   │   │   └── Register/
│   │   │   │   └── index.tsx
│   │   ├── User/
│   │   │   ├── Login/
│   │   │   │   └── index.tsx
│   │   │   ├── Register/
│   │   │   │   └── index.tsx
│   │   │   └── UserPage/
│   │   │   │   └── index.tsx
│   │   └── index.ts
│   ├── store/
│   │   ├── actionCreators.ts
│   │   ├── actionTypes.ts
│   │   └── reducer.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── db.json
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock

```

## Dados mockados

A aplicação começa com um usuário e alguns livros já cadastrados:

![image](https://user-images.githubusercontent.com/53005772/140814897-de70f025-1bab-4bcb-a7ea-84ae13bf874a.png)

## Instalação

Para instalar todas as dependências necessárias para o funcionamento do projeto, execute o comando:
```bash 
yarn install
```
## Execução

Primeiro inicie o servidor JSON, utilizando o comando:
```bash 
json-server --watch src/db.json
```
![image](https://user-images.githubusercontent.com/53005772/140791892-5eefff85-4980-409f-b5b7-3da5935e000f.png)

Depois execute a aplicação em modo de desenvolvimento em outra porta, utilizando o comando:
```bash 
yarn start
```
![image](https://user-images.githubusercontent.com/53005772/140792638-cb1dc009-4984-4c05-8582-ab5a3b9a17af.png)

Pronto! A aplicação está pronta para uso.

Acesse [http://localhost:3001](http://localhost:3001).

## Desenvolvido por

* **Desenvolvedor Front-End**  - [Arthur Cunha](https://github.com/arthur-cunha11)
