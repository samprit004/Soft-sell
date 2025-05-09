import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send } from 'lucide-react'

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
}

export default function ContactFormSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', licenseType: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' })
    }
  }

  return (
    <motion.div
      ref={ref}
      className="bg-white p-8 rounded-xl shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="mb-4">We've received your message and will get back to you within 24 hours.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-green-700 hover:text-green-800 font-medium underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'company', 'licenseType', 'message'].map((field, i) => (
            <motion.div
              key={field}
              custom={i}
              variants={inputVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {field !== 'message' && field !== 'licenseType' && (
                <>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-2">
                    {field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Company Name'} *
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === 'name' ? 'John Smith' : field === 'email' ? 'you@company.com' : 'Your Company'}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors[field] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300'
                    }`}
                  />
                  {errors[field] && <p className="mt-2 text-sm text-red-600">{errors[field]}</p>}
                </>
              )}

              {field === 'licenseType' && (
                <>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 mb-2">License Type *</label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.licenseType ? 'border-red-500 focus:ring-red-200' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select license type</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Adobe">Adobe</option>
                    <option value="Autodesk">Autodesk</option>
                    <option value="Oracle">Oracle</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.licenseType && <p className="mt-2 text-sm text-red-600">{errors.licenseType}</p>}
                </>
              )}

              {field === 'message' && (
                <>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Tell us about your licensing needs..."
                  ></textarea>
                </>
              )}
            </motion.div>
          ))}

          <motion.div
            custom={5}
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:shadow-md transition-all flex items-center justify-center ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </motion.div>
        </form>
      )}
    </motion.div>
  )
}
