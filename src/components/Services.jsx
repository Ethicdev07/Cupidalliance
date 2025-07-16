import { motion } from 'framer-motion';
import { FaHeart, FaRing, FaHandHoldingHeart } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "For Singles",
      icon: <FaHeart className="text-4xl text-pink-500" />,
      benefits: [
        "Personalized matchmaking",
        "Clarity coaching calls",
        "Date coaching & preparation",
        "Relationship readiness assessment"
      ],
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      title: "For Married Couples",
      icon: <FaRing className="text-4xl text-purple-500" />,
      benefits: [
        "Pre/post marital coaching",
        "Couple enrichment sessions",
        "Recommended books & resources",
        "Conflict resolution strategies"
      ],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "For Divorcees",
      icon: <FaHandHoldingHeart className="text-4xl text-blue-500" />,
      benefits: [
        "Post-divorce matchmaking",
        "Healing clarity calls",
        "Re-entering dating coaching",
        "Emotional readiness evaluation"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored support for every relationship stage
          </p>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-xl shadow-lg border-t-4 ${service.borderColor} ${service.bgColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold border border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;