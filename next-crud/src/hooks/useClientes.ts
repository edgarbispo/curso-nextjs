import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import {useEffect, useState} from "react";
import Cliente from "../core/Cliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function UseClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

    /*
        const clientes = [
            new Cliente('Ana', 34, '1'),
            new Cliente('Bia', 45, '2'),
            new Cliente('Carlos', 23, '3'),
            new Cliente('Pedro', 54, '4')
        ]
    */

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }

}