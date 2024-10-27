import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AppInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">About SaasAuto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What is SaasAuto?</h3>
              <p className="text-gray-300">
                SaasAuto is an all-in-one business automation platform that combines AI technology, blockchain payments, and cloud resource management. Our platform helps businesses streamline operations, reduce costs, and improve efficiency through intelligent automation.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Reduce operational costs by up to 60%</li>
                <li>Automate customer support with AI</li>
                <li>Process global payments instantly</li>
                <li>Optimize resource usage in real-time</li>
                <li>Scale operations without adding overhead</li>
                <li>Enterprise-grade security and compliance</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Upcoming Features</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400">Q2 2024</h4>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    <li>• Advanced AI model marketplace</li>
                    <li>• Multi-chain cryptocurrency support</li>
                    <li>• Enhanced analytics dashboard</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400">Q3 2024</h4>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    <li>• Custom AI model training</li>
                    <li>• Smart contract automation</li>
                    <li>• Advanced API integrations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400">Q4 2024</h4>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    <li>• AI-powered predictive analytics</li>
                    <li>• Cross-platform synchronization</li>
                    <li>• Enterprise collaboration tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}