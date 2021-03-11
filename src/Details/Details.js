import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'
import Image from '../Images/null.jpg'
import Conditional from '../Conditional/Conditional';
import Footer from '../Footer/Footer';
import Icon1 from '../Icon/found 1.png'
import Icon2 from '../Icon/football (1) 1.png'
import Icon3 from '../Icon/flag (1) 1.png'
import Icon4 from '../Icon/male-gender-sign 1.png'
const Details = () => {
    const {abc}=useParams();
    const [details,setDetails]=useState([]);
    useEffect(()=>{
      fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${abc}`)
      .then(res=>res.json())
      .then(data =>{ 

        setDetails(data.teams[0])
      })
    },[abc])
    const style={
    height: '400px',
    width: '100%',
    textAlign:'center',
    border:'1px solid red',
    objectFit: 'cover',
    opacity: '0.5'
}
    
    return (
        <div>
            <div>
            <img style={style} src={details.strStadiumThumb || Image} alt=""/>
            <img className='centered '   src={details.strTeamLogo||details.strTeamBanner ||details.strTeamBadge} alt=""/>
            </div>
            <div className='maindiv'>
    <div className="half3">
    
        <h1>{details.strLeague}</h1>
        <h2> <img style={{width:'25px',backgroundColor:'blue'}} src={Icon1}/> Founded : {details.intFormedYear}</h2>
        <h2> <img style={{width:'25px',backgroundColor:'blue'}} src={Icon3}/> Country : {details.strCountry}</h2>
        <h2> <img style={{width:'25px',backgroundColor:'blue'}} src={Icon2}/> Sport Type : {details.strSport}</h2>
        <h2> <img style={{width:'25px',backgroundColor:'blue'}} src={Icon4}/> Gender : {details.strGender}</h2>
        
        </div>
        <div className='half half2'>
            <Conditional gd={details.strGender}/>
    </div>
    </div>
        <div className='description'>
            <p>{details.strStadiumDescription}</p>
            <p>{details.strDescriptionEN}</p>
        </div> 
        <div style={{textAlign:'center'}}>
            <Footer facebook={details.strFacebook} twitter={details.strYoutube} youtube={details.strTwitter}/> 
        </div>
              
    </div>
    );
};

export default Details;