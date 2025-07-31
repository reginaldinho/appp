import React from 'react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Crown, 
  Snowflake, 
  Skull, 
  Sword, 
  Sun,
  MapPin,
  Calendar,
  Ruler,
  Briefcase,
  Star,
  Shield
} from 'lucide-react';
import { mockData } from '../data/mock';

const CincoNoTopo = () => {
  const heroeIcons = {
    'O Rei': Crown,
    'Rainha de Gelo': Snowflake,
    'Czar de Chernobog': Skull,
    'Lorde da Espada': Sword,
    'Imperatriz do Deserto': Sun
  };

  const countryFlags = {
    'USA': '🇺🇸',
    'UK': '🇬🇧', 
    'RU': '🇷🇺',
    'JP': '🇯🇵',
    'EG': '🇪🇬'
  };

  const rankColors = {
    'S': '#7c3aed' // violet-600
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            ELITE MUNDIAL DE SUPER-HERÓIS
          </Badge>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Os Cinco no Topo
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Os cinco heróis de países diferentes eleitos como os mais poderosos do planeta. 
            Símbolos que representam o poderio bélico de cada nação e verdadeiros pilares 
            na proteção da humanidade contra ameaças extraordinárias.
          </p>
        </div>

        {/* Introdução baseada no documento */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="text-center mb-6">
            <Crown className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">A Elite Mundial</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Com o desenvolvimento da fundação, os países aliados entraram em consenso que seria 
              necessário a criação de <strong className="text-white">símbolos</strong>, que serviriam para representar 
              o poderio bélico de cada país e para serem mandados para reuniões que os representantes 
              políticos correriam riscos se fosse.
            </p>
            <p>
              Assim, cada país na TCO elegeu um herói representante. Entretanto, esse não foi o único 
              intuito da ação — o principal motivo era encontrar os <strong className="text-white">melhores dentre os melhores</strong>, 
              aqueles que serviriam como verdadeiros pilares na proteção da humanidade.
            </p>
          </div>
        </Card>

        {/* Grid dos Heróis - EXATO DO DOCUMENTO */}
        <div className="space-y-8">
          {mockData.cincoNoTopo.map((heroi, index) => {
            const IconComponent = heroeIcons[heroi.nomeHeroi];
            const flag = countryFlags[heroi.pais];
            const isLeader = heroi.nomeHeroi === 'Imperatriz do Deserto';
            
            return (
              <Card 
                key={heroi.id} 
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isLeader ? 'border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-amber-50' : ''
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-8 p-8">
                  {/* Seção de Identidade */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {heroi.nomeHeroi}
                      </h3>
                      <p className="text-slate-600 text-lg">{heroi.nome}</p>
                      {isLeader && (
                        <Badge className="bg-yellow-500 text-slate-900 mt-2">
                          LÍDER DOS CINCO
                        </Badge>
                      )}
                    </div>

                    {/* Informações Básicas */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          País:
                        </span>
                        <span className="font-medium text-slate-900">
                          {flag} {heroi.nacionalidade}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Idade:
                        </span>
                        <span className="font-medium text-slate-900">{heroi.idade} anos</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 flex items-center">
                          <Ruler className="h-4 w-4 mr-2" />
                          Altura:
                        </span>
                        <span className="font-medium text-slate-900">{heroi.altura}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Profissão:
                        </span>
                        <span className="font-medium text-slate-900 text-sm">{heroi.profissao}</span>
                      </div>
                    </div>
                  </div>

                  {/* Seção de Descrição */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">História e Conquistas</h4>
                      <p className="text-slate-700 leading-relaxed">{heroi.descricao}</p>
                    </div>

                    {/* Especificações de Combate */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="font-semibold text-slate-900">Especificações de Combate</h5>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Poder:</span>
                            <span className="font-medium text-slate-900">{heroi.poder}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Rank:</span>
                            <div className="flex items-center space-x-2">
                              <div 
                                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                style={{ backgroundColor: rankColors[heroi.rank] }}
                              >
                                {heroi.rank}
                              </div>
                              <span className="font-medium text-slate-900">Rank {heroi.rank}</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-slate-600">Estilo:</span>
                            <span className="font-medium text-slate-900 text-sm">{heroi.estiloLuta}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h5 className="font-semibold text-slate-900">Habilidades Especiais</h5>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-slate-600 text-sm">Trunfo:</span>
                            <div className="bg-slate-100 p-2 rounded mt-1">
                              <span className="font-medium text-slate-900 text-sm">"{heroi.trunfo}"</span>
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-slate-600 text-sm">Artefato Divino:</span>
                            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-2 rounded mt-1 border border-yellow-200">
                              <span className="font-medium text-slate-900 text-sm flex items-center">
                                <Star className="h-3 w-3 text-yellow-600 mr-1" />
                                {heroi.artefatoDivino}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Badge do Papel */}
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {heroi.papel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-slate-900 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Hierarquia e Liderança</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-white">Nefertari - Imperatriz do Deserto</strong> serve como 
                líder dos Cinco no Topo, sendo considerada por O Rei como "a mais poderosa dentre os heróis".
              </p>
              <p>
                Cada membro representa não apenas seu país de origem, mas também uma filosofia 
                diferente de heroísmo e proteção da humanidade.
              </p>
              <p>
                <strong className="text-white">Membro Vitalício:</strong> Nefertari também possui assento 
                vitalício no comitê das Nações Unidas, tendo forte voz na tomada de decisões globais.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Impacto Global</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-slate-600">Continentes Representados</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-slate-600">Taxa de Sucesso</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">Rank S</div>
                  <div className="text-sm text-slate-600">Todos os Membros</div>
                </div>
              </div>
              
              <div className="bg-slate-100 p-4 rounded-lg">
                <p className="text-sm text-slate-700 text-center">
                  <strong>"Os melhores dentre os melhores"</strong> - Verdadeiros pilares 
                  na proteção da humanidade contra ameaças que transcendem fronteiras nacionais.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CincoNoTopo;