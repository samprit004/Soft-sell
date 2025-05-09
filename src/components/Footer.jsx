import { motion } from 'framer-motion'
import { 
  Package, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight
} from 'lucide-react'

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SoftSell
              </span>
            </div>
            <p className="text-gray-400 text-lg">
              Maximizing value from unused software assets since 2020.
            </p>
            <div className="flex space-x-5">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="group-hover:text-indigo-400">{link.name}</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Our Services</h3>
            <ul className="space-y-4">
              {[
                'License Valuation',
                'License Resale',
                'Volume Licensing',
                'License Auditing',
                'Compliance Consulting'
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="flex items-center text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="group-hover:text-indigo-400">{service}</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-5">
              <motion.div 
                className="flex items-start space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-indigo-600 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  123 Business Ave, Suite 500<br />
                  San Francisco, CA 94107
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-indigo-600 p-2 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="mailto:info@softsell.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@softsell.com
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-indigo-600 p-2 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="tel:+18005551234" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (800) 555-1234
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright and Back to Top */}
        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} SoftSell, Inc. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-indigo-400 transition-colors group"
            whileHover={{ y: -3 }}
          >
            Back to top
            <svg 
              className="ml-2 h-5 w-5 group-hover:text-indigo-400 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}