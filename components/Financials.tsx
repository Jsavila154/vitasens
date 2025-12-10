import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck } from 'lucide-react';

export const Financials: React.FC = () => {
  return (
    <Section id="inversion" className="bg-gradient-to-br from-gray-50 to-vitasens-light/50">
      <div className="max-w-4xl mx-auto">
        
        {/* The ASK */}
        <div className="bg-vitasens-secondary text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">La Oportunidad de Inversión</h2>
            <p className="text-gray-300">Únete a la revolución de la longevidad y el bienestar preventivo.</p>
          </div>
          
          <div className="space-y-8 relative z-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                    <p className="text-gray-300 text-sm uppercase tracking-widest font-bold">Inversión Founders</p>
                    <p className="text-2xl font-semibold">$200 Millones (Skin in the game)</p>
                </div>

                <div className="md:border-l md:border-white/20 md:pl-8">
                    <p className="text-vitasens-accent text-sm uppercase tracking-widest font-bold mb-1">Equity Ask</p>
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">$180 Millones</p>
                    <p className="text-xl text-gray-300">por el 18% de la compañía</p>
                </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm">
                    <p className="flex items-center"><ShieldCheck className="h-5 w-5 mr-3 text-vitasens-light" /> Uso de fondos: Inventario y Marketing de Tracción</p>
                    <p className="flex items-center"><ShieldCheck className="h-5 w-5 mr-3 text-vitasens-light" /> Riesgo Mitigado: Stock de seguridad y validación médica</p>
                </div>
            </div>

            <button className="w-full bg-white text-vitasens-primary font-bold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:-translate-y-1 text-lg">
              Contactar para Invertir
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
};