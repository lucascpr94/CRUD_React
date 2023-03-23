import './Main.css'
import React from 'react'
import Header from './Header'

export default props => 
    <>
    <Header {...props} />
    <main className="content container-fluid">
        <div className="p-3 mt-3">
            {/* abaixo, usado para jogar as tags filhos */}
            {props.children}
        </div>
    </main>
    </>