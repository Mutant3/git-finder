import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users'
import Search from './components/users/Search'

const instance = axios.create({
  baseURL: 'https://api.github.com'
})

class App extends Component{
  constructor(){
        super()
        this.state = {
            users: [],
            loading: false,
        }
    }

    searchUser = async (user) =>{
      this.setState({ loading: true })
      try {
        const response = await instance.get(
             `https://api.github.com/search/users?q=${user}&
              client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
              this.setState({users: response.data.items, loading: false})
      } catch (error) {
        console.log(error)
      }
    }
    
    clearUsers = ()=>{
      this.setState({users: [], loading: false})
    }
  render(){
    return (
      <div className="App">
        <Navbar title='Git Finder'/>
          <Search 
          searchUser={this.searchUser} 
          clearUsers={this.clearUsers} 
          showButtonClear={this.state.users.length > 0 ? true : false}/>

        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    )
  }

}

export default App;
