/* eslint-disable */
import React, { useEffect} from 'react';
import {Link} from 'react-router-dom'
import Loading from '../layout/Loading'
import '../../styles/User.css'

const User = ({match, getUser, getRepos, user, repos, loading})=>{
    useEffect(()=>{
        getUser(match.params.username)
        getRepos(match.params.username)
    }, [])
    
        const {
            name,
            login,
            avatar_url,
            location,
            bio,
            html_url,
            followers,
            following,
            public_repos
        } = user
        
        if (loading) return <Loading />
        else
        return (
            <div>   
                <Link to="/" className="btn btn-light" style={{margin: '10px'}}>Back to Home</Link>
                <div className="container" id="user">
                    <h3 className="mt-5" style={h3Style}>{login}</h3>
                    <div className="profile">
                        <div className="container" id="about">
                            <div className="profile-img">
                                <img src={avatar_url} style={{border: '1px solid black', borderRadius: '10px'}} width="260px" height="250px"></img>
                            </div>
                            <div id="bio">
                                <ul className="list-group" >
                                    <li className="list-group-item active bg-dark"><strong>Bio</strong></li>
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td>{bio == null? "there is no biography.": bio}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </ul>
                                <button className="btn btn-primary" onClick={()=> window.open(html_url)} style={{margin: '10px'}}>Profile Github</button>
                            </div>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item active bg-dark"><strong>Informations</strong></li>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>{location}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Followers</th>
                                        <td>{followers}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Following</th>
                                        <td>{following}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Public Repos</th>
                                        <td>{public_repos}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </ul>
                            <h3 style={{textAlign: 'center'}}>Repositories</h3>
                            {repos.map(repo=>(
                                <a key={repo.id} href={`https://github.com/${match.params.username}/${repo.name}`} 
                                style={{fontSize: '18px', margin: '10px'}} 
                                className="badge badge-info">{repo.name}</a>
                            ))}
                    </div>
                </div>
            </div>
        )
    
}

const h3Style = { 
    borderLeft: '2px solid blue', 
    padding: '5px' 
}

export default User
