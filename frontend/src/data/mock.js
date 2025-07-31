// Mock data para a TCO (Threat Containment Order)

export const mockData = {
  // Informações gerais da agência
  agency: {
    name: "TCO",
    fullName: "Threat Containment Order",
    namePortuguese: "Ordem de Contenção de Ameaças",
    mission: "Proteger a humanidade de ameaças sobrenaturais e anomalias que põem em risco a segurança global",
    established: "2019",
    headquarters: "Genebra, Suíça",
    director: "Dr. Elena Vasquez",
    classification: "Classificação de Segurança Máxima"
  },

  // Notícias recentes
  news: [
    {
      id: 1,
      title: "TCO Neutraliza Anomalia Temporal na América do Sul",
      date: "2025-01-15",
      category: "Operações",
      excerpt: "Equipes especializadas da TCO contiveram com sucesso uma anomalia temporal de Classe-A detectada na região amazônica.",
      classification: "RESTRITO"
    },
    {
      id: 2,
      title: "Nova Diretriz de Segurança para Contenção de Entidades",
      date: "2025-01-10",
      category: "Protocolos",
      excerpt: "Implementação do Protocolo Omega-7 para contenção de entidades de alta periculosidade.",
      classification: "CONFIDENCIAL"
    },
    {
      id: 3,
      title: "Expansão do Centro de Pesquisa em São Paulo",
      date: "2025-01-05",
      category: "Infraestrutura",
      excerpt: "TCO inaugura nova ala de pesquisa para estudos de fenômenos anômalos na América Latina.",
      classification: "PÚBLICO"
    }
  ],

  // Departamentos
  departments: [
    {
      id: 1,
      name: "Divisão de Contenção",
      code: "DC",
      description: "Responsável pela contenção direta de ameaças sobrenaturais e anomalias.",
      head: "Coronel Marcus Silva",
      personnel: 150,
      clearanceLevel: "Alfa"
    },
    {
      id: 2,
      name: "Departamento de Pesquisa e Análise",
      code: "DPA",
      description: "Estuda e analisa fenômenos anômalos para desenvolvimento de contramedidas.",
      head: "Dra. Maria Santos",
      personnel: 89,
      clearanceLevel: "Beta"
    },
    {
      id: 3,
      name: "Inteligência e Reconhecimento",
      code: "IR",
      description: "Coleta informações sobre ameaças emergentes e atividades suspeitas.",
      head: "Agente José Oliveira",
      personnel: 67,
      clearanceLevel: "Alfa"
    },
    {
      id: 4,
      name: "Relações Públicas e Desinformação",
      code: "RPD",
      description: "Mantém o sigilo operacional e gerencia a comunicação com autoridades civis.",
      head: "Dra. Ana Costa",
      personnel: 45,
      clearanceLevel: "Gamma"
    }
  ],

  // Níveis de ameaça
  threatLevels: [
    {
      level: "Verde",
      description: "Sem ameaças conhecidas",
      color: "#22c55e"
    },
    {
      level: "Amarelo", 
      description: "Ameaça potencial identificada",
      color: "#eab308"
    },
    {
      level: "Laranja",
      description: "Ameaça ativa em contenção",
      color: "#f97316"
    },
    {
      level: "Vermelho",
      description: "Ameaça crítica - resposta imediata",
      color: "#ef4444"
    },
    {
      level: "Preto",
      description: "Evento de extinção - protocolo final",
      color: "#1f2937"
    }
  ],

  // Estatísticas operacionais
  stats: {
    totalOperations: 247,
    successRate: 98.7,
    activeThreats: 12,
    containedEntities: 89,
    researchProjects: 34
  },

  // Contatos de emergência
  emergencyContacts: [
    {
      department: "Central de Comando",
      phone: "+41-22-XXX-XXXX",
      email: "comando@tco.un.org",
      available: "24/7"
    },
    {
      department: "Departamento Brasileiro",
      phone: "+55-11-XXXX-XXXX", 
      email: "brasil@tco.un.org",
      available: "24/7"
    }
  ],

  // Protocolos de segurança
  protocols: [
    {
      code: "ALFA-1",
      name: "Contenção Padrão",
      description: "Protocolo para ameaças de baixo risco"
    },
    {
      code: "BETA-3",
      name: "Evacuação Civil",
      description: "Procedimentos para evacuação em massa"
    },
    {
      code: "OMEGA-7",
      name: "Contenção Extrema",
      description: "Último recurso para ameaças existenciais"
    }
  ]
};