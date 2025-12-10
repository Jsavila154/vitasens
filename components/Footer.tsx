import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1117] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-vitasens-primary flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-purple-900/50">
                V
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">VitaSens</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              La respuesta científica, validada y necesaria frente a uno de los problemas más universales de la salud moderna.
            </p>
          </div>

          {/* Links Column - Producto (Spans 3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Producto</h3>
            <ul className="space-y-4">
              <li><a href="#solucion" className="text-gray-400 hover:text-white transition-colors text-base">Ciencia Clean Label</a></li>
              <li><a href="#solucion" className="text-gray-400 hover:text-white transition-colors text-base">Evidencia Clínica</a></li>
              <li><a href="#solucion" className="text-gray-400 hover:text-white transition-colors text-base">Beneficios</a></li>
            </ul>
          </div>

          {/* Links Column - Contacto (Spans 3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Soporte</a></li>
              <li><a href="#" className="text-vitasens-primary font-medium hover:text-purple-400 transition-colors text-base">Inversionistas</a></li>
              <li className="text-gray-400 text-base">Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0 order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} VitaSens. Todos los derechos reservados.
          </div>
          <div className="flex space-x-8 order-1 md:order-2 mb-4 md:mb-0">
             <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};