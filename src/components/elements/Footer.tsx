import Container from '../../utils/Container';
import logo from '/assets/logo-tm.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-6 py-8 font-primary text-xs'>
          {/* Left side: logo + tagline */}
          <div className='flex flex-col gap-2 max-w-sm'>
            <div className='flex items-center gap-2'>
              <img src={logo} alt='Topmind Care Logo' className='w-10 h-10' />
              <span className=' text-lg font-bold'>Topmind Care</span>
            </div>
            <p className='text-gray-500 font-semibold'>
              Mindfulness for growing minds. © 2025 Mindery Kids.
            </p>
          </div>

          {/* Right side: links */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-12'>
            {/* Contact */}
            <div className='font-primary'>
              <h4 className='font-semibold text-gray-800 '>Contact</h4>
              <div className='flex gap-4 font-bold'>
                <a href='#' className='text-violet hover:underline'>
                  Instagram
                </a>
                <a href='#' className='text-violet hover:underline'>
                  YouTube
                </a>
                <a href='#' className='text-violet hover:underline'>
                  X
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className='font-primary'>
              <h4 className='font-semibold text-gray-800 '>Legal</h4>
              <div className='flex gap-4 font-bold'>
                <a href='#' className='text-violet hover:underline'>
                  Privacy
                </a>
                <a href='#' className='text-violet hover:underline'>
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
