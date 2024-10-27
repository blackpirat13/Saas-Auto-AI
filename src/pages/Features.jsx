import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CpuChipIcon,
  CurrencyDollarIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Advanced AI Modules',
    description: 'Leverage state-of-the-art AI models for intelligent automation and decision-making.',
    icon: CpuChipIcon,
  },
  {
    title: 'Secure Crypto Payments',
    description: 'Process payments globally with blockchain technology and multiple cryptocurrency options.',
    icon: CurrencyDollarIcon,
  },
  {
    title: '24/7 Virtual Assistant',
    description: 'AI-powered support that handles customer inquiries and routine tasks automatically.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Real-time Analytics',
    description: 'Comprehensive insights and monitoring of all your business operations.',
    icon: ChartBarIcon,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security measures to protect your data.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cloud Integration',
    description: 'Seamless integration with major cloud providers and services.',
    icon: CloudArrowUpIcon,
  },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Powerful Features for Modern Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Everything you need to automate and scale your business operations
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}