import ButtonForm from "../ButtonForm";
import { FaUser } from "react-icons/fa";

export default function NavigationButtonLink() {
  return (
    <ButtonForm className="max-h-7 group text-lg" formType={false}>
      <p className="text-base mr-2 flex-shrink-0 group-hover:text-Visua-Placeholder/icon transition duration-200">
        Entrar
      </p>
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-Visua-Text text-Visua-Blue group-hover:text-Visua-Blue-houver transition duration-200">
        <FaUser className="w-6 h-6" />
      </span>
    </ButtonForm>
  );
}
