import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Database, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Brain, label: 'AI & ML' },
    { icon: Code, label: 'Python' },
    { icon: Database, label: 'MongoDB' },
    { icon: Sparkles, label: 'Predictive Modeling' },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              Get to know me
            </motion.span>
            <h2 className="section-title mt-2">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="glass-card p-8 md:p-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              I am <span className="text-foreground font-semibold">Amulya M.G</span>, a BCA student 
              passionate about <span className="text-primary">Artificial Intelligence</span> &{' '}
              <span className="text-primary">Machine Learning</span>. I specialize in developing 
              real-world solutions using Python, MongoDB, and predictive modeling. My goal is to 
              build scalable intelligent systems that save lives and simplify human decisions.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="glass-card-lavender p-4 text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
