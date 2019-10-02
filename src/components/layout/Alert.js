import React from 'react'

const Alert = ({alert}) => {
    if(alert == null){
        return <div>
            
        </div>
    }
    if(alert.type === 'danger'){
        return <div className="alert alert-danger alert-dismissible fade show" style={{width: '100%'}}
         role="alert">
                  <strong>●</strong> {alert.msg}
                 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>
             </div>
    }
    
}

export default Alert
