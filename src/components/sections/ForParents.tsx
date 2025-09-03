import BtnLink from '../shared/BtnLink';
import GradientContainer from '../shared/GradientContainer';

const ForParents = () => {
  return (
    <section id='for-parents' className='w-full py-16 font-primary'>
      <GradientContainer
        title='Parents & Teacher Hub'
        subtitle='Practical guides, printable routines, and progress insights so you can support midfulness at home and school.'
      >
        <BtnLink
          className='hover:bg-violet-50 border border-gray-300 font-black text-violet'
          href='/'
          label='📩 Download Starter Kit (PDF)'
        />
        <BtnLink
          className='hover:bg-violet-50 border border-gray-300 font-black text-violet'
          href='/'
          label='🗓️ &-Day Calm Plan'
        />
        <BtnLink
          className='hover:bg-violet-50 border border-gray-300 font-black text-violet'
          href='/'
          label='🏫 Classroom Pack'
        />
      </GradientContainer>
    </section>
  );
};

export default ForParents;
