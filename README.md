# twa-gabriel-rocha

Ficha 01 — Tecnologias Web Avançadas (ISLA Gaia).

Repositório com as duas pastas pedidas na aula 01.

## Pastas

- `twa-ficha01/` — módulo ES (`"type": "module"`), `utils.js` + `app.js`, e `api.js` (fetch à API pública do GitHub com escrita de `repo.json` via `fs/promises`).
- `twa-vite/` — projeto Vite (template vanilla). O botão faz o contador descer e o valor aparece no título do separador.

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

## IA generativa

Usei IA generativa (Cursor, modelo Grok) para concluir esta ficha em casa: estrutura do repositório, ficheiros da ficha, projeto Vite e este README. O enunciado permite IA na conclusão em casa, desde que declarada.
