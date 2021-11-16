export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]

    function rendererizarLista() {
        return listaAprovados.map((nome, indice) => <li key={indice}>{nome}</li>)
    }

    return (
        <ul>
            {rendererizarLista()}
        </ul>
    )
}

/*
function rendererizarLista() {

    const itens = []

    for (let i = 0; i < listaAprovados.length; i++) {
        itens.push(<li key={i}>{listaAprovados[i]}</li>)
    }

    return itens
}
*/