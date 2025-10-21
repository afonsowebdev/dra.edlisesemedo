import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-500/10 to-cyan-600/10" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6"
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Cuidado Especializado</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Envelhecer com Dignidade e Qualidade
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Atendimento gerontológico personalizado focado no bem-estar integral da terceira idade. 
              Cuidado humanizado, profissional e dedicado.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                Conheça os Serviços
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 z-10" />
              <img 
                className="w-full h-[600px] object-cover"
                alt="Gerontóloga cuidando de paciente idoso com carinho"
               src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-emerald-200"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full p-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">15+</p>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;