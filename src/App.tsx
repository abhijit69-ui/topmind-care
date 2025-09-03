import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Why from './components/sections/Why';

const App = () => {
  return (
    <Layout title='Topmind Care'>
      <Hero />
      <Why />
    </Layout>
  );
};

export default App;
