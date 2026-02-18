import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Palette, Code, Users } from 'lucide-react';

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
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-32 bg-[#f4f1e8]"
    >
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <div ref={ref} className="space-y-20">
          {/* Cabeçalho e texto centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm mb-6 text-[#6b6762]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              → Sobre Mim
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-[4rem] md:text-[5rem] leading-[0.9] mb-12 font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Criando
              <br />
              <span className="text-[#c4b5e6]">experiências</span>
              <br />
              digitais
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <p
                className="text-lg text-[#1a1a1a] leading-loose"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Olá, me chamo Raíssa Barata. Sou Product Designer e curso Análise e Desenvolvimento de Sistemas, com formação em UX/UI Design.
                <br /><br />
                A proximidade com o desenvolvimento me permite projetar interfaces considerando a viabilidade técnica e a lógica dos sistemas desde as etapas iniciais do produto.
                <br /><br />
                Busco atuar como ponte entre design e desenvolvimento, transformando requisitos complexos em soluções funcionais, claras e possíveis de implementar.
              </p>
            </motion.div>
          </motion.div>

          {/* Cards de Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-10 border-4 border-[#1a1a1a] hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300"
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
      </div>
    </section>
  );
}