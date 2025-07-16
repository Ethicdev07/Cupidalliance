import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Founder at TechStart',
      content: 'Found my perfect match within a week! The platform is incredibly intuitive and the matches were spot on.',
      rating: 5
    },
    {
      name: 'Michael Ogundipe',
      role: 'Marketing Director',
      content: 'As someone skeptical about online matchmaking, I was blown away by the quality of connections I made.',
      rating: 4
    },
    {
      name: 'Tolu Akinwale',
      role: 'Graphic Designer',
      content: 'The managements really understands what I was looking for. Met my partner after just 3 matches!',
      rating: 5
    },
    {
      name: 'David Nelson',
      role: 'Software Engineer',
      content: 'Never thought I would find someone who shares my love for coding and hiking. Perfect match!',
      rating: 4
    },
    {
      name: 'Abdulhamid Olawale',
      role: 'Financial Analyst',
      content: 'From our first date, we clicked. Now planning our future together thanks to this platform.',
      rating: 5
    },
    {
      name: 'Kenneth Agbor',
      role: 'Realator',
      content: 'Quality over quantity - that what I got. Fewer but much better matches than other services.',
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]]
    : [
        testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
      ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our members have to say about their experience.
          </p>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.name}-${index}`}
                {...testimonial}
                active={isMobile || index === 1}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition z-10"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition z-10"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6 text-purple-600" />
          </button>
          
          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;