import React from 'react'

const PrimaryButton = ({title,width}) => {
  return (
    <button type="submit" style={{width:"auto", borderRadius:"8px",backgroundColor:"#008095", color:"white", border:"none"}} className="login-btns py-2 px-4">
              {title}
            </button>
  )
}

export default PrimaryButton