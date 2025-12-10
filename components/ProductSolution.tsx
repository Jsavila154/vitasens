import React from 'react';
import { Section } from './ui/Section';
import { FEATURES, ASSETS } from '../constants';
import { Leaf, Activity, Droplets, CheckCircle2 } from 'lucide-react';

const iconMap: any = {
  Leaf: Leaf,
  Activity: Activity,
  Droplets: Droplets
};

export const ProductSolution: React.FC = () => {
  return (
    <Section id="solucion" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VitaSens: La Solución Invisible</h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          No vendemos milagros. Vendemos una patente canadiense que logra lo que la avena y los fármacos no han podido.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Product Image */}
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square rounded-full bg-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-50"></div>
          <img 
            src={ASSETS.product_bottle} 
            alt="VitaSens Producto" 
            className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-xl"
          />
        </div>

        {/* Features List */}
        <div className="order-1 lg:order-2 space-y-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-vitasens-primary text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}

          <div className="mt-8 bg-vitasens-light p-6 rounded-lg border border-vitasens-primary/20">
            <h4 className="text-lg font-bold text-vitasens-primary mb-2 flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Willingness to Pay
            </h4>
            <p className="text-gray-700">
              El cliente paga por <strong>seguridad y eficiencia</strong>. Una cucharada invisible reemplaza 3 platos grandes de avena. Sin sentirse enfermo, sin efectos secundarios.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};