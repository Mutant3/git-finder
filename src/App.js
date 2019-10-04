import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/layout/About'
import User from './components/users/User'
import './App.css';

const instance = axios.create({
  baseURL: 'https://api.github.com'
})

const App = ()=>{
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlertState] = useState(null)
          
    const searchUser = async (user) =>{
      setLoading(true)
      try {
        const response = await instance.get(
             `https://api.github.com/search/users?q=${user}&
              client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
              setUsers(response.data.items)
              setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    
    const clearUsers = ()=>{
      setUsers([])
      setLoading(false)
    }

    const setAlert = (type, msg)=>{
      setAlertState({type, msg})
    }

    const getUser = async (username)=>{
      setLoading(true)
      try {
        const response = await instance.get(`https://api.github.com/users/${username}`)
        setUser(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    const getRepos = async(username)=>{
      setLoading(true)
      try {
        const response = await instance.get(`https://api.github.com/users/${username}/repos`)
        setRepos(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar title='Git Finder'/>
              <Alert alert={alert}/>
                <Switch>
                  <Route exact path="/" render={()=>(
                    <>
                      <Search 
                      searchUser={searchUser} 
                      clearUsers={clearUsers} 
                      showButtonClear={users.length > 0 ? true : false}
                      setAlert={setAlert}/>
                      <Users loading={loading} users={users}/>
                    </>
                  )}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/user/:username" render={props => (
                    <User {...props} 
                    getUser={getUser}
                    getRepos={getRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                    />
                  )}/>
                </Switch>
          </div>
        </BrowserRouter>
    )
  
}

export default App;
