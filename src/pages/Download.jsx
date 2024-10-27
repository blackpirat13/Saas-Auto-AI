import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function Download() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Download SaasAuto</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started with SaasAuto on your preferred platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-8 text-center"
          >
            <DevicePhoneMobileIcon className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Mobile App</h2>
            <p className="text-gray-400 mb-8">
              Access SaasAuto on the go with our mobile application
            </p>
            <div className="space-y-4">
              <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download for iOS
              </button>
              <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download for Android
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-8 text-center"
          >
            <ComputerDesktopIcon className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Desktop App</h2>
            <p className="text-gray-400 mb-8">
              Experience the full power of SaasAuto on your desktop
            </p>
            <div className="space-y-4">
              <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download for Windows
              </button>
              <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download for macOS
              </button>
              <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Download for Linux
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}