// Mock data para a TCO (Threat Containment Order) - Baseado no documento oficial

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

  // Estrutura organizacional baseada no documento
  departments: [
    {
      id: 1,
      name: "Comando Central",
      code: "CC",
      description: "Coordenação geral das operações e tomada de decisões estratégicas.",
      head: "Diretor Geral",
      personnel: 25,
      clearanceLevel: "Alfa-Zero"
    },
    {
      id: 2,
      name: "Divisão de Campo",
      code: "DC",
      description: "Equipes especializadas na contenção direta de ameaças sobrenaturais.",
      head: "Comandante de Campo",
      personnel: 150,
      clearanceLevel: "Alfa"
    },
    {
      id: 3,
      name: "Departamento de Pesquisa",
      code: "DP",
      description: "Estudo científico de anomalias e desenvolvimento de contramedidas.",
      head: "Chefe de Pesquisa",
      personnel: 89,
      clearanceLevel: "Beta"
    },
    {
      id: 4,
      name: "Inteligência e Reconhecimento",
      code: "IR",
      description: "Coleta de informações sobre ameaças emergentes e atividades suspeitas.",
      head: "Chefe de Inteligência",
      personnel: 67,
      clearanceLevel: "Alfa"
    },
    {
      id: 5,
      name: "Suporte Logístico",
      code: "SL",
      description: "Fornecimento de recursos, equipamentos e apoio operacional.",
      head: "Chefe de Logística",
      personnel: 45,
      clearanceLevel: "Beta"
    },
    {
      id: 6,
      name: "Relações Públicas",
      code: "RP",
      description: "Manutenção do sigilo e controle de informações públicas.",
      head: "Chefe de Comunicação",
      personnel: 30,
      clearanceLevel: "Gamma"
    }
  ],

  // Graus de ameaça baseados no documento TCO
  threatGrades: [
    {
      grade: "I",
      name: "Mínima",
      description: "Ameaças de baixo risco com impacto localizado",
      color: "#22c55e",
      protocol: "CONTENÇÃO-PADRÃO",
      examples: "Anomalias menores, fenômenos isolados"
    },
    {
      grade: "II", 
      name: "Baixa",
      description: "Ameaças regionais com potencial de expansão",
      color: "#84cc16",
      protocol: "MONITORAMENTO-ATIVO",
      examples: "Entidades de baixa hostilidade, distorções espaciais menores"
    },
    {
      grade: "III",
      name: "Moderada",
      description: "Ameaças que requerem intervenção especializada",
      color: "#eab308",
      protocol: "RESPOSTA-COORDENADA",
      examples: "Entidades hostis, anomalias temporais localizadas"
    },
    {
      grade: "IV",
      name: "Alta",
      description: "Ameaças de grande escala com risco nacional",
      color: "#f97316",
      protocol: "MOBILIZAÇÃO-COMPLETA",
      examples: "Invasões dimensionais, entidades de alto poder"
    },
    {
      grade: "V",
      name: "Crítica",
      description: "Ameaças existenciais à civilização humana",
      color: "#ef4444",
      protocol: "PROTOCOLO-OMEGA",
      examples: "Eventos de extinção, colapso da realidade"
    }
  ],

  // Operações recentes
  operations: [
    {
      id: 1,
      codename: "OPERAÇÃO UMBRA",
      status: "CONCLUÍDA",
      location: "América do Sul",
      date: "2025-01-15",
      grade: "III",
      description: "Contenção de anomalia temporal na região amazônica",
      classification: "RESTRITO"
    },
    {
      id: 2,
      codename: "OPERAÇÃO ECLIPSE",
      status: "EM ANDAMENTO",
      location: "Europa Oriental",
      date: "2025-01-20",
      grade: "IV",
      description: "Investigação de distúrbios dimensionais em área urbana",
      classification: "CONFIDENCIAL"
    },
    {
      id: 3,
      codename: "OPERAÇÃO CRIOGÊNICA",
      status: "PLANEJAMENTO",
      location: "Antártica",
      date: "2025-02-01",
      grade: "II",
      description: "Monitoramento de atividade anômala em estação de pesquisa",
      classification: "RESTRITO"
    }
  ],

  // Notícias recentes
  news: [
    {
      id: 1,
      title: "TCO Neutraliza Anomalia Temporal na América do Sul",
      date: "2025-01-15",
      category: "Operações",
      excerpt: "Equipes especializadas da TCO contiveram com sucesso uma anomalia temporal de Grau III detectada na região amazônica.",
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

  // Estatísticas operacionais
  stats: {
    totalOperations: 247,
    successRate: 98.7,
    activeThreats: 12,
    containedEntities: 89,
    researchProjects: 34,
    globalCoverage: 195
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

  // Níveis de autorização
  clearanceLevels: [
    {
      level: "Alfa-Zero",
      description: "Comando supremo e informações ultra-secretas",
      color: "#dc2626"
    },
    {
      level: "Alfa",
      description: "Operações de campo e informações críticas",
      color: "#ea580c"
    },
    {
      level: "Beta",
      description: "Pesquisa e desenvolvimento, suporte técnico",
      color: "#ca8a04"
    },
    {
      level: "Gamma",
      description: "Apoio logístico e comunicação externa",
      color: "#16a34a"
    }
  ]
};