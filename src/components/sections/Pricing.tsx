import { pricingPlans } from '../../utils/pricingplan';
import Button from '../shared/Button';
import Card from '../shared/Card';

const Pricing = () => {
  return (
    <section className='w-full py-10 bg-gradient-to-b from-violet-50 via-white to-violet-50 rounded-lg'>
      <div className='text-center mb-14 font-primary'>
        <h2 className='text-3xl sm:text-4xl font-bold'>Choose Your Plan</h2>
        <p className='text-gray-900 font-medium mt-4 text-xl'>
          Start free, cancel anytime. No hidden charges.
        </p>
      </div>

      {/* Cards grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-primary text-center'>
        {pricingPlans.map((item, key) => (
          <Card key={key} title={item.title} description={item.subtitle}>
            <h3 className='text-4xl font-extrabold text-violet py-5'>
              {item.price}
            </h3>

            <ul className='space-y-2 text-gray-900 text-lg font-semibold'>
              {item.features.map((f, key) => (
                <li key={key} className='flex items-center gap-2'>
                  <span>✅</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8'>
              <Button className='bg-violet hover:bg-violet-800 text-sm md:text-base'>
                {item.btnLabel}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
