/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ServiceItem, PillarItem, WhyTrustItem, GrowthBenefit, GrowthPlan, TestimonialItem } from './types';

export const SECHOLDERS_SEGMENTS = [
  "Hotelaria",
  "Turismo",
  "Restaurantes",
  "Serviços",
  "Comércio Local",
  "Educação",
  "Saúde",
  "Imobiliário",
  "Tecnologia",
  "Eventos",
  "E-commerce",
  "Clínicas Estéticas",
  "Consultorias",
  "Franquias"
];

export const REAL_CLIENT_LOGOS = [
  "https://i.imgur.com/gLabzpF.png",
  "https://i.imgur.com/Qy6W2PA.png",
  "https://i.imgur.com/e6hvI7B.png",
  "https://i.imgur.com/vtVxiL0.png",
  "https://i.imgur.com/HTzxaUp.png",
  "https://i.imgur.com/0iUFWhh.png",
  "https://i.imgur.com/2l5Got4.png",
  "https://i.imgur.com/MOoLdNA.png",
  "https://i.imgur.com/Nx1Vy4j.png",
  "https://i.imgur.com/UXzM4pp.png",
  "https://i.imgur.com/IQyqHxU.png",
  "https://i.imgur.com/eYXiWOR.png",
  "https://i.imgur.com/z7vriMf.png"
];

export const WHO_WE_ARE_DIFFERENTIALS = [
  {
    title: "Estratégia antes da execução",
    description: "Planejamento comercial aprofundado antes de ligar qualquer campanha. Sem chutes ou testes cegos."
  },
  {
    title: "Marketing conectado ao comercial",
    description: "Alinhamos os anúncios à jornada de vendas e à configuração do CRM para garantir leads realmente prontos."
  },
  {
    title: "Acompanhamento próximo e transparente",
    description: "Você não é apenas mais um número em uma planilha automática. Nosso time discute metas e resultados lado a lado."
  }
];

export const NOT_US_LIST = [
  "Posts vazios sem estratégia",
  "Métricas de vaidade (curtidas/seguidores)",
  "Tráfego pago genérico sem funil",
  "Relatórios complexos sem resultado",
  "Falta de processo comercial e CRM"
];

export const YES_US_LIST = [
  "Foco em vendas e faturamento",
  "Estratégia comercial personalizada",
  "Tráfego avançado com funil",
  "Configuração de CRM e processos",
  "Time sênior focado em resultado"
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 1,
    title: "Estratégia de Crescimento",
    description: "Diagnóstico, posicionamento e planejamento estratégico completo para sua empresa crescer com direção e métricas claras."
  },
  {
    id: 2,
    title: "Tráfego Pago",
    description: "Campanhas avançadas e otimizadas em Meta Ads e Google Ads com foco em atração de leads, novos clientes e oportunidades reais."
  },
  {
    id: 3,
    title: "Funis e Landing Pages",
    description: "Desenvolvimento de páginas de altíssima conversão e copywriting persuasivo desenhados especificamente para capturar atenção."
  },
  {
    id: 4,
    title: "Gestão de Redes Sociais",
    description: "Criação de conteúdo de alto valor, posicionamento premium e presença digital estruturada para fortalecer o branding da marca."
  },
  {
    id: 5,
    title: "CRM e Processo Comercial",
    description: "Configuração ágil de funis de atendimento, organização dos leads e treinamento tático do processo comercial de vendas."
  },
  {
    id: 6,
    title: "Performance e Acompanhamento",
    description: "Auditoria contínua, análise detalhada de dashboards, relatórios transparentes e otimizações semanais para maximizar o retorno."
  }
];

