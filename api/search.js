import Typesense from 'typesense';

console.log('TYPESENSE_CLUSTER:', process.env.TYPESENSE_CLUSTER); // Adicione isso
const client = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_CLUSTER,
      port: 443,
      protocol: 'https',
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 5,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  const query = req.query.q || '';

  try {
    const resultados = await client
      .collections('conteudos')
      .documents()
      .search({
        q: query,
        query_by: 'titulo,descricao,categoria',
      });

    return res.status(200).json({
      mensagem: `Resultados encontrados para: ${query}`,
      dados: resultados.hits.map((hit) => hit.document),
    });
  } catch (erro) {
    console.error('Erro no Typesense:', erro);
    return res.status(500).json({
      erro: 'Erro ao buscar dados no Typesense',
      detalhes: erro.message,
    });
  }
}
