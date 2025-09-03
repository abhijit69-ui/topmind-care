import { useEffect } from 'react';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import Container from '../utils/Container';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {/* Navbar is full-width but content inside can be constrained */}
      <Navbar />

      {/* Main wrapper with vertical rhythm */}
      <main className='flex flex-col gap-y-20 md:gap-y-32 overflow-hidden'>
        <Container>{children}</Container>
      </main>

      {/* Footer also full-width with inner container */}
      <Footer />
    </>
  );
};

export default Layout;
