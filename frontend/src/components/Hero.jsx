import React from 'react';
import { Shield, Globe, Eye, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { mockData } from '../data/mock';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-slate-700/10 bg-[linear-gradient(45deg,transparent_25%,rgba(156,163,175,0.03)_25%,rgba(156,163,175,0.03)_50%,transparent_50%,transparent_75%,rgba(156,163,175,0.03)_75%)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Acesso Autorizado
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
              >
                Relatório de Incidente
              </Button>
            </div>

            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{mockData.stats.totalOperations}</div>
                <div className="text-sm text-slate-400">Operações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{mockData.stats.successRate}%</div>
                <div className="text-sm text-slate-400">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{mockData.stats.activeThreats}</div>
                <div className="text-sm text-slate-400">Ameaças Ativas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{mockData.stats.containedEntities}</div>
                <div className="text-sm text-slate-400">Entidades Contidas</div>
              </div>
            </div>
          </div>

          {/* Painel de Status */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Status Operacional</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Sistemas de Contenção</span>
                    <span className="text-green-400 font-medium">OPERACIONAL</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Rede de Vigilância</span>
                    <span className="text-green-400 font-medium">ATIVA</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Resposta de Emergência</span>
                    <span className="text-amber-400 font-medium">STANDBY</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Características */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center">
                <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Global</h4>
                <p className="text-xs text-slate-400">Cobertura Mundial</p>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center">
                <Eye className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Vigilância</h4>
                <p className="text-xs text-slate-400">24/7 Monitoramento</p>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Contenção</h4>
                <p className="text-xs text-slate-400">Especializada</p>
              </Card>
              
              <Card className="bg-slate-800/30 border-slate-700 p-4 text-center">
                <Lock className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white text-sm">Classified</h4>
                <p className="text-xs text-slate-400">Alto Sigilo</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;