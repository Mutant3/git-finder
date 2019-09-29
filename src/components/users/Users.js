import React from 'react'
import PropType from 'prop-types'
import UserItem from './UserItem'
import Loading from '../layout/Loading'


const Users = ({users, loading})=> {
        if(loading){
            return <div style={usersStyles}>
                     <Loading/>
                   </div>
        }else{
            return(
                <div className="container" style={usersStyles}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            )
        }
}

Users.prototype = {
    loading: PropType.bool.isRequired,
    users: PropType.array.isRequired
}

const usersStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    justifyContent: 'center'
}

export default Users
