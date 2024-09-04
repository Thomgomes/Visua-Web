/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Mail, User, Lock, X } from "lucide-react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useState } from "react";

export default function RegisterForm({ onClose, toggleForm }) {
  const [emailValue, setEmailValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div>
      <h2 className="mb-4 w-full flex justify-center">Cadastre-se</h2>
      <form>
        {/* Email Input */}
        <Input
          type="email"
          placeholder="E-mail"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          icon={Mail}
          ariaLabel="Digite seu e-mail"
        />

        {/* Username Input */}
        <Input
          type="text"
          placeholder="Nome de usuário"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.target.value)}
          icon={User}
          ariaLabel="Digite seu nome de usuário"
        />

        {/* Password Input */}
        <Input
          type="password"
          placeholder="Senha"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          icon={Lock}
          ariaLabel="Digite sua senha"
        />
        <Button
          // type="submit"
          className="w-full mb-9 bg-Visua-Blue text-white p-2 rounded-full flex justify-center"
        >
          Criar Conta
        </Button>
        <Button
          // type="submit"
          className="w-full mb-3 bg-Visua-Blue text-white p-2 rounded-full flex justify-center"
        >
          Entrar com Google
        </Button>
          <Link
            className="w-full flex justify-center text-base underline hover:text-Visua-Blue transition duration-200"
            onClick={toggleForm}
          >
            Já tem uma conta?
          </Link>
      </form>
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute flex justify-center items-center top-2 right-2 border border-Visua-Grey-Border rounded-full h-10 w-10 text-Visua-Placeholder/icon hover:text-Visua-Text hover:border-Visua-Text transition duration-200 "
      >
        <X />
      </button>
    </div>
  );
}
