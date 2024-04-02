import React from 'react'

const Testing = () => {
let email = document.getElementById('emailid').value;

const signin = ()=>
{
    alert(email)
}
  return (
    <div>
      <input type="text"  id='emailid'/>
      <button onClick={()=>signin}>signup</button>
    </div>
  )
}

export default Testing
