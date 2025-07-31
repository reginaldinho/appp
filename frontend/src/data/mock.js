// Mock data para a TCO (Threat Containment Order) - Baseado no documento oficial

export const mockData = {
  // Informações gerais da agência - BASEADO NO DOCUMENTO
  agency: {
    name: "TCO",
    fullName: "Threat Containment Order",
    namePortuguese: "Ordem de Contenção de Ameaças",
    mission: "Proteção da humanidade contra ameaças extraordinárias que transcendem as capacidades das forças de segurança convencionais",
    established: "2006",
    headquarters: "Múltiplas jurisdições internacionais",
    director: "Conselho da ONU",
    classification: "Classificação de Segurança Máxima"
  },

  // Graus de ameaça - EXATO DO DOCUMENTO
  threatGrades: [
    {
      grade: "Humano",
      nivel: "Uma ameaça que representa perigo em grau mínimo",
      alcance: "Representa ameaça para uma pessoa ou um pequeno grupo de pessoas",
      resposta: "Um a dois agentes D, um agente C ou força policial local",
      color: "#22c55e"
    },
    {
      grade: "Monstro", 
      nivel: "Uma ameaça que representa perigo em grau baixo",
      alcance: "Representa ameaça para uma comunidade, bairros ou distritos urbanos",
      resposta: "Pequeno grupo de agentes D e C, um agente B ou esquadrão nível SWAT",
      color: "#84cc16"
    },
    {
      grade: "Demônio",
      nivel: "Uma ameaça que representa perigo em grau médio",
      alcance: "Representa ameaça para cidades de curto ou médio porte, ou regiões metropolitanas",
      resposta: "Dupla de agentes B, grupo de agentes C liderado por um B ou esquadrão militar fortemente armado",
      color: "#eab308"
    },
    {
      grade: "Calamidade",
      nivel: "Uma ameaça que representa perigo em grau alto",
      alcance: "Representa ameaça para estados ou mais estados, províncias ou pequenos países",
      resposta: "Pequeno grupo de agentes A, esquadrão de agentes C e B liderado por um A",
      color: "#f97316"
    },
    {
      grade: "Continental",
      nivel: "Uma ameaça que representa perigo em grau extremo",
      alcance: "Considerado estado de alerta, representa ameaça para um grupo de países de médio porte, uma grande nação ou um continente",
      resposta: "Resolução imediata deve ser requisitada, tendo auxílio direto da ONU, com esquadrão de agentes A e possível intervenção de um ou mais agentes S",
      color: "#ef4444"
    },
    {
      grade: "Global",
      nivel: "Uma ameaça que representa perigo em grau sem precedentes",
      alcance: "Representa ameaça para todo o planeta",
      resposta: "Declarado estado de guerra, com auxílio de todas as forças e agentes disponíveis. Todas as forças mundiais têm o dever de auxiliar em apoio do fim desta ameaça",
      color: "#dc2626"
    }
  ],

  // Sistema Overall - EXATO DO DOCUMENTO
  overallSystem: {
    description: "Sistema de classificação abrangente para categorizar capacidades dos agentes com base em seus atributos, potencial destrutivo e alcance geográfico.",
    attributes: [
      {
        name: "Força",
        description: "média entre força para carregar peso e de golpear",
        levels: {
          D: "Força de um humano normal ao ápice humano",
          C: "Força de dois a cem homens. Entre as capacidades, se vê: quebrar concreto com as mãos, atravessar paredes, capotar carros, derrubar árvores, carregar até dez toneladas",
          B: "Força de cem a dez mil homens. Entre as capacidades, se vê: parar caminhões com o corpo, arremessar carros, tanques e ônibus, torcer barras de ferro, carregar até mil toneladas",
          A: "Força de dez mil a um milhão de homens. Entre as capacidades, se vê: parar trens em movimento, saltar quilômetros de distância, segurar ou derrubar prédios, atravessar qualquer barreira, causar terremotos, carregar cem mil toneladas",
          S: "Força acima de um milhão de homens"
        }
      },
      {
        name: "Velocidade",
        description: "média entre velocidade de locomoção (correr e/ou voar e/ou nadar) e de golpear",
        levels: {
          D: "Velocidade de um humano normal ao ápice humano",
          C: "Velocidade entre 50 km/h e 100 km/h",
          B: "Velocidade entre 100 km/h e MACH 1 (1235 km/h)",
          A: "Velocidade entre MACH 1 e MACH 5 (6125.2 km/h)",
          S: "Velocidade acima de MACH 5"
        }
      },
      {
        name: "Durabilidade",
        description: "média entre resistência a danos e regeneração",
        levels: {
          D: "Durabilidade de um humano normal",
          C: "Resistência a tiros de baixo/médio calibre e a armas brancas não mágicas. Não se espera regeneração",
          B: "Resistência a tiros de altos calibres, balas especiais e a explosões de potência equivalente a até 1 kg de TNT. Regeneração acelerada",
          A: "Resistência a explosões entre o equivalente a 1 kg de TNT e uma MOAB (equivalente a 11 toneladas de TNT). De regeneração de feridas até de membros inteiros perdidos",
          S: "Resistência acima de uma MOAB, bombardeios, explosões nucleares e mais. Regeneração de membros, órgãos perdidos e outros muito rápido"
        }
      },
      {
        name: "Mental",
        description: "média entre resistência mental e capacidades de poderes mentais",
        levels: {
          D: "Poderes mentais fracos, com só leitura de mentes. Resistência mental de um humano normal",
          C: "Leitura e conversas mentais, controle de mente de não supers. Resistência mental a telepatas fracos",
          B: "Ataques mentais, controle de supers com baixa resistência mental, invasão de memórias. Resistência mental a telepatas médios",
          A: "Manipulação de sentidos, controle de supers com boa resistência mental, manipulação de memórias. Resistência mental a grandes telepatas",
          S: "Controle de diversos supers com alta resistência mental ao mesmo tempo, morte cerebral casualmente, apagar e reescrever mentes. Mente praticamente invulnerável"
        }
      },
      {
        name: "Alcance",
        description: "a distância que o efeito/ataque do poder pode alcançar",
        levels: {
          D: "Alcance de efeito em si mesmo",
          C: "Alcance de efeito/ataque entre corpo a corpo e dez metros de distância",
          B: "Alcance de efeito/ataque entre dez metros e cem metros de distância",
          A: "Alcance de efeito/ataque entre cem metros e dez quilômetros de distância",
          S: "Alcance de efeito/ataque acima de dez quilômetros de distância"
        }
      },
      {
        name: "Poder",
        description: "o quão acima da média é o poder",
        levels: {
          D: "Abaixo da média, fraco, não recomendado para missões acima de monstro",
          C: "Na média — a maioria dos supers. Missões de nível baixo. Humano - sozinho; Monstro, sozinho ou em dupla; Demônio, com um bom grupo",
          B: "Acima da média — se garantem bem. Missões de nível médio. Humano, nem o chamam; Monstro, sozinho; Demônio, sozinho ou em dupla; Calamidade, com alguns grupos",
          A: "Muito acima da média — gênios valiosos. Missões de nível alto. Humano, nem o chamam; Monstro, nem o chamam; Demônio, sozinho; Calamidade, sozinho ou com um grupo pequeno; Nação, com um grupo pequeno ou um grupo grande",
          S: "Talentos incalculáveis — casos excepcionais, o que nunca ultrapassou dez no mundo. A elite para conter qualquer desastre. Humano, nem chamam; Monstro, nem chamam; Demônio, nem chamam; Calamidade, sozinho; Nação, sozinho ou em dupla; Global, obviamente, todos"
        }
      }
    ]
  },

  // Os Cinco no Topo - EXATO DO DOCUMENTO
  cincoNoTopo: [
    {
      id: 1,
      nome: "Leroy Colin",
      nomeHeroi: "O Rei",
      idade: 52,
      altura: "2,10 metros",
      poder: "Super",
      nacionalidade: "Estados Unidos da América",
      papel: "Membro dos Cinco no Topo/Representante dos EUA",
      profissao: "Lutador de boxe profissional aposentado",
      estiloLuta: "Corpo a corpo, curta e longa distância",
      rank: "S",
      trunfo: "Destruidor de Meteoros",
      artefatoDivino: "Cinturão de Hércules",
      descricao: "Aposentado, Leroy atingiu o título de campeão indiscutível ao conquistar os quatro cinturões das quatro principais entidades do boxe profissional (WBA, WBC, IBF, e WBO), finalizando sua carreira com 242 vitórias e 0 derrotas. Suas contribuições para a paz mundial e causas sociais o fizeram receber das Nações Unidas o título de 'Cidadão do Mundo'.",
      pais: "USA"
    },
    {
      id: 2,
      nome: "Lucy Alba",
      nomeHeroi: "Rainha de Gelo",
      idade: 25,
      altura: "1,65 metros",
      poder: "Frost",
      nacionalidade: "Inglaterra",
      papel: "Membro dos Cinco no Topo/Representante do Reino Unido",
      profissao: "Cantora, atriz, modelo e empresária",
      estiloLuta: "Ataques congelantes a curta e longa distância",
      rank: "S",
      trunfo: "Fimbulwinter",
      artefatoDivino: "Luvas de Baldur",
      descricao: "Considerada uma das principais responsáveis por dar fim ao período conhecido como a morte da arte, ocorrido entre 2010 e 2020. Eleita seis vezes como a mulher mais bela do mundo, sendo a única permitida a participar e vencer o Big Four.",
      pais: "UK"
    },
    {
      id: 3,
      nome: "Edward Russon",
      nomeHeroi: "Czar de Chernobog",
      idade: 32,
      altura: "1,75 metros",
      poder: "Chernobog",
      nacionalidade: "Rússia",
      papel: "Membro dos Cinco no Topo/Representante da Rússia",
      profissao: "Pintor",
      estiloLuta: "Ataques místicos a longas distâncias",
      rank: "S",
      trunfo: "Domínio Infinito",
      artefatoDivino: "Máscara do Desgosto",
      descricao: "No passado, foi um mercenário reconhecido por eliminar políticos corruptos e membros do alto tráfico na Europa Oriental. Suas capacidades de infiltração, espionagem e eliminação impressionaram diversos governos europeus.",
      pais: "RU"
    },
    {
      id: 4,
      nome: "Kenjiro Senno",
      nomeHeroi: "Lorde da Espada",
      idade: 49,
      altura: "1,80 metros",
      poder: "A Arte da Espada",
      nacionalidade: "Japão",
      papel: "Membro dos Cinco no Topo/Representante do Japão",
      profissao: "Sensei de Dojo",
      estiloLuta: "Ataques a curta e longa distância com espada",
      rank: "S",
      trunfo: "Arte da Espada, Espada da Tempestade",
      artefatoDivino: "Sutōmukirā",
      descricao: "Mestre em diversas artes marciais e do kendo, foi de grande importância na guerra entre Japão e China. Recebeu a condecoração como Mensageiro da Paz da ONU por seus esforços pela paz mundial.",
      pais: "JP"
    },
    {
      id: 5,
      nome: "Nefertari",
      nomeHeroi: "Imperatriz do Deserto",
      idade: "Desconhecida",
      altura: "1,65 metros",
      poder: "Monarca das Areias",
      nacionalidade: "Egito",
      papel: "Líder dos Cinco no Topo/Representante do Egito",
      profissao: "Desconhecida",
      estiloLuta: "Ataques a curta, média e longa distância",
      rank: "S",
      trunfo: "Desconhecido",
      artefatoDivino: "Mangual de Rá, Os Khopesh de Anúbis, Olho de Hórus, Correntes de Seth, Tyet e Ankh...",
      descricao: "Líder dos Cinco no Topo, dita por O Rei como a mais poderosa dentre os heróis. Membro vitalício do comitê das Nações Unidas. Sua origem e idade exata são desconhecidas, mas afirma já estar viva há mais de um século.",
      pais: "EG"
    }
  ],

  // Notícias - adaptadas ao contexto do documento
  news: [
    {
      id: 1,
      title: "TCO Neutraliza Ameaça Nível Calamidade na Europa Oriental",
      date: "2025-01-15",
      category: "Operações",
      excerpt: "Equipes lideradas por agente A contiveram com sucesso uma ameaça de grau Calamidade que ameaçava múltiplos países da região.",
      classification: "RESTRITO"
    },
    {
      id: 2,
      title: "Atualização do Sistema Overall de Classificação",
      date: "2025-01-10",
      category: "Protocolos",
      excerpt: "Novos parâmetros foram implementados para melhor mensuração das capacidades dos agentes da TCO.",
      classification: "CONFIDENCIAL"
    },
    {
      id: 3,
      title: "Os Cinco no Topo Reunem-se em Assembleia Extraordinária",
      date: "2025-01-05",
      category: "Institucional",
      excerpt: "Líderes mundiais dos super-heróis se reúnem para discussão de estratégias contra ameaças globais emergentes.",
      classification: "PÚBLICO"
    }
  ],

  // Estatísticas operacionais
  stats: {
    totalOperations: 1247,
    successRate: 98.7,
    activeThreats: 8,
    containedEntities: 156,
    researchProjects: 34,
    globalCoverage: 195
  },

  // Contatos de emergência
  emergencyContacts: [
    {
      department: "Central de Comando TCO",
      phone: "+1-XXX-XXX-XXXX",
      email: "comando@tco.un.org",
      available: "24/7"
    },
    {
      department: "Escritório Regional Brasil",
      phone: "+55-11-XXXX-XXXX", 
      email: "brasil@tco.un.org",
      available: "24/7"
    }
  ]
};