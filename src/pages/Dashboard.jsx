import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import useAuthStore from '../stores/authStore';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-xl p-6"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  </motion.div>
);

const ChartCard = ({ title, children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-xl p-6"
  >
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </motion.div>
);

export default function Dashboard() {
  const { user, signOut } = useAuthStore();

  const stats = [
    {
      title: "Módulos de IA Activos",
      value: "8",
      icon: CpuChipIcon,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Transacciones Mensuales",
      value: "2.4k",
      icon: CurrencyDollarIcon,
      color: "bg-green-500/10 text-green-500"
    },
    {
      title: "Usuarios Activos",
      value: "1.2k",
      icon: UserGroupIcon,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Tasa de Conversión",
      value: "24%",
      icon: ChartBarIcon,
      color: "bg-yellow-500/10 text-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Panel de Control</h1>
            <p className="text-gray-400 mt-1">
              Bienvenido, {user?.email}
            </p>
          </div>
          <button
            onClick={signOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Uso de Recursos">
            <div className="h-64 flex items-center justify-center text-gray-400">
              Gráfico de uso de recursos
            </div>
          </ChartCard>

          <ChartCard title="Actividad Reciente">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <p className="text-gray-400">Actividad {i}</p>
                  </div>
                  <p className="text-sm text-gray-500">Hace {i}h</p>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}