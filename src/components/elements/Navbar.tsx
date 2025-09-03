import Container from '../../utils/Container';
import BtnLink from '../shared/BtnLink';
import { navItems } from '../shared/NavItems';
import MobileMenu from './MobileMenu';
import logo from '/assets/logo-tm.png';

const Navbar = () => {
  return (
    <header className='absolute inset-x-0 top-0 z-50 py-4 border border-gray-200'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='flex items-center gap-2'>
            <img src={logo} alt='topmind logo' className='w-10 h-10' />
            <span className='text-lg font-primary font-bold'>Topmind Care</span>
          </a>

          {/* Nav Items */}
          <div className='hidden md:flex items-center gap-8 font-bold font-primary'>
            <ul className='flex items-center gap-6 text-sm  text-violet'>
              {navItems.map((item, key) => (
                <li key={key}>
                  <a
                    href={item.href}
                    className='hover:text-violet-800 transition-colors'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <BtnLink
              label='Start Free'
              href='#cta'
              className='bg-violet hover:bg-violet-800 text-white px-5 py-2 rounded-xl shadow-md transition'
            />
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
