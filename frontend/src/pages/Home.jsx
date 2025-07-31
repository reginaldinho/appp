import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Eye, Lock, ArrowRight, AlertCircle, Users, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockData } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-slate-700/10 bg-[linear-gradient(45deg,transparent_25%,rgba(156,163,175,0.03)_25%,rgba(156,163,175,0.03)_50%,transparent_50%,transparent_75%,rgba(156,163,175,0.03)_75%)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Conteúdo Principal - BASEADO NO DOCUMENTO */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-400">
                <Shield className="h-8 w-8" />
                <span className="text-lg font-semibold tracking-wide">ORGANIZAÇÃO DAS NAÇÕES UNIDAS</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-400">TCO</span>
                <br />
                <span className="text-2xl lg:text-3xl text-slate-300 font-medium">
                  Ordem de Contenção de Ameaças
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                {mockData.agency.mission}
              </p>
              
              <div className="bg-slate-800/50 border-l-4 border-l-blue-500 p-4 rounded">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-white">Fundada em {mockData.agency.established}</strong> como resposta estratégica 
                  ao crescente número de ameaças sobrenaturais e atividades ilegais de super-humanos. 
                  Uma organização internacional de elite dedicada à proteção da humanidade contra 
                  ameaças extraordinárias.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cinco-no-topo">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                >
                  Os Cinco no Topo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Relatório de Incidente
                </Button>
              </Link>
            </div>

            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center bg-slate-800/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">{mockData.stats.totalOperations}</div>
                <div className="text-sm text-slate-400">Operações</div>
              </div>
              <div className="text-center bg-slate-800/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-400">{mockData.stats.successRate}%</div>
                <div className="text-sm text-slate-400">Taxa de Sucesso</div>
              </div>
              <div className="text-center bg-slate-800/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-amber-400">{mockData.stats.activeThreats}</div>
                <div className="text-sm text-slate-400">Ameaças Ativas</div>
              </div>
              <div className="text-center bg-slate-800/30 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">{mockData.stats.containedEntities}</div>
                <div className="text-sm text-slate-400">Entidades Contidas</div>
              </div>
            </div>
          </div>

          {/* Painel de Status */}
          <div className="space-y-6">
            {/* Status Operacional */}
            <Card className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Status Operacional TCO</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Recursos Militares</span>
                    <span className="text-green-400 font-medium">OPERACIONAL</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Tecnologia de Ponta</span>
                    <span className="text-green-400 font-medium">ATIVA</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Rede de Inteligência</span>
                    <span className="text-green-400 font-medium">GLOBAL</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Os Cinco no Topo</span>
                    <span className="text-blue-400 font-medium">STANDBY</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Alerta de Ameaça Atual */}
            <Card className="bg-amber-600/20 border-amber-500 p-6">
              <div className="flex items-center space-x-3 mb-3">
                <AlertCircle className="h-6 w-6 text-amber-400" />
                <h3 className="text-lg font-semibold text-white">Alerta Atual</h3>
              </div>
              <Badge className="bg-amber-600 text-slate-900 mb-2">GRAU DEMÔNIO</Badge>
              <p className="text-slate-300 text-sm">
                Ameaças de grau médio detectadas em regiões metropolitanas. 
                Grupos de agentes B em resposta coordenada.
              </p>
            </Card>

            {/* Capacidades TCO - BASEADO NO DOCUMENTO */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center hover:bg-slate-700/30 transition-colors">
                <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Cobertura Global</h4>
                <p className="text-xs text-slate-400">Centros de Comando</p>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center hover:bg-slate-700/30 transition-colors">
                <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Super-Humanos</h4>
                <p className="text-xs text-slate-400">Elite Mundial</p>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center hover:bg-slate-700/30 transition-colors">
                <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Resposta Rápida</h4>
                <p className="text-xs text-slate-400">Mobilização Total</p>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center hover:bg-slate-700/30 transition-colors">
                <Lock className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Alto Sigilo</h4>
                <p className="text-xs text-slate-400">Mandato ONU</p>
              </Card>
            </div>

            {/* Acesso Rápido */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Acesso Rápido</h3>
              <div className="space-y-2">
                <Link to="/graus-ameaca" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-2">
                  <span>Sistema de Graus de Ameaça</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/overall" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-2">
                  <span>Sistema Overall de Agentes</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/noticias" className="flex items-center justify-between text-slate-300 hover:text-white transition-colors py-2">
                  <span>Comunicados Oficiais</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;