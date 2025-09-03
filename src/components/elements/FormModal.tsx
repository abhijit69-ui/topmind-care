import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '../shared/Button';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: '',
  });

  // Lock / unlock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // backend integration goes here (API call)
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className='fixed h-screen inset-0 bg-black/40 backdrop-blur-sm z-40'
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className='font-primary fixed inset-0 flex items-center justify-center z-50 p-4'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className='relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8'>
              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-3 right-3  text-gray-500 hover:text-gray-800 transition'
              >
                <X className='w-6 h-6' />
              </button>

              {/* Title */}
              <h2 className='text-2xl font-bold font-primary mb-2 text-center'>
                Start Your Free Trial
              </h2>
              <p className='text-sm text-gray-600 mb-6 text-center'>
                Fill in your details and we’ll get you started right away.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet focus:outline-none'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet focus:outline-none'
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet focus:outline-none'
                />
                <input
                  type='text'
                  name='class'
                  placeholder='Class (e.g. Grade 4)'
                  value={formData.class}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet focus:outline-none'
                />
                <textarea
                  name='message'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet focus:outline-none'
                />

                <Button
                  type='submit'
                  className='w-full py-3 bg-violet text-white font-semibold rounded-lg hover:bg-violet-800 transition'
                >
                  Submit
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FormModal;
