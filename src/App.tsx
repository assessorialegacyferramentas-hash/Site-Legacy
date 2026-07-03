/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Users,
  TrendingUp,
  Target,
  Shield,
  Activity,
  Phone,
  Mail,
  Briefcase,
  DollarSign,
  Award,
  Clock,
  ArrowRight,
  Lock,
  Settings,
  Database,
  Download,
  RefreshCw,
  FileText,
  Layers,
  Globe,
  Building2,
  ExternalLink,
  Sparkles,
  Menu,
  Eye,
  Trash2,
  Filter,
  CheckCircle,
  HelpCircle,
  AlertCircle
} from "lucide-react";

import {
  SECHOLDERS_SEGMENTS,
  REAL_CLIENT_LOGOS,
  WHO_WE_ARE_DIFFERENTIALS,
  NOT_US_LIST,
  YES_US_LIST,
  SERVICES_LIST,
  PILLARS_LIST,
  DIAGNOSTIC_STEPS,
  GROWTH_PLANS,
  FAQ_LIST,
  TESTIMONIALS
} from "./data";

import { DiagnosticLead } from "./types";

// Default mock leads to populate the CRM for immediate testing
const DEFAULT_MOCK_LEADS: DiagnosticLead[] = [
  {
    id: "lead-1",
    name: "Rodrigo Mendonça",
    email: "rodrigo@hotelmarazul.com.br",
    phone: "(84) 99884-1234",
    companyName: "Hotel Mar Azul",
    monthlyRevenue: "Acima de R$ 100 mil",
    niche: "Hotelaria & Turismo",
    status: "New",
    notes: "Lead muito interessado em anúncios de tráfego pago para reservas diretas de fim de ano. Solicitar faturamento exato na reunião.",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString() // 2 hours ago
  },
  {
    id: "lead-2",
    name: "Clarissa Rocha",
    email: "contato@clinicasantate.com.br",
    phone: "(84) 99122-4567",
    companyName: "Clínica Santa Fé",
    monthlyRevenue: "De R$ 50 mil a R$ 100 mil",
    niche: "Saúde & Estética",
    status: "Contacted",
    notes: "Feito primeiro contato por WhatsApp. Agendado bate-papo estratégico para próxima terça às 14h.",
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString() // 18 hours ago
  },
  {
    id: "lead-3",
    name: "Felipe Albuquerque",
    email: "direcao@albuquerquemobiliaria.com",
    phone: "(84) 98765-4321",
    companyName: "Albuquerque Imóveis",
    monthlyRevenue: "Acima de R$ 100 mil",
    niche: "Imobiliário",
    status: "Closed",
    notes: "Fechado plano Elite! Quer acelerar a captação de leads para lançamentos de alto padrão em Ponta Negra.",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString() // 2 days ago
  },
  {
    id: "lead-4",
    name: "Marta Guimarães",
    email: "marta@educamaisnatal.com.br",
    phone: "(84) 99445-9988",
    companyName: "Colégio Educa Mais",
    monthlyRevenue: "Acima de R$ 100 mil",
    niche: "Educação",
    status: "Rejected",
    notes: "Ficou sem orçamento no momento atual devido a investimentos estruturais no colégio. Retomar contato em 6 meses.",
    createdAt: new Date(Date.now() - 3600000 * 120).toISOString() // 5 days ago
  }
];

