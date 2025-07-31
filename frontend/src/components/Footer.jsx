import React from 'react';
import { Shield, Globe, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { mockData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Seção de Contato de Emergência */}
      <div className="bg-red-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-center">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">LINHA DE EMERGÊNCIA 24/7:</span>
            <span className="font-mono text-lg">+41-22-XXX-XXXX</span>
            <Button variant="secondary" size="sm" className="ml-4">
              REPORTAR INCIDENTE
            </Button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Footer */}
      <div className="py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Informações da Organização */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">TCO</h3>
                  <p className="text-slate-300">Threat Containment Order</p>
                  <p className="text-slate-400 text-sm">Ordem de Contenção de Ameaças</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed max-w-lg">
                Uma organização especializada das Nações Unidas dedicada à identificação, 
                contenção e neutralização de ameaças sobrenaturais que põem em risco 
                a segurança global e a continuidade da civilização humana.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Sede: {mockData.agency.headquarters}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span>Estabelecida: {mockData.agency.established}</span>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Acesso Rápido</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-slate-300 hover:text-white transition-colors flex items-center">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Portal Principal
                  </a>
                </li>
                <li>
                  <a href="#departments" className="text-slate-300 hover:text-white transition-colors flex items-center">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Departamentos
                  </a>
                </li>
                <li>
                  <a href="#news" className="text-slate-300 hover:text-white transition-colors flex items-center">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Comunicados Oficiais
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors flex items-center">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Contato Institucional
                  </a>
                </li>
              </ul>
            </div>

            {/* Contatos Regionais */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Escritórios Regionais</h4>
              <div className="space-y-4">
                {mockData.emergencyContacts.map((contact, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 p-4">
                    <h5 className="font-semibold text-white text-sm mb-2">
                      {contact.department}
                    </h5>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3" />
                        <span className="font-mono">{contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3" />
                        <span className="font-mono">{contact.email}</span>
                      </div>
                      <div className="text-green-400 font-semibold">
                        {contact.available}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="bg-slate-950 py-6 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>© {currentYear} Threat Containment Order (TCO) - Organização das Nações Unidas</p>
              <p className="mt-1">
                Todos os direitos reservados. Documento classificado sob jurisdição internacional.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <span className="bg-slate-800 px-3 py-1 rounded">CLASSIFICAÇÃO: MÁXIMA</span>
              <span className="bg-slate-800 px-3 py-1 rounded">VERSÃO: 2.1.7</span>
              <span className="bg-green-700 px-3 py-1 rounded">STATUS: OPERACIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;