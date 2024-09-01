import { NavLink } from "react-router-dom";
import Button from "../Btn";
import { FaUser } from "react-icons/fa";

export default function NavLinks() {
  // Codigo a ser alterado pós LogIn, para fazer com que uma opt a mais apareça na
  const hist = null


  return (
    <div className="flex items-center gap-6">
      <NavLink to="/Home" className="">
        Pagina Inicial
      </NavLink>
      <NavLink to="/Download" className="">
        Download
      </NavLink>

      {/* Tag só mostrada quando tiver realizado um login */}
      {hist !== null ? <NavLink to="/Download" className="">
        Histórico
      </NavLink> : <></>}
      
      <NavLink to="/*" className="flex items-center">
        <Button className={"max-h-7 group"}>
          <p className="text-base mr-2 flex-shrink-0">Entrar</p>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-Visua-Text text-Visua-Blue group-hover:text-Visua-Blue-houver transition duration-200">
            <FaUser className="w-6 h-6" />
          </span>
        </Button>
      </NavLink>
    </div>
  );
}
