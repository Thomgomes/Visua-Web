/* eslint-disable react/prop-types */
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function AuthContainer({ formType, onClose }) {
  const [isForm, setIsForm] = useState(formType);

  const toggleForm = () => {
    setIsForm((prevState) => !prevState);
  };

  return (
    <div
      className="fixed inset-0 z-[2] bg-Visua-Transparence flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-Visua-Form px-8 py-10 rounded-3xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {isForm ? (
          <RegisterForm onClose={onClose} toggleForm={toggleForm} />
        ) : (
          <LoginForm onClose={onClose} toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
}
