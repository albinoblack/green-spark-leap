// ============================================================
// Dados do consultor e links enviados por Laudemir.
// ============================================================

/** WhatsApp do consultor (formato internacional, apenas dígitos) */
export const CONSULTANT_WHATSAPP = "5512991771765";
export const SITE_URL = "https://www.solucaoigreen.com.br/";

export const CONSULTANT = {
  nome: "Laudemir Lemes",
  cargo: "Consultor Licenciado iGreen Energy",
  telefone: "(12) 99177-1765",
  email: "transicaoenergeticaigreen@gmail.com",
  foto: "/images/laudemir.png",
  bio: "Ajudo pessoas e empresas a conhecerem as soluções da iGreen em energia, telefonia e seguro veicular. Fale comigo para entender as condições disponíveis para o seu perfil.",
};

export const LINKS = {
  green: "https://green.igreenenergy.com.br/?id=152476&sendcontract=true",
  telecom:
    "https://telecom.igreenenergy.com.br/?id=03000e73-d093-4efb-bb7e-3c7c899e6bc6&autoConnection=true&chip=esim",
  seguros:
    "https://seguros.igreenenergy.com.br?t=-5tQqos_JDDQr0dS31oonWzy1UcYJ9-FL_zUz0NPGo92jiXCoF-PP1x9wg8Oxw",
  licenciado: "https://expansao.igreenenergy.com.br/?id=152476&checkout=true",
  oficial: "https://www.igreenenergy.com.br/",
};

/** Percentual máximo de economia potencial usado nas estimativas */
export const MAX_ECONOMIA = 0.2;

export const whatsappHref = (message: string) =>
  `https://wa.me/${CONSULTANT_WHATSAPP}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  geral: "Olá, Laudemir! Vi seu site e gostaria de conhecer as soluções iGreen para mim.",
  oportunidade:
    "Olá, Laudemir! Quero conhecer a oportunidade de atuação como licenciado iGreen. Pode me explicar os requisitos e as condições oficiais?",
} as const;

export const SOLUTIONS = [
  {
    id: "green",
    name: "Conexão Green",
    description: "Energia limpa por assinatura, sem instalar placas no imóvel.",
    audience: "Para residências e pequenos negócios com conta elegível.",
    imageSrc: null as string | null,
    suggestedImagePath: "/images/products/conexao-green.webp",
    directHref: LINKS.green,
    directLabel: "Ir para adesão",
    contactLabel: "Falar sobre Green",
    message:
      "Olá, Laudemir! Quero entender a Conexão Green e verificar se posso economizar na conta de luz.",
  },
  {
    id: "solar",
    name: "Energia solar com placas",
    description: "Soluções de geração solar com painéis, distintas da assinatura Green.",
    audience: "Para quem deseja avaliar um projeto com placas solares.",
    imageSrc: null as string | null,
    suggestedImagePath: "/images/products/energia-solar-placas.webp",
    directHref: null,
    directLabel: null,
    contactLabel: "Falar sobre solar",
    message: "Olá, Laudemir! Quero conhecer as opções iGreen de energia solar com placas.",
  },
  {
    id: "telecom",
    name: "iGreen Telecom",
    description: "Planos de telefonia móvel e opção de portabilidade.",
    audience: "Para quem quer conhecer opções de linha móvel ou portar seu número.",
    imageSrc: null as string | null,
    suggestedImagePath: "/images/products/igreen-telecom.webp",
    directHref: LINKS.telecom,
    directLabel: "Ver opções de telefonia",
    contactLabel: "Falar sobre Telecom",
    message:
      "Olá, Laudemir! Quero saber mais sobre a iGreen Telecom e as opções de telefonia e portabilidade.",
  },
  {
    id: "seguro",
    name: "Seguro veicular",
    description: "Solução de proteção veicular com cotação conforme o perfil.",
    audience: "Para quem deseja consultar opções de seguro para seu veículo.",
    imageSrc: null as string | null,
    suggestedImagePath: "/images/products/seguro-veicular.webp",
    directHref: LINKS.seguros,
    directLabel: "Ir para cotação",
    contactLabel: "Falar sobre seguro",
    message: "Olá, Laudemir! Quero conhecer a solução de seguro veicular e solicitar uma cotação.",
  },
] as const;

export const NUMEROS = [
  { valor: "+1.000", label: "usinas solares informadas pela iGreen" },
  { valor: "+30", label: "distribuidoras informadas pela iGreen" },
];

export const DISTRIBUIDORAS = ["EDP", "Enel", "CPFL", "Neoenergia", "Cemig", "Outra"];

export const UFS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

export const FAQ = [
  {
    q: "Preciso instalar placas solares na minha casa?",
    a: "Não na Conexão Green. Nada é instalado no seu imóvel. A energia limpa é gerada em usinas solares e os créditos compensam parte do consumo da sua conta.",
  },
  {
    q: "Preciso investir algum valor para começar?",
    a: "Na Conexão Green, não há instalação de equipamentos no imóvel. Confirme com o Laudemir as condições comerciais e contratuais vigentes para seu perfil antes de aderir.",
  },
  {
    q: "A economia de até 20% é garantida?",
    a: "O valor é uma economia potencial estimada. O desconto efetivo depende da distribuidora, do seu perfil de consumo e da disponibilidade de usina na sua região.",
  },
  {
    q: "Minha instalação elétrica muda em algo?",
    a: "Na Conexão Green, não é preciso alterar a instalação elétrica. O fornecimento segue pela distribuidora local; a compensação de créditos e o faturamento dependem das condições aplicáveis.",
  },
  {
    q: "Existe fidelidade ou multa?",
    a: "As condições de cancelamento dependem da modalidade escolhida e constam da proposta e do contrato. Peça ao Laudemir para explicar os termos antes de aderir.",
  },
  {
    q: "Empresas também podem aderir?",
    a: "Sim. Residências, comércios e empresas com contas elegíveis podem participar, respeitando os critérios da distribuidora local.",
  },
  {
    q: "O desconto começa na próxima fatura?",
    a: "Não necessariamente. A ativação e o início dos créditos dependem da distribuidora e do processo de adesão. O Laudemir pode orientar você sobre os prazos aplicáveis ao seu caso.",
  },
  {
    q: "A iGreen também oferece placas solares?",
    a: "Sim. A Conexão Green desta página dispensa instalação. A iGreen também oferece modalidades com placas solares, com condições próprias. Fale com o Laudemir para comparar as opções.",
  },
];
