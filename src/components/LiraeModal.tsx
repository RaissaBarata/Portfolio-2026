import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import profileImage from 'figma:asset/117c7f19f892dadfe9b452bf44ddeaa9d7f70627.png';

interface LiraeModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    link?: string;
  } | null;
}

export function LiraeModal({ isOpen, onClose, project }: LiraeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-white overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 z-10 p-3 bg-white border-2 border-[#1a1a1a] hover:bg-[#c4b5e6] hover:border-[#c4b5e6] transition-colors group"
              style={{ boxShadow: '4px 4px 0px #1a1a1a' }}
            >
              <X className="w-6 h-6 group-hover:text-white transition-colors" />
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Hero Section */}
              <div className="min-h-screen flex items-center justify-center px-8 md:px-16 py-16 bg-gradient-to-br from-[#f4f1e8] to-[#fffef9] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#c4b5e6]/20"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#9b87d9]/20"></div>
                
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <div>
                      <p className="text-sm mb-4 text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
                        → Product Case Study
                      </p>
                      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        LIRAE
                      </h1>
                      <div className="w-24 h-1 bg-[#c4b5e6] mb-6"></div>
                      <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                        Plataforma educacional focada em criar experiências de aprendizado envolventes e acessíveis
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {['Product Design', 'UX Research', 'UI Design', 'Design System'].map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white border-2 border-[#1a1a1a] text-sm font-medium"
                          style={{ fontFamily: 'var(--font-sans)', boxShadow: '3px 3px 0px #1a1a1a' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Profile Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#c4b5e6] translate-x-4 translate-y-4"></div>
                      <img
                        src={profileImage}
                        alt="Raíssa Barata"
                        className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#1a1a1a]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <div className="px-8 md:px-16 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                      <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Visão Geral
                      </h2>
                      <div className="w-20 h-1 bg-[#c4b5e6]"></div>
                    </div>
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-lg text-[#1a1a1a] leading-loose" style={{ fontFamily: 'var(--font-sans)' }}>
                        LIRAE é uma plataforma educacional inovadora projetada para revolucionar a forma como estudantes e educadores interagem com o conteúdo de aprendizado. O projeto nasceu da necessidade de criar uma experiência mais personalizada, acessível e engajadora no contexto educacional digital.
                      </p>
                      <p className="text-lg text-[#1a1a1a] leading-loose" style={{ fontFamily: 'var(--font-sans)' }}>
                        O desafio principal era desenvolver uma interface que fosse intuitiva o suficiente para diferentes perfis de usuários, mantendo funcionalidades avançadas de personalização e acompanhamento de progresso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Challenge */}
              <div className="px-8 md:px-16 py-24 bg-[#f4f1e8]">
                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <div className="inline-block px-4 py-2 bg-[#c4b5e6] text-white mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                        01 / Desafio
                      </div>
                      <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                        Engajamento em Plataformas Educacionais
                      </h2>
                      <p className="text-lg text-[#1a1a1a] leading-loose mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                        Plataformas educacionais tradicionais enfrentam altas taxas de abandono devido a experiências genéricas que não se adaptam às necessidades individuais dos estudantes.
                      </p>
                      <p className="text-lg text-[#1a1a1a] leading-loose" style={{ fontFamily: 'var(--font-sans)' }}>
                        Os principais problemas identificados incluem navegação confusa, falta de feedback visual sobre progresso, e interface pouco motivadora para uso contínuo.
                      </p>
                    </div>
                    <div className="space-y-6">
                      {[
                        { label: 'Taxa de abandono', value: '68%', color: '#c4b5e6' },
                        { label: 'Usuários insatisfeitos com UX', value: '74%', color: '#9b87d9' },
                        { label: 'Dificuldade de navegação', value: '52%', color: '#b8a3e0' },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-6 border-4 border-[#1a1a1a]"
                          style={{ boxShadow: '8px 8px 0px ' + stat.color }}
                        >
                          <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)', color: stat.color }}>
                            {stat.value}
                          </div>
                          <div className="text-sm text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Process */}
              <div className="px-8 md:px-16 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#9b87d9] text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      02 / Pesquisa
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                      Entendendo os Usuários
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        title: 'Entrevistas',
                        description: '15 entrevistas em profundidade com estudantes e educadores para mapear dores e necessidades',
                        icon: '👥'
                      },
                      {
                        title: 'Análise Competitiva',
                        description: 'Estudo de 8 plataformas educacionais para identificar padrões e oportunidades',
                        icon: '🔍'
                      },
                      {
                        title: 'Testes de Usabilidade',
                        description: 'Sessões com 50+ usuários para validar hipóteses e protótipos',
                        icon: '🧪'
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-[#f4f1e8] p-8 border-l-4 border-[#c4b5e6]"
                      >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.title}
                        </h3>
                        <p className="text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design Process */}
              <div className="px-8 md:px-16 py-24 bg-[#c4b5e6]/10">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#b8a3e0] text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      03 / Processo
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                      Da Ideia ao Produto
                    </h2>
                  </div>

                  <div className="space-y-12">
                    {[
                      {
                        number: '01',
                        title: 'Definição de Personas',
                        description: 'Criação de 3 personas principais baseadas em pesquisa, representando estudantes, educadores e administradores.',
                        color: '#c4b5e6'
                      },
                      {
                        number: '02',
                        title: 'Arquitetura da Informação',
                        description: 'Estruturação de conteúdo e navegação para garantir acesso intuitivo às funcionalidades principais.',
                        color: '#9b87d9'
                      },
                      {
                        number: '03',
                        title: 'Wireframes & Protótipos',
                        description: 'Desenvolvimento de wireframes de baixa e alta fidelidade, testados iterativamente com usuários reais.',
                        color: '#b8a3e0'
                      },
                      {
                        number: '04',
                        title: 'Design System',
                        description: 'Criação de sistema de design escalável com componentes reutilizáveis e documentação completa.',
                        color: '#e6dff7'
                      },
                      {
                        number: '05',
                        title: 'Testes & Iterações',
                        description: 'Múltiplas rodadas de testes de usabilidade para refinar a experiência e garantir acessibilidade.',
                        color: '#ffd9a0'
                      },
                    ].map((step, index) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="grid md:grid-cols-12 gap-8 items-center"
                      >
                        <div className="md:col-span-2">
                          <div 
                            className="w-20 h-20 border-4 border-[#1a1a1a] flex items-center justify-center text-3xl font-bold"
                            style={{ fontFamily: 'var(--font-display)', backgroundColor: step.color }}
                          >
                            {step.number}
                          </div>
                        </div>
                        <div className="md:col-span-10 bg-white p-8 border-2 border-[#1a1a1a]" style={{ boxShadow: '6px 6px 0px ' + step.color }}>
                          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            {step.title}
                          </h3>
                          <p className="text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="px-8 md:px-16 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#e6dff7] text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      04 / Funcionalidades
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                      Principais Features
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        title: 'Dashboard Personalizado',
                        description: 'Interface adaptativa que se ajusta ao perfil e objetivos de cada usuário, exibindo conteúdo relevante e métricas de progresso.',
                        icon: '📊'
                      },
                      {
                        title: 'Tracking de Progresso',
                        description: 'Sistema visual de acompanhamento que motiva usuários através de gamificação e visualizações claras de conquistas.',
                        icon: '📈'
                      },
                      {
                        title: 'Biblioteca de Recursos',
                        description: 'Organização intuitiva de materiais de estudo com busca avançada e recomendações personalizadas.',
                        icon: '📚'
                      },
                      {
                        title: 'Modo Acessível',
                        description: 'Design inclusivo com suporte para leitores de tela, contraste ajustável e navegação por teclado.',
                        icon: '♿'
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#f4f1e8] p-8 border-4 border-[#1a1a1a] hover:translate-x-2 hover:translate-y-2 transition-transform duration-300"
                        style={{ boxShadow: '10px 10px 0px #c4b5e6' }}
                      >
                        <div className="text-5xl mb-6">{feature.icon}</div>
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                          {feature.title}
                        </h3>
                        <p className="text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Design System Showcase */}
              <div className="px-8 md:px-16 py-24 bg-gradient-to-br from-[#c4b5e6]/20 to-[#9b87d9]/20">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#ffd9a0] text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      05 / Design System
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                      Sistema de Design
                    </h2>
                    <p className="text-xl text-[#1a1a1a] leading-loose max-w-3xl" style={{ fontFamily: 'var(--font-sans)' }}>
                      Desenvolvimento de um design system completo e escalável, garantindo consistência visual e facilitando a manutenção futura do produto.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 border-4 border-[#1a1a1a]" style={{ boxShadow: '8px 8px 0px #c4b5e6' }}>
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Componentes
                      </h3>
                      <p className="text-[#6b6762] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                        45+ componentes reutilizáveis
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Buttons', 'Cards', 'Forms', 'Navigation', 'Modals'].map((comp) => (
                          <span key={comp} className="px-2 py-1 bg-[#f4f1e8] text-xs border border-[#1a1a1a]">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-8 border-4 border-[#1a1a1a]" style={{ boxShadow: '8px 8px 0px #9b87d9' }}>
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Paleta de Cores
                      </h3>
                      <p className="text-[#6b6762] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                        Cores acessíveis WCAG AA
                      </p>
                      <div className="flex gap-2">
                        {['#c4b5e6', '#9b87d9', '#b8a3e0', '#e6dff7', '#d4c9f0'].map((color) => (
                          <div
                            key={color}
                            className="w-10 h-10 border-2 border-[#1a1a1a]"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-8 border-4 border-[#1a1a1a]" style={{ boxShadow: '8px 8px 0px #b8a3e0' }}>
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Tipografia
                      </h3>
                      <p className="text-[#6b6762] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                        Sistema de escalas responsivas
                      </p>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Aa</div>
                        <div className="text-sm text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
                          Space Grotesk / Inter
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results & Impact */}
              <div className="px-8 md:px-16 py-24 bg-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#c4b5e6] text-[#1a1a1a] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      06 / Resultados
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                      Impacto e Resultados
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { value: '+85%', label: 'Satisfação dos usuários', color: '#c4b5e6' },
                      { value: '-62%', label: 'Taxa de abandono', color: '#9b87d9' },
                      { value: '+40%', label: 'Engajamento diário', color: '#b8a3e0' },
                      { value: '4.8/5', label: 'Avaliação média', color: '#e6dff7' },
                    ].map((result, index) => (
                      <motion.div
                        key={result.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-8 bg-white/5 border-2 border-white/20"
                      >
                        <div 
                          className="text-5xl md:text-6xl font-bold mb-4" 
                          style={{ fontFamily: 'var(--font-display)', color: result.color }}
                        >
                          {result.value}
                        </div>
                        <div className="text-sm text-white/80" style={{ fontFamily: 'var(--font-sans)' }}>
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 border-l-4 border-[#c4b5e6]">
                      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Feedback dos Usuários
                      </h3>
                      <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                        "A interface é incrivelmente intuitiva. Pela primeira vez, consigo acompanhar meu progresso de forma clara e motivadora."
                      </p>
                      <p className="text-sm text-white/60 mt-4" style={{ fontFamily: 'var(--font-sans)' }}>
                        — Estudante de UX Design
                      </p>
                    </div>

                    <div className="bg-white/5 p-8 border-l-4 border-[#9b87d9]">
                      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Impacto no Negócio
                      </h3>
                      <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                        O redesign resultou em aumento significativo de retenção e engajamento, validando as decisões de design centradas no usuário.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Learnings */}
              <div className="px-8 md:px-16 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                  <div className="mb-16">
                    <div className="inline-block px-4 py-2 bg-[#c4b5e6] text-white mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
                      07 / Aprendizados
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                      Principais Aprendizados
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {[
                      'A importância de envolver usuários reais desde as fases iniciais do projeto para validar hipóteses',
                      'Design systems bem documentados aceleram o desenvolvimento e garantem consistência',
                      'Acessibilidade não é uma feature adicional, mas parte fundamental do processo de design',
                      'Testes iterativos revelam insights que não seriam descobertos apenas com pesquisa inicial',
                      'Simplicidade e clareza são mais valiosas que complexidade visual',
                    ].map((learning, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-6 bg-[#f4f1e8] p-6 border-l-4 border-[#c4b5e6]"
                      >
                        <div 
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c4b5e6] text-white flex items-center justify-center font-bold text-sm"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {index + 1}
                        </div>
                        <p className="text-[#1a1a1a] leading-relaxed pt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                          {learning}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              {project.link && (
                <div className="px-8 md:px-16 py-24 bg-gradient-to-br from-[#c4b5e6] to-[#9b87d9] text-center">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                      Quer ver mais detalhes?
                    </h2>
                    <p className="text-xl mb-12 text-[#1a1a1a]/80" style={{ fontFamily: 'var(--font-sans)' }}>
                      Explore o case study completo no Figma com wireframes, protótipos e todo o processo de design.
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white hover:bg-white hover:text-[#1a1a1a] transition-colors font-bold border-4 border-[#1a1a1a] text-lg"
                      style={{ 
                        fontFamily: 'var(--font-display)',
                        boxShadow: '10px 10px 0px rgba(0,0,0,0.2)'
                      }}
                    >
                      Ver no Figma
                      <ArrowRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="px-8 md:px-16 py-16 bg-white border-t-2 border-[#1a1a1a]">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="text-sm text-[#6b6762] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                    Projeto desenvolvido por
                  </p>
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    Raíssa Barata
                  </h3>
                  <p className="text-sm text-[#6b6762] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                    Product Designer • UX/UI Designer • Front-end Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
