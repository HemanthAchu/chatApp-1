import React, { useState } from 'react'
import { CommentOutlined } from '@ant-design/icons';
import _ from 'lodash'

function UserLogin({setuser}) {
  const [user,setAuser]=useState('')

  const handlesetUser=()=>{
    if(!user) return
    localStorage.setItem("user",user)
    setuser(user)
    localStorage.setItem("avatar",`https://picsum/id/${_.random(1,1000)}/200/300`)
  }

  return (
    <div>
      <h1 style={{margin:10,textAlign:'center'}}>

        <CommentOutlined color='green'/>
        ChatApp
      </h1>
      <input style={{margin:10,height:30,width:'25',borderRadius:10,padding:'10px',border:'none',fontSize:16}} 
      value={user}
      onChange={e=>setAuser(e.target.value)}
      placeholder='Write a random name'
      />
      <button onClick={()=>handlesetUser()} style={{color:'white',backgroundColor:"green",border:"none",padding:"10px",borderRadius:"10px"}} >login</button>
    </div>
  )
}

export default UserLogin
