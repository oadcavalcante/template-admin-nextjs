import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeGoogle } from "../components/icons";

export default function Autenticacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("cadastro");
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          className="h-screen w-full object-cover"
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === "login" ? "Entre com a Sua Conta" : "Cadastre-se na Plataforma"}
        </h1>
        <AuthInput label="Email" tipo="email" valor={email} valorMudou={setEmail} obrigatorio />
        <AuthInput label="Senha" tipo="password" valor={senha} valorMudou={setSenha} />
        {/* <AuthInput label="Confirmação de Senha" tipo="password" valor={senha} valorMudou={setSenha} naoRenderizarQuando={modo === 'login'} /> */}

        <button
          onClick={submeter}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submeter}
          className={`flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          <span className="bg-white rounded-full p-1/2 flex items-center justify-center">{IconeGoogle}</span>
          <span className="flex-grow">Entrar com Google</span>
        </button>
        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            > Crie uma conta gratuitamente
            </a>{" "}
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            > Entre com as suas credenciais
            </a>{" "}
          </p>
        )}
      </div>
    </div>
  );
}
