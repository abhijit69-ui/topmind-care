import Container from '../../utils/Container';
import BtnLink from '../shared/BtnLink';
import { navItems } from '../shared/NavItems';
import MobileMenu from './MobileMenu';
import logo from '/assets/logo-tm.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 py-4 bg-white/70 backdrop-blur-md border border-gray-200'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            to='hero'
            smooth={true}
            duration={600}
            offset={-80}
            className='flex items-center gap-2 cursor-pointer'
          >
            <img src={logo} alt='topmind logo' className='w-10 h-10' />

            <span className='text-lg font-primary font-bold'>Topmind Care</span>
          </Link>

          {/* Nav Items */}
          <div className='hidden md:flex items-center gap-8 font-bold font-primary'>
            <ul className='flex items-center gap-6 text-sm  text-violet'>
              {navItems.map((item, key) => (
                <li key={key}>
                  <Link
                    to={item.href.replace('#', '')}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    spy={true}
                    activeClass='text-violet-800 border-b-2 border-violet-800'
                    className='hover:text-violet-800 transition-colors cursor-pointer'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <BtnLink
              label='Start Free'
              href='#cta'
              className='bg-violet hover:bg-violet-800 text-white'
            />
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
