import { Flex } from 'antd'
import React, { useState } from 'react'

function InputText({addMessage}) {

  const [message ,setmessage] =useState('')

const addAMessage = ()=>{

  addMessage({
    message
  })

  setmessage('')
}

  return (
    <div style={{display:"flex",justifyContent:'space-evenly',alignItems:'center'}}>
      <textarea style={{width:'60%',height:'50px',borderRadius:10,borderWidth:0,padding:10,fontSize:18}}
      rows={6}
      placeholder='Write Something....'
      value={message}
      onChange={(e)=>setmessage(e.target.value)}
      ></textarea>
      <button style={{color:"white",backgroundColor:"gray",border:'none',padding:"17px",borderRadius:'30px'}} onClick={()=>addAMessage()} >Send</button>
    </div>
  )
}

export default InputText
