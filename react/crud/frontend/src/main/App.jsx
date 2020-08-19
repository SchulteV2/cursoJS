import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

const data = [{
    icon: 'fa-home',
    url: '/home',
    text: 'Home'
},
{
    icon: 'fa-users',
    url: '/users',
    text: 'Usuários'
    }
]

export default props =>
    <div className="app">
        <Logo />
        <Nav data={data}/>
        <Home />
        <Footer />
    </div>