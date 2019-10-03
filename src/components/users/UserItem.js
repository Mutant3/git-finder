/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropType from 'prop-types'
import {Link} from 'react-router-dom'
                    //props = {user: {avatar_url, login}}
const UserItem = ({ user: { avatar_url, login}}) =>{
        return (
            <div className="card" style={cardStyle}>
                <img
                src={avatar_url}
                style={{borderRadius: '40px', width: '70px'}}/>
                <h4>{login}</h4>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                        More
                    </Link>
                </div>
            </div>
        )

}

UserItem.propTypes = {
    user: PropType.object.isRequired
}

const cardStyle = {
    flex: '1 25%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    margin: '10px'
}

export default UserItem