import React, { useState } from 'react';
import { Menu, X, Shield, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Departamentos', href: '#departments' },
    { name: 'Operações', href: '#operations' },
    { name: 'Notícias', href: '#news' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <header className="bg-slate-900 text-white shadow-2xl sticky top-0 z-50">
      {/* Barra de alerta superior */}
      <div className="bg-amber-600 text-slate-900 px-4 py-2 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle size={16} />
          NÍVEL DE AMEAÇA ATUAL: AMARELO - Ameaça Potencial Identificada
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">TCO</h1>
              <p className="text-sm text-slate-300">Threat Containment Order</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Botão de Emergência */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="destructive" 
              size="sm"
              className="bg-red-600 hover:bg-red-700 font-semibold"
            >
              EMERGÊNCIA
            </Button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-slate-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 py-4 px-4 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-300 hover:text-white transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="destructive" 
              size="sm"
              className="w-full bg-red-600 hover:bg-red-700 font-semibold"
            >
              EMERGÊNCIA
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;