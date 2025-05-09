import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ChatBox from './ChatBox'
import { MessageCircle } from 'lucide-react'

const QuickSupport = () => {
  const [chatOpen, setChatOpen] = useState(false)

  const toggleChat = () => {
    setChatOpen(!chatOpen)
  }

  return (
    <div className="relative">
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!chatOpen && (
          <motion.button
            onClick={toggleChat}
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-8 w-8 text-white" />
            <motion.span 
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              1
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Inline Support Panel */}
      <motion.div 
        className="hidden md:block bg-white p-6 rounded-xl shadow-md border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Quick Support</h2>
            <p className="mt-2 text-gray-600">
              Our AI assistant is available 24/7 to answer your questions about license resale.
            </p>
            <motion.button
              onClick={toggleChat}
              className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:shadow-md transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Live Chat
              <svg className="ml-2 -mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ChatBox appears when chatOpen is true */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-8 right-8 z-[100] w-full max-w-md max-h-screen overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <ChatBox onClose={toggleChat} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuickSupport
