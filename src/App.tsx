import Layout from './components/Layout';
import Features from './components/sections/Features';
import ForParents from './components/sections/ForParents';
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
      <ForParents />
    </Layout>
  );
};

export default App;
