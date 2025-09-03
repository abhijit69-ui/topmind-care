import Card from '../shared/Card';

type RatingData = {
  rating: number;
  quote: string;
  author: string;
};

const testimonials: RatingData[] = [
  {
    rating: 5,
    quote:
      'Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.',
    author: 'Priya, Mom of 6-year-old',
  },
  {
    rating: 5,
    quote:
      'The 5-minute ‘reset’ before homework has been a game changer for focus.',
    author: 'Ravi, Dad of 10-year-old',
  },
  {
    rating: 5,
    quote:
      'Our class uses the breathing games after lunch. Kids come back calm and ready.',
    author: 'Anika, Grade 4 Teacher',
  },
];

const Testimonial = () => {
  return (
    <section className='w-full py-16 font-primary'>
      <h2 className='text-3xl sm:text-4xl font-bold mb-8'>What Families Say</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((item, idx) => (
          <Card
            key={idx}
            className='rounded-xl border border-violet-100 font-bold !pt-1 !shadow-lg text-gray-900'
          >
            <div className='text-lg font-primary flex mb-2'>
              {'★'.repeat(item.rating)}
            </div>
            <p className='mt-1.5 text-base leading-tight font-medium'>
              "{item.quote}"
            </p>
            <p className='mt-2 text-sm'>&mdash; {item.author}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
