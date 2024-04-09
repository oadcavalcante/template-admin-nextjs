import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const contexto = useAppData();

  return (
    <Layout titulo="Notificações" subtitulo="Aqui você irá gerenciar as suas notificações!">
      <h3>{contexto.nome}</h3>
    </Layout>
  );
}
