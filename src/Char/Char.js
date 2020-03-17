import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {
   const {char, changed} = props
    return (
       
       <div className="charComp" onClick={changed}>
           <p>{char}</p>
       </div>
   )
}

export default CharComponent;