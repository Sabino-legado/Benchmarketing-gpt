const express = require('express');
const Typesense = require('typesense');
require('dotenv').config();

const app = express();
app.use(express.json());

const client = new Typesense.Client({
  nodes: [
    {
      host: 'u4yiph37ds8ie2xcp-1.a1.typesense.net', // u4y1ph37ds8ie2xcp
      port: 443,
      protocol: 'https',
    },
  ],
  apiKey: '5egQcnYMrhhXdl6UiCfHBAxXHdqkyMl', // u4y1ph37ds8ie2xcp
  connectionTimeoutSeconds: 5,
});

// Endpoint de busca
app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;
    const results = await client.collections('conteudos').documents().search({
      q: query,
      query_by: 'titulo,descricao,categoria',
    });

    res.json(results.hits.map(hit => hit.document));
  } catch (error) {
    res.status(500).json({ erro: 'Erro na busca', detalhe: error.message });
  }
});

module.exports = app;
