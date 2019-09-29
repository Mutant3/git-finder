/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class UserItem extends Component {
    constructor(){
        super();
        this.state = {
            id: 'id',
            login: "monjombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"
        }
    }
    render() {
        const {avatar_url, login, html_url} = this.state
        return (
            <div className="card" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px',
                padding: '10px'
            }}>
                <img 
                className="card-img-top"
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