export default function App() {
  // CRM Leads State
  const [leads, setLeads] = useState<DiagnosticLead[]>([]);
  
  // Testimonials Carousel State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    monthlyRevenue: "",
    niche: ""
  });
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Accordion active index (FAQ)
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // CRM Filters
  const [crmSearch, setCrmSearch] = useState("");
  const [crmStatusFilter, setCrmStatusFilter] = useState<string>("All");
  const [crmRevenueFilter, setCrmRevenueFilter] = useState<string>("All");

  // Admin access simple state (no complex auth, just secure look)
  const [crmPassword, setCrmPassword] = useState("");
  const [isCrmUnlocked, setIsCrmUnlocked] = useState(true); // Default unlocked for easy review
  const [passwordError, setPasswordError] = useState("");

  // Refs for smooth scroll target
  const heroFormRef = useRef<HTMLDivElement>(null);

  // Initialize leads from localStorage or default mocks
  useEffect(() => {
    const storedLeads = localStorage.getItem("legacy_assessoria_leads");
    if (storedLeads) {
      try {
        setLeads(JSON.parse(storedLeads));
      } catch (e) {
        setLeads(DEFAULT_MOCK_LEADS);
      }
    } else {
      setLeads(DEFAULT_MOCK_LEADS);
      localStorage.setItem("legacy_assessoria_leads", JSON.stringify(DEFAULT_MOCK_LEADS));
    }
  }, []);

  // Testimonial Autoplay Carousel Effect (cycles every 6 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Save leads to localStorage whenever updated
  const saveLeads = (updatedLeads: DiagnosticLead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("legacy_assessoria_leads", JSON.stringify(updatedLeads));
  };

  // Scroll to form helper
  const scrollToForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    heroFormRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Basic Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Por favor, preencha seu nome comercial.";
    if (!formData.email.trim()) {
      errors.email = "Por favor, insira seu e-mail comercial.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "E-mail inválido. Utilize um formato padrão (ex: nome@empresa.com.br).";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Por favor, preencha o WhatsApp / Contato.";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      errors.phone = "Por favor, insira um número válido com DDD.";
    }
    if (!formData.companyName.trim()) errors.companyName = "Qual o nome da sua empresa?";
    if (!formData.monthlyRevenue) errors.monthlyRevenue = "Selecione uma faixa de faturamento.";
    if (!formData.niche.trim()) errors.niche = "Qual o seu nicho ou ramo de atuação?";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate elite server request delay
    setTimeout(() => {
      const newLead: DiagnosticLead = {
        id: `lead-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        monthlyRevenue: formData.monthlyRevenue,
        niche: formData.niche,
        status: "New",
        notes: "",
        createdAt: new Date().toISOString()
      };

      const updated = [newLead, ...leads];
      saveLeads(updated);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        monthlyRevenue: "",
        niche: ""
      });
    }, 1200);
  };

  // CRM Actions
  const updateLeadStatus = (leadId: string, newStatus: DiagnosticLead["status"]) => {
    const updated = leads.map((lead) => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    );
    saveLeads(updated);
  };

  const updateLeadNotes = (leadId: string, notesText: string) => {
    const updated = leads.map((lead) => 
      lead.id === leadId ? { ...lead, notes: notesText } : lead
    );
    saveLeads(updated);
  };

  const deleteLead = (leadId: string) => {
    if (confirm("Deseja realmente remover este lead do sistema?")) {
      const updated = leads.filter((lead) => lead.id !== leadId);
      saveLeads(updated);
    }
  };

  const restoreMockLeads = () => {
    if (confirm("Isto restaurará os leads de demonstração no painel. Prosseguir?")) {
      saveLeads(DEFAULT_MOCK_LEADS);
    }
  };

  // Export Leads to CSV string and download it
  const handleExportCSV = () => {
    const headers = ["ID", "Nome", "E-mail", "WhatsApp", "Empresa", "Faturamento", "Nicho", "Status", "Notas", "Data de Envio"];
    const rows = leads.map((lead) => [
      lead.id,
      lead.name,
      lead.email,
      lead.phone,
      lead.companyName,
      lead.monthlyRevenue,
      lead.niche,
      lead.status,
      lead.notes.replace(/\n/g, " "),
      new Date(lead.createdAt).toLocaleString("pt-BR")
    ]);

    const csvContent = "\uFEFF" + [headers.join(";"), ...rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(";"))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `legacy_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(crmSearch.toLowerCase()) ||
      lead.companyName.toLowerCase().includes(crmSearch.toLowerCase()) ||
      lead.niche.toLowerCase().includes(crmSearch.toLowerCase()) ||
      lead.email.toLowerCase().includes(crmSearch.toLowerCase());
      
    const matchesStatus = crmStatusFilter === "All" || lead.status === crmStatusFilter;
    const matchesRevenue = crmRevenueFilter === "All" || lead.monthlyRevenue === crmRevenueFilter;

    return matchesSearch && matchesStatus && matchesRevenue;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#121417] bg-grid text-[#F7F8FA] selection:bg-[#00D084] selection:text-[#121417] relative">
      
      {/* Immersive UI Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 30%, rgba(0,208,132,0.08) 0%, transparent 50%)" }} />
      
      {/* GLOW DECORATIONS (SUBTLE SAAS BLUR EFFECTS) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D084]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[1800px] right-1/4 w-[400px] h-[400px] bg-[#00D084]/3 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[800px] left-10 w-[300px] h-[300px] bg-[#00D084]/4 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* MAIN VIEW CONTROLLER */}
      <main className="flex-grow">
              
              {/* 1. HERO COM FORMULÁRIO */}
              <section className="relative pt-8 pb-16 md:py-24 border-b border-white/5 bg-[linear-gradient(to_bottom,rgba(18,20,23,0)_70%,rgba(26,29,36,0.3)_100%)]">
                {/* Custom geometric grid lines pattern in background */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e222d_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Copy & Details */}
                    <div className="lg:col-span-7 space-y-6 text-center md:text-left order-2 lg:order-1">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] md:max-w-xl">
                        Transformamos sua empresa em uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D084] to-emerald-400">máquina de vendas</span>.
                      </h1>
                      
                      {/* Microprovas / Diferenciais rápidos */}
                      <div className="pt-4 grid grid-cols-2 gap-4 max-w-lg mx-auto md:mx-0">
                        <div
                          onClick={() => scrollToForm()}
                          className="flex items-center space-x-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg text-left hover:border-[#00D084]/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00D084]" />
                          <div>
                            <p className="text-xs text-white/50">Base Oficial</p>
                            <p className="text-sm font-semibold text-white">Natal / RN</p>
                          </div>
                        </div>
                        <div
                          onClick={() => scrollToForm()}
                          className="flex items-center space-x-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg text-left hover:border-[#00D084]/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00D084]" />
                          <div>
                            <p className="text-xs text-white/50">Planejamento</p>
                            <p className="text-sm font-semibold text-white">Estratégia 360°</p>
                          </div>
                        </div>
                        <div
                          onClick={() => scrollToForm()}
                          className="flex items-center space-x-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg text-left hover:border-[#00D084]/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00D084]" />
                          <div>
                            <p className="text-xs text-white/50">Foco Absoluto</p>
                            <p className="text-sm font-semibold text-white">Marketing & Vendas</p>
                          </div>
                        </div>
                        <div
                          onClick={() => scrollToForm()}
                          className="flex items-center space-x-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg text-left hover:border-[#00D084]/40 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#00D084]" />
                          <div>
                            <p className="text-xs text-white/50">Oportunidade</p>
                            <p className="text-sm font-semibold text-white">Diagnóstico Grátis</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="lg:col-span-5 order-1 lg:order-2" ref={heroFormRef} id="hero-diagnostic-form">
                      <div className="relative">
                        {/* Glow effect behind form */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00D084]/20 to-emerald-500/20 rounded-2xl blur-lg pointer-events-none opacity-85" />
                        
                        <div className="relative bg-[#1A1D21] border legacy-border rounded-2xl p-6 sm:p-8 glow-green">
                          <div className="absolute -top-4 -right-4 bg-[#00D084] text-[#121417] px-4 py-2 rounded-lg text-xs font-black uppercase tracking-tighter shadow-lg z-10">Diagnóstico Gratuito</div>
                          <div className="mb-6">
                            <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-tight flex items-center space-x-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#00D084] animate-pulse" />
                              <span>Sua empresa máquina de vendas</span>
                            </h3>
                            <p className="text-xs text-white/50 mt-1 leading-relaxed">
                              Preencha as informações abaixo para solicitar seu diagnóstico comercial completo com nossa assessoria.
                            </p>
                          </div>

                          <AnimatePresence mode="wait">
                            {submitSuccess ? (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-6 text-center py-8"
                              >
                                <div className="w-14 h-14 bg-[#00D084]/15 text-[#00D084] rounded-full flex items-center justify-center mx-auto border border-[#00D084]/40">
                                  <CheckCircle className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                  <h4 className="text-lg font-bold text-white">Diagnóstico Solicitado!</h4>
                                  <p className="text-xs text-white/70 max-w-sm mx-auto leading-relaxed">
                                    Obrigado por enviar suas informações. Nossa equipe de especialistas em crescimento irá analisar seu ramo e faturamento. Entraremos em contato em até 24 horas úteis.
                                  </p>
                                </div>
                                <div className="pt-4 space-y-2">
                                  <button
                                    onClick={() => setSubmitSuccess(false)}
                                    className="w-full text-xs font-semibold bg-[#00D084] hover:bg-[#00D084]/90 text-[#121417] py-2 rounded-lg hover:underline flex items-center justify-center space-x-1 mx-auto transition-all"
                                  >
                                    <span>Enviar outro diagnóstico</span>
                                  </button>
                                </div>
                              </motion.div>
                            ) : (
                              <form onSubmit={handleSubmit} className="space-y-4">
                                
                                {/* Nome */}
                                <div className="space-y-1">
                                  <label className="block text-[11px] font-medium text-white/60 tracking-wider uppercase">Nome do Responsável</label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Ex: Carlos Silva"
                                    className={`form-input transition-all ${
                                      formErrors.name ? "border-red-500/50" : ""
                                    }`}
                                  />
                                  {formErrors.name && (
                                    <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-0.5">
                                      <AlertCircle className="w-2.5 h-2.5" />
                                      <span>{formErrors.name}</span>
                                    </p>
                                  )}
                                </div>

                                {/* E-mail Comercial */}
                                <div className="space-y-1">
                                  <label className="block text-[11px] font-medium text-white/60 tracking-wider uppercase">E-mail Comercial</label>
                                  <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Ex: carlos@empresa.com.br"
                                    className={`form-input transition-all ${
                                      formErrors.email ? "border-red-500/50" : ""
                                    }`}
                                  />
                                  {formErrors.email && (
                                    <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-0.5">
                                      <AlertCircle className="w-2.5 h-2.5" />
                                      <span>{formErrors.email}</span>
                                    </p>
                                  )}
                                </div>

                                {/* WhatsApp */}
                                <div className="space-y-1">
                                  <label className="block text-[11px] font-medium text-white/60 tracking-wider uppercase">WhatsApp / Contato</label>
                                  <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Ex: (84) 99999-9999"
                                    className={`form-input transition-all ${
                                      formErrors.phone ? "border-red-500/50" : ""
                                    }`}
                                  />
                                  {formErrors.phone && (
                                    <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-0.5">
                                      <AlertCircle className="w-2.5 h-2.5" />
                                      <span>{formErrors.phone}</span>
                                    </p>
                                  )}
                                </div>

                                {/* Nome da Empresa */}
                                <div className="space-y-1">
                                  <label className="block text-[11px] font-medium text-white/60 tracking-wider uppercase">Nome da Empresa</label>
                                  <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder="Ex: Legacy Construtora"
                                    className={`form-input transition-all ${
                                      formErrors.companyName ? "border-red-500/50" : ""
                                    }`}
                                  />
                                  {formErrors.companyName && (
                                    <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-0.5">
                                      <AlertCircle className="w-2.5 h-2.5" />
                                      <span>{formErrors.companyName}</span>
                                    </p>
                                  )}
                                </div>

                                {/* Faturamento Mensal Select */}
                                <div className="space-y-1">
                                  <label className="block text-[11px] font-medium text-white/60 tracking-wider uppercase">Faturamento Mensal Estimado</label>
                                  <select
                                    name="monthlyRevenue"
                                    value={formData.monthlyRevenue}
                                    onChange={handleInputChange}
                                    className={`form-input transition-all appearance-none ${
                                      formErrors.monthlyRevenue ? "border-red-500/50" : ""
                                    }`}
                                  >
                                    <option value="" className="text-white/30">Selecione uma faixa...</option>
                                    <option value="Até R$ 10 mil">Até R$ 10 mil</option>
                                    <option value="De R$ 10 mil a R$ 25 mil">De R$ 10 mil a R$ 25 mil</option>
                                    <option value="De R$ 25 mil a R$ 50 mil">De R$ 25 mil a R$ 50 mil</option>
                                    <option value="De R$ 50 mil a R$ 100 mil">De R$ 50 mil a R$ 100 mil</option>
                                    <option value="Acima de R$ 100 mil">Acima de R$ 100 mil</option>
                                  </select>
                                  {formErrors.monthlyRevenue && (
                                    <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-0.5">
                                      <AlertCircle className="w-2.5 h-2.5" />
                                      <span>{formErrors.monthlyRevenue}</span>
                                    </p>
                                  )}
                                </div>

                                {/* Nicho / Ramo */}
                                <div className="space-y-1">
                                  <label className="block text-[11px] font-medium text-white/60 tracking-wider uppercase">Nicho / Ramo de Atuação</label>
                                  <input
                                    type="text"
                                    name="niche"
                                    value={formData.niche}
                                    onChange={handleInputChange}
                                    placeholder="Ex: Medicina, Imobiliário, Comércio Local, etc."
                                    className={`form-input transition-all ${
                                      formErrors.niche ? "border-red-500/50" : ""
                                    }`}
                                  />
                                  {formErrors.niche && (
                                    <p className="text-[10px] text-red-400 flex items-center space-x-1 mt-0.5">
                                      <AlertCircle className="w-2.5 h-2.5" />
                                      <span>{formErrors.niche}</span>
                                    </p>
                                  )}
                                </div>

                                {/* Botão Enviar */}
                                <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="w-full mt-4 btn-legacy text-sm font-semibold py-4 rounded-lg transition-all shadow-lg shadow-[#00D084]/15 hover:shadow-[#00D084]/25 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                                  id="btn-submit-diagnostic"
                                >
                                  {isSubmitting ? (
                                    <>
                                      <RefreshCw className="w-4 h-4 animate-spin" />
                                      <span>Analisando mercado...</span>
                                    </>
                                  ) : (
                                    <>
                                      <span>Enviar e solicitar diagnóstico comercial</span>
                                      <ArrowRight className="w-4 h-4" />
                                    </>
                                  )}
                                </button>

                                {/* Microtexto de Segurança */}
                                <p className="text-[10px] text-white/40 text-center leading-relaxed mt-2">
                                  Seus dados estão 100% protegidos e serão usados apenas para contato e diagnóstico estratégico pela nossa diretoria de performance.
                                </p>
                              </form>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* 2. CARROSSEL DE MARCAS / SEGMENTOS */}
              <section className="py-12 bg-[#121417] border-b border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-6">
                    <h4 className="text-xs font-semibold text-[#00D084] tracking-widest uppercase">Operação Ativa</h4>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">Empresas não crescem por acaso.</h3>
                    <p className="text-xs text-white/50 mt-1">Marcas que querem vender mais precisam de estratégia, processo e acompanhamento constante.</p>
                  </div>
                </div>

                {/* Ticker Container with smooth fade effects at edges */}
                <div className="relative w-full py-4 bg-white/[0.01] border-y border-white/[0.03] overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#121417] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#121417] to-transparent z-10 pointer-events-none" />
                  
                  {/* Endless Horizontal Scroll Loop via custom CSS classes */}
                  <div className="flex space-x-3 sm:space-x-4 md:space-x-5 items-center whitespace-nowrap animate-marquee">
                    <div className="flex space-x-3 sm:space-x-4 md:space-x-5 shrink-0 items-center">
                      {REAL_CLIENT_LOGOS.map((logoUrl, index) => (
                        <div
                          key={`logo-1-${index}`}
                          className="h-20 sm:h-22 md:h-24 lg:h-28 w-40 sm:w-44 md:w-48 lg:w-56 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out px-1.5"
                        >
                          <img
                            src={logoUrl}
                            alt={`Logo Cliente ${index + 1}`}
                            className="max-h-full max-w-full object-contain filter brightness-110 contrast-125"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-3 sm:space-x-4 md:space-x-5 shrink-0 items-center" aria-hidden="true">
                      {REAL_CLIENT_LOGOS.map((logoUrl, index) => (
                        <div
                          key={`logo-2-${index}`}
                          className="h-20 sm:h-22 md:h-24 lg:h-28 w-40 sm:w-44 md:w-48 lg:w-56 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out px-1.5"
                        >
                          <img
                            src={logoUrl}
                            alt={`Logo Cliente ${index + 1}`}
                            className="max-h-full max-w-full object-contain filter brightness-110 contrast-125"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. BLOCO DE POSICIONAMENTO — QUEM É A LEGACY */}
              <section className="py-16 md:py-24 border-b border-white/5 relative bg-gradient-to-b from-[#121417] to-[#16181f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left side: Premium Brand Card */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative w-full max-w-sm">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#00D084]/30 to-emerald-500/20 rounded-2xl blur-md pointer-events-none opacity-70" />
                        
                        <div className="relative bg-[#1a1d24] border border-white/10 rounded-2xl p-8 text-center flex flex-col justify-between min-h-[460px] md:min-h-[440px]">
                          <div>
                            <div className="h-12 flex items-center justify-center mb-4">
                              <img
                                src="https://i.imgur.com/26lmRao.png"
                                alt="Legacy logo badge"
                                className="h-8 w-auto object-contain"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="h-[1px] bg-white/10 w-2/3 mx-auto mb-4" />
                            
                            <p className="text-xs font-mono text-[#00D084] tracking-wider uppercase mb-5">
                              DEPOIMENTO — {TESTIMONIALS[currentTestimonialIndex].niche.toUpperCase()}
                            </p>
                            
                            <div className="relative overflow-hidden min-h-[220px] sm:min-h-[180px] flex flex-col justify-center items-center">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={currentTestimonialIndex}
                                  initial={{ opacity: 0, y: 15 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -15 }}
                                  transition={{ duration: 0.35, ease: "easeOut" }}
                                  className="space-y-4"
                                >
                                  <blockquote className="text-sm sm:text-base font-display font-medium text-white/95 leading-relaxed italic">
                                    &ldquo;{TESTIMONIALS[currentTestimonialIndex].quote}&rdquo;
                                  </blockquote>
                                  
                                  <p className="text-xs font-semibold text-white/60 tracking-wider">
                                    {TESTIMONIALS[currentTestimonialIndex].signature}
                                  </p>
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          </div>

                          {/* Navigation Dots Indicator */}
                          <div className="flex justify-center space-x-2.5 pt-4 border-t border-white/[0.03]">
                            {TESTIMONIALS.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentTestimonialIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  idx === currentTestimonialIndex
                                    ? "bg-[#00D084] w-5"
                                    : "bg-white/20 hover:bg-white/40"
                                }`}
                                aria-label={`Ir para depoimento ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side: Core Positioning Copy */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-[#00D084] tracking-wider uppercase">Posicionamento</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                          Bem-vindo à Legacy
                        </h2>
                        <div className="h-[2px] bg-[#00D084] w-12" />
                      </div>

                      <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                        Somos uma assessoria de crescimento. <strong>Não vendemos curtidas ou posts vazios.</strong> Integramos tráfego pago, funis avançados e estruturação comercial de ponta para gerar faturamento real, previsibilidade e escala para o seu negócio.
                      </p>

                      {/* 3 Core Differentials list */}
                      <div className="space-y-3 pt-2">
                        {WHO_WE_ARE_DIFFERENTIALS.map((diff, idx) => (
                          <div
                            key={idx}
                            onClick={() => scrollToForm()}
                            className="flex items-start space-x-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:border-[#00D084]/30 hover:bg-white/[0.02] hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00D084]/10 border border-[#00D084]/20 flex items-center justify-center text-[#00D084] font-semibold text-sm">
                              {idx + 1}
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold text-white font-display">{diff.title}</h4>
                              <p className="text-xs text-white/60 leading-relaxed">{diff.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* 4. MISSÃO, VISÃO E VALORES */}
              <section className="py-16 md:py-24 border-b border-white/5 bg-[#121417]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
                    <span className="text-xs font-semibold text-[#00D084] tracking-wider uppercase">Fundamentos</span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      O que sustenta o crescimento
                    </h2>
                    <p className="text-sm text-white/60">
                      Unimos estratégia e clareza para transformar o seu comercial em um motor contínuo de vendas.
                    </p>
                  </div>

                  {/* 3 Grid cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Missão */}
                    <div
                      onClick={() => scrollToForm()}
                      className="group relative bg-[#1a1d24] border border-white/5 rounded-xl p-6 hover:border-[#00D084]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
                    >
                      <div className="space-y-4">
                        <div className="w-10 h-10 bg-[#00D084]/10 border border-[#00D084]/20 rounded-lg flex items-center justify-center text-[#00D084] group-hover:bg-[#00D084] group-hover:text-[#121417] transition-all duration-300">
                          <Target className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-display font-semibold text-white">Missão</h3>
                        <p className="text-xs text-white/65 leading-relaxed">
                          Criar e otimizar canais comerciais previsíveis e escaláveis de faturamento real para as empresas.
                        </p>
                      </div>
                      <div className="pt-6 border-t border-white/5 mt-6 text-[10px] font-mono text-[#00D084] tracking-wider uppercase">
                        Geração de Vendas
                      </div>
                    </div>

                    {/* Visão */}
                    <div
                      onClick={() => scrollToForm()}
                      className="group relative bg-[#1a1d24] border border-white/5 rounded-xl p-6 hover:border-[#00D084]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
                    >
                      <div className="space-y-4">
                        <div className="w-10 h-10 bg-[#00D084]/10 border border-[#00D084]/20 rounded-lg flex items-center justify-center text-[#00D084] group-hover:bg-[#00D084] group-hover:text-[#121417] transition-all duration-300">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-display font-semibold text-white">Visão</h3>
                        <p className="text-xs text-white/65 leading-relaxed">
                          Ser a maior referência em assessoria e performance comercial com foco em faturamento e conversão.
                        </p>
                      </div>
                      <div className="pt-6 border-t border-white/5 mt-6 text-[10px] font-mono text-[#00D084] tracking-wider uppercase">
                        Liderança e Escala
                      </div>
                    </div>

                    {/* Valores */}
                    <div
                      onClick={() => scrollToForm()}
                      className="group relative bg-[#1a1d24] border border-white/5 rounded-xl p-6 hover:border-[#00D084]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
                    >
                      <div className="space-y-4">
                        <div className="w-10 h-10 bg-[#00D084]/10 border border-[#00D084]/20 rounded-lg flex items-center justify-center text-[#00D084] group-hover:bg-[#00D084] group-hover:text-[#121417] transition-all duration-300">
                          <Award className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-display font-semibold text-white">Valores</h3>
                        <p className="text-xs text-white/65 leading-relaxed">
                          Foco em resultados concretos, transparência financeira, processos validados e parceria de longo prazo.
                        </p>
                      </div>
                      <div className="pt-6 border-t border-white/5 mt-6 text-[10px] font-mono text-[#00D084] tracking-wider uppercase">
                        Ética Comercial
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* 5. O QUE OFERECEMOS (SOMOS VS NÃO SOMOS) */}
              <section className="py-16 md:py-24 border-b border-white/5 bg-[#16181f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                    <span className="text-xs font-semibold text-[#00D084] tracking-wider uppercase">Alinhamento</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
                      O que oferecemos
                    </h2>
                    <p className="text-sm text-white/60">
                      Não oferecemos apenas posts e designs de marketing digital. Oferecemos estrutura para vendas, crescimento e escala comercial.
                    </p>
                  </div>

                  {/* Comparison Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    
                    {/* O que não somos */}
                    <div
                      onClick={() => scrollToForm()}
                      className="bg-[#1a1d24]/60 border border-red-500/10 rounded-2xl p-6 md:p-8 space-y-6 cursor-pointer hover:border-red-500/30 hover:scale-[1.01] transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                        <div className="w-10 h-10 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center border border-red-500/20">
                          <X className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-bold text-white">O que NÃO somos</h3>
                          <p className="text-xs text-white/40">Fugimos de amadorismo e soluções prontas</p>
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {NOT_US_LIST.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-3 text-sm text-white/70">
                            <span className="flex-shrink-0 w-5 h-5 bg-red-500/5 text-red-400/80 rounded-full flex items-center justify-center text-xs font-bold">✕</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* O que somos */}
                    <div
                      onClick={() => scrollToForm()}
                      className="bg-[#1a1d24] border border-[#00D084]/20 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden cursor-pointer hover:border-[#00D084]/40 hover:scale-[1.01] transition-all duration-300"
                    >
                      {/* Glow tag */}
                      <div className="absolute top-0 right-0 bg-[#00D084]/15 border-b border-l border-[#00D084]/30 text-[#00D084] text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
                        Diferencial Legacy
                      </div>

                      <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                        <div className="w-10 h-10 bg-[#00D084]/10 text-[#00D084] rounded-xl flex items-center justify-center border border-[#00D084]/20">
                          <Check className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-bold text-white">O que SOMOS</h3>
                          <p className="text-xs text-[#00D084]/70">Parceiros comprometidos em gerar receita</p>
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {YES_US_LIST.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-3 text-sm text-white/80">
                            <span className="flex-shrink-0 w-5 h-5 bg-[#00D084]/10 text-[#00D084] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                            <span className="font-medium text-white">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </section>




              {/* 8. POR QUE CONFIAR, COMO AGREGAMOS & COMO FUNCIONA */}
              <section className="py-16 md:py-24 border-b border-white/5 bg-[#121417] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#00d084_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  
                  {/* Master Heading */}
                  <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
                    <span className="text-xs font-semibold text-[#00D084] tracking-wider uppercase">Fundamentos & Jornada</span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                      Sua empresa não precisa de mais tentativa. <br className="hidden sm:inline" />
                      Precisa de <span className="text-[#00D084]">direção comercial</span>.
                    </h2>
                    <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                      Conectamos estratégia, tráfego e processos de ponta a ponta. Conheça a jornada de início simples em 3 passos para impulsionar e estruturar o comercial da sua empresa.
                    </p>
                  </div>

                  {/* Centered Single Card Layout (Como Funciona) */}
                  <div className="max-w-xl mx-auto mb-12">
                    
                    {/* Column 3: HOW IT WORKS (Como Funciona) */}
                    <div
                      onClick={() => scrollToForm()}
                      className="bg-[#16181f]/60 border border-[#00D084]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl shadow-[#00D084]/5 relative cursor-pointer hover:border-[#00D084]/40 hover:bg-[#16181f]/80 hover:scale-[1.01] transition-all duration-300"
                    >
                      <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#00D084] text-[#121417] text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                        Jornada de Início
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-[#00D084]">
                          <Clock className="w-5 h-5 animate-pulse" />
                          <h3 className="text-base sm:text-lg font-display font-bold text-white">Como Funciona</h3>
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed">
                          Um processo direto focado em analisar e impulsionar seu momento comercial de forma prática:
                        </p>

                        <div className="space-y-4 pt-2 relative">
                          {/* Timeline vertical connector */}
                          <div className="absolute left-[15px] top-6 bottom-6 w-[1px] bg-white/5" />

                          {DIAGNOSTIC_STEPS.map((stepItem) => (
                            <div key={stepItem.step} className="flex items-start space-x-3 relative z-10">
                              <div className="w-8 h-8 rounded-full bg-[#00D084]/10 border border-[#00D084]/20 flex items-center justify-center text-[#00D084] text-xs font-bold font-display flex-shrink-0">
                                0{stepItem.step}
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-xs sm:text-sm font-display font-bold text-white">{stepItem.title}</h4>
                                <p className="text-[11px] text-white/50 leading-relaxed">{stepItem.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Perfect Single CTA Button */}
                  <div className="text-center pt-4 space-y-4">
                    <button
                      onClick={() => scrollToForm()}
                      className="bg-[#00D084] hover:bg-[#00D084]/95 text-[#121417] text-sm font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-[#00D084]/15 hover:shadow-[#00D084]/25 cursor-pointer inline-flex items-center space-x-2 group scale-100 hover:scale-[1.02]"
                    >
                      <span>Quero meu diagnóstico gratuito</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-white/40 font-mono tracking-wider uppercase">
                      Resposta rápida • Sem compromisso • Atendimento estratégico sênior
                    </p>
                  </div>

                </div>
              </section>





              {/* 14. FAQ COM DROPDOWN ANIMADO */}
              <section className="py-16 md:py-24 border-b border-white/5 bg-[#121417]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  
                  <div className="text-center mb-12 space-y-2">
                    <span className="text-xs font-semibold text-[#00D084] tracking-wider uppercase">Dúvidas Frequentes</span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      Perguntas frequentes
                    </h2>
                    <p className="text-sm text-white/60">
                      Entenda como funciona nossa assessoria comercial e de crescimento empresarial.
                    </p>
                  </div>

                  {/* FAQ list */}
                  <div className="space-y-4">
                    {FAQ_LIST.map((faq, idx) => {
                      const isOpen = activeFaq === idx;
                      return (
                        <div
                          key={idx}
                          className="bg-[#1a1d24] border border-white/5 rounded-xl transition-all duration-300 overflow-hidden"
                        >
                          <button
                            onClick={() => setActiveFaq(isOpen ? null : idx)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.01] transition-all cursor-pointer"
                          >
                            <span className="text-sm font-semibold text-white font-display leading-snug pr-4">
                              {faq.question}
                            </span>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 transition-all">
                              {isOpen ? <ChevronUp className="w-4 h-4 text-[#00D084]" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="border-t border-white/5"
                              >
                                <div className="px-5 py-4 text-xs sm:text-sm text-white/65 leading-relaxed bg-[#1d212a]/30">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </section>
            
      </main>

      {/* 16. RODAPÉ ESTILOSO */}
      <footer className="bg-[#121417] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
        {/* Subtle glow background */}
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#00D084]/2 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
            
            {/* Coluna 1: Brand details */}
            <div className="md:col-span-4 space-y-4">
              <div className="h-8 flex items-center">
                <img
                  src="https://i.imgur.com/26lmRao.png"
                  alt="Legacy Assessoria Logo"
                  className="h-6 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                Marketing de performance, funis de conversão, CRM e assessoria estratégica de negócios. Transformamos sua empresa em uma máquina de vendas previsível.
              </p>
              <div className="text-xs text-white/40 space-y-1">
                <p>Natal, Rio Grande do Norte • Brasil</p>
                <p className="text-[10px] font-mono">Sede física: Natal/RN</p>
              </div>
              {/* LGPD Badge */}
              <div className="flex items-center space-x-2 text-[10px] text-white/40 bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-md w-fit">
                <Lock className="w-3 h-3 text-[#00D084]" />
                <span>Dados protegidos (LGPD) • Conexão Segura</span>
              </div>
            </div>

            {/* Coluna 2: Services links */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold text-white tracking-widest uppercase font-display">Serviços</h4>
              <ul className="space-y-2 text-xs text-white/50">
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all">Estratégia</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all">Tráfego Pago</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all">Redes Sociais</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all">Funis & LP</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all">Configurar CRM</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all">Performance</button></li>
              </ul>
            </div>

            {/* Coluna 3: Empresa links */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold text-white tracking-widest uppercase font-display">Empresa</h4>
              <ul className="space-y-2 text-xs text-white/50">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-[#00D084] transition-all text-left">Sobre a Legacy</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all text-left">Diagnóstico</button></li>
                <li><button onClick={() => scrollToForm()} className="hover:text-[#00D084] transition-all text-left">Planos de Crescimento</button></li>
                <li><a href="https://www.instagram.com/assessorialegacyy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D084] transition-all block">Instagram oficial</a></li>
              </ul>
            </div>

            {/* Coluna 4: CTA direct access */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-semibold text-white tracking-widest uppercase font-display">Solicitar Diagnóstico</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Nossa diretoria de crescimento analisará as informações da sua empresa de forma confidencial.
              </p>
              <div>
                <button
                  onClick={() => scrollToForm()}
                  className="w-full bg-[#1a1d24] hover:bg-[#1a1d24]/80 text-[#00D084] border border-[#00D084]/20 hover:border-[#00D084]/40 font-bold text-xs py-2.5 rounded-lg transition-all tracking-wider uppercase cursor-pointer text-center"
                >
                  Solicitar meu diagnóstico
                </button>
              </div>
            </div>

          </div>

          {/* Copyright, credits and back to top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div>
              <p>© {new Date().getFullYear()} Assessoria Legacy. Todos os direitos reservados.</p>
              <p className="text-[10px] mt-0.5">Legacy Assessoria de Crescimento • CNPJ 53.842.129/0001-08 • Natal/RN</p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/assessorialegacyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all flex items-center space-x-1"
              >
                <span>@assessorialegacyy</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-[#00D084] font-semibold flex items-center space-x-1 border border-white/5 bg-white/[0.02] px-2.5 py-1 rounded hover:border-[#00D084]/30 transition-all cursor-pointer"
              >
                <span>Voltar ao topo</span>
                <ChevronUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
