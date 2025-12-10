import React from 'react';
import { Section } from './ui/Section';
import { COMPARISON_DATA } from '../constants';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <Section id="porque" dark className="bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Por qué VitaSens</h2>
        <p className="text-gray-400">Superando lo tradicional y lo farmacéutico.</p>
      </div>

      {/* Vs Tradicional & Vs Fármacos Table */}
      <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-4 px-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="text-vitasens-primary" />
                Vs. Tradicional y Fármacos
            </h3>
            <span className="text-sm text-gray-500">Comparativa directa de rendimiento</span>
          </div>

          <div className="overflow-x-auto bg-gray-800/50 rounded-xl border border-gray-700">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                <th className="p-4 border-b border-gray-700 text-gray-400 font-medium">Factor Diferenciador</th>
                <th className="p-4 border-b border-gray-700 bg-vitasens-primary/20 text-vitasens-primary font-bold text-lg border-t-4 border-t-vitasens-primary">
                    VitaSens
                </th>
                <th className="p-4 border-b border-gray-700 text-gray-300 font-semibold">Fármacos (Metamucil)</th>
                <th className="p-4 border-b border-gray-700 text-gray-300 font-semibold">Tradicional (Avena)</th>
                </tr>
            </thead>
            <tbody>
                {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-800 transition-colors">
                    <td className="p-4 border-b border-gray-800 text-white font-medium">{row.metric}</td>
                    <td className="p-4 border-b border-gray-800 bg-vitasens-primary/10 text-white font-bold border-l border-r border-vitasens-primary/20">
                    {row.vitasens}
                    </td>
                    <td className="p-4 border-b border-gray-800 text-gray-400">{row.metamucil}</td>
                    <td className="p-4 border-b border-gray-800 text-gray-400">{row.avena}</td>
                </tr>
                ))}
            </tbody>
            </table>
          </div>
      </div>

      {/* Inversión en Salud Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
        <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                ROI Personal
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Inversión en Salud</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
                La prevención es 10 veces más económica que la curación. Invertir en VitaSens hoy significa evitar los costos astronómicos y el desgaste emocional de las enfermedades cardiovasculares mañana.
            </p>
            <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-vitasens-primary mr-3" />
                    <span>Protección cardiovascular activa</span>
                </li>
                <li className="flex items-center text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-vitasens-primary mr-3" />
                    <span>Longevidad saludable sin medicamentos de por vida</span>
                </li>
            </ul>
        </div>
        <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 text-center">
            <p className="text-gray-400 text-sm mb-2">Costo diario promedio</p>
            <div className="text-4xl font-bold text-white mb-2">$3.500 <span className="text-lg font-normal text-gray-500">COP</span></div>
            <p className="text-vitasens-primary font-medium">Menos que un café</p>
            <div className="mt-6 pt-6 border-t border-gray-600">
                <p className="text-white font-bold">Valor: Incalculable</p>
                <p className="text-xs text-gray-400">Tranquilidad y salud a largo plazo</p>
            </div>
        </div>
      </div>
    </Section>
  );
};