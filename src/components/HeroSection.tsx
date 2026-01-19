import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-midnight-light z-0" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float-delayed" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium mb-4"
            >
              ನಮಸ್ಕಾರ! Welcome to my world of AI.
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Building{' '}
              <span className="gradient-text">Intelligent Systems</span>{' '}
              That Think Ahead.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl mb-8"
            >
              BCA Student | AI & ML Intern | Data-Driven Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                View Projects
                <ArrowDown size={18} />
              </a>
              <a 
                href="/ATS Friendly Resume Amulya MG.pdf" 
                download="ATS Friendly Resume Amulya MG.pdf"
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl transform scale-110" />
              
              <div className="glass-card-lavender p-6 relative gradient-border">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden">
                  {!photoFailed ? (
                    <img
                      src="/profile.png"
                      alt="Amulya M.G"
                      className="w-full h-full object-cover object-top"
                      onError={() => setPhotoFailed(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="font-display font-bold text-5xl text-muted-foreground">AM</span>
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h2 className="font-display font-bold text-2xl mb-2">Amulya M.G</h2>
                  <p className="text-primary font-medium mb-3">AI & ML Developer</p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span className="text-sm">Mysuru, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
