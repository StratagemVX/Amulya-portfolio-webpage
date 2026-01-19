import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Languages } from 'lucide-react';

const languages = [
  { name: 'English', level: 'Fluent', percentage: 90 },
  { name: 'Kannada', level: 'Native', percentage: 100 },
];

const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimate(true), 300);
    }
  }, [isInView]);

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Communication</span>
          <h2 className="section-title mt-2">
            <span className="gradient-text">Languages</span>
          </h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-semibold">Spoken Languages</span>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-primary">{lang.level}</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: animate ? `${lang.percentage}%` : 0 }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
