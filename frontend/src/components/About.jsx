import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, Users, Globe, Target, Clock, Lock } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const milestones = [
    {
      year: "2019",
      event: "Fundação da TCO pela Assembleia Geral da ONU",
      description: "Criação oficial da organização após eventos anômalos globais"
    },
    {
      year: "2020", 
      event: "Primeira Operação de Contenção",
      description: "Contenção bem-sucedida da Anomalia Código-Alpha em Chernobyl"
    },
    {
      year: "2022",
      event: "Expansão para América Latina",
      description: "Abertura do Centro Regional em São Paulo, Brasil"
    },
    {
      year: "2024",
      event: "Protocolo Omega Implementado",
      description: "Desenvolvimento de protocolos para ameaças existenciais"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            SOBRE A ORGANIZAÇÃO
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Protegendo a Humanidade do Desconhecido
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A TCO (Threat Containment Order) é uma organização especializada das Nações Unidas, 
            criada para identificar, estudar e neutralizar ameaças sobrenaturais que põem em risco 
            a segurança global e a continuidade da civilização humana.
          </p>
        </div>

        {/* Informações Principais */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="p-8 border-l-4 border-l-blue-600">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Nossa Missão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {mockData.agency.mission}. Operamos com absoluto sigilo para manter 
                    a estabilidade social enquanto protegemos a humanidade de forças que 
                    desafiam nossa compreensão da realidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-green-600">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Mandato da ONU</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Estabelecida pela Resolução 2847 do Conselho de Segurança, a TCO possui 
                    autoridade internacional para investigar e conter ameaças de natureza 
                    anômala que transcendem fronteiras nacionais.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Estatísticas Organizacionais */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Dados Organizacionais
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-blue-600">Estabelecida</div>
                  <div className="text-slate-600">{mockData.agency.established}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">Sede</div>
                  <div className="text-slate-600">{mockData.agency.headquarters}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">Diretor</div>
                  <div className="text-slate-600">{mockData.agency.director}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">Pessoal</div>
                  <div className="text-slate-600">351 Agentes</div>
                </div>
              </div>
            </Card>

            {/* Área de Atuação */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-green-600" />
                Área de Atuação
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Cobertura Global</span>
                  <Badge variant="secondary">195 Países</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Centros Regionais</span>
                  <Badge variant="secondary">12 Unidades</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Parcerias Governamentais</span>
                  <Badge variant="secondary">89 Acordos</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Timeline Histórica */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center">
            <Clock className="h-6 w-6 mr-3 text-blue-600" />
            Marcos Históricos
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          {milestone.year}
                        </Badge>
                        <h4 className="font-semibold text-slate-900">{milestone.event}</h4>
                        <p className="text-sm text-slate-600">{milestone.description}</p>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Classificação de Segurança */}
        <Card className="p-8 bg-slate-900 text-white">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Lock className="h-8 w-8 text-red-400" />
            <h3 className="text-2xl font-bold">Classificação de Segurança</h3>
          </div>
          <div className="text-center space-y-4">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              {mockData.agency.classification}
            </Badge>
            <p className="text-slate-300 max-w-2xl mx-auto">
              As informações contidas neste site são de natureza altamente confidencial. 
              O acesso não autorizado é crime federal sob jurisdição internacional da ONU.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;