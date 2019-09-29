import React, { Component } from 'react'
import UserItem from './UserItem'
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 2000
})

export default class Users extends Component {
    constructor(){
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        instance.get('/users').then(res=>{
            console.log(res.data)
            this.setState({users: res.data})
        }).catch(error=>{
            console.log(error);
        })
    }
    render() {
        return (
            <div className="container" style={usersStyles}>
                {this.state.users.map(user=>(
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const usersStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

