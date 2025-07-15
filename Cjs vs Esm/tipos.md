#Tipos de modulos

##commonJS (CJS)

```
const elem = require('module);
module.exports = {

};
```

> O CommonJS ultiliza uma sintaxe mais simples com as palavras-chave **require** para carregar modulos e **module.exports** para exportar funcionalidades.

- Sincrono por padrao
- Uso Principal em servidor (node.js)
- Sintaxe: `require` e `module.exports` 
- Carregamento Dinamico

##ESM

```
import {elem} from './module.js';
export const elem = {

};
```

> Os modulos ESM introduzem uma sintaxe unificada coma as palavras-chave import e export alinhada com padroes de outras linguagens modernas.

- Assincrono por padrao
- Suportado nativamente em navegadores
- Sintaxe: `import` e `export`
- Carregamento Estatico (Analise Estatica)