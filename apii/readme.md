# apii - API de Podcasts 🎧

[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![npm](https://img.shields.io/badge/npm-enabled-blue.svg)](https://docs.npmjs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Project Status](https://img.shields.io/badge/Status-Developing-yellow.svg)](https://github.com/your-username/your-repo-name) Uma API REST simples para listar e filtrar podcasts por nome e idioma.

---

## Descrição do Projeto

Este projeto consiste em uma API desenvolvida com **Node.js** e **TypeScript** que permite o acesso a uma coleção de dados de podcasts armazenados em um arquivo JSON. A API oferece funcionalidades para listar todos os podcasts disponíveis e para aplicar filtros por nome do podcast e/ou pelo idioma do episódio (Português, Inglês ou Japonês).

---

## Funcionalidades ✨

* **Listar todos os podcasts**: Retorna a lista completa de podcasts disponíveis.
* **Filtrar por nome do podcast**: Busca podcasts que contenham um determinado nome.
* **Filtrar por idioma**: Filtra podcasts baseados no idioma (pt, en, jp).
* **Filtrar por nome e idioma**: Combina os filtros de nome e idioma para uma busca mais específica.

---

## Tecnologias Utilizadas 🚀

Este projeto utiliza as seguintes tecnologias:

* **Node.js**: Plataforma de execução JavaScript.
* **TypeScript**: Linguagem para tipagem estática.
* **HTTP Nativo do Node.js**: Para criação do servidor web.
* **tsx**: Para execução direta de arquivos TypeScript em desenvolvimento.
* **tsup**: Para build de produção (bundling).

---

## Pré-requisitos 📋

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js** (versão 18 ou superior recomendada)
* **npm** (gerenciador de pacotes do Node.js) ou **Yarn**

---

## Instalação e Execução 🛠️

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd apii
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Crie o arquivo de ambiente**:
    Na raiz do projeto, crie um arquivo `.env` e adicione a porta do servidor:
    ```
    PORT=3000
    ```
    (Você pode escolher a porta que preferir)
4.  **Execute o servidor em modo de desenvolvimento:**
    Para iniciar o servidor em modo de desenvolvimento com `tsx` (suporte a hot-reload):
    ```bash
    npm run start:dev:watch
    # ou
    npm run start:dev (se não quiser hot-reload)
    ```
    Você verá a mensagem no console: `Servidor iniciado na porta 3000` (ou a porta que você configurou).

5.  **Execute o servidor em modo de produção (build):**
    Primeiro, compile o projeto:
    ```bash
    npm run dist
    ```
    Em seguida, inicie o servidor com a versão compilada:
    ```bash
    npm run start:dist
    ```

---

## Uso da API (Endpoints) 🌐

A API está acessível na porta configurada (ex: `http://localhost:3000`).

### 1. Listar todos os podcasts

* **Endpoint:** `GET /api/list`
* **Descrição:** Retorna um array com todos os objetos de podcast.
* **Exemplo de Requisição:**
    ```
    GET http://localhost:3000/api/list
    ```
* **Exemplo de Resposta (JSON):**
    ```json
    [
        {
            "podcastName": "Devzera Podcast",
            "episode": "Inteligência Artificial e o Futuro do Desenvolvimento",
            "videoId": "gT8yB_0c13s",
            "cover": "[https://i.ytimg.com/vi/gT8yB_0c13s/maxresdefault.jpg](https://i.ytimg.com/vi/gT8yB_0c13s/maxresdefault.jpg)",
            "link": "[https://www.youtube.com/watch?v=gT8yB_0c13s](https://www.youtube.com/watch?v=gT8yB_0c13s)",
            "category": ["technology", "studies"],
            "language": "pt"
        },
        // ... outros podcasts
    ]
    ```

### 2. Filtrar podcasts

* **Endpoint:** `GET /api/episode`
* **Parâmetros de Query:**
    * `p` (opcional): Nome do podcast (string).
    * `lang` (opcional): Código do idioma (string: `pt`, `en`, `jp`).
* **Exemplos de Requisição:**
    * **Filtrar por nome de podcast:**
        ```
        GET http://localhost:3000/api/episode?p=Devzera Podcast
        ```
    * **Filtrar por idioma (todos os podcasts em inglês):**
        ```
        GET http://localhost:3000/api/episode?lang=en
        ```
    * **Filtrar por nome e idioma (podcasts "Anime" em japonês):**
        ```
        GET http://localhost:3000/api/episode?p=Anime&lang=jp
        ```
* **Exemplo de Resposta (JSON):**
    Retorna um array filtrado de objetos de podcast, ou um array vazio se nenhum resultado for encontrado. O `statusCode` na resposta HTTP será `200 OK` ou `204 No Content`.

    ```json
    [
        {
            "podcastName": "The Anime Man Podcast",
            "episode": "The State of Anime in 2024",
            "videoId": "u_1wX_3eY7s",
            "cover": "[https://i.ytimg.com/vi/u_1wX_3eY7s/maxresdefault.jpg](https://i.ytimg.com/vi/u_1wX_3eY7s/maxresdefault.jpg)",
            "link": "[https://www.youtube.com/watch?v=u_1wX_3eY7s](https://www.youtube.com/watch?v=u_1wX_3eY7s)",
            "category": ["anime"],
            "language": "en"
        }
    ]
    ```
    Ou se não encontrar:
    ```json
    []
    ```
    *(Com `statusCode: 204 No Content` no cabeçalho HTTP)*

---

## Estrutura do Projeto 📁

````

apii/
├── src/
│   ├── controllers/            \# Lógica de manipulação de requisições e respostas
│   │   └── controllerPostcast.ts
│   ├── models/                 \# Definições de interfaces de dados
│   │   ├── models.ts
│   │   └── response.ts
│   ├── repositories/           \# Lógica de acesso e manipulação de dados (JSON)
│   │   ├── podcasts.json
│   │   └── podcastsRepository.ts
│   ├── routes/                 \# Definição de rotas da API
│   │   └── routes.ts
│   ├── services/               \# Lógica de negócio e preparação de dados
│   │   ├── filterEpisodes.ts
│   │   └── listEpisodes.ts
│   ├── utils/                  \# Utilitários (como status codes, content types, http methods)
│   │   ├── contenttype.ts
│   │   └── httpmethods.ts
│   │   └── statuscode.ts
│   ├── app.ts                  \# Configuração principal da aplicação HTTP
│   └── server.ts               \# Ponto de entrada do servidor Node.js
├── .env                        \# Variáveis de ambiente
├── .gitignore                  \# Arquivos e pastas a serem ignorados pelo Git
├── package.json                \# Metadados e dependências do projeto
├── package-lock.json           \# Detalhes das dependências
├── tsconfig.json               \# Configurações do TypeScript
├── tsup.config.ts              \# Configurações do Tsup (para build)
└── README.md                   \# Este arquivo\!

```

---

## Licença 📄

Este projeto está licenciado sob a licença **ISC**.

---

## 🙋‍♂️ Author

Gabriel Henrique 

🔗 [LinkedIn](https://www.linkedin.com/in/gabrielhenrique-tech/)

📧 gabrielheh03@gmail.com
