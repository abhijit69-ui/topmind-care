import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What ages is this for?',
    answer: 'Mindery Kids is designed for children aged 4–14.',
  },
  {
    question: 'How long are the sessions?',
    answer:
      'Sessions are typically 5–10 minutes, perfect for short attention spans.',
  },
  {
    question: 'Is it safe and ad-free?',
    answer:
      'Yes. We designed this for children. No external ads, clear privacy options, and parent controls.',
  },
  {
    question: 'Can schools use it?',
    answer:
      'Absolutely! We provide classroom-friendly packs and resources for teachers.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='w-full py-16 font-primary'>
      <h2 className='text-3xl sm:text-4xl font-bold mb-8'>
        Frequently Asked Questions
      </h2>

      <div className='rounded-2xl border border-gray-200 divide-y divide-gray-200 shadow-sm'>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              {/* Question */}
              <button
                className='cursor-pointer w-full text-left px-6 py-4 font-bold text-gray-800 hover:bg-gray-50 focus:outline-none flex justify-between items-center'
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {isOpen ? (
                  <ChevronUp className='w-5 h-5 text-gray-500' />
                ) : (
                  <ChevronDown className='w-5 h-5 text-gray-500' />
                )}
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key='content'
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-4 text-gray-600 text-sm sm:text-base'>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
