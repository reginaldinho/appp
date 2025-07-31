import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  MapPin, 
  Calendar, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Eye,
  Lock,
  Target
} from 'lucide-react';
import { mockData } from '../data/mock';

const Operacoes = () => {
  const statusIcons = {
    'CONCLUÍDA': CheckCircle,
    'EM ANDAMENTO': AlertCircle,
    'PLANEJAMENTO': Clock
  };

  const statusColors = {
    'CONCLUÍDA': 'text-green-500',
    'EM ANDAMENTO': 'text-amber-500',
    'PLANEJAMENTO': 'text-blue-500'
  };

  const gradeColors = {
    'I': '#22c55e',
    'II': '#84cc16', 
    'III': '#eab308',
    'IV': '#f97316',
    'V': '#ef4444'
  };

  const classificationColors = {
    'PÚBLICO': 'bg-green-500',
    'RESTRITO': 'bg-yellow-500',
    'CONFIDENCIAL': 'bg-red-500'
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            OPERAÇÕES ESPECIAIS
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Operações de Campo
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Acompanhe as operações ativas da TCO para contenção e neutralização 
            de ameaças sobrenaturais em todo o mundo.
          </p>
        </div>

        {/* Estatísticas de Operações */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-l-4 border-l-blue-600">
            <div className="text-3xl font-bold text-blue-600 mb-2">{mockData.stats.totalOperations}</div>
            <div className="text-slate-600">Total de Operações</div>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-green-600">
            <div className="text-3xl font-bold text-green-600 mb-2">{mockData.stats.successRate}%</div>
            <div className="text-slate-600">Taxa de Sucesso</div>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-amber-600">
            <div className="text-3xl font-bold text-amber-600 mb-2">{mockData.stats.activeThreats}</div>
            <div className="text-slate-600">Operações Ativas</div>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-purple-600">
            <div className="text-3xl font-bold text-purple-600 mb-2">{mockData.stats.globalCoverage}</div>
            <div className="text-slate-600">Países Cobertos</div>
          </Card>
        </div>

        {/* Lista de Operações */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Target className="h-6 w-6 mr-3 text-blue-600" />
            Operações Recentes
          </h2>
          
          {mockData.operations.map((operation) => {
            const StatusIcon = statusIcons[operation.status];
            const statusColor = statusColors[operation.status];
            const gradeColor = gradeColors[operation.grade];
            const classificationColor = classificationColors[operation.classification];
            
            return (
              <Card key={operation.id} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Informações Principais */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {operation.codename}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {operation.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <div className={`w-2 h-2 rounded-full ${classificationColor}`}></div>
                        <span className="text-xs font-mono text-slate-600">
                          {operation.classification}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{operation.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(operation.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span>Grau {operation.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status e Ações */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className={`flex items-center justify-center space-x-2 mb-3 ${statusColor}`}>
                        <StatusIcon className="h-5 w-5" />
                        <span className="font-semibold">{operation.status}</span>
                      </div>
                      
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl"
                        style={{ backgroundColor: gradeColor }}
                      >
                        {operation.grade}
                      </div>
                      
                      <Badge variant="outline" style={{ borderColor: gradeColor, color: gradeColor }}>
                        GRAU {operation.grade}
                      </Badge>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-slate-600 text-slate-700 hover:bg-slate-100"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Detalhes Classificados
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Painel de Segurança */}
        <Card className="bg-slate-900 text-white p-8">
          <div className="flex items-center space-x-4 mb-6">
            <Lock className="h-8 w-8 text-red-400" />
            <div>
              <h3 className="text-2xl font-bold">Informações Classificadas</h3>
              <p className="text-slate-300">Acesso Restrito a Pessoal Autorizado</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white">AVISO DE SEGURANÇA:</strong> As informações detalhadas 
              sobre operações de campo são classificadas de acordo com protocolos de segurança 
              internacionais. O acesso completo requer autorização de nível Alfa ou superior.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Operações Ativas</h4>
                <p className="text-slate-400 text-sm">Monitoramento 24/7</p>
              </div>
              
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Target className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Resposta Rápida</h4>
                <p className="text-slate-400 text-sm">Mobilização em &lt; 2h</p>
              </div>
              
              <div className="bg-slate-800 p-4 rounded-lg text-center">
                <Lock className="h-8 w-8 text-red-400 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Sigilo Total</h4>
                <p className="text-slate-400 text-sm">Protocolo de segurança</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Operacoes;