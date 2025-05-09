import { motion } from 'framer-motion'
import ContactDetails from './ContactDetails'
import QuickSupport from './QuickSupport'
import ContactFormSection from './ContactFormSection'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about selling your licenses? Get in touch with our experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactDetails />
            <QuickSupport />
          </div>
          <ContactFormSection />
        </div>
      </div>
    </section>
  )
}
