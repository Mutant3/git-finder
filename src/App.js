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

    async componentDidMount(){
      this.setState({ loading: true })
      try {
        const response = await instance.get(
             `/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)     
              this.setState({users: response.data, loading: false})
      } catch (error) {
        console.log(error)
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

  render(){
    return (
      <div className="App">
        <Navbar title='Git Finder'/>
          <Search searchUser={this.searchUser}/>
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    )
  }

}

export default App;
