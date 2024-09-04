import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import NavigationLinkMobile from "../NavigationLinkMobile";
import NavigationButtonLink from "../NavigationButtonLink";
import NavigationLink from "../NavigationLink";
import { SideBar, SideBarContentLi, SideBarContentUl } from "../../Animations/Motion/Variants";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const hist = false;

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      {/* Links de Navegação em desktop */}
      <div className="hidden md:flex justify-between">
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavigationLink link="/Home" text="Pagina Inicial" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavigationLink link="/Home" text="Download" />
          </motion.div>
          {/* Componente só renderizado após o Login para liberar a pagina Historico */}
          {hist ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <NavigationLink link="/Home" text="Historico" />
            </motion.div>
          ) : null}

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NavigationButtonLink />
          </motion.div>
        </div>
      </div>
      {/* Botão de menu em mobile */}
      <div className="md:hidden flex justify-center">
        <motion.button
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => toggleNavBar()}
          className="bg-Visua-Text p-3 z-[1] text-Visua-Bg rounded-full flex justify-center items-center"
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
        {isOpen ? <></> : <></>}
        <div className="relavite">
          <motion.div
            variants={SideBar}
            initial="close"
            animate={isOpen ? "open" : "close"}
            className="absolute right-0 top-0 h-screen bg-Visua-Form"
          >
            <div className="h-32 w-full"></div>
            <motion.ul
              variants={SideBarContentUl}
              initial="close"
              animate={isOpen ? "open" : "close"}
              className="flex flex-col items-center justify-center h-auto w-full gap-6"
            >
              <NavigationLinkMobile link="/Home" text="Pagina Inicial" />
              <NavigationLinkMobile link="/Download" text="Download" />
              <NavigationLinkMobile link="/Histórico" text="Histórico" />
              <motion.li variants={SideBarContentLi}>
                <NavigationButtonLink />
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
