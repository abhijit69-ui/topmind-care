import Badge from '../shared/Badge';
import Card from '../shared/Card';

const Why = () => {
  const features = [
    {
      badge: 'Story Meditation',
      title: 'Guided Adventures',
      desc: 'Short, age-give journeys that help kids calm their bodies and name their feelings.',
    },
    {
      badge: 'Anytime Calm',
      title: 'Tools for Big Feelings',
      desc: "Quick 'reset' audios for anger, worry, pre-exam jitters, and bedtime battles.",
    },
    {
      badge: 'Parent Hub',
      title: 'Guides & Routines',
      desc: 'Weekly tips, printable charts, and simple routines you can use at home or school.',
    },
  ];

  return (
    <section id='why' className='py-16'>
      <div className='text-left max-w-xl mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold font-primary text-gray-900'>
          Why Mindery Kids?
        </h2>
        <p className='mt-4 text-gray-600 font-secondary'>
          Children learn best through play and stories. Our sessions blend
          gentle breathing, guided imagery, and music to make mindfulness
          enjoyable and effective.
        </p>
      </div>

      {/* Features Grid */}
      <div className='grid md:grid-cols-3 gap-6'>
        {features.map((item, key) => (
          <Card
            key={key}
            badge={<Badge variant='green'>{item.badge}</Badge>}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Why;
