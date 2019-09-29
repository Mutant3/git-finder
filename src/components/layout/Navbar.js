/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import github from '../../assets/github-sign.png'
import PropTypes from 'prop-types'

const Navbar = props =>(
            <div className="navbar" style={{
                borderBottom: "1px solid black",
                backgroundColor: "rgba(102,204,102,0.7)"
            }}>
                <a className="navbar-brand">
                    <img src={github} width="30px"></img>
                    <span style={{marginLeft: '10px'}}>{props.title}</span>
                </a>
            </div>
        
)
Navbar.defaultProps = {
    title: 'Git Finder'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar
