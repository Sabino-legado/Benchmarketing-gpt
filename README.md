# 🧠 Benchmarketing-GPT

Plugin GPT conectado a um backend inteligente que responde a perguntas técnicas sobre tráfego pago, métricas de campanhas (CPM, CPC, CTR, ROAS, CPA) e comparativos atualizados de performance em marketing digital.

---

## 🎯 Objetivo

Construir um agente GPT com capacidade real de benchmarking técnico, que:

- Busca conteúdos em tempo real de fontes como **blogs, YouTube, fóruns e APIs**
- Analisa **métricas de campanhas digitais** (Google Ads, Meta, TikTok etc.)
- Compara **performance entre países** (EUA, Brasil, Portugal)
- É capaz de **responder com precisão**, dados reais e conteúdo técnico atualizado

---

## 🛠️ Tecnologias Utilizadas

- 🤖 GPT Plugin (via `ai-plugin.json` e `openapi.yaml`)
- 🧩 [Meilisearch](https://www.meilisearch.com/) (busca semântica)
- 🟢 Node.js + Express (API backend)
- 🌐 Vercel (deploy e hospedagem)
- ⚙️ n8n (ingestão automática de conteúdo via RSS, YouTube, GitHub, Reddit)

---

## 💻 Rodar Localmente

```bash
git clone https://github.com/teu-usuario/Benchmarketing-GPT.git
cd Benchmarketing-GPT
npm install
cp .env.example .env
npm start
```

---

## 🚀 Deploy na Vercel

1. Conecte este repositório à sua conta no [Vercel](https://vercel.com)
2. Defina as variáveis de ambiente no painel da Vercel:

```env
MEILI_HOST=https://seu-meilisearch.fly.dev
MEILI_KEY=your_meilisearch_master_key
```

3. Faça deploy
4. Acesse:
   - API: `https://your-url.vercel.app/api/search?q=roas`
   - Plugin: `https://your-url.vercel.app/.well-known/ai-plugin.json`

---

## ⚙️ Configuração do `.env`

```env
MEILI_HOST=https://seu-meilisearch.fly.dev
MEILI_KEY=your_meilisearch_master_key
```

---

## 🔍 Testar Endpoint

```bash
curl "http://localhost:3000/api/search?q=roas"
```

---

## 🤖 Importar o Plugin no GPT Builder

1. Acesse: [https://chat.openai.com/gpts](https://chat.openai.com/gpts)
2. Clique em “Create”
3. No passo de plugin, use:

```
https://your-vercel-url.vercel.app/.well-known/ai-plugin.json
```

4. Pronto! O GPT agora pode acessar conteúdos técnicos via `/search`

---

## 📁 Estrutura de Pastas

```
Benchmarketing-GPT/
├── api/
│   └── index.js           # Backend Express com /api/search
├── public/
│   └── .well-known/
│       ├── ai-plugin.json # Configuração do GPT Plugin
│       └── openapi.yaml   # Definição OpenAPI dos endpoints
├── .env.example           # Variáveis de ambiente
├── package.json
├── README.md
└── LICENSE
```

---

## 📡 Fluxo n8n externo

Este projeto é complementado com automações n8n que:

- Buscam conteúdo em tempo real via:
  - RSS (blogs)
  - YouTube Transcript API
  - Reddit e GitHub
- Classificam o tipo de conteúdo (tutorial, benchmark, explicação)
- Enviam automaticamente ao endpoint `/index` para indexação

---

## 🪪 Licença e Autoria

Criado com 💡 por **Benchmaster.ai**  
Legado de engenharia de Sabino Kalufele ⚡

MIT License – sinta-se livre para adaptar, contribuir ou clonar com créditos.
