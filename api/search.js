export default async function handler(req, res) {
  const query = req.query.q || 'vazio';

  // Simulação de resposta com dados padrão
  const resultados = [
    { produto: "Curso Tráfego Pago", fonte: "YouTube", tipo: "Orgânico" },
    { produto: "Ferramenta SEO", fonte: "Instagram", tipo: "Pago" }
  ];

  res.status(200).json({
    mensagem: Você pesquisou por: ${query},
    dados: resultados
  });
}
fix: reevio real do código da função search
