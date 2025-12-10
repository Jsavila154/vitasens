import React from 'react';
import { Activity, Heart, AlertTriangle, TrendingDown } from 'lucide-react';

export const TensionControl: React.FC = () => {
  return (
    <section id="problema" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">El Problema</h2>
            <p className="text-gray-500 mt-2">¿Por qué la salud moderna está en crisis?</p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
           
           {/* Left Side: La Zona Roja */}
           <div className="bg-white p-8 md:p-12 flex flex-col justify-center border-r border-gray-100">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Activity className="text-red-500 w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    La Zona Roja
                </h3>
             </div>
             
             <div className="space-y-8">
                 {/* Subsección: Riesgos Silenciosos */}
                 <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-800 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        Riesgos Silenciosos
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                        Vivimos bajo una amenaza invisible: <strong>inflamación crónica, picos de glucosa y colesterol LDL</strong> acumulándose sin síntomas evidentes hasta que es tarde.
                    </p>
                 </div>

                 {/* Subsección: Fallas del Mercado */}
                 <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-800 mb-2">
                        <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
                        Fallas del Mercado
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                        Las opciones actuales fallan: fármacos con <strong>efectos secundarios</strong> indeseados o remedios naturales ineficientes y difíciles de consumir diariamente.
                    </p>
                 </div>
             </div>
           </div>

           {/* Right Side: El Control (Contrast) */}
           <div className="bg-vitasens-primary p-8 md:p-12 flex flex-col justify-center text-white relative overflow-hidden">
             {/* Decorative bg */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

             <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                    La Salida: Control
                </h3>
             </div>
             
             <p className="text-purple-100 text-lg mb-8 relative z-10">
               VitaSens te saca de la incertidumbre de la Zona Roja y te coloca en la Zona Púrpura de seguridad.
             </p>
             
             <div className="space-y-4 relative z-10">
                 <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                     <p className="font-semibold text-white">✓ Sin efectos secundarios</p>
                 </div>
                 <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                     <p className="font-semibold text-white">✓ Eficiencia Clínica Comprobada</p>
                 </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};