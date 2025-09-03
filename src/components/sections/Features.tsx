import Pricing from './Pricing';

type FeatureRow = {
  feature: string;
  mindery: string;
  other: string;
};

const features: FeatureRow[] = [
  {
    feature: 'Child-Friendly Guided Meditations',
    mindery: 'Story-based, fun & short',
    other: 'Generic adult content',
  },
  {
    feature: 'Safe & Ad-Free Environment',
    mindery: '100% secure for kids',
    other: 'Ads & distractions',
  },
  {
    feature: 'Age-Specific Programs',
    mindery: 'Tailored for 4–14',
    other: 'One-size-fits-all',
  },
  {
    feature: 'Parent & Teacher Support',
    mindery: 'Guides, printables, progress insights',
    other: 'Limited or none',
  },
];

const Features = () => {
  return (
    <>
      <section id='features' className='w-full py-16'>
        <h2 className='text-3xl sm:text-4xl font-bold font-primary mb-10'>
          Why Choose Mindery Kids Over Others?
        </h2>
        <div className='overflow-x-auto shadow-md font-primary'>
          <table className='w-full border-collapse text-left text-sm sm:text-sm md:text-base rounded-lg'>
            {/* Head */}
            <thead>
              <tr className='bg-violet-50 border-b border-gray-300 text-center'>
                <th className='py-4 px-6 text-violet'>Feature</th>
                <th className='py-4 px-6 text-violet border-l border-r border-gray-300'>
                  Mindery Kids
                </th>
                <th className='py-4 px-6 text-violet'>Other Apps</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((item, key) => (
                <tr
                  key={key}
                  className='border-b border-gray-300 last:border-none text-center'
                >
                  {/* Features */}
                  <td className=' px-6 py-2 font-medium text-gray-800'>
                    {item.feature}
                  </td>
                  {/* Mindery */}
                  <td className=' px-6 py-2 border-l border-r border-gray-300'>
                    ✅{item.mindery}
                  </td>
                  {/* Other Apps */}
                  <td className=' px-6 py-2'>❌{item.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Pricing />
    </>
  );
};

export default Features;
