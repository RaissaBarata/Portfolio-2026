import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import profileImage from "figma:asset/117c7f19f892dadfe9b452bf44ddeaa9d7f70627.png";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#fffef9]"
    >
      {/* Elemento gráfico decorativo - círculo retro */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full border-[40px] border-[#c4b5e6]"
      />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10 w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Coluna de texto - ocupando mais espaço */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] mb-8 font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Raíssa
              <br />
              Barata
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#c4b5e6]"></div>
                <p
                  className="text-lg font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Product Designer
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#e6dff7]"></div>
                <p
                  className="text-lg font-medium"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Front-End Developer
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna lateral com imagem de perfil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-5 hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Sombra colorida de fundo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-[#c4b5e6] translate-x-4 translate-y-6"
              />

              {/* Imagem de perfil */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-[#1a1a1a]"
                style={{ boxShadow: "0 0 0 1px #fffef9" }}
              >
                <img
                  src={profileImage}
                  alt="Raíssa Barata"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-[#6b6762]" />
        </motion.div>
      </motion.div>
    </section>
  );
}