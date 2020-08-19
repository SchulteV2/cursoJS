import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            { props.data.map(element => (
                <a href={element.url}>
                    <i className={`fa ${element.icon}`}></i> {element.text}
                </a>
            ))}
        </nav>
    </aside>