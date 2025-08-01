import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Globe, 
  AlertCircle, 
  Users, 
  Target, 
  ArrowRight, 
  ExternalLink,
  Phone,
  Mail,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockData } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Estilo Governamental */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="h-12 w-12 text-blue-400" />
              <div className="text-left">
                <div className="text-sm text-blue-400 font-semibold tracking-wide">ORGANIZAÇÃO DAS NAÇÕES UNIDAS</div>
                <div className="text-3xl font-bold">THREAT CONTAINMENT ORDER</div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ordem de Contenção<br />
              <span className="text-blue-400">de Ameaças</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Proteção da humanidade contra ameaças extraordinárias que transcendem 
              as capacidades das forças de segurança convencionais
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cinco-no-topo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
                  Os Cinco no Topo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                  Relatório de Incidente
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Status de Alerta */}
      <section className="bg-amber-600 text-slate-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-center">
            <AlertCircle className="h-6 w-6" />
            <div className="font-semibold">NÍVEL DE AMEAÇA ATUAL: GRAU DEMÔNIO</div>
            <div className="text-sm">Ameaças de grau médio detectadas - Resposta coordenada ativa</div>
          </div>
        </div>
      </section>

      {/* Estatísticas Principais */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-blue-600 mb-2">{mockData.stats.totalOperations}</div>
              <div className="text-slate-600 font-semibold">Operações Realizadas</div>
              <div className="text-sm text-slate-500 mt-1">Desde 2006</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-green-600 mb-2">{mockData.stats.successRate}%</div>
              <div className="text-slate-600 font-semibold">Taxa de Sucesso</div>
              <div className="text-sm text-slate-500 mt-1">Eficácia Operacional</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-amber-600 mb-2">{mockData.stats.activeThreats}</div>
              <div className="text-slate-600 font-semibold">Ameaças Ativas</div>
              <div className="text-sm text-slate-500 mt-1">Monitoramento Contínuo</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-purple-600 mb-2">195</div>
              <div className="text-slate-600 font-semibold">Países Cobertos</div>
              <div className="text-sm text-slate-500 mt-1">Cobertura Global</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundação e Missão Institucional - TEXTO COMPLETO DO DOCUMENTO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
                MISSÃO INSTITUCIONAL
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Fundação e Missão da TCO
              </h2>
            </div>

            <div className="space-y-12">
              {/* Fundação e Missão Institucional */}
              <Card className="p-8 border-l-4 border-l-blue-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fundação e Missão Institucional</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    A Ordem de Contenção de Ameaças (TCO) foi estabelecida em <strong>2006</strong> como resposta estratégica da 
                    Organização das Nações Unidas ao crescente número de ameaças sobrenaturais e atividades ilegais de 
                    super-humanos, os quais representavam riscos significativos à segurança global. Esta organização 
                    internacional de elite foi concebida pelos principais líderes mundiais como uma força especializada 
                    dedicada à proteção da humanidade contra ameaças extraordinárias que transcendem as capacidades das 
                    forças de segurança convencionais.
                  </p>
                  <p>
                    Com sede em múltiplas jurisdições internacionais, a TCO opera sob mandato da ONU, possuindo autorização 
                    completa para utilização de recursos militares avançados e tecnologia de ponta. Nossa organização mantém 
                    rigorosos padrões de operação, atraindo os mais qualificados profissionais de segurança, incluindo 
                    indivíduos com habilidades sobre-humanas que dedicam suas capacidades ao serviço da humanidade.
                  </p>
                </div>
              </Card>

              {/* Excelência Operacional */}
              <Card className="p-8 border-l-4 border-l-green-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Excelência Operacional e Liderança Global</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    A TCO estabeleceu-se como a autoridade mundial preeminente em contenção de ameaças extraordinárias, 
                    desenvolvendo protocolos inovadores e sistemas de resposta que se tornaram padrão internacional. Nossa 
                    estrutura organizacional permite resposta rápida e coordenada em escala global, com centros de comando 
                    estrategicamente posicionados para garantir cobertura completa de todas as regiões habitadas do planeta.
                  </p>
                  <p>
                    Através de parcerias estratégicas com governos, organizações internacionais e instituições de pesquisa, 
                    a TCO mantém uma rede de inteligência incomparável, permitindo identificação precoce e neutralização 
                    eficaz de ameaças emergentes. Nossa capacidade de mobilização inclui recursos terrestres, aéreos, 
                    marítimos e espaciais, garantindo resposta adequada independentemente da natureza ou localização da ameaça.
                  </p>
                </div>
              </Card>

              {/* Compromisso Humanitário */}
              <Card className="p-8 border-l-4 border-l-purple-600">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Compromisso com a Proteção Humanitária</h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Além das operações de contenção direta, a TCO mantém programas abrangentes de assistência humanitária, 
                    oferecendo suporte médico especializado, evacuação de civis e reconstrução pós-incidente. Nossos 
                    protocolos priorizam a preservação da vida humana e a minimização de danos colaterais, refletindo 
                    nosso compromisso fundamental com a proteção da população civil.
                  </p>
                  <p>
                    A organização opera com transparência total perante as Nações Unidas, submetendo relatórios regulares 
                    sobre todas as operações e mantendo rigorosos padrões éticos em todas as atividades. Este compromisso 
                    com a responsabilidade institucional garante que nosso poder seja exercido sempre em benefício da 
                    humanidade e em conformidade com o direito internacional.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capacidades Operacionais */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Capacidades Operacionais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cobertura Global</h3>
              <p className="text-slate-600">
                Centros de comando estrategicamente posicionados garantem cobertura completa 
                de todas as regiões habitadas do planeta.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Elite de Super-Humanos</h3>
              <p className="text-slate-600">
                Os mais qualificados profissionais de segurança, incluindo indivíduos 
                com habilidades sobre-humanas.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resposta Rápida</h3>
              <p className="text-slate-600">
                Capacidade de mobilização que inclui recursos terrestres, aéreos, 
                marítimos e espaciais.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Operacional Atual */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Status Operacional Atual</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-300">Recursos Militares Avançados</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">OPERACIONAL</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-300">Tecnologia de Ponta</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">ATIVA</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-300">Rede de Inteligência Global</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">EM ORDEM</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-300">Os Cinco no Topo</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-green-400 font-medium">EM OPERAÇÃO</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-xl font-bold text-white mb-6">Acesso Rápido</h3>
              <div className="space-y-4">
                <Link to="/graus-ameaca" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-3 border-b border-slate-700">
                  <span>Sistema de Graus de Ameaça</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/overall" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-3 border-b border-slate-700">
                  <span>Sistema Overall de Agentes</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/cinco-no-topo" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-3 border-b border-slate-700">
                  <span>Os Cinco no Topo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/noticias" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-3">
                  <span>Comunicados Oficiais</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;