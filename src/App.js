import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users'
import Search from './components/users/Search'


class App extends Component{
  constructor(){
        super()
        this.state = {
            users: [],
            loading: false,
        }
    }

    componentDidMount(){
      this.setState({ loading: true })
      axios.get(`https://api.github.com/users?
              client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
              .then(res=>{
            this.setState({users: res.data, loading: false})
        }).catch(error=>{
            console.log(error);
        })
    }
    
    searchUser = (user) =>{
      this.setState({ loading: true })
      axios.get(`https://api.github.com/search/users?q=${user}&
              client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        .then(res => {
          this.setState({ users: res.data.items, loading: false })
        }).catch(error => {
          console.log(error);
        })
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
