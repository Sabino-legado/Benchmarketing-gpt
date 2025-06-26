import Typesense from 'typesense';

const client = new Typesense.Client({
  nodes: [
    {
      host: 'u4yiph37ds8ie2xcp-1.a1.typesense.net',
      port: 443,
      protocol: 'https',
    },
  ],
  apiKey: '5egQcnYMrhhXdl6UiCfHBAxXHdqkyMl',
  connectionTimeoutSeconds: 5,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const query = req.query.q || '';

  try {
    const resultados = await client.collections('conteudos').documents().search({
      q: query,
      query_by: 'titulo,descricao,categoria',
    });

    return res.status(200).json({
      mensagem: Resultados encontrados para: ${query},
      dados: resultados.hits.map((hit) => hit.document),
    });
  } catch (erro) {
    return res.status(500).json({
      erro: 'Erro ao buscar dados no Typesense',
      detalhes: erro.message,
    });
  }
}
