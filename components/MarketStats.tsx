import React from 'react';
import { Section } from './ui/Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MARKET_DATA, ASSETS } from '../constants';

export const MarketStats: React.FC = () => {
  return (
    <Section id="mercado" className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Intro */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">El Mercado</h2>
          <p className="text-gray-600 text-lg">
            No estamos disparando al aire. Nos enfocamos en un "Océano Azul" de preventivos proactivos en un mercado de <strong>USD 11.200 millones</strong>.
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-300 flex-shrink-0 mr-3 mt-1"></span>
              <span><strong>TAM:</strong> Salud y Bienestar LATAM (11.2B USD)</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-gray-400 flex-shrink-0 mr-3 mt-1"></span>
              <span><strong>SAM:</strong> Salud Cardiovascular Colombia (379M USD)</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-vitasens-primary flex-shrink-0 mr-3 mt-1"></span>
              <span><strong>SOM:</strong> Preventivos Proactivos (8M USD / Año 3)</span>
            </li>
          </ul>
        </div>

        {/* Chart */}
        <div className="lg:col-span-2 h-[400px] bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold mb-4 text-center">Tamaño de Oportunidad (Millones USD)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={MARKET_DATA}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip 
                formatter={(value) => [`$${value} M`, 'Valor']}
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {MARKET_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Strategy Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {[
            { title: "Autoridad Digital", desc: "Educamos para atraer. Contenido viral basado en ciencia." },
            { title: "Validación B2B2C", desc: "Red de nutricionistas y health coaches como validadores." },
            { title: "Conexión Emocional", desc: "Transformamos el miedo al colesterol en control." },
            { title: "Omnicanalidad", desc: "E-commerce, Farmacias y Prescripción Digital." }
        ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow border-t-4 border-vitasens-primary">
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
        ))}
      </div>
    </Section>
  );
};