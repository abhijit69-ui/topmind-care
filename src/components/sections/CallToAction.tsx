import BtnLink from '../shared/BtnLink';
import GradientContainer from '../shared/GradientContainer';

const CallToAction = () => {
  return (
    <section className='w-full py-16 font-primary'>
      <GradientContainer
        title="Start Your Child's Mindfulness Journey"
        subtitle='Try it free. Build calm, focus, and kindness&mdash;one small practice a day.'
      >
        <BtnLink
          className='text-white font-semibold bg-violet hover:bg-violet-800 text-sm md:text-base'
          href='/'
          label='Create Account'
        />
        <BtnLink
          className='text-white font-semibold bg-green hover:bg-green-600 text-sm md:text-base'
          href='/'
          label='Download App'
        />
      </GradientContainer>
    </section>
  );
};

export default CallToAction;
