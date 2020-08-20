import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            { props.data.map(element => (
                <Link to={element.url}>
                    <i className={`fa ${element.icon}`}></i> {element.text}
                </Link>
            ))}
        </nav>
    </aside>