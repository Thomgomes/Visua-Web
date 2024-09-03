import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ButtonForm from "../BtnForm";
import { motion } from "framer-motion";

export default function NavLinks() {
  // Código a ser alterado pós Login, para fazer com que uma opt a mais apareça na
  const hist = null;

  return (
    <div className="flex items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavLink
          to="/Home"
          className="hover:text-Visua-Placeholder/icon transition duration-200"
        >
          Página Inicial
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <NavLink
          to="/Download"
          className="hover:text-Visua-Placeholder/icon transition duration-200"
        >
          Download
        </NavLink>
      </motion.div>

      {/* Tag só mostrada quando tiver realizado um login */}
      {hist !== null ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLink to="/Download" className="">
            Histórico
          </NavLink>
        </motion.div>
      ) : (
        <></>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ButtonForm className="max-h-7 group text-lg" formType={false}>
          <p className="text-base mr-2 flex-shrink-0 group-hover:text-Visua-Placeholder/icon transition duration-200">
            Entrar
          </p>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-Visua-Text text-Visua-Blue group-hover:text-Visua-Blue-houver transition duration-200">
            <FaUser className="w-6 h-6" />
          </span>
        </ButtonForm>
      </motion.div>
    </div>
  );
}
