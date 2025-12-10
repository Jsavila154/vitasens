import React from 'react';

export const JoinRevolution: React.FC = () => {
  return (
    <section className="bg-vitasens-secondary py-20 px-4 relative overflow-hidden">
        {/* Background Pattern (Hexagons) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" className="text-white">
                <defs>
                    <pattern id="hexagons" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
                        <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                        <path d="M25 86.6 L50 72.2 L50 43.3 L25 28.9 L0 43.3 L0 72.2 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)"/>
            </svg>
        </div>
        
        {/* Radial Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Únete a la Revolución Sensorial
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-purple-100">
          Ayúdanos a llevar la solución más eficiente para el colesterol a 13 
          millones de colombianos. Pasa de la tensión de la zona roja al control 
          de la zona púrpura.
        </p>

        {/* Card Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-lg mx-auto">
          <h3 className="text-xl font-bold mb-8 text-white">
            Regístrate a la Lista de Espera
          </h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full px-5 py-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-vitasens-accent/30 border-none shadow-sm placeholder-gray-400 text-lg transition-all"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-vitasens-accent hover:bg-red-500 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1 text-lg"
            >
              ¡Quiero el Control!
            </button>
          </form>

          <p className="mt-6 text-xs text-purple-200 opacity-80">
            * Stock limitado por patente de producción. Te notificaremos prioridad.
          </p>
        </div>
      </div>
    </section>
  );
};