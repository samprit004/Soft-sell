import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactDetails() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-8"
    >
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Details</h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Email Us</h4>
              <p className="text-gray-600">support@softsell.com</p>
              <p className="text-gray-600">sales@softsell.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Call Us</h4>
              <p className="text-gray-600">+1 (800) 555-1234</p>
              <p className="text-gray-600">Mon-Fri: 9am-6pm EST</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600 mr-4">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">Visit Us</h4>
              <p className="text-gray-600">123 Business Ave</p>
              <p className="text-gray-600">San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
