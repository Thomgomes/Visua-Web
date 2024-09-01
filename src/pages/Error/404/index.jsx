import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const [seconds, setSeconds] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Decrementa o contador a cada segundo
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/HomePage'); // Redireciona para a página inicial
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Página Não Encontrada</h2>
      <p className="mt-2">A página que você está procurando não existe.</p>
      <p className="mt-4">
        Você será redirecionado para a página inicial em {seconds} segundos.
      </p>
      <p className="mt-4">
        <button
          onClick={() => navigate("/HomePAge")}
          className="px-4 py-2 bg-Visua-Blue rounded-full hover:bg-Visua-Blue-houver transition"
        >
          Ir para a Página Inicial Agora
        </button>
      </p>
    </div>
  );
}
