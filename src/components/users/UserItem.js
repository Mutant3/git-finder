/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import PropType from 'prop-types'
                    //props = {user: {avatar_url, login, html_url}}
const UserItem = ({ user: { avatar_url, login, html_url}}) =>{
        return (
            <div className="card" style={cardStyle}>
                <img
                src={avatar_url}
                style={{borderRadius: '40px', width: '70px'}}/>
                <h4>{login}</h4>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>
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