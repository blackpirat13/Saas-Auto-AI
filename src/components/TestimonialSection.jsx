import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    content: "SaasAuto ha transformado la forma en que manejamos nuestras operaciones comerciales. ¡La automatización con IA es increíble!",
    author: "Sara Jiménez",
    role: "CEO, TechFlow Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    content: "La integración de pagos crypto hizo que nuestras transacciones internacionales sean perfectas. ¡Altamente recomendado!",
    author: "Miguel Chen",
    role: "CFO, Global Solutions",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    content: "Su asistente virtual nos ha ahorrado incontables horas en atención al cliente. Es como tener un miembro adicional en el equipo.",
    author: "Emma Díaz",
    role: "Directora de Operaciones, StartUp Pro",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

export default function TestimonialSection() {
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
        <h2 className="text-4xl font-bold text-center mb-12">Lo Que Dicen Nuestros Usuarios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}