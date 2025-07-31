import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Departamentos', path: '/departamentos' },
    { name: 'Graus de Ameaça', path: '/graus-ameaca' },
    { name: 'Operações', path: '/operacoes' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Contato', path: '/contato' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-slate-900 text-white shadow-2xl sticky top-0 z-50">
      {/* Barra de alerta superior */}
      <div className="bg-amber-600 text-slate-900 px-4 py-2 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle size={16} />
          NÍVEL DE AMEAÇA ATUAL: GRAU III - MODERADA - Intervenção Especializada Requerida
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo e Nome */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">TCO</h1>
              <p className="text-sm text-slate-300">Threat Containment Order</p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-all duration-300 font-medium ${
                  isActivePath(item.path)
                    ? 'text-blue-400 bg-slate-800 border-b-2 border-blue-400'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botão de Emergência */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="destructive" 
              size="sm"
              className="bg-red-600 hover:bg-red-700 font-semibold animate-pulse"
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
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 px-3 rounded transition-colors duration-300 ${
                  isActivePath(item.path)
                    ? 'text-blue-400 bg-slate-700'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
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