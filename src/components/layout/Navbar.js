import React, { Component } from 'react'
import github from '../../assets/github-sign.png'
import PropTypes from 'prop-types'

class Navbar extends Component {
    static defaultProps = {
        title: 'Git Finder'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="navbar" style={{
                borderBottom: "1px solid black",
                backgroundColor: "rgba(102,204,102,0.7)"
            }}>
                <a className="navbar-brand">
                    <img src={github} width="30px"></img>
                    <span style={{marginLeft: '10px'}}>{this.props.title}</span>
                </a>
            </div>
        )
    }
}

export default Navbar
