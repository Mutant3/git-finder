import React from 'react'
import loading from '../../assets/loading.gif'

const Loading = () =>{
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <img style={loadingStyle} src={loading} alt="loading..."/>
        </div>
    )
}

const loadingStyle = {
    marginTop: '20%'
}

export default Loading