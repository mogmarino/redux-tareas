import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm  bg-secondary sticky-top">
        <div className="container">
            <a className="navbar-brand text-white" href="#">Tareas</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Lista</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/group">Grupo</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header