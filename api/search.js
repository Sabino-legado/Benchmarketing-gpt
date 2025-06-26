export default async function handler(req, res) {
  const query = req.query.q || 'vazio';

  // Simulação de resposta
  const resultados = [
    { produto: "Curso Tráfego Pago", fonte: "YouTube", tipo: "Orgânico" },
    { produto: "Ferramenta SEO", fonte: "Instagram", tipo: "Pago" }
  ];

  res.status(200).json({
    mensagem: Você pesquisou por: ${query},
    dados: resultados
  });
}
