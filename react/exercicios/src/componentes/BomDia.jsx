import React from 'react'
// import React, { Fragment } from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.nome}! </h1>,
    <h2 key='h2'>Sua idade é {props.idade} anos</h2>
]

// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}! </h1>
//         <h2>Sua idade é {props.idade} anos</h2>
//     </Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}! </h1>
//         <h2>Sua idade é {props.idade} anos</h2>
//     </div>