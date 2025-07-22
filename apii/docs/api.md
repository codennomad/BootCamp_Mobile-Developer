# APIs (Application Programming Interface)

Uma **API** é um **conjunto de regras e definições** que permite que diferentes aplicações de software se comuniquem e interajam entre si. Pense nela como um **"contrato"** ou um "garçom" que leva seu pedido (requisição) para a cozinha (serviço/dados) e traz o prato (resposta) de volta, sem que você precise saber como a cozinha funciona internamente.

## O que é uma API?

É um tipo de aplicação (geralmente **backend**) projetada para **expor dados e funcionalidades (serviços)** de forma padronizada, permitindo que outras aplicações (clientes) as consumam.

## Para que serve uma API?

* **Receber requisições e processar dados/serviços**: Atua como um ponto de entrada para operações.
* **Responder a outras aplicações**: Fornece dados ou resultados de processamento para clientes (frontends web/mobile, outros backends, sistemas de IA, etc.).
* **Modularidade e Reutilização**: Permite que a lógica de negócios e os dados sejam expostos e reutilizados por múltiplos clientes ou parceiros.

## Como funciona uma API?

Uma API funciona através da **comunicação padronizada**, utilizando um **protocolo de comunicação** (como HTTP) e, geralmente, um **formato de dados** (como JSON ou XML) para trocar informações. Ela define:

* **Endpoints**: Endereços específicos (URLs) onde os recursos podem ser acessados.
* **Métodos**: As ações que podem ser realizadas nos recursos (ex: GET para obter, POST para criar, PUT para atualizar, DELETE para remover).
* **Formatos**: Como os dados devem ser enviados na requisição (Request) e como serão recebidos na resposta (Response).

---

# Características de uma Aplicação (com foco em APIs)

Para que uma API seja eficaz e interoperável, ela adere a certas características:

* **Protocolo de Comunicação**: Define um conjunto rígido de regras para a comunicação, tanto para o que é **requisitado (Request)** quanto para o que é **respondido (Response)**. O HTTP é o protocolo mais comum para APIs web.
* **Conteúdo (Content)**: Sempre serve algum tipo de conteúdo (dados) seguindo os padrões do protocolo e do formato adotado (ex: JSON para APIs RESTful).
* **Padrões de Arquitetura**: Existem diversos, sendo **REST** um dos mais populares e amplamente utilizados para APIs web.

---

# REST (Representational State Transfer)

**REST** é um **estilo arquitetural** para sistemas distribuídos, especialmente APIs web. Ele não é um protocolo, mas um conjunto de princípios que guiam o design de APIs para que sejam escaláveis, eficientes e fáceis de usar.

* **Representational State Transfer** pode ser entendido como a transferência de representações do estado de recursos. Ou seja, você opera com **representações de dados** (como um objeto JSON que representa um produto) e essas operações alteram o **estado** desse recurso no servidor.

## Características do REST (Princípios RESTful)

Para uma API ser considerada verdadeiramente RESTful, ela deve aderir a um conjunto de restriados ou princípios:

1.  **Arquitetura Cliente-Servidor**: Separa completamente a interface do usuário (cliente) da lógica de armazenamento e processamento de dados (servidor). Isso melhora a portabilidade da interface e a escalabilidade do servidor.
2.  **Comunicação Stateless (Sem Estado)**: Cada requisição do cliente para o servidor deve conter todas as informações necessárias para que o servidor entenda e processe essa requisição. O servidor **não armazena nenhum estado da sessão do cliente** entre as requisições. Isso simplifica o design do servidor e melhora a escalabilidade.
3.  **Cache**: As respostas do servidor devem ser explicitamente marcadas como "cacheable" ou "non-cacheable". Isso permite que os clientes armazenem em cache as respostas para otimizar o desempenho, reduzindo a latência e a carga no servidor.
4.  **Interface Uniforme**: É o princípio mais importante. Ele simplifica e desacopla a arquitetura, permitindo interações padronizadas. Inclui:
    * **Identificação de Recursos**: Recursos são identificados por URIs (Uniform Resource Identifiers).
    * **Manipulação de Recursos por Representações**: Os clientes manipulam os recursos por meio de representações (ex: JSON, XML) que recebem do servidor.
    * **Mensagens Auto-descritivas**: Cada mensagem deve conter informações suficientes para o cliente entender como processá-la.
    * **Hypermedia as the Engine of Application State (HATEOAS)**: O cliente interage com a aplicação através de hiperlinks contidos nas representações dos recursos.
5.  **Sistema de Camadas (Layered System)**: A arquitetura do sistema pode ser composta por múltiplas camadas (servidores proxy, balanceadores de carga, gateways API, etc.), onde cada camada não pode "ver" além da camada diretamente à qual se comunica.

---

### RESTful vs. REST

* **RESTful**: Um sistema ou API que **aplica todos os princípios e restrições** do estilo arquitetural REST. É o ideal a ser atingido para APIs verdadeiramente REST.
* **REST**: Termo frequentemente usado de forma mais informal para APIs que utilizam HTTP, URIs e um formato de dados como JSON, mas que **podem não aderir a todas as restrições** (especialmente HATEOAS e statelessness rigoroso). Muitas APIs que se autodenominam REST são, na verdade, "quase RESTful" ou "HTTP APIs".