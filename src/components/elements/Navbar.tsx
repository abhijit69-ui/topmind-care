import Container from '../../utils/Container';

const navItems = [
  { href: '#why', text: 'Why' },
  { href: '#programs', text: 'Programs' },
  { href: '#features', text: 'Features' },
  { href: '#for-parents', text: 'For Parents' },
  { href: '#faq', text: 'FAQ' },
];

const Navbar = () => {
  return (
    <header>
      <Container>
        <nav>
          {/* Logo */}
          <div></div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
