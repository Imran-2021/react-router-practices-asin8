import React from 'react';

const Conditional = (props) => {
    let imageURL ='' ;
    if (props.gd==='Male'){
      imageURL = "https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-08/rsz_3o7a0111.jpg?itok=61kAMWcO"; 
    }
    
else{
      imageURL = "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F94803%2Fimage_5d70ff6794a94.jpg&h=360&w=640&t=square&q=87&o=jpg";
}
   
 return (
        <div>
           <img style={{width:'100%',paddingTop:'10%',paddingBottom:'10%'}} src={imageURL} alt="gender based imagee"/>
        </div>
    );
};

export default Conditional;