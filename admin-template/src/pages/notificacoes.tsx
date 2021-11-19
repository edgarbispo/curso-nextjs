import Layout from "../components/template/Layout";
//import {AppConsumer} from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {

    const ctx = useAppData()

    return (
        <Layout titulo={"Notificações"}
                subtitulo={"Aqui você irá gerenciar as suas notificações"}>

            {/* Nesse caso o AppConsumer precisa ser definido
                no arquivo AppContext.tsx
             ==>> Substituido pelo useAppData

            <AppConsumer>
                {dados => <h3>{dados.nome}</h3>}
            </AppConsumer>

            */}

            <h3>{ctx.nome}</h3>
        </Layout>
    )
}
