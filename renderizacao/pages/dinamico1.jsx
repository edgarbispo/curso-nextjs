export function getServerSideProps() {
    // Sempre será executado qdo chegar uma requisição no servidor
    console.log('[Server] gerando props para o componente...')
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props) {
    return (
        <div>
            <h1>Dinâmico #01</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}