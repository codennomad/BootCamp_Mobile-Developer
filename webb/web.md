# Momentos de uma Aplicação

* **Localhost**: Ambiente de desenvolvimento local. A aplicação existe e é executada apenas na sua máquina.

* **Servidor (Backend)**: Componente da aplicação que executa a **lógica de negócios** e fornece **serviços**. É responsável por:
    * Implementar as regras de negócio.
    * Servir dados (APIs, conteúdo dinâmico).
    * Pode se comunicar e integrar com outros backends, ferramentas de Inteligência Artificial (IA) e sistemas de banco de dados.

* **Cliente (Frontend ou Mobile)**: A parte da aplicação com a qual o usuário interage diretamente. Consome os serviços e dados fornecidos pelo backend. Exemplos incluem interfaces web (navegadores), aplicativos móveis (iOS/Android) e aplicações desktop.

* **Cloud (Nuvem)**: Plataformas de computação que fornecem recursos sob demanda (servidores, armazenamento, bancos de dados, etc.) pela internet. Exemplos:
    * Amazon Web Services (AWS)
    * Google Cloud Platform (GCP)
    * Oracle Cloud
    * Vercel
    * Railway
    
* **Deploy (Implantação)**: Processo de publicar uma aplicação em um ambiente (como a nuvem ou um servidor) para que ela possa ser acessada e utilizada pelos usuários.

---

# Tipos de Aplicações

* **Aplicações CRUD**: Aplicações focadas nas quatro operações básicas de persistência de dados: **C**reate (Criar), **R**ead (Ler), **U**pdate (Atualizar) e **D**elete (Excluir).
* **Microsserviços**: Arquitetura de software onde uma aplicação é construída como uma coleção de **serviços pequenos, independentes e especializados**, cada um executando um processo único e se comunicando através de APIs bem definidas.
* **Web Services**: Conjunto de padrões e protocolos para permitir a comunicação e integração entre diferentes aplicações através da web. Podem ser implementados em diversas arquiteturas, incluindo microsserviços ou monolitos.
* **Monolitos**: Arquitetura de software tradicional onde toda a aplicação (backend com todos os seus serviços, frontend e, às vezes, até o banco de dados) é construída como uma **única e grande unidade coesa e interdependente**.

---

# Framework vs. Bibliotecas

* **Framework**: Fornece uma **estrutura base, um conjunto de regras e um fluxo de controle** para construir seu projeto. Ele define grande parte da arquitetura e orienta a forma como você organiza e desenvolve seu código. Você "preenche os espaços em branco" dentro da estrutura do framework.
    * Exemplos: Node.js + Express, Ruby + Ruby on Rails, Java + Spring Boot, .NET + ASP.NET.
* **Biblioteca**: Um **conjunto de ferramentas, funções e módulos** que você pode escolher usar para resolver tarefas específicas mais facilmente em seu código. Você "chama" a biblioteca quando precisa dela; o controle do fluxo da aplicação permanece com o seu código. Você controla quanto e como usar a biblioteca.

---

# Repositório

* **Repo (Repositório)**: Um ambiente online (como GitHub, GitLab, Bitbucket) de **compartilhamento, armazenamento e versionamento de código** usando sistemas como o Git. Ele registra todo o histórico de mudanças de um projeto.
* **Monorepo**: Uma estratégia de organização de repositório onde **múltiplos projetos distintos (como um backend, um frontend, bibliotecas compartilhadas, etc.) são salvos em um único repositório**, ainda que sejam aplicações diferentes.

---

# CI & CD

* **CI (Continuous Integration - Integração Contínua)**: Processo de desenvolvimento de software onde os desenvolvedores integram seu código em um repositório compartilhado **frequentemente** (várias vezes ao dia). Cada integração é verificada por um **build automatizado e testes**, detectando erros rapidamente. Isso significa que o software está sempre em um estado "pronto para ser disponibilizado".
* **CD (Continuous Deployment - Implantação Contínua)**: Um passo além da Entrega Contínua. As mudanças no software não são apenas preparadas para serem lançadas, mas são **efetivamente lançadas em produção automaticamente** assim que passam por todos os testes e verificações, **sem intervenção humana**.

---

# Domínio da Aplicação

O **domínio de uma aplicação** refere-se à **área de conhecimento ou o assunto central** sobre o qual o software está sendo construído. É o problema do mundo real que a aplicação tenta resolver.

* Exemplo: Para um sistema bancário, o domínio inclui conceitos como "conta", "transação", "cliente", "saldo", "empréstimo", e as regras de negócio associadas a eles. No contexto de programação, também pode se referir ao conjunto de valores válidos para uma variável dentro desse domínio.

---

# Livros Recomendados

* **Domain-Driven Design (DDD)**: Foca em atacar as complexidades no coração do software, alinhando a implementação do código com o modelo de negócios.
* **Microsserviços Prontos para a Produção**: Aborda as práticas e desafios de construir, implantar e manter microsserviços em ambientes de produção.
* **Entendendo Algoritmos - Um guia ilustrado para programadores e outros curiosos**: Um livro que explica conceitos complexos de algoritmos de forma visual e acessível.
* **APIs - A Strategy Guide**: Guia para desenvolver uma estratégia eficaz para APIs, tanto técnicas quanto de negócios.