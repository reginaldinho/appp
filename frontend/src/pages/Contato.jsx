import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  AlertTriangle, 
  Shield,
  Clock,
  Lock,
  Send
} from 'lucide-react';
import { mockData } from '../data/mock';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    organizacao: '',
    clearance: '',
    email: '',
    telefone: '',
    tipo: 'incidente',
    urgencia: 'baixa',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio
    alert('Relatório enviado! Nossa equipe entrará em contato em breve.');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            COMUNICAÇÃO OFICIAL
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Contato e Relatórios
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Canal oficial para comunicação com a TCO. Utilize este formulário para 
            reportar incidentes, solicitar informações ou estabelecer contato institucional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulário Principal */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Formulário de Contato</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informações Pessoais */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Organização
                    </label>
                    <Input
                      name="organizacao"
                      value={formData.organizacao}
                      onChange={handleInputChange}
                      placeholder="Organização/Governo/Agência"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="+55 (11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Nível de Clearance */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nível de Autorização
                  </label>
                  <select 
                    name="clearance"
                    value={formData.clearance}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione seu nível</option>
                    <option value="civilian">Civil</option>
                    <option value="gamma">Gamma</option>
                    <option value="beta">Beta</option>
                    <option value="alpha">Alfa</option>
                    <option value="alpha-zero">Alfa-Zero</option>
                  </select>
                </div>

                {/* Tipo de Contato */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tipo de Contato *
                    </label>
                    <select 
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="incidente">Relatório de Incidente</option>
                      <option value="informacao">Solicitação de Informação</option>
                      <option value="cooperacao">Cooperação Interagência</option>
                      <option value="emergencia">Emergência</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nível de Urgência *
                    </label>
                    <select 
                      name="urgencia"
                      value={formData.urgencia}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                      <option value="critica">Crítica</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem/Relatório *
                  </label>
                  <Textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Descreva detalhadamente o incidente, solicitação ou informação..."
                  />
                </div>

                {/* Botão de Envio */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Comunicação
                </Button>
              </form>
            </Card>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* Emergência */}
            <Card className="bg-red-50 border-red-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-bold text-red-900">EMERGÊNCIA</h3>
              </div>
              <p className="text-red-700 text-sm mb-4">
                Para situações de emergência que requerem resposta imediata
              </p>
              <Button 
                variant="destructive" 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 animate-pulse"
              >
                <Phone className="h-4 w-4 mr-2" />
                LINHA DE EMERGÊNCIA
              </Button>
            </Card>

            {/* Contatos Regionais */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-600" />
                Escritórios Regionais
              </h3>
              <div className="space-y-4">
                {mockData.emergencyContacts.map((contact, index) => (
                  <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {contact.department}
                    </h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span className="font-mono">{contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span className="font-mono">{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className="text-green-600 font-semibold">
                          {contact.available}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sede */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Sede Principal
              </h3>
              <div className="space-y-2 text-slate-600">
                <p className="font-semibold">TCO Headquarters</p>
                <p>{mockData.agency.headquarters}</p>
                <p className="text-sm">Organização das Nações Unidas</p>
              </div>
            </Card>

            {/* Tempo de Resposta */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-600" />
                Tempo de Resposta
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Emergência:</span>
                  <span className="font-semibold text-red-600">&lt; 1 hora</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Urgente:</span>
                  <span className="font-semibold text-amber-600">&lt; 24 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Normal:</span>
                  <span className="font-semibold text-blue-600">2-5 dias úteis</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Aviso de Segurança */}
        <Card className="bg-slate-900 text-white p-8 mt-12">
          <div className="flex items-center space-x-4 mb-6">
            <Lock className="h-8 w-8 text-red-400" />
            <div>
              <h3 className="text-2xl font-bold">Protocolo de Segurança</h3>
              <p className="text-slate-300">Comunicação Classificada</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Importante:</h4>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Todas as comunicações são monitoradas e registradas</li>
                <li>• Informações falsas são crime federal</li>
                <li>• Tempo de resposta varia conforme classificação</li>
                <li>• Emergências reais têm prioridade absoluta</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Para Emergências:</h4>
              <p className="text-slate-300 text-sm mb-3">
                Se você está presenciando um evento sobrenatural ativo:
              </p>
              <ol className="text-slate-300 space-y-1 text-sm">
                <li>1. Afaste-se da área imediatamente</li>
                <li>2. Ligue para a linha de emergência</li>
                <li>3. Não tire fotos ou vídeos</li>
                <li>4. Aguarde instruções da equipe TCO</li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contato;