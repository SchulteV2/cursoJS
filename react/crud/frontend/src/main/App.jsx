import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import Routes from './Routes'

const data = [{
    icon: 'fa-home',
    url: '/',
    text: 'Home'
},
{
    icon: 'fa-users',
    url: '/users',
    text: 'Usuários'
    }
]

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav data={data}/>
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>