import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/reducers/stores'
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
    const [alert, setAlertState] = useState(null)
          
    const searchUser = async (user) =>{
      //set state with redux
      store.dispatch({type: 'LOADING_ON'})
      try {
        const response = await instance.get(
             `https://api.github.com/search/users?q=${user}&
              client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
              &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
              setUsers(response.data.items)
        store.dispatch({ type: 'LOADING_OFF'})
      } catch (error) {
        console.log(error)
      }
    }
    
    const clearUsers = ()=>{
      setUsers([])
      store.dispatch({ type: 'LOADING_OFF' })
    }

    const setAlert = (type, msg)=>{
      setAlertState({type, msg})
    }

    const getUser = async (username)=>{
      store.dispatch({ type: 'LOADING_ON' })
      try {
        const response = await instance.get(`https://api.github.com/users/${username}`)
        setUser(response.data)
        store.dispatch({ type: 'LOADING_OFF' })
      } catch (error) {
        console.log(error)
      }
    }

    const getRepos = async(username)=>{
      store.dispatch({ type: 'LOADING_ON' })
      try {
        const response = await instance.get(`https://api.github.com/users/${username}/repos`)
        setRepos(response.data)
        store.dispatch({ type: 'LOADING_OFF' })
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
                  <Provider store={store}>
                  <Route exact path="/" render={()=>(
                    <>
                      <Search 
                      searchUser={searchUser} 
                      clearUsers={clearUsers} 
                      showButtonClear={users.length > 0 ? true : false}
                      setAlert={setAlert}/>
                      <Users users={users}/>
                    </>
                  )}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/user/:username" render={props => (
                    <User {...props} 
                    getUser={getUser}
                    getRepos={getRepos}
                    repos={repos}
                    user={user}
                    />
                  )}/>
                  </Provider>
                </Switch>
          </div>
        </BrowserRouter>
    )
  
}

export default App;
