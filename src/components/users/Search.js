import React, {useState} from 'react'
import PropType from 'prop-types'

const Search = ({ setAlert, searchUser, clearUsers, showButtonClear})=> {
    const [text, setText] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setAlert('danger', 'Please, search is not be empty')
        }else{
            searchUser(text)
            setText('')
        }
    }
    
    const handleChange = e => setText(e.target.value)

        return (
            <div className="container" style={{marginTop: '15px'}}>
                <form>
                    <div className="form-group">
                        <input type="search" 
                        style={{border: '1.5px solid black'}} 
                        className="form-control" 
                        placeholder="Search user..."
                        onChange={handleChange}
                        />

                        <input type="submit" 
                        style={{marginTop: '10px'}} 
                        value="Search" 
                        className="btn btn-dark btn-block"
                        onClick={handleSubmit}
                        />
                
                        {showButtonClear && 
                        <button 
                        style={{ width: '100%', marginTop: '10px' }}
                        onClick={clearUsers} 
                        type="button"
                        className="btn btn-light">Clear</button>}                        
                    </div>
                </form>
            </div>
        )
}

Search.propTypes = {
    searchUser: PropType.func.isRequired,
    clearUsers: PropType.func.isRequired,
    showButtonClear: PropType.bool.isRequired,
    setAlert: PropType.func.isRequired
}

export default Search
