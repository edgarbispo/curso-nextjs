export async function getStaticPaths() {

    const resp = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resp.json()

    const paths = ids.map(id => {
        return { params: { id: `${id}` }}
    })

    return {
        fallback: true,    // false -> Ne caso, retorno 404, caso o link não tenha o ID abaixo
        paths

        /* Carregando os PATHS de forma automatica
                paths: [
                    {params: {id: '107'}},
                    {params: {id: '203'}},
                    {params: {id: '1345'}}
                ]
        */

    }
}

/*  MUDOU APENAS O CONTEXT
export async function getStaticProps(context) { // context se refere ao GETSTATICPATHS
    const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
*/

export async function getStaticProps({ params }) { // context se refere ao GETSTATICPATHS
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()

    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId(props) {

    const { aluno } = props

    return (
        <div>
            <h1>Detalhes do Aluno</h1>
            {aluno ?
                <ul>
                    <li>{aluno.id}</li>
                    <li>{aluno.nome}</li>
                    <li>{aluno.email}</li>
                </ul>
                : false
            }
        </div>
    )
}