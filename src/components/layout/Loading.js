import React, {Fragment} from 'react'
import loading from '../../assets/loading.gif'

const Loading = () =>{
    return (
       <Fragment>
            <img style={loadingStyle} src={loading} alt="loading..."/>
       </Fragment>
    )
}

const loadingStyle = {
    marginTop: '20%'
}

export default Loading