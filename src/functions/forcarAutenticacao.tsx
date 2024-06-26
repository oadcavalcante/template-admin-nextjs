import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import loading from "../../public/images/loading.gif";
import useAuth from "../data/hook/useAuth";

export default function forcarAutenticacao(jsx) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie?.includes("template-admin-cod3r-auth")) {
                window.location.href = "/autenticacao"
                }
            `,
            }}
          />
        </Head>
        {jsx}
      </>
    );
  }
  function renderizarCarregando() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} alt="Ícone de carregamento." />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push("/autenticacao");
    return null;
  }
}
