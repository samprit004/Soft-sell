import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const testimonialVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
  }
}

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Inc.",
      quote: "SoftSell helped us recover over $50,000 in unused licenses. The process was seamless and their team was incredibly professional.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "StartUp Ventures",
      quote: "As a growing company, every dollar counts. SoftSell provided us with much-needed capital from assets we didn't even know we could sell.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our customers say about their experience
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={testimonialVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-gray-200 z-0" />
                <p className="relative z-10 text-gray-600 text-lg italic mb-8 pt-8">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    className="h-12 w-12 rounded-full object-cover border-2 border-indigo-100" 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-indigo-50 rounded-full px-6 py-3">
            <span className="bg-indigo-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
            <span className="text-indigo-800 font-medium">
              Over 500 satisfied customers and counting
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}