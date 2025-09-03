import Layout from './components/Layout';
import CallToAction from './components/sections/CallToAction';
import FAQ from './components/sections/Faq';
import Features from './components/sections/Features';
import ForParents from './components/sections/ForParents';
import Hero from './components/sections/Hero';
import Programs from './components/sections/Programs';
import Testimonial from './components/sections/Testimonial';
import Why from './components/sections/Why';

const App = () => {
  return (
    <Layout title='Topmind Care'>
      <Hero />
      <Why />
      <Programs />
      <Features />
      <ForParents />
      <Testimonial />
      <FAQ />
      <CallToAction />
    </Layout>
  );
};

export default App;
