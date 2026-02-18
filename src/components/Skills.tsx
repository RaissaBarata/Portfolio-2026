import { motion } from 'motion/react';
import { Palette, Code, Lightbulb, Users } from 'lucide-react';
import { useInView } from './hooks/useInView';

const skills = [
  {
    icon: Palette,
    title: 'Product Design',
    description: 'Criação de experiências visuais impactantes com foco em usabilidade e estética.',
    color: '#c4b5e6',
  },
  {
    icon: Users,
    title: 'UX/UI Design',
    description: 'Design centrado no usuário com pesquisa, wireframes, protótipos e testes.',
    color: '#9b87d9',
  },
  {
    icon: Code,
    title: 'Front-End Development',
    description: 'Desenvolvimento com React, TypeScript, Tailwind CSS e animações interativas.',
    color: '#e6dff7',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'Resolução criativa de problemas complexos com soluções inovadoras.',
    color: '#b8a3e0',
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="min-h-screen flex items-center py-32 bg-[#fffef9]">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white p-10 border-4 border-[#1a1a1a] hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300 ${
                  index === 1 ? 'md:mt-16' : ''
                } ${index === 2 ? 'md:mt-8' : ''}`}
                style={{
                  boxShadow: `8px 8px 0px ${skill.color}`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-12 h-12 mb-6 stroke-[2]" style={{ color: skill.color }} />
                </motion.div>
                <h3 className="text-2xl mb-4 font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  {skill.title}
                </h3>
                <p className="text-[#6b6762] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}