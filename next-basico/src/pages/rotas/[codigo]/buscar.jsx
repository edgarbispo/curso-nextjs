import {useRouter} from 'next/router'
import Link from "next/link";

export default function Buscar() {

    const router = useRouter()
    const codigo = router.query.codigo
    //console.log(router)

    return (
        <div>
            <h1>Rotas / {codigo} / Buscar!!!</h1>
            <Link href={"/rotas"} passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}