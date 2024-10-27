import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  CurrencyDollarIcon, 
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Módulos de IA',
    description: 'Aprovecha modelos de IA potentes para automatización y toma de decisiones',
    icon: CpuChipIcon,
  },
  {
    title: 'Pagos Crypto',
    description: 'Procesamiento de pagos seguro basado en blockchain',
    icon: CurrencyDollarIcon,
  },
  {
    title: 'Asistente Virtual',
    description: 'Soporte 24/7 impulsado por IA para tus necesidades empresariales',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Analítica',
    description: 'Insights en tiempo real y optimización de recursos',
    icon: ChartBarIcon,
  },
];

export default function FeatureGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Características Poderosas</h2>
        <p className="text-xl text-gray-400">Todo lo que necesitas para automatizar tu negocio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}