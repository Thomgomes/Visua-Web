import { Link } from "react-router-dom";
import Button from "../../components/Btn";
import ButtonForm from "../../components/BtnForm";


export default function Home() {
  

  return (
    <div className="h-screen w-full flex items-center justify-center p-24">
      <div className="max-w-xl text-center">
        <div className="text-4xl mb-8">
          <h2>Escanei Objetos com o Visua</h2>
        </div>
        <p className="mb-6 ">
          Visua é uma aplicação para pessoas com deficiência visual, onde você
          pode escanear objetos ao seu redor ou escanear o código de barras para
          assim receber descrições detalhadas em áudio e em texto, permitindo
          uma experiência mais inclusiva e independente.
        </p>
        <p>
          Explore o mundo ao seu redor com confiança, graças à tecnologia do
          Visua, tornando a informação visual acessível à todos.
        </p>
        <div className="flex items-center justify-center gap-12 mt-6">
          <ButtonForm py="py-1" formType="False">
            Criar Conta
          </ButtonForm>
          <Link to=" /">
            <Button
              py="py-1"
              className="bg-Visua-Grey hover:bg-Visua-Grey-Border"
            >
              Saiba Mais
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
