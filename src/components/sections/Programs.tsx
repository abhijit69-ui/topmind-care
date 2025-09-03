import Badge from '../shared/Badge';
import ProgramCards from './ProgramCards';
import program1 from '/assets/images/program1.webp';
import program2 from '/assets/images/program2.webp';
import program3 from '/assets/images/program3.png';
import { motion } from 'motion/react';

type Program = {
  title: string;
  age: string;
  description: string;
  image: string;
  badges: string[];
  flip?: boolean; // optional → if true, flips image & text on desktop
};

const programs: Program[] = [
  {
    title: 'Little Explorers',
    age: '4-6',
    description:
      'Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.',
    image: program1,
    badges: ['🧸 Cozy Corner', '🎵 Calm Music', '🏅 Sticker Badges'],
  },
  {
    title: 'Brave Thinkers',
    age: '7-10',
    description:
      'Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.',
    image: program2,
    badges: ['⏱ Focus Timer', '✨ Gratitude Notes', '🔥 Streak Rewards'],
    flip: true, // will flip layout (image right, text left)
  },
  {
    title: 'Calm & Curious',
    age: '11-14',
    description:
      'Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.',
    image: program3,
    badges: ['🧭 Mindset Minis', '🌙 Sleep Stories', '🎯 Goal Cards'],
  },
];

const Programs = () => {
  return (
    <>
      <section id='programs' className='py-16'>
        <h2 className='text-3xl md:text-4xl font-bold font-primary text-gray-900'>
          Programs for Every Age
        </h2>
        <p className='mt-2 text-gray-600'>
          Pick a track or mix and match. Each program grows with your child.
        </p>

        <div className='mt-12 space-y-16'>
          {/* Program 1 */}
          {programs.map((program, key) => (
            <div key={key} className='grid md:grid-cols-2 gap-10 items-center'>
              {/* image */}
              <div
                className={`w-full rounded-2xl overflow-hidden shadow-md ${
                  program.flip ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  src={program.image}
                  alt='black girl chilling by balcony in peace'
                  className='w-full object-cover'
                />
              </div>
              {/* content */}
              <div className={`${program.flip ? 'md:order-1' : 'md:order-2'}`}>
                <h3 className='text-xl font-bold font-primary text-gray-900'>
                  {program.title} ({program.age})
                </h3>
                <p className='mt-3 text-gray-600'>{program.description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {program.badges.map((badge, key) => (
                    <Badge key={key} variant='gray'>
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProgramCards />
    </>
  );
};

export default Programs;
