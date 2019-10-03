/* eslint-disable */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Loading from '../layout/Loading'
import '../../styles/User.css'

export default class user extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
    }

    render() {
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
        } = this.props.user
        const { loading } = this.props

        if (loading) return <Loading />
        return (
            <div>   
                <Link to="/" className="btn btn-light" style={{margin: '10px'}}>Back to Home</Link>
                <div className="container">
                    <h3 className="mt-5" style={{ borderLeft: '2px solid blue', padding: '5px' }}></h3>
                    <div className="profile">
                        <div className="profile-img">
                            <img src="as" width="260px" height="250px"></img>
                        </div>

                        <ul className="list-group">
                            <li className="list-group-item active"><strong>Status</strong></li>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
