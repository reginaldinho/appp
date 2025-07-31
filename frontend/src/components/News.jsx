import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Lock, AlertCircle, FileText, ChevronRight } from 'lucide-react';
import { mockData } from '../data/mock';

const News = () => {
  const classificationColors = {
    'PÚBLICO': 'bg-green-500',
    'RESTRITO': 'bg-yellow-500',
    'CONFIDENCIAL': 'bg-red-500'
  };

  const categoryIcons = {
    'Operações': AlertCircle,
    'Protocolos': FileText,
    'Institucional': FileText
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
    <div className="container mx-auto px-4">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
          COMUNICADOS OFICIAIS
        </Badge>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Notícias e Atualizações
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Acompanhe as últimas operações, atualizações de protocolos e desenvolvimentos 
          da Ordem de Contenção de Ameaças.
        </p>
      </div>

      {/* Grid de Notícias */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {mockData.news.map((article) => {
          const CategoryIcon = categoryIcons[article.category];
          const classificationColor = classificationColors[article.classification];
          
          return (
            <Card key={article.id} className="p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="space-y-4">
                {/* Cabeçalho da Notícia */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <CategoryIcon className="h-4 w-4 text-blue-600" />
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${classificationColor}`}></div>
                    <span className="text-xs font-mono text-slate-600">
                      {article.classification}
                    </span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Resumo */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Data e Ação */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2 text-slate-500 text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Painel de Alerta de Segurança */}
      <Card className="bg-slate-900 text-white p-8 mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <Lock className="h-8 w-8 text-red-400" />
          <div>
            <h3 className="text-2xl font-bold">Aviso de Segurança</h3>
            <p className="text-slate-300">Protocolo de Informação Classificada</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">ATENÇÃO:</strong> Algumas informações contidas nos comunicados 
            oficiais podem estar sujeitas a classificação de segurança. O acesso completo 
            aos detalhes operacionais requer autorização adequada.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-800 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white font-semibold">PÚBLICO</span>
              </div>
              <p className="text-slate-400 text-sm">Informações de domínio público</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-white font-semibold">RESTRITO</span>
              </div>
              <p className="text-slate-400 text-sm">Acesso limitado a pessoal autorizado</p>
            </div>
            
            <div className="bg-slate-800 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-white font-semibold">CONFIDENCIAL</span>
              </div>
              <p className="text-slate-400 text-sm">Máxima segurança nacional</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Botão para Mais Notícias */}
      <div className="text-center">
        <Button size="lg" variant="outline" className="px-8">
          Ver Todos os Comunicados
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default News;