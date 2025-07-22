# Podcast Menager

### Descricao
Um app ao estilo netflix, aonde possa centralizar diferentes episodios de podcasts separados por categorias

### Dominio
Podcasts feitos em video

### Features

- Listar os episodios de podcasts em sessoes de categorias 
    - [saude, fitness, mentalidade, humor, tecnologia, estudos]

- Filtart episodios por nome de podcasts

## Como

#### Feature

Listar os episodios de podcasts em sessoes de categorias

### Como vou implementar:

Vai retorna em uma api rest (json) o nome do podcast, nome do episodio, imagem de capa, link, categoria

```
[
    {
    podcastName: "Inteligencia Ltda",
    episode: "SUPERINTELIGENCIA ARTIFICIAL - AKITA, ROBERTA E CAVALLINI - Inteligência Ltda.Podcast #1583",
    videoId: "_Hl9wiLkns4",
    cover: "https://i.ytimg.com/vi/_Hl9wiLkns4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=_Hl9wiLkns4",
    category: ["technology"]
    },
    {
    podcastName: "Inteligencia Ltda",
    episode: "SUPERINTELIGENCIA ARTIFICIAL - AKITA, ROBERTA E CAVALLINI - Inteligência Ltda.Podcast #1583",
    cover: "https://i.ytimg.com/vi/_Hl9wiLkns4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDZnLjbVbflfr_S9Ch-mkPygmHYQw",
    link: "https://www.youtube.com/watch?v=_Hl9wiLkns4",
    category: ["technology"]
    },
]
```