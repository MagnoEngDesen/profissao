import React from "react";

const Table = (props)=> {
    const {charactersData,removerCharacter} = props
        return (
            <table>
                <TableHeader/>
                <TableBody charactersData={charactersData} removerCharacter={removerCharacter}/>
            </table>
        )
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Trabalho</th>
                <th>Deletar</th>
            </tr>
        </thead>
    )
}
/*
    Como podemos ver a função TableBody tem como objetivo busar as propriedades que criamos para na class
    App, dentro do metoto render() foi criado um arry com os elementos e inserido dentro, apos isso 
    atribuimos para o para a propiedade que criamos no JSX os elementos do arry...
        Mais é preciso adiconar em Table.js esse elemos para podermos vizualizar, então utilizando a função
    map para a props do componente filho interamos cada componete JSX para cada elemento que existe nos props
    e atribuir para o constante rows, apos isso é usada como retorno
    
*/
const TableBody = (props) => {
    const rows = props.charactersData.map((row, index) => {
        return (
           <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.trabalho}</td>
                <td>
                    <button onClick={() => props.removerCharacter(index)}>Delete</button>
                </td>
           </tr>
        )
    })

    return <tbody>{rows}</tbody>
}


export default Table