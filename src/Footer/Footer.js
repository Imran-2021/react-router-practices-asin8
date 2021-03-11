import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = (props) => { 
    const {facebook,twitter,youtube}=props
    return (
       
<div>
        <div className='footer'>
            <ul>
                <li className="left"><a target="_blank" rel="noopener noreferrer" href={`https://${facebook}`}><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className="left"><a target="_blank" rel="noopener noreferrer" href={`https://${twitter}`}><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li className="left"><a target="_blank" rel="noopener noreferrer" href={`https://${youtube}`}><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
            </div>  
        </div>
        
    );
};

export default Footer;