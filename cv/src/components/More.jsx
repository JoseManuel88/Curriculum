import React from 'react'
import "./More.css";
export const More = ({languages, habilities, volunteer}) => {
  return (
  <div>
    <div className='more_2'>
      <div className='more_3'>
      <div>Languages</div>
    <p>{languages.language}</p>
    <p>{languages.wrlevel}</p>
    <p>{languages.splevel}</p>
      </div>
    <div className='more_3'>
        <div>Habilities</div>
        <p>{habilities[0]}</p>
        <p>{habilities[1]}</p>
        <p>{habilities[2]}</p>
        
    </div>
   
    </div>
    <div>
        <div className='volunter'>More About Me..</div>
        <div>
        <p>{volunteer[0].name}</p>
      <p>{volunteer[0].where}</p>
      <p>{volunteer[0].description}</p>
        </div>
        <div>
        <p>{volunteer[1].name}</p>
      <p>{volunteer[1].where}</p>
      <p>{volunteer[1].description}</p>
        </div>
        
      
    </div>
    

  </div>
    
  )
}

export default More