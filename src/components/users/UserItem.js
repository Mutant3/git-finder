/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class UserItem extends Component {
    render() {
        const {avatar_url, login, html_url} = this.props.user
        return (
            <div className="card" style={cardStyle}>
                <img
                src={avatar_url}
                style={{borderRadius: '40px', width: '70px'}}>
                </img>
                <h4>{login}</h4>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" style={{
                    }}>
                        More
                    </a>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    flex: '1 25%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    margin: '10px'
}

