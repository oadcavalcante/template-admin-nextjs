import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao, IconeGoogle } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
  const { cadastrar, login, loginGoogle } = useAuth();

  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  async function submeter() {
    try {
      if (modo === "login") {
        await login(email, senha);
      } else {
        await cadastrar(email, senha);
      }
    } catch (e) {
      exibirErro(e?.message ?? "Erro desconhecido!");
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          className="object-cover w-full h-screen"
          src="https://loremflickr.com/1600/900"
          alt="Imagem da Tela de Autenticação"
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === "login" ? "Entre com a Sua Conta" : "Cadastre-se na Plataforma"}
        </h1>
        {erro ? (
          <div
            className={`flex items-center
        bg-red-400 text-white py-3 px-5 my-2 border-2 border-red-700 rounded-lg`}
          >
            {IconeAtencao()}
            <span className="ml-3 text-sm">{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput label="Email" tipo="email" valor={email} valorMudou={setEmail} obrigatorio />
        <AuthInput label="Senha" tipo="password" valor={senha} valorMudou={setSenha} />
        {/* <AuthInput label="Confirmação de Senha" tipo="password" valor={senha} valorMudou={setSenha} naoRenderizarQuando={modo === 'login'} /> */}

        <button
          onClick={submeter}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="w-full my-6 border-gray-300" />
        <button
          onClick={loginGoogle}
          className={`flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}
        >
          <span className="flex items-center justify-center bg-white rounded-full p-1/2">{IconeGoogle}</span>
          <span className="flex-grow">Entrar com Google</span>
        </button>
        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Crie uma conta gratuitamente
            </a>{" "}
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Entre com as suas credenciais
            </a>{" "}
          </p>
        )}
      </div>
    </div>
  );
}
