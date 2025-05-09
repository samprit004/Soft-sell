import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.98
  }
}

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-white" />
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 " />
          <div className="absolute top-1/3 -right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70  animation-delay-2000" />
          <div className="absolute top-1/2 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70  animation-delay-4000" />
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        className="text-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Sell Your Unused Software Licenses</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-3 bg-indigo-100 z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </span>
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            The Smart Way
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Maximize your IT budget by converting unused software licenses into cash with our secure, fast, and hassle-free platform.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <motion.button 
            className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg flex items-center justify-center font-medium group overflow-hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 flex items-center">
              Sell My Licenses <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button 
            className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 font-medium transition-all"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          
          <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[
              "https://cdn.iconscout.com/icon/free/png-256/microsoft-28-761688.png",
              "https://cdn.iconscout.com/icon/free/png-256/spotify-11-432546.png",
              "https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png"
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Company logo ${index + 1}`}
                className="h-9 w-9 rounded-full border-2 border-gray-300 object-cover bg-white shadow-sm"
              />
            ))}
          </div>
          <span className="text-sm text-gray-700 font-medium">Trusted by 500+ companies</span>
        </div>
          

          <div className="hidden sm:block h-4 w-px bg-gray-300" />
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Secure & compliant transactions</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}