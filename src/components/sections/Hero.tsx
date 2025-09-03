import Badge from '../shared/Badge';
import Button from '../shared/Button';
import heroImg from '/public/assets/images/hero-img.jpg';

const features = [
  { emoji: '🧠', label: 'Improves', value: 'Focus' },
  { emoji: '😊', label: 'Reduces', value: 'Stress' },
  { emoji: '💤', label: 'Better', value: 'Sleep' },
  { emoji: '❤️', label: 'Builds', value: 'Empathy' },
];

const Hero = () => {
  return (
    <section className='relative pt-32 pb-16 md:pb-24'>
      <div className='grid md:grid-cols-2 gap-10 items-center'>
        <div className='text-center md:text-left space-y-3'>
          <Badge variant='violet'>🌈Calm Minds, Happy Hearts</Badge>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight tracking-tighter md:tracking-normal'>
            Mindfulness & Meditation for Kids (4-14)
          </h1>
          <p className='font-secondary text-gray-700 md:text-gray-600 max-w-xl mx-auto md:mx-0'>
            Fun, story-based meditations that build focus, kindness, and
            confidence. Safe, ad-free, and crafted with child-development
            experts.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-xs mx-auto sm:max-w-none sm:mx-0'>
            <Button
              onClick={() => {}}
              className='bg-violet hover:bg-violet-800 text-sm md:text-base'
            >
              Start Free Trial
            </Button>
            <Button
              onClick={() => {}}
              className='bg-green hover:bg-green-600 text-sm md:text-base'
            >
              Explore Programs
            </Button>
          </div>

          {/* Featured Cards */}
          <div className='hidden sm:grid grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto font-primary'>
            {features.map((item, key) => (
              <div
                key={key}
                className='flex items-center bg-white shadow-md rounded-xl px-4 py-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <span className='text-2xl flex-shrink-0'>{item.emoji}</span>
                <div className='flex flex-col leading-tight'>
                  <p className='text-xs font-medium text-gray-700'>
                    {item.label}
                  </p>
                  <h4 className='text-base font-bold text-gray-900'>
                    {item.value}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image + floating card */}
        <div className='relative'>
          {/* hero image */}
          <div className='w-full rounded-md overflow-hidden'>
            <img
              src={heroImg}
              alt='a meditating kid'
              className='object-cover'
            />
          </div>

          {/* Floating Cards */}
          <div className='absolute bottom-4 left-4 md:bottom-16 md:-left-6 bg-white rounded-xl shadow-2xl p-4 w-56 sm:w-60 hidden sm:block transform -rotate-6 hover:rotate-0 transition-transform duration-300'>
            <h3 className='text-sm font-semibold font-primary mb-2'>
              Today's Journey
            </h3>
            <ul className='space-y-1 text-sm text-gray-600'>
              <li>🐉 Dragon Breath (3 min)</li>
              <li>🦋 Butterfly Body Scan (5 min)</li>
              <li>🌙 Sleep Story: Star Boat (7 min)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
