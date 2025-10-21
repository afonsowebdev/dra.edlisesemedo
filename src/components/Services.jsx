import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Stethoscope, Home, Brain, Activity } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Avaliação Geriátrica',
    description: 'Avaliação completa e multidimensional da saúde física, mental e social do idoso.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Brain,
    title: 'Saúde Mental',
    description: 'Acompanhamento psicológico e cognitivo para prevenção e tratamento de demências.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Home,
    title: 'Atendimento Domiciliar',
    description: 'Consultas no conforto do lar para maior comodidade e bem-estar do paciente.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Users,
    title: 'Orientação Familiar',
    description: 'Suporte e orientação para familiares sobre cuidados e qualidade de vida.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Activity,
    title: 'Plano de Cuidados',
    description: 'Desenvolvimento de planos personalizados de cuidados e acompanhamento contínuo.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Heart,
    title: 'Prevenção e Bem-estar',
    description: 'Programas preventivos focados em envelhecimento ativo e saudável.',
    color: 'from-purple-500 to-pink-500'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidado integral e personalizado para cada fase da vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;