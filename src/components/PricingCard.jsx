import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const PricingCard = ({ title, price, period, features, popular, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className={`relative p-8 rounded-2xl shadow-lg ${popular ? 'bg-purple-600 text-white' : 'bg-white'}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full font-bold text-xs">
          POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-extrabold">${price}</span>
        <span className={`ml-1 ${popular ? 'text-purple-200' : 'text-gray-500'}`}>/{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon className={`w-5 h-5 mr-2 ${popular ? 'text-white' : 'text-purple-600'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 px-6 rounded-lg font-semibold ${
          popular
            ? 'bg-white text-purple-600 hover:bg-gray-100'
            : 'bg-purple-600 text-white hover:bg-purple-700'
        } transition duration-300`}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;