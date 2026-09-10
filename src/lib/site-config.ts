// ============================================================
// CONFIGURAÇÃO CENTRAL — edite aqui os dados do consultor/licenciado
// ============================================================

/** WhatsApp do consultor (formato internacional, apenas dígitos) */
export const CONSULTANT_WHATSAPP = "5511999999999";

export const CONSULTANT = {
  nome: "[NOME DO CONSULTOR]",
  cargo: "Consultor Licenciado iGreen Energy",
  registro: "[CÓDIGO DE LICENCIADO]",
  cidade: "[CIDADE / UF]",
  bio: "[BIO DO CONSULTOR — anos de experiência, quantos clientes já economizam, sua região de atuação e por que você trabalha com energia por assinatura.]",
  fotoPlaceholder: "[FOTO PROFISSIONAL]",
};

/** Percentual máximo de economia potencial usado nas estimativas */
export const MAX_ECONOMIA = 0.2;

export const NUMEROS = [
  { valor: "+50", label: "usinas próprias em operação" },
  { valor: "+20", label: "distribuidoras atendidas" },
  { valor: "RA1000", label: "reputação no Reclame Aqui" },
  { valor: "GPTW", label: "certificação Great Place to Work" },
];

export const DISTRIBUIDORAS = ["EDP", "Enel", "CPFL", "Neoenergia", "Cemig", "Outra"];

export const UFS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB",
  "PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

export const DEPOIMENTOS = [
  {
    nome: "[NOME DO CLIENTE 1]",
    detalhe: "[CIDADE/UF • Residência]",
    texto: "[DEPOIMENTO REAL — substitua por um relato autorizado do cliente sobre a redução na conta de luz.]",
  },
  {
    nome: "[NOME DO CLIENTE 2]",
    detalhe: "[CIDADE/UF • Empresa]",
    texto: "[DEPOIMENTO REAL — substitua por um relato autorizado sobre a facilidade da adesão.]",
  },
  {
    nome: "[NOME DO CLIENTE 3]",
    detalhe: "[CIDADE/UF • Residência]",
    texto: "[DEPOIMENTO REAL — substitua por um relato autorizado sobre o atendimento do consultor.]",
  },
];

export const FAQ = [
  {
    q: "Preciso instalar placas solares na minha casa?",
    a: "Não. Nada é instalado no seu imóvel. A energia limpa é gerada em usinas próprias e os créditos são abatidos na sua conta pela própria distribuidora.",
  },
  {
    q: "Preciso investir algum valor para começar?",
    a: "Não há investimento inicial, taxa de adesão ou obra. Você continua recebendo energia normalmente e passa a pagar com desconto sobre a parte de consumo.",
  },
  {
    q: "A economia de até 20% é garantida?",
    a: "O valor é uma economia potencial estimada. O desconto efetivo depende da distribuidora, do seu perfil de consumo e da disponibilidade de usina na sua região.",
  },
  {
    q: "Minha instalação elétrica muda em algo?",
    a: "Nada muda. Mesma rede, mesma distribuidora, mesma qualidade de fornecimento. Muda apenas a origem da energia e o valor da fatura.",
  },
  {
    q: "Existe fidelidade ou multa?",
    a: "O contrato é de adesão simples e pode ser encerrado conforme as condições apresentadas na proposta, sem taxas escondidas.",
  },
  {
    q: "Empresas também podem aderir?",
    a: "Sim. Residências, comércios e empresas com contas elegíveis podem participar, respeitando os critérios da distribuidora local.",
  },
];
