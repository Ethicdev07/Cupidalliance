import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, content, active = true, rating = 5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0.6, scale: active ? 1.05 : 0.95 }}
      transition={{ duration: 0.3 }}
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-300 h-full ${
        active ? 'border-2 border-purple-500' : 'border border-gray-200'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
          <span className="text-purple-600 font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">"{content}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;