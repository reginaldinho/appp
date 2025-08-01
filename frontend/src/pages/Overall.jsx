import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Zap, 
  Timer, 
  Shield, 
  Brain, 
  Target, 
  Star,
  ChevronDown,
  ChevronUp,
  Hexagon
} from 'lucide-react';
import { mockData } from '../data/mock';

const Overall = () => {
  const [expandedAttribute, setExpandedAttribute] = useState(null);

  const attributeIcons = {
    'Força': Zap,
    'Velocidade': Timer,
    'Durabilidade': Shield,
    'Mental': Brain,
    'Alcance': Target,
    'Poder': Star
  };

  const levelColors = {
    'D': '#6b7280', // gray-500
    'C': '#059669', // emerald-600
    'B': '#2563eb', // blue-600
    'A': '#dc2626', // red-600
    'S': '#7c3aed'  // violet-600
  };

  const toggleAttribute = (index) => {
    setExpandedAttribute(expandedAttribute === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            SISTEMA DE CLASSIFICAÇÃO DE AGENTES
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Sistema Overall
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Sistema de classificação abrangente para categorizar capacidades dos agentes com base em 
            seus atributos, potencial destrutivo e alcance geográfico.
          </p>
        </div>

        {/* Contextualização - TEXTO COMPLETO DO DOCUMENTO */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Explicação do Sistema</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              <strong className="text-white">{mockData.overallContext.explicacao}</strong>
            </p>
            <p className="text-lg">
              <strong className="text-white">Diferença dos Graus de Ameaça:</strong> {mockData.overallContext.diferenca}
            </p>
            <p className="text-lg">
              <strong className="text-white">Como Funciona:</strong> {mockData.overallContext.funcionamento}
            </p>
            <div className="bg-slate-800 p-6 rounded-lg mt-6">
              <p className="text-center text-white font-semibold">
                <strong>Finalidade:</strong> {mockData.overallContext.finalidade}
              </p>
            </div>
          </div>
        </Card>

        {/* Visualização do Hexágono */}
        <div className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Tabela Geral - Hexágono de Atributos</h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Hexagon className="h-64 w-64 text-blue-400" strokeWidth={2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">6</div>
                  <div className="text-slate-300">ATRIBUTOS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mockData.overallSystem.attributes.map((attr, index) => {
              const IconComponent = attributeIcons[attr.name];
              return (
                <div key={index} className="text-center">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <IconComponent className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="font-semibold text-white">{attr.name}</h3>
                    <p className="text-slate-400 text-sm mt-1">{attr.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Níveis de Classificação */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Níveis de Classificação
          </h2>
          
          <div className="grid grid-cols-5 gap-4 mb-8">
            {['D', 'C', 'B', 'A', 'S'].map((level) => (
              <Card key={level} className="p-6 text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: levelColors[level] }}
                >
                  {level}
                </div>
                <h3 className="font-semibold text-slate-900">Nível {level}</h3>
                <p className="text-sm text-slate-600 mt-2">
                  {level === 'D' && 'Básico/Fraco'}
                  {level === 'C' && 'Padrão/Média'}
                  {level === 'B' && 'Avançado'}
                  {level === 'A' && 'Elite/Gênios'}
                  {level === 'S' && 'Excepcional'}
                </p>
              </Card>
            ))}
          </div>
          
          <Card className="p-6 bg-blue-50 border-blue-200">
            <p className="text-center text-blue-800 font-medium">
              <strong>Classificação do Agente:</strong> A partir da média dos atributos do herói, é definido sua 
              classificação na TCO e, dependendo de sua experiência, a que missões ele está qualificado para ser mandado.
            </p>
          </Card>
        </div>

        {/* Detalhes dos Atributos - EXATO DO DOCUMENTO */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
            Detalhamento dos Atributos
          </h2>
          
          {mockData.overallSystem.attributes.map((attribute, index) => {
            const IconComponent = attributeIcons[attribute.name];
            const isExpanded = expandedAttribute === index;
            
            return (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                  onClick={() => toggleAttribute(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{attribute.name}</h3>
                        <p className="text-slate-600">{attribute.description}</p>
                      </div>
                    </div>
                    {isExpanded ? 
                      <ChevronUp className="h-5 w-5 text-slate-400" /> : 
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    }
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-slate-200">
                    <div className="space-y-4 mt-4">
                      {Object.entries(attribute.levels).map(([level, description]) => (
                        <div key={level} className="flex items-start space-x-4">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm min-w-[2rem]"
                            style={{ backgroundColor: levelColors[level] }}
                          >
                            {level}
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-700 leading-relaxed">{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
        {/* Informações Adicionais */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-slate-900 text-white">
            <h3 className="text-2xl font-bold mb-6">Aplicação Prática</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-white">Classificação de Agentes:</strong> A média dos seis 
                atributos determina a classificação geral do agente na TCO.
              </p>
              <p>
                <strong className="text-white">Alocação de Missões:</strong> Baseado na classificação 
                e experiência, determina-se para quais missões o agente está qualificado.
              </p>
              <p>
                <strong className="text-white">Resposta Proporcional:</strong> Permite alocação 
                adequada de recursos para cada tipo de incidente.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Estatísticas do Sistema</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">&lt;10</div>
                <div className="text-slate-600">Agentes Rank S no Mundo</div>
                <p className="text-sm text-slate-500 mt-2">
                  "Talentos incalculáveis — casos excepcionais"
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">Maioria</div>
                  <div className="text-sm text-slate-600">Agentes Rank C</div>
                  <p className="text-xs text-slate-500">Na média</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-slate-600">Os Cinco no Topo</div>
                  <p className="text-xs text-slate-500">Elite Mundial</p>
                </div>
              </div>
              
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm text-slate-700 text-center">
                  O sistema Overall permite <strong>resposta proporcional</strong> e 
                  <strong> alocação adequada de recursos</strong> para cada tipo de incidente.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Overall;