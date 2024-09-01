/* eslint-disable react/prop-types */
import { useState } from 'react';
import RegisterForm from './RegisterForm'; // Ajuste o caminho conforme necessário
import LoginForm from './LoginForm'; // Supondo que você tenha um componente Login similar

export default function AuthContainer ({ onClose }) {
  const [isRegisterForm, setIsRegisterForm] = useState(true);

  const toggleForm = () => {
    setIsRegisterForm(prevState => !prevState);
  };

  return (
    <div className="fixed inset-0 bg-Visua-Transparence flex items-center justify-center" onClick={onClose}>
      <div className="bg-Visua-Form px-8 py-10 rounded-3xl shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        {isRegisterForm ? (
          <RegisterForm onClose={onClose} toggleForm={toggleForm} />
        ) : (
          <LoginForm onClose={onClose} toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

