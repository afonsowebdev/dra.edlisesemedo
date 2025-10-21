import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Dra. Ana Silva - Gerontóloga Especializada em Cuidados com Idosos</title>
        <meta name="description" content="Atendimento gerontológico especializado com foco no bem-estar e qualidade de vida da terceira idade. Consultas personalizadas e acompanhamento integral." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;