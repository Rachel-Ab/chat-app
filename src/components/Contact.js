import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }




  render() {
  return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />

        <p className="name">{this.props.name}</p>
        <div className="status" onClick={event => {const newStatus = !this.state.online;
        this.setState({online: newStatus});}}>
          <div
            className={this.state.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">{this.state.online ? "online" : "offline"}</p>
        </div>
      </div>
    );
  }
}

   Contact.propTypes = {
     name: PropTypes.string.isRequired,
     avatar: PropTypes.string.isRequired,
     online: PropTypes.bool.isRequired
   };


  export default Contact;





