import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem href="/" className={`fa fa-home`} texto="Início" />
            <NavItem href="/users" className={`fa fa-users`} texto="Usuários" />
        </nav>
    </aside>