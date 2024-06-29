import React from 'react'

const SecondaryButton = ({title}) => {
  return (
    <span type="submit" style={{width:"auto", borderRadius:"8px", border: "1px solid #008095" ,backgroundColor:"white", color:"#008095"}} className="login-btns py-2 px-4">
    {title}
  </span>
  )
}

export default SecondaryButton