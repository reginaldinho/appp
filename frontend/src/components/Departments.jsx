import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Shield, Brain, Eye, Users, Lock, ChevronRight } from 'lucide-react';
import { mockData } from '../data/mock';

const Departments = () => {
  const departmentIcons = {
    'DC': Shield,
    'DPA': Brain,
    'IR': Eye,
    'RPD': Users
  };

  const clearanceColors = {
    'Alfa': 'bg-red-500',
    'Beta': 'bg-orange-500', 
    'Gamma': 'bg-yellow-500'
  };

  return (
    <section id="departments" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400">
            ESTRUTURA ORGANIZACIONAL
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Departamentos Especializados
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A TCO opera através de divisões especializadas, cada uma responsável por aspectos 
            específicos da contenção e neutralização de ameaças sobrenaturais.
          </p>
        </div>

        {/* Grid de Departamentos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mockData.departments.map((dept) => {
            const IconComponent = departmentIcons[dept.code];
            const clearanceColor = clearanceColors[dept.clearanceLevel];
            
            return (
              <Card key={dept.id} className="bg-slate-800 border-slate-700 p-8 hover:bg-slate-750 transition-all duration-300 group">
                <div className="space-y-6">
                  {/* Cabeçalho do Departamento */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                        <p className="text-blue-400 font-mono text-sm">CÓDIGO: {dept.code}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>

                  {/* Descrição */}
                  <p className="text-slate-300 leading-relaxed">{dept.description}</p>

                  {/* Informações do Departamento */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-slate-400">Chefe do Departamento</span>
                      <span className="text-white font-medium">{dept.head}</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-slate-700">
                      <span className="text-slate-400">Pessoal Ativo</span>
                      <span className="text-white font-medium">{dept.personnel} Agentes</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-400">Nível de Acesso</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${clearanceColor}`}></div>
                        <span className="text-white font-medium">{dept.clearanceLevel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Acesso */}
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Acesso Restrito
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Informações de Clearance */}
        <Card className="bg-slate-800/50 border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Níveis de Autorização de Segurança
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span className="text-white text-lg font-semibold">NÍVEL ALFA</span>
              </div>
              <p className="text-slate-300 text-sm">
                Acesso a informações críticas de segurança nacional. 
                Autorizado para operações de campo de alto risco.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                <span className="text-white text-lg font-semibold">NÍVEL BETA</span>
              </div>
              <p className="text-slate-300 text-sm">
                Acesso a dados de pesquisa e análise. 
                Autorizado para projetos de desenvolvimento tecnológico.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span className="text-white text-lg font-semibold">NÍVEL GAMMA</span>
              </div>
              <p className="text-slate-300 text-sm">
                Acesso limitado a informações operacionais básicas. 
                Autorizado para comunicação externa controlada.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Departments;