export const PILLARS_LIST: PillarItem[] = [
  {
    id: 1,
    title: "Branding & Diferenciação",
    description: "Criação de imagem de marca forte e diferencial competitivo para cobrar mais caro e atrair clientes qualificados.",
    result: "Percepção imediata de autoridade e alto valor."
  },
  {
    id: 2,
    title: "Tráfego & Performance",
    description: "Anúncios estratégicos e otimização diária em Meta Ads e Google Ads para atrair público comprador real.",
    result: "Mais leads qualificados chegando todos os dias no funil."
  },
  {
    id: 3,
    title: "Funis de Vendas",
    description: "Páginas profissionais focadas em conversão rápida e copywriting persuasivo desenhado para quebrar as principais objeções.",
    result: "Mais vendas geradas com a mesma quantidade de tráfego."
  },
  {
    id: 4,
    title: "CRM & Comercial",
    description: "Configuração ágil de CRM, roteiros estratégicos e acompanhamento diário para evitar qualquer desperdício de leads.",
    result: "Lead atendido com velocidade máxima e aumento da conversão."
  }
];

export const WHY_TRUST_LIST: WhyTrustItem[] = [
  {
    id: 1,
    title: "Foco Comercial",
    description: "Sem métricas de vaidade ou ego. Nosso compromisso é com faturamento real e vendas."
  },
  {
    id: 2,
    title: "Time Sênior",
    description: "Seu negócio acompanhado diretamente por estrategistas experientes, sem intermediários."
  },
  {
    id: 3,
    title: "Transparência",
    description: "Clareza absoluta sobre investimentos, canais de retorno e métricas do seu funil."
  }
];

export const BENEFITS_LIST: GrowthBenefit[] = [
  { id: 1, text: "Leads qualificados no WhatsApp todos os dias" },
  { id: 2, text: "Fim da dependência de indicações espontâneas" },
  { id: 3, text: "Faturamento previsível com clareza de dados" },
  { id: 4, text: "Funil de vendas integrado, do anúncio ao CRM" }
];

export const DIAGNOSTIC_STEPS = [
  {
    step: 1,
    title: "Formulário Rápido",
    description: "Responda perguntas simples sobre a situação atual do seu comercial."
  },
  {
    step: 2,
    title: "Análise Estratégica",
    description: "Avaliamos suas respostas e entramos em contato diretamente via WhatsApp."
  },
  {
    step: 3,
    title: "Plano de Ação",
    description: "Apresentamos uma direção personalizada e prática para destravar suas vendas."
  }
];

export const GROWTH_PLANS: GrowthPlan[] = [
  {
    id: 1,
    name: "Basic",
    subtitle: "Presença Digital",
    description: "Ideal para empresas que estão iniciando sua presença digital e geração ativa de demanda comercial.",
    features: [
      "Gestão de Tráfego Pago (Meta/Google)",
      "Social Media e Design de Postagens",
      "Acompanhamento Personalizado",
      "Análise Regular de Métricas",
      "Relatório Mensal de Resultados"
    ],
    contract: "Permanência mínima: 3 meses"
  },
  {
    id: 2,
    name: "Business",
    subtitle: "Crescimento",
    description: "Ideal para empresas que desejam acelerar o crescimento comercial e profissionalizar todo o marketing.",
    features: [
      "Tudo incluído no plano Basic",
      "Tráfego Pago Estratégico & Avançado",
      "Funil de Vendas Personalizado",
      "Automações para Redes Sociais",
      "Relatório Quinzenal Detalhado"
    ],
    contract: "Permanência mínima: 3 meses"
  },
  {
    id: 3,
    name: "Elite",
    subtitle: "Escala",
    description: "Ideal para empresas consolidadas que precisam integrar marketing e comercial para escala massiva de vendas.",
    features: [
      "Tudo incluído no plano Business",
      "Tráfego Pago de Alta Performance",
      "Assessoria Completa para Redes Sociais",
      "Implementação Personalizada de CRM",
      "Assessoria e Alinhamento Comercial",
      "Reuniões de Alinhamento Semanais",
      "Relatório Semanal de Desempenho"
    ],
    contract: "Permanência mínima: 3 meses + Renovação Automática",
    isPopular: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "A Legacy é uma agência de marketing?",
    answer: "Não. A Legacy é uma assessoria estratégica de crescimento empresarial. Nosso foco não é apenas criar posts ou anúncios soltos, mas sim estruturar marketing, tráfego pago, funis de conversão e processos comerciais completos para gerar escala previsível."
  },
  {
    question: "O diagnóstico é realmente gratuito?",
    answer: "Sim. O diagnóstico inicial é gratuito e serve para nossa equipe entender a fundo o momento atual da sua empresa, identificar os principais gargalos que estão travando suas vendas e apontar as melhores oportunidades de escala."
  },
  {
    question: "Vocês trabalham só com empresas de Natal/RN?",
    answer: "A Legacy tem base estratégica em Natal/RN, mas atende empresas de diversas regiões do Brasil por meio de reuniões e planejamentos 100% online."
  },
  {
    question: "Preciso já ter uma equipe interna de marketing?",
    answer: "Não necessariamente. A Legacy pode atuar como o próprio motor externo da sua empresa, ou trabalhar em total sinergia com o seu time interno, treinando, fornecendo a estratégia e cobrando métricas de conversão."
  },
  {
    question: "Vocês fazem apenas tráfego pago?",
    answer: "Não. O tráfego pago (Meta Ads, Google Ads) é apenas um dos pilares de atração. A Legacy também trabalha com posicionamento estratégico, branding, funis de conversão, criação de páginas otimizadas, parametrização de CRM e consultoria comercial."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote: "Antes da Legacy, a gente dependia muito da alta temporada e das indicações. Depois que começamos a estruturar melhor nosso marketing, conseguimos aparecer mais para o turista certo e receber mais contatos qualificados pelo WhatsApp. Hoje temos uma visão muito mais clara do que fazer para gerar reservas.",
    signature: "— Rafael Monteiro, diretor de empresa de passeios turísticos",
    niche: "Passeios Turísticos"
  },
  {
    id: 2,
    quote: "A Legacy nos ajudou a enxergar que não bastava ter uma boa estrutura. Precisávamos ser encontrados, transmitir confiança e transformar interesse em reserva. Com estratégia, tráfego e acompanhamento, começamos a ter mais previsibilidade na captação de hóspedes.",
    signature: "— Camila Andrade, proprietária de pousada",
    niche: "Hotelaria / Pousada"
  },
  {
    id: 3,
    quote: "No mercado imobiliário, velocidade e confiança fazem muita diferença. A Legacy organizou nossa comunicação, melhorou nossos anúncios e ajudou a gerar leads mais alinhados com o nosso perfil de imóvel. Hoje nosso comercial recebe oportunidades muito mais preparadas.",
    signature: "— Gustavo Menezes, sócio-diretor imobiliário",
    niche: "Mercado Imobiliário"
  },
  {
    id: 4,
    quote: "A gente tinha um projeto forte, mas faltava transformar isso em alcance e público. A Legacy ajudou a posicionar melhor o evento, criar uma comunicação mais clara e aumentar o interesse das pessoas. O marketing deixou de ser improviso e passou a ter direção.",
    signature: "— Marina Queiroz, produtora cultural",
    niche: "Mercado Cultural / Eventos"
  },
  {
    id: 5,
    quote: "A Legacy nos mostrou que postar comida bonita não era suficiente. Precisávamos de estratégia para atrair as pessoas certas, divulgar nossas ofertas e transformar visualização em movimento real no restaurante. O resultado foi uma comunicação mais profissional e mais clientes chegando.",
    signature: "— Felipe Rocha, proprietário de restaurante",
    niche: "Restaurante / Gastronomia"
  },
  {
    id: 6,
    quote: "A gente já tinha um bom serviço, mas não conseguia comunicar isso da forma certa. Com a Legacy, nossa presença digital ficou mais profissional, os anúncios começaram a gerar contatos melhores e conseguimos acompanhar melhor cada oportunidade. Foi um divisor de águas para o crescimento da clínica.",
    signature: "— Juliana Martins, diretora de clínica especializada",
    niche: "Clínica / Serviços"
  }
];
