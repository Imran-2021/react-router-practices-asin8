import React, { useEffect, useState } from 'react'
import imagee from '../Images/sports.jpg'
import Name from '../Name/Name';
import '../App.css';
const Home = () => {
    const [names,setNames]=useState([]);
    useEffect(()=>{
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res=>res.json())
      .then(data =>{ 
        setNames(data.leagues.slice(0,32))
      })
    },[])
    const style={
        height: '400px',
        width: '100%',
        textAlign:'center',
        border:'1px solid red',
        objectFit: 'cover',
    }
    return (
        <div>
            <div className="topBar">
            <img style={style}  src={imagee} alt=""/>
            <h1 className='center'>Hello Sports</h1>
      </div>
        <div className='homedesign'>
          {
            names.map(name=><Name name={name}/>)
          }
         
    </div>
    
        </div>
    );
};

export default Home;