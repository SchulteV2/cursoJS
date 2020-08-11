import React from 'react'
import ReactDOM from 'react-dom'

// const elemento = <h1>React</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// import Primeiro from './componentes/Primeiro'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componentes/BomDia'
// ReactDOM.render(<BomDia nome="Guilherme" idade={10} />, document.getElementById('root'))

// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
// ReactDOM.render(
//     <div>
//         <BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>,
//     document.getElementById('root')
// )

import Saudacao from './componentes/Saucacao'
ReactDOM.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="João" />
    </div>,
    document.getElementById('root')
)