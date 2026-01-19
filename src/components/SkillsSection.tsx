import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Brain, 
  Globe, 
  Database as DatabaseIcon, 
  Wrench,
  BarChart3,
  FileCode,
  Server,
  GitBranch
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & ML',
    icon: Brain,
    skills: [
      { name: 'Data Preprocessing', description: 'Cleaning and transforming raw data for ML models' },
      { name: 'Predictive Modeling', description: 'Building models to forecast future outcomes' },
      { name: 'Python Libraries', description: 'NumPy, Pandas, Scikit-learn, TensorFlow' },
    ],
  },
  {
    title: 'Web Dev',
    icon: Globe,
    skills: [
      { name: 'HTML5', description: 'Semantic markup and modern web structure' },
      { name: 'CSS3', description: 'Responsive design and animations' },
      { name: 'JavaScript', description: 'Interactive web applications' },
    ],
  },
  {
    title: 'Database',
    icon: DatabaseIcon,
    skills: [
      { name: 'SQL', description: 'Relational database queries and optimization' },
      { name: 'MongoDB', description: 'NoSQL document-based database' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'VS Code', description: 'Primary development environment' },
      { name: 'Git', description: 'Version control and collaboration' },
      { name: 'Jupyter', description: 'Interactive data science notebooks' },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">What I work with</span>
          <h2 className="section-title mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-card">
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 right-0 top-full mt-2 z-20 glass-card-lavender p-3 text-xs text-muted-foreground"
                      >
                        {skill.description}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
