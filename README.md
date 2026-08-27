# Contos de Nós 📖

Site de amor com vários personagens — cada um leva a uma página própria, com uma cartinha pra você escrever. Feito em **HTML + CSS + JavaScript puro** (sem framework, sem build).

## Estrutura

```
contos-de-nos/
├── index.html   → só a casca (o conteúdo todo é montado pelo script.js)
├── style.css    → todo o visual (cores de cada personagem, tipografia, animações)
└── script.js    → toda a lógica (roteamento entre páginas, conteúdo de cada conto)
```

## Como rodar

**Opção 1 — mais simples:** dê duplo clique em `index.html`.

**Opção 2 — recomendada:**
1. Abra a pasta `contos-de-nos` no VSCode.
2. Instale a extensão **Live Server** (ritwickdey.LiveServer) — sugerida automaticamente.
3. Clique com o botão direito em `index.html` → **Open with Live Server**.

## Como funciona

O site é uma "SPA" (single-page app): não existem várias páginas `.html` de verdade — o `script.js` troca o conteúdo da `<div id="app">` de acordo com a URL depois do `#` (ex: `#/rapunzel`, `#/coringa`). Isso significa que:
- Cada personagem tem uma URL própria, então dá pra favoritar ou compartilhar o link direto de um personagem específico.
- O botão "voltar" do navegador funciona normalmente.

## Personagens inclusos

Rapunzel, Coringa, Zootopia (a raposa e a coelha), Ravena, Tiana, Ursinho Pooh, Bela e a Fera, e Homem-Aranha.

> Coringa, Zootopia, Ravena, Tiana, Ursinho Pooh (visual), Bela e a Fera (visual) e Homem-Aranha são personagens registrados de estúdios específicos. As ilustrações de cada página foram desenhadas do zero (só CSS, sem nenhuma imagem baixada) de um jeito **original**, inspirado na ideia geral de cada um — sem copiar o design registrado (traje, rosto, logotipo etc). Rapunzel e Bela e a Fera também se apoiam nos contos de fadas originais (domínio público), que são mais antigos que qualquer adaptação de estúdio.

## Personalizar

Abra o `script.js` e procure por `PERSONALIZE AQUI` — está tudo na constante `CONFIG`, logo no início:

| Campo | O que é |
|---|---|
| `paraNome` | nome de quem vai receber o site |
| `deNome` | seu nome — aparece na assinatura de cada carta |
| `hubTitulo` / `hubSubtitulo` | título e subtítulo da página inicial |
| `contos.<personagem>.titulo` | a frase grande de cada página |
| `contos.<personagem>.caracteristicas` | lista de 4 características (pode editar ou trocar) |
| `contos.<personagem>.declaracao` | **a cartinha** — troque o texto `[escreva aqui...]` pelo que você quiser escrever |
| `closingNote` | frase no rodapé de cada página de personagem |

Pra trocar as cores de um personagem, procure no `style.css` por `.theme-<personagem>` (ex: `.theme-rapunzel`) — cada um tem `--night`, `--accent` e outras variáveis de cor.
