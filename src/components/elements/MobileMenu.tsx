import { useState } from 'react';
import { navItems } from '../shared/NavItems';
import BtnLink from '../shared/BtnLink';
import NavBtn from './NavBtn';
import { AnimatePresence, motion } from 'motion/react';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='md:hidden relative block'>
      <NavBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className='fixed inset-0 bg-black/30 backdrop-blur-sm z-10'
            />

            {/* Menu */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className='absolute -top-2 -right-2 w-64 min-h-full rounded-md bg-neutral-50 p-8 z-10 flex flex-col origin-top-right'
            >
              <ul className='flex flex-col gap-2 flex-1 mb-2'>
                {navItems.map((item, key) => (
                  <li
                    key={key}
                    className='p-1.5 text-xl font-bold font-primary text-violet hover:text-violet/70'
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>

              <BtnLink
                label='Start Free'
                href='#cta'
                className='bg-violet hover:bg-violet-800 font-bold text-white text-center px-5 py-2 rounded-xl shadow-md transition'
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
