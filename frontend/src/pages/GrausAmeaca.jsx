import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { AlertTriangle, Shield, Skull, Zap, Globe, Users } from 'lucide-react';
import { mockData } from '../data/mock';

const GrausAmeaca = () => {
  const gradeIcons = {
    'Humano': Shield,
    'Monstro': Users,
    'Demônio': AlertTriangle,
    'Calamidade': Zap,
    'Continental': Globe,
    'Global': Skull
  };

  const currentThreatGrade = mockData.threatGrades[2]; // Demônio como atual

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            SISTEMA DE CLASSIFICAÇÃO TCO
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Graus de Ameaça
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Sistema desenvolvido para analisar o potencial destrutivo das ameaças com base em seu 
            alcance geográfico e nível de perigo, classificando-as em seis categorias para garantir resposta adequada.
          </p>
        </div>

        {/* Contextualização - TEXTO COMPLETO DO DOCUMENTO */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Desenvolvimento do Sistema</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">{mockData.grausAmeacaContext.introducao}</strong>
            </p>
            <p className="text-lg">
              <strong className="text-white">Solução implementada em 2010:</strong> {mockData.grausAmeacaContext.solucao}
            </p>
            <p className="text-lg">
              <strong className="text-white">Método de combate:</strong> {mockData.grausAmeacaContext.observacao}
            </p>
          </div>
        </Card>

        {/* Status Atual de Ameaça */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <Badge 
                variant="outline" 
                className="mb-4 text-amber-400 border-amber-400 px-4 py-2 text-lg"
              >
                STATUS ATUAL DE AMEAÇA
              </Badge>
            </div>
            
            <div className="flex items-center justify-center space-x-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center animate-pulse"
                style={{ backgroundColor: currentThreatGrade.color }}
              >
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl font-bold mb-2" style={{ color: currentThreatGrade.color }}>
                  GRAU {currentThreatGrade.grade.toUpperCase()}
                </h2>
                <p className="text-xl text-slate-300 mb-2">{currentThreatGrade.nivel}</p>
                <p className="text-slate-400 text-sm">
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
          </div>
        </div>

        {/* Sistema de Classificação - EXATO DO DOCUMENTO */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Sistema de Classificação
          </h2>
          
          <div className="grid gap-8">
            {mockData.threatGrades.map((grade, index) => {
              const IconComponent = gradeIcons[grade.grade];
              const isCurrentGrade = grade.grade === currentThreatGrade.grade;
              
              return (
                <Card 
                  key={index} 
                  className={`p-8 border-l-4 transition-all duration-300 hover:shadow-lg ${
                    isCurrentGrade 
                      ? 'bg-amber-50 border-l-amber-500 shadow-lg scale-[1.02]' 
                      : 'bg-white border-l-slate-300 hover:border-l-slate-400'
                  }`}
                >
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Ícone e Nome */}
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: grade.color }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 
                            className="text-2xl font-bold"
                            style={{ color: grade.color }}
                          >
                            {grade.grade.toUpperCase()}
                          </h3>
                          {isCurrentGrade && (
                            <Badge className="bg-amber-500 text-slate-900 animate-pulse">
                              ATUAL
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-600 font-medium">{grade.nivel}</p>
                      </div>
                    </div>
                    
                    {/* Alcance */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-slate-900 mb-2">Alcance da Ameaça:</h4>
                      <p className="text-slate-700 leading-relaxed">{grade.alcance}</p>
                    </div>
                    
                    {/* Resposta */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Resposta:</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{grade.resposta}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Evolução do Sistema */}
          <Card className="p-8 bg-slate-900 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Evolução do Sistema
            </h3>
            <div className="space-y-4 text-slate-300">
              <p className="leading-relaxed">
                <strong className="text-white">Antes de 2010:</strong> Agentes eram enviados para missões 
                sem consciência clara do potencial da ameaça enfrentada, resultando em 
                resposta inadequada e riscos desnecessários.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Após 2010:</strong> O sistema de graus de ameaça permite 
                alocação adequada de recursos e resposta proporcional para cada tipo de incidente, 
                aumentando significativamente a taxa de sucesso das operações.
              </p>
              <div className="bg-slate-800 p-4 rounded-lg mt-6">
                <p className="text-sm text-center">
                  <strong className="text-white">Resultado:</strong> Redução de <strong>87%</strong> nas baixas 
                  operacionais e aumento de <strong>340%</strong> na eficiência de resposta.
                </p>
              </div>
            </div>
          </Card>

          {/* Estatísticas do Sistema */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Eficácia do Sistema
            </h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-slate-600">Taxa de Sucesso desde 2010</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">47,247</div>
                  <div className="text-sm text-slate-600">Operações Realizadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">104,569</div>
                  <div className="text-sm text-slate-600">Ameaças Neutralizadas</div>
                </div>
              </div>
              
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm text-slate-700 text-center">
                  O sistema permite <strong>resposta proporcional</strong> baseada na análise 
                  do potencial destrutivo e alcance geográfico das ameaças.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GrausAmeaca;