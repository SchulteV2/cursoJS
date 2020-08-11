import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

// const elemento = <h1>React</h1>

// ReactDOM.render(elemento, document.getElementById('root'))

// ReactDOM.render(<Primeiro />, document.getElementById('root'))

ReactDOM.render(<BomDia nome="Guilherme" idade={10} />, document.getElementById('root'))