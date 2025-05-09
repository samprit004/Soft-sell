import { Shield, Zap, Clock, Percent } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Transactions",
      description: "Bank-level security for all your data and transactions.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Processing",
      description: "Get offers within hours, not weeks like traditional brokers.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Our team is always available to answer your questions.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: <Percent className="h-8 w-8" />,
      title: "Competitive Rates",
      description: "We offer the best rates in the industry with no hidden fees.",
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SoftSell</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart in the software license resale market
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureVariants}
              whileHover="hover"
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-full ${feature.color}`}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <div className="mt-auto w-full">
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${feature.color.replace('bg-', 'bg-opacity-50 bg-')}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
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
              <Percent className="h-4 w-4" />
            </span>
            <span className="text-indigo-800 font-medium">
              Average customer saves 25-40% compared to other resellers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}