import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/layout/About'
import User from './components/users/User'

const instance = axios.create({
  baseURL: 'https://api.github.com'
})

class App extends Component{
  constructor(){
        super()
        this.state = {
            user: {},
            users: [],
            loading: false,
            alert: null
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

    setAlert = (type, msg)=>{
      this.setState({ alert: {type, msg}})
    }

    getUser = (username)=>{
      console.log(username);
    }

  render(){
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar title='Git Finder'/>
              <Alert alert={this.state.alert}/>
                <Switch>
                  <Route exact path="/" render={()=>(
                    <>
                      <Search 
                      searchUser={this.searchUser} 
                      clearUsers={this.clearUsers} 
                      showButtonClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}/>
                      <Users loading={this.state.loading} users={this.state.users}/>
                    </>
                  )}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/user/:username" render={props => (
                    <User {...props} 
                    getUser={this.getUser} 
                    user={this.state.user}
                    loading={this.state.loading}
                    />
                  )}/>
                </Switch>
          </div>
        </BrowserRouter>
    )
  }

}

export default App;
