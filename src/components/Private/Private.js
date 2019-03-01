import React, { Component } from 'react';
import './Private.css';
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser, clearUser} from './../../ducks/reducer'


class Private extends Component {
  componentDidMount(){
    this.getUser()
  }

  getUser = async () => {
    const {id} = this.props
    if (!id) {
      try{
        let res = await axios.get('/api/current')
        this.props.updateUser(res.data)
          
    
        } catch (err) {
          this.props.history.push('/')
    
        }
    } 
  }

  logout = async () => {
    await axios.post('/auth/logout')
    this.props.clearUser()
    this.props.history.push('/')
  }

  render() {
    const {username, img, balance} = this.props
    return (
      <div className="Private">
      <button onClick={this.logout}>Logout</button>
      <h1>{username}</h1>
      <img src={img} alt='user' style={{"height" : "200px", "width" : "200px"}}  />
      <p>{balance}</p>
      
      </div>
    );
  }
}

const mapStateToProps  = reduxState => {
  return reduxState
}
const mapDispatchToProps = {
  updateUser, 
  clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Private);
