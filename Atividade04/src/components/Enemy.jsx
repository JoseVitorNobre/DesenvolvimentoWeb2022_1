import React from "react";
const Enemy = (props) =>{
    const {name, img} = props;
    return(
        <div>
            <h3>Enemy: {name}</h3> 
            <img src={img} />
        </div>
    )
}
export default Enemy;