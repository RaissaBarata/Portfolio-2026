import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { useInView } from './hooks/useInView';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:raissa@example.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/raissabarata/' },
  { icon: Github, label: 'Github', href: 'https://github.com/RaissaBarata' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="min-h-screen flex items-center py-32 bg-[#fffef9] relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full border-[60px] border-[#c4b5e6]"
      />

      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-sm mb-6 text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
            → Vamos conversar
          </p>
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] mb-12 font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Pronta para<br/>o próximo<br/><span className="text-[#c4b5e6]">projeto</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1a1a1a] max-w-2xl mx-auto mb-16 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Estou sempre aberta a novos projetos e oportunidades. 
            Entre em contato e vamos criar algo incrível juntos.
          </motion.p>

          {/* Barra decorativa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-64 h-1 bg-[#1a1a1a] mx-auto mb-16"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 mb-20 flex-wrap"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-16 h-16 border-4 border-[#1a1a1a] flex items-center justify-center hover:bg-[#c4b5e6] hover:border-[#c4b5e6] transition-all duration-300 group"
                  style={{
                    boxShadow: '6px 6px 0px #1a1a1a',
                  }}
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 stroke-[2] group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="pt-12 border-t-2 border-[#1a1a1a]"
          >
            <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-display)' }}>
              © 2026 Raíssa Barata — Designed & Developed with ♥
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}