# twa-gabriel-rocha

Ficha 01 — Tecnologias Web Avançadas (ISLA Gaia).

Repositório das fichas da aula 01 e da aula 02.

## Pastas

- `twa-ficha01/` — módulo ES (`"type": "module"`), `utils.js` + `app.js`, e `api.js` (fetch à API pública do GitHub com escrita de `repo.json` via `fs/promises`).
- `twa-vite/` — projeto Vite (template vanilla). O botão faz o contador descer e o valor aparece no título do separador.
- `twa-ficha02/` — catálogo de um stand de carros. `data.js` tem os dados; `catalog.js` tem as funções puras (`map` / `filter` / `reduce`, sem ciclos); `app.js` lista, filtra, pesquisa, mostra o top e grava `report.json`; `check.js` testa com `node:assert/strict`.

## Como correr

Requisitos: Node.js 22 e npm 10.

```bash
cd twa-ficha01
node app.js
node api.js
```

`node app.js` imprime `tecnologias-web-avançadas`. `node api.js` volta a escrever `repo.json`.

```bash
cd twa-vite
npm install
npm run dev
```

Abrir o endereço que o Vite mostrar (por norma `http://localhost:5173`). Cada clique no botão diminui o contador em 1 e atualiza o título do separador.

```bash
cd twa-ficha02
node check.js
node app.js
node app.js fps
node app.js search hibrido
node app.js top 3
node app.js report
```

`node check.js` não imprime nada quando os testes passam. `node app.js report` escreve `report.json` com `count`, `total`, `categories` e `top3`.

## IA generativa

Usei IA generativa (Cursor, modelo Grok) para concluir a Ficha 01 e a Ficha 02 em casa: estrutura do repositório, ficheiros das fichas, projeto Vite e este README. O enunciado permite IA na conclusão em casa, desde que declarada.
