import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Início', 'Projetos', 'Sobre', 'Contato'];

  const scrollToSection = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      'Início': 'home',
      'Projetos': 'projects',
      'Sobre': 'about',
      'Contato': 'contact'
    };
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fffef9]/95 backdrop-blur-md border-b border-[#1a1a1a]/8' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex items-center justify-end w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-1"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="px-4 py-2 text-sm font-medium hover:bg-[#c4b5e6] hover:text-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}