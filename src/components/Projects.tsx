import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { ProjectModal } from './ProjectModal';
import { useState } from 'react';
import psiuImage from 'figma:asset/898285394a6ac1247f2f17ef79454aaafd8c3970.png';
import psiuDetailImage from 'figma:asset/c8896a2c5a1a468cad7dd95359084aac2184aa39.png';
import frexcoImage from 'figma:asset/805bf7adfaf9a18fad8c8521b7085d8a3abbdd2d.png';
import duelingoDetailImage from 'figma:asset/4a562a2074dd3209ab2d9d820b69575ed24620ad.png';
import ipecodeImage from 'figma:asset/2afc23474faaddb3da3eac9a6089bb8f23573b53.png';
import qratesImage from 'figma:asset/574a470203641d6a2c2676ffdb44fb6dea3be064.png';

const projects = [
  {
    title: 'IpeCode',
    category: 'Design System',
    description: 'Design system desenvolvido para o produto digital da ABNMO, uma plataforma voltada à gestão e acompanhamento de prontuários, contribuindo em todas as etapas do ciclo de design – da descoberta de necessidades dos usuários à prototipação de interfaces de alta fidelidade.',
    image: ipecodeImage,
    tags: ['Design System', 'Product Design', 'UX/UI Design'],
    status: 'em construção',
    fullContent: {
      challenge: 'Desenvolver um design system robusto e escalável para uma plataforma de gestão de prontuários, garantindo consistência visual e funcional em todas as interfaces do produto.',
      process: [
        'Descoberta de necessidades dos usuários e stakeholders',
        'Definição de princípios e fundamentos do design system',
        'Criação de componentes reutilizáveis e padrões de interface',
        'Prototipação de interfaces de alta fidelidade',
        'Documentação técnica e guias de uso',
      ],
      images: [],
    },
  },
  {
    title: 'PSI-U',
    category: 'UX/UI Design',
    description: 'Plataforma que conecta psicólogos a pacientes, facilitando o acesso à saúde mental com interface intuitiva e centrada no usuário.',
    image: psiuImage,
    tags: ['UX Research', 'User Journey', 'Prototyping', 'Figma'],
    link: 'https://www.behance.net/gallery/160457897/Projeto-Final-Coderhouse',
    fullContent: {
      challenge: 'O acesso à saúde mental no Brasil enfrenta barreiras significativas, incluindo estigma social, falta de informação e dificuldade em encontrar profissionais adequados. Muitas pessoas não sabem por onde começar quando precisam de ajuda psicológica.',
      solution: 'Desenvolvi uma plataforma digital que simplifica a conexão entre psicólogos e pacientes. Com foco em acessibilidade e privacidade, a interface permite busca personalizada de profissionais, agendamento online e acompanhamento do tratamento.',
      process: [
        'Pesquisa com usuários e profissionais de saúde mental para entender principais dores',
        'Mapeamento da jornada do usuário e identificação de pontos críticos',
        'Criação de wireframes e protótipos de baixa fidelidade',
        'Testes de usabilidade e iterações baseadas em feedback',
        'Desenvolvimento de interface final com design system consistente',
      ],
      results: [
        'Interface intuitiva que reduz ansiedade no processo de busca',
        'Sistema de filtros personalizado por especialidade e abordagem',
        'Agendamento online que elimina barreiras de contato inicial',
        'Design acessível seguindo padrões WCAG',
      ],
      images: [
        psiuDetailImage,
      ],
    },
  },
  {
    title: 'Frexco',
    category: 'UX/UI Design & Product Design',
    description: 'Aplicativo de delivery de produtos frescos, orgânicos e saudáveis que conecta consumidores conscientes a produtores locais com uma experiência de compra intuitiva e agradável.',
    image: frexcoImage,
    tags: ['UX/UI Design', 'Product Design', 'Mobile App', 'E-commerce'],
    link: 'https://www.behance.net/gallery/243487003/REDESIGN-UXUI-DESIGN',
    fullContent: {
      challenge: 'O aplicativo Frexco apresentava problemas de usabilidade que impactavam negativamente a experiência do usuário. A interface estava desorganizada, com elementos visuais inconsistentes e navegação confusa. Os usuários enfrentavam dificuldades para encontrar produtos específicos, a hierarquia visual não destacava adequadamente as informações importantes, e a experiência geral carecia de clareza e intuitividade.',
      solution: 'Redesenhei completamente a experiência do aplicativo Frexco, priorizando clareza visual, navegação simplificada e informações acessíveis. A nova interface destaca produtos frescos, categorização intuitiva e últimos pedidos.',
      process: [
        'Análise heurística da interface existente para identificar problemas de usabilidade',
        'Benchmarking de concorrentes e referências do mercado de delivery e e-commerce',
        'Definição de arquitetura da informação otimizada para facilitar a descoberta de produtos',
        'Criação de wireframes de alta fidelidade',
        'Desenvolvimento de protótipos interativos para validação das soluções',
      ],
      results: [
        'Interface limpa e organizada que destaca a qualidade e o frescor dos produtos',
        'Sistema de categorização intuitivo que facilita encontrar produtos específicos',
        'Hierarquia visual clara que prioriza informações relevantes para o usuário',
        'Consistência visual em todos os elementos',
      ],
      images: [],
    },
  },
  {
    title: 'DUELINGO',
    category: 'Gamificação ao Vivo',
    description: 'E se aprender uma língua fosse tão emocionante quanto competir? Transformando o aprendizado de idiomas em uma experiência social e gamificada ao vivo.',
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRoaXZjcWcyNDhlY25xYXBkbjBweDU5dDFiaDJkc2x3eTJ0d3hzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xIcTpZDiEhWFjCTh7v/giphy.gif',
    tags: ['Gamificação', 'UX Design', 'Product Design', 'Live Experience'],
    fullContent: {
      challenge: 'Aprender um novo idioma pode ser solitário e desmotivador. Muitos usuários abandonam apps de idiomas pela falta de conexão social e competição em tempo real que torne o aprendizado mais envolvente e emocionante.',
      solution: 'Desenvolvi o conceito DUELINGO, uma feature de gamificação ao vivo que permite usuários desafiarem uns aos outros em duelos de idiomas em tempo real. A experiência combina aprendizado, competição saudável e conexão social para manter os usuários engajados.',
      process: [
        'Análise de comportamento de usuários em plataformas de aprendizado gamificadas',
        'Pesquisa sobre motivadores sociais e competitivos no aprendizado',
        'Definição de mecânicas de jogo que equilibram desafio e diversão',
        'Prototipagem de interface para duelos ao vivo e sistema de ranking',
        'Testes de usabilidade focados em engajamento e retenção',
      ],
      results: [
        'Interface vibrante e colorida que transmite energia e diversão',
        'Sistema de matching por nível que garante duelos justos',
        'Mecânica de desafios que incentiva prática constante',
        'Experiência social que transforma aprendizado solitário em atividade em grupo',
      ],
      images: [
        duelingoDetailImage,
      ],
    },
  },
  {
    title: 'Qrates',
    category: 'Front-End Development',
    description: 'Reestruturação do site Qrates focando na interface e design responsivo utilizando Angular.',
    image: qratesImage,
    tags: ['Angular', 'TypeScript', 'E-commerce'],
    link: 'https://qratesrecords.vercel.app/',
    fullContent: {
      challenge: 'Criar uma experiência de e-commerce moderna e responsiva para venda de discos de vinil, com foco em performance e usabilidade, utilizando tecnologias front-end atuais.',
      solution: 'Reestruturação completa do site Qrates com foco em interface moderna e design responsivo utilizando Angular. Link do GitHub: https://github.com/RaissaBarata/qratesrecords',
      process: [
        'Estruturação da arquitetura do projeto Angular com componentes reutilizáveis',
        'Criação de interface responsiva',
      ],
      images: [],
    },
  },
];

export function Projects() {
  const { ref, isInView } = useInView();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center py-32 bg-[#f4f1e8]">
      <div className="max-w-[1400px] mx-auto px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-sm mb-4 text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
            → Selected Work
          </p>
          <h2 className="text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[0.9] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[#c4b5e6]">Projetos</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="grid grid-cols-12 gap-8"
            >
              {/* Imagem com layout alternado */}
              <motion.div
                className={`col-span-12 lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  onClick={() => handleProjectClick(project)}
                  className="relative aspect-[16/10] overflow-hidden border-4 border-[#1a1a1a] cursor-pointer group"
                  style={{
                    boxShadow: `12px 12px 0px ${index === 0 ? '#c4b5e6' : index === 1 ? '#9b87d9' : index === 2 ? '#e6dff7' : index === 3 ? '#b8a3e0' : '#d4c9f0'}`,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay colorido */}
                  <div 
                    className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      backgroundColor: index === 0 ? '#c4b5e6' : index === 1 ? '#9b87d9' : index === 2 ? '#e6dff7' : index === 3 ? '#b8a3e0' : '#d4c9f0'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white px-6 py-3 border-2 border-[#1a1a1a]">
                      <p className="text-sm font-bold flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                        {project.status === 'em construção' ? 'EM CONSTRUÇÃO' : (
                          <>
                            VER PROJETO <ExternalLink className="w-4 h-4" />
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Texto com layout alternado */}
              <div className={`col-span-12 lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex flex-col justify-center space-y-6`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: index === 0 ? '#c4b5e6' : index === 1 ? '#9b87d9' : index === 2 ? '#e6dff7' : index === 3 ? '#b8a3e0' : '#d4c9f0'
                      }}
                    ></div>
                    <p className="text-sm text-[#6b6762]" style={{ fontFamily: 'var(--font-sans)' }}>
                      {project.category}
                    </p>
                  </div>
                  <h3 className="text-4xl md:text-5xl mb-5 font-bold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    {project.title}
                  </h3>
                  <p className="text-base text-[#1a1a1a] leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-[#1a1a1a] text-xs"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleProjectClick(project)}
                  className="self-start px-6 py-3 bg-[#1a1a1a] text-white hover:bg-[#c4b5e6] transition-colors duration-300 font-medium"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Ver case completo →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}
