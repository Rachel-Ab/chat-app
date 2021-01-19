import React from 'react';
import './Contact.css';
const online = true;
    function Contact () {
        return (
        
                <div className="Contact">
                    <img className="avatar" src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="picture of a women"/>
                <div className="name"><p>Eleanor Washington</p></div>
                <div className="status">
                    <div className="status-online">
                        <p className="status-text">online</p>
                    </div>
                </div>
            </div>
        )
    }

export default Contact;





