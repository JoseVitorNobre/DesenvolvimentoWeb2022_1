import React from "react";
const Arena = (props) =>{
    return(
        <div>
            {
                React.Children.map(
                    props.children,
                    (arena)=>{
                        return React.cloneElement(arena,{arena:props.arena})
                    }
                )
            }
        </div>
    )
}
export default Arena;