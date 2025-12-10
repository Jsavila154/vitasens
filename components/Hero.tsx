import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_CONTENT, ASSETS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-vitasens-primary">
      {/* Full Purple Background with Patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         {/* Gradient Overlay Light */}
         <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-vitasens-secondary via-transparent to-transparent"></div>
         {/* Gradient Overlay Dark */}
         <div className="absolute bottom-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Sin tarjeta blanca, texto blanco directo sobre fondo */}
          <div className="p-4 md:p-0">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 whitespace-pre-line leading-tight">
              {HERO_CONTENT.headline}
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 font-semibold mb-4">
              {HERO_CONTENT.subheadline}
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              {HERO_CONTENT.description}
            </p>
            
            {/* New CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <button 
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-red-600/40 transition-all transform hover:-translate-y-1"
              >
                <span className="text-center whitespace-pre-line leading-tight mr-4">
                  {HERO_CONTENT.cta_waitlist}
                </span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-start gap-3 text-gray-300 max-w-[200px]">
                <ShieldCheck className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-sm leading-snug font-medium">
                  {HERO_CONTENT.social_proof_text}
                </p>
              </div>
            </div>

            {/* Validation / Social Proof */}
            <div className="flex items-center gap-4">
               <div className="flex -space-x-4">
                  <img src={ASSETS.avatar1} alt="Doctor 1" className="w-10 h-10 rounded-full border-2 border-vitasens-primary object-cover" />
                  <img src={ASSETS.avatar2} alt="Doctor 2" className="w-10 h-10 rounded-full border-2 border-vitasens-primary object-cover" />
                  <img src={ASSETS.avatar3} alt="Doctor 3" className="w-10 h-10 rounded-full border-2 border-vitasens-primary object-cover" />
                  <img src={ASSETS.avatar4} alt="Doctor 4" className="w-10 h-10 rounded-full border-2 border-vitasens-primary object-cover" />
               </div>
               <p className="text-white font-medium text-sm md:text-base">
                 {HERO_CONTENT.validation_text}
               </p>
            </div>
          </div>

          {/* Conceptual Image / Visual */}
          <div className="hidden lg:block relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group border-4 border-white/10">
             <img 
              src={ASSETS.hero_split} 
              alt="Tension vs Control" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-vitasens-primary/40 to-transparent mix-blend-overlay"></div>
            
            {/* Floating Labels */}
            <div className="absolute top-10 left-10 bg-white/90 text-vitasens-primary px-4 py-2 rounded-full font-bold shadow-lg">
              Toma el Control
            </div>
            <div className="absolute bottom-10 right-10 bg-vitasens-secondary/90 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              VitaSens
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};