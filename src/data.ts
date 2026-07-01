/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ServiceItem, PillarItem, WhyTrustItem, GrowthBenefit, GrowthPlan } from './types';

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
    title: "Diagnóstico sem filtros",
    description: "Análise realista dos gargalos do seu negócio, sem enrolação ou termos técnicos desnecessários."
  },
  {
    id: 2,
    title: "Foco 100% comercial",
    description: "Nenhuma métrica de ego. Nosso foco é exclusivamente faturamento, geração de leads e vendas."
  },
  {
    id: 3,
    title: "Especialistas Seniores",
    description: "Seu negócio acompanhado por quem dita as melhores estratégias, sem intermediários juniores."
  },
  {
    id: 4,
    title: "Processo sob medida",
    description: "Funis de vendas estruturados especificamente para o seu nicho, da atração à conversão."
  },
  {
    id: 5,
    title: "Transparência total",
    description: "Clareza absoluta sobre investimentos e canais de retorno. Sem taxas ocultas na operação."
  }
];

export const BENEFITS_LIST: GrowthBenefit[] = [
  { id: 1, text: "Leads qualificados no WhatsApp todos os dias" },
  { id: 2, text: "Fim da dependência de indicações espontâneas" },
  { id: 3, text: "Faturamento previsível e clareza de dados" },
  { id: 4, text: "Métricas transparentes de retorno sobre o investimento" },
  { id: 5, text: "Funil integrado otimizado, do anúncio ao CRM" },
  { id: 6, text: "Crescimento sustentável e autoridade no seu nicho" }
];

export const DIAGNOSTIC_STEPS = [
  {
    step: 1,
    title: "Preenchimento do formulário",
    description: "Você responde perguntas rápidas de diagnóstico para nossa equipe entender o exato momento comercial do seu negócio."
  },
  {
    step: 2,
    title: "Análise e agendamento",
    description: "Nossa equipe analisa as informações em detalhes e entra em contato via WhatsApp para agendar um bate-papo estratégico."
  },
  {
    step: 3,
    title: "Reunião estratégica gratuita",
    description: "Apresentamos uma direção tática 100% personalizada para sua empresa destravar novos canais de venda e otimizar investimentos."
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
