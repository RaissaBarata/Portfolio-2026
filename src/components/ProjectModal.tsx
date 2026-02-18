import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { LiraeModal } from './LiraeModal';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    status?: string;
    fullContent?: {
      challenge?: string;
      solution?: string;
      results?: string[];
      images?: string[];
      process?: string[];
    };
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
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

  // Use LiraeModal for LIRAE project
  if (project.title === 'LIRAE') {
    return <LiraeModal isOpen={isOpen} onClose={onClose} project={project} />;
  }

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
            className="fixed inset-4 md:inset-6 lg:inset-8 z-50 bg-[#fffef9] border-4 border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 md:p-8 border-b-2 border-[#1a1a1a] bg-[#f4f1e8]">
              <div className="flex-1">
                <p className="text-sm mb-2 text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
                  → {project.category}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    {project.title}
                  </h2>
                  {project.status === 'em construção' && (
                    <span className="px-3 py-1 bg-[#c4b5e6] border-2 border-[#1a1a1a] text-xs text-white font-bold" style={{ fontFamily: 'var(--font-sans)' }}>
                      EM CONSTRUÇÃO
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border-2 border-[#1a1a1a] text-xs"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-2 border-2 border-[#1a1a1a] hover:bg-[#c4b5e6] hover:border-[#c4b5e6] transition-colors group"
                style={{ boxShadow: '4px 4px 0px #1a1a1a' }}
              >
                <X className="w-5 h-5 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-8 md:p-12 space-y-12">
                {/* Hero Image */}
                <div 
                  className={`relative w-full max-w-4xl mx-auto overflow-hidden border-4 border-[#1a1a1a] ${project.title === 'DUELINGO' ? '' : 'aspect-video'}`} 
                  style={{ boxShadow: '8px 8px 0px #c4b5e6' }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${project.title === 'DUELINGO' ? 'h-auto' : 'h-full object-cover'}`}
                  />
                </div>

                {/* Description */}
                <div className="bg-white p-8 border-l-4 border-[#c4b5e6]">
                  <h3 className="text-3xl mb-6 font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    Sobre o Projeto
                  </h3>
                  <p className="text-base text-[#1a1a1a] leading-loose" style={{ fontFamily: 'var(--font-sans)' }}>
                    {project.description}
                  </p>
                </div>

                {/* Challenge */}
                {project.fullContent?.challenge && (
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                      <div className="sticky top-8">
                        <div className="w-16 h-1 bg-[#c4b5e6] mb-4"></div>
                        <h3 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                          Desafio
                        </h3>
                      </div>
                    </div>
                    <div className="md:col-span-8">
                      <p className="text-base text-[#1a1a1a] leading-loose" style={{ fontFamily: 'var(--font-sans)' }}>
                        {project.fullContent.challenge}
                      </p>
                    </div>
                  </div>
                )}

                {/* Process */}
                {project.fullContent?.process && project.fullContent.process.length > 0 && (
                  <div>
                    <h3 className="text-3xl mb-8 font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                      Processo
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.fullContent.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-6 border-2 border-[#1a1a1a]"
                          style={{ boxShadow: '6px 6px 0px #9b87d9' }}
                        >
                          <div className="flex items-start gap-4">
                            <div 
                              className="flex-shrink-0 w-10 h-10 border-2 border-[#1a1a1a] bg-[#c4b5e6] text-white flex items-center justify-center font-bold"
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              {index + 1}
                            </div>
                            <p className="text-sm text-[#1a1a1a] leading-relaxed pt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                              {step}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Images */}
                {project.fullContent?.images && project.fullContent.images.length > 0 && (
                  <div className="w-full max-w-5xl mx-auto">
                    {project.fullContent.images.map((img, index) => (
                      <div
                        key={index}
                        className="w-full overflow-hidden border-4 border-[#1a1a1a]"
                        style={{ boxShadow: '8px 8px 0px #9b87d9' }}
                      >
                        <img
                          src={img}
                          alt={`${project.title} - ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}



                {/* Results */}
                {project.fullContent?.results && project.fullContent.results.length > 0 && (
                  <div>
                    <h3 className="text-3xl mb-8 font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                      Resultados
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.fullContent.results.map((result, index) => (
                        <div
                          key={index}
                          className="p-8 bg-[#f4f1e8] border-l-4"
                          style={{ borderLeftColor: index % 2 === 0 ? '#c4b5e6' : '#b8a3e0' }}
                        >
                          <p className="text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* External Link */}
                {project.link && (
                  <div className="pt-8 border-t-2 border-[#1a1a1a] text-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white hover:bg-[#c4b5e6] transition-colors font-bold border-4 border-[#1a1a1a]"
                      style={{ 
                        fontFamily: 'var(--font-display)',
                        boxShadow: '8px 8px 0px #c4b5e6'
                      }}
                    >
                      Link para o site
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
