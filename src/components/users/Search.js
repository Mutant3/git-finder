import React, { Component } from 'react'
import PropType from 'prop-types'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        }
    }
    
    static propTypes = {
        searchUser: PropType.func.isRequired
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({text : ''})
    }

    handleChange = e => this.setState({ text: e.target.value})

    render() {
        return (
            <div className="container" style={{marginTop: '15px'}}>
                <form>
                    <div className="form-group">
                        <input type="search" 
                        style={{border: '1.5px solid black'}} 
                        className="form-control" 
                        placeholder="Search user..."
                        onChange={this.handleChange}
                        />

                        <input type="submit" 
                        style={{marginTop: '10px'}} 
                        value="Search" 
                        className="btn btn-dark btn-block"
                        onClick={this.handleSubmit}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default Search