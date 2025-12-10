import React from 'react';
import { Section } from './ui/Section';
import { TEAM_MEMBERS, ASSETS } from '../constants';

export const Team: React.FC = () => {
  return (
    <Section id="equipo" className="bg-gray-50/50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">El Equipo</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Cubrimos el ciclo completo con expertos en cada área clave.
        </p>
      </div>

      {/* Grid configurada para 5 columnas en pantallas grandes (lg) con tamaños optimizados para una sola línea */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 justify-center">
        {TEAM_MEMBERS.map((member, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
            {/* Imagen ajustada en altura para ser más compacta y mantener alineación */}
            <div className="h-48 lg:h-32 xl:h-40 overflow-hidden bg-gray-200 relative">
              <img 
                src={ASSETS[member.imageKey]} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-white text-[10px] font-semibold tracking-wide uppercase">Fundador</span>
              </div>
            </div>
            
            <div className="p-3 lg:p-4 flex-grow flex flex-col">
              <h3 className="text-base lg:text-lg font-bold text-gray-900 leading-tight mb-1">{member.name}</h3>
              <p className="text-vitasens-primary text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-2 line-clamp-1" title={member.role}>{member.role}</p>
              <p className="text-gray-500 text-xs leading-snug line-clamp-3">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};