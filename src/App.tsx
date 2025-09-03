import Layout from './components/Layout';
import Features from './components/sections/Features';
import Hero from './components/sections/Hero';
import Programs from './components/sections/Programs';
import Why from './components/sections/Why';

const App = () => {
  return (
    <Layout title='Topmind Care'>
      <Hero />
      <Why />
      <Programs />
      <Features />
    </Layout>
  );
};

export default App;
