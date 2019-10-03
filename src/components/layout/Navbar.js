/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import github from '../../assets/github-sign.png'
import PropTypes from 'prop-types'
import '../../styles/Navbar.css'

const Navbar = props =>(
            <nav className="navbar navbar navbar-expand-md" style={{
                borderBottom: "1px solid black",
                backgroundColor: "rgba(102,204,102,0.7)",
                display: 'flex',
                justifyContent: 'space-between'
                }}>
                <a className="navbar-brand">
                    <img src={github} width="30px"></img>
                    <span style={{marginLeft: '10px'}}>{props.title}</span>
                </a>
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                </ul>
                
            </nav>
        
)
Navbar.defaultProps = {
    title: 'Git Finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar
