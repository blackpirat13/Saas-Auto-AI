import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import AppInfo from '../components/AppInfo';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <FeatureGrid />
      </motion.div>

      <AppInfo />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}