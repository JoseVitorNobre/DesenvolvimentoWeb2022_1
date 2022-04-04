import React from "react";
const Hero = (props) =>{
    const {name, img} = props;
    return(
        <div>
            <h3>Hero: {name}</h3>  
            <img src={img} />
            <h3>VS</h3>
        </div>
    )
}
export default Hero;