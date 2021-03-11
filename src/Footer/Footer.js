import React from 'react';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = (props) => { 
    const {facebook,twitter,youtube}=props
    return (
       
<div>
        <div className='footer'>
            <ul>
                <li className="left"><a target="_blank" href={`https://${facebook}`}><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className="left"><a target="_blank" href={`https://${twitter}`}><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li className="left"><a target="_blank" href={`https://${youtube}`}><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
            </div>  
        </div>
        
    );
};

export default Footer;