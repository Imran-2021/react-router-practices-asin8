import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../Images/images.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Name.css'

const Name = (props) => {
    const {strLeague,idLeague,strSport}= props.name
    return (
        <div className='manik'>
            <img  src={Images} alt=""/>
            <div style={{height:'130px'}}>
               <h3 style={{height:'60px'}} >{strLeague} </h3>
            <h4>Sports Type: {strSport}</h4> <br/> 
            </div>
            
            <button className='btn btn-dark '><Link to={`/Details/${idLeague}`}>Explore <FontAwesomeIcon icon={faArrowRight} /></Link></button>
        </div>
    );
};

export default Name;