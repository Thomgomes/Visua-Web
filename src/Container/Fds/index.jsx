// HomePage.js
import { useState } from 'react';
import RegisterForm from '../RegisterForm';

export default function Fds() {
  const [showRegister, setShowRegister] = useState(false);

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
      <button 
        onClick={handleOpenRegister} 
        className="bg-blue-500 text-white p-2 rounded"
      >
        Open Register Form
      </button>
      
      {showRegister && <RegisterForm onClose={handleCloseRegister} />}
      
      {/* O conteúdo da tela antiga */}
      <div>
        <h1 className="text-2xl font-bold">Welcome to the main page!</h1>
        {/* Outros componentes */}
      </div>
    </div>
  );
};
