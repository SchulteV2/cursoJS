import React from 'react'
import { chidrenWithProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Pai</h1>
        <ul>{props.nome} {props.sobrenome}</ul>
        <h2>Filhos</h2>
        <ul>
            {chidrenWithProps(props)}
        </ul>
    </div>