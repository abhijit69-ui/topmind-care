import Card from '../shared/Card';

type ProgramFeature = {
  title: string;
  description: string;
};

const features: ProgramFeature[] = [
  {
    title: 'Ad-Free & Safe',
    description:
      'Child-first design with privacy controls and no external ads.',
  },
  {
    title: 'Rewards that Motivate',
    description:
      'Stars, badges, and gentle streaks encourage healthy habits—no pressure.',
  },
  {
    title: 'Offline Access',
    description: 'Download favorite sessions for calm on the go.',
  },
  {
    title: 'Sleep Mode',
    description:
      'Fade-out music and dim visuals help kids drift off peacefully.',
  },
  {
    title: 'Classroom Friendly',
    description:
      'Teacher packs with 5-minute start-of-class resets and posters.',
  },
  {
    title: 'Multi-Child Profiles',
    description: 'Personalized tracks for each child in the family.',
  },
];

const ProgramCards = () => {
  return (
    <section className='w-full py-12'>
      <h2 className='text-3xl sm:text-4xl font-primary font-bold mb-10'>
        Built for Kids, Loved by Parents
      </h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature, idx) => (
          <Card
            key={idx}
            title={feature.title}
            description={feature.description}
            className='rounded-xl border !bg-gray-50 border-gray-200 p-6 shadow-sm'
          />
        ))}
      </div>
    </section>
  );
};

export default ProgramCards;
