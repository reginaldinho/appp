import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, Shield, AlertCircle, Skull, Zap } from 'lucide-react';
import { mockData } from '../data/mock';

const ThreatLevels = () => {
  const threatIcons = {
    'Verde': Shield,
    'Amarelo': AlertCircle,
    'Laranja': AlertTriangle,
    'Vermelho': Zap,
    'Preto': Skull
  };

  const currentThreatLevel = mockData.threatLevels[1]; // Amarelo como atual

  return (
    <section id="threat-levels" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Status Atual de Ameaça */}
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-6 text-amber-400 border-amber-400 px-4 py-2 text-lg"
          >
            STATUS ATUAL DE AMEAÇA
          </Badge>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
                style={{ backgroundColor: currentThreatLevel.color }}
              >
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-bold" style={{ color: currentThreatLevel.color }}>
                  NÍVEL {currentThreatLevel.level.toUpperCase()}
                </h2>
                <p className="text-xl text-slate-300">{currentThreatLevel.description}</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-center">
              Última atualização: {new Date().toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>

        {/* Sistema de Níveis de Ameaça */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Sistema de Classificação de Ameaças
          </h3>
          
          <div className="grid gap-6">
            {mockData.threatLevels.map((level, index) => {
              const IconComponent = threatIcons[level.level];
              const isCurrentLevel = level.level === currentThreatLevel.level;
              
              return (
                <Card 
                  key={index} 
                  className={`p-6 border-l-4 transition-all duration-300 ${
                    isCurrentLevel 
                      ? 'bg-slate-700 border-l-amber-500 shadow-lg scale-105' 
                      : 'bg-slate-800 border-l-slate-600 hover:bg-slate-750'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: level.color }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h4 
                          className="text-2xl font-bold"
                          style={{ color: level.color }}
                        >
                          NÍVEL {level.level.toUpperCase()}
                        </h4>
                        {isCurrentLevel && (
                          <Badge className="bg-amber-500 text-slate-900 animate-pulse">
                            ATUAL
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-300 text-lg">{level.description}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-slate-400 mb-1">Protocolo</div>
                      <div className="font-mono text-white">
                        {level.level === 'Verde' && 'PADRÃO-1'}
                        {level.level === 'Amarelo' && 'ALERTA-2'}
                        {level.level === 'Laranja' && 'CONTENÇÃO-3'}
                        {level.level === 'Vermelho' && 'EMERGÊNCIA-4'}
                        {level.level === 'Preto' && 'OMEGA-X'}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Protocolos de Resposta */}
        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Protocolos de Resposta Automática
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {mockData.protocols.map((protocol, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg">
                <div className="text-center space-y-3">
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    {protocol.code}
                  </Badge>
                  <h4 className="text-lg font-semibold text-white">{protocol.name}</h4>
                  <p className="text-slate-300 text-sm">{protocol.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Os protocolos são ativados automaticamente baseados no nível de ameaça atual. 
              Todo pessoal deve estar familiarizado com os procedimentos operacionais padrão.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ThreatLevels;