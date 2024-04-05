import React, { useEffect, useState } from 'react'
import sorketIo from "socket.io-client"
import UserLogin from './UserLogin'
import ChatBoxReceiver, { ChatBoxSender } from './ChatBox'
import InputText from './InputText'
function ChatContainer() {

  let socketio =sorketIo("https://chatapp-server-1-yenf.onrender.com")
  const [chats,setchats] =useState([])
  const [user,setuser] = useState(localStorage.getItem("user"))
  const [avatar,setAvatar] = useState(localStorage.getItem('avatar'))

useEffect(()=>{
  socketio.on('chat',senderChats=>{
    setchats(senderChats)
  })
},[])

const sendChatToSocket=(chat)=>{
   socketio.emit("chat",chat)
}

const addMessage=(chat)=>{
  const newchat ={...chat ,user,avatar}
  setchats([...chats,newchat])
  sendChatToSocket([...chats,newchat])
}

const logout=()=>{
localStorage.removeItem('user')
localStorage.removeItem('avatar')
setuser('')
}


const Chatslist = ()=>{
  return chats.map((chat,index)=>{
    if(chat.user ===user)return<ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} user ={chat.user} />
    return <ChatBoxReceiver key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
  })
}


  return (
    <div>
      {user?
      <div>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
<h4>UserName : {user}</h4>
<p onClick={()=>logout()} style={{color:"blue",cursor:'pointer'}} >Log Out</p>
</div>
<Chatslist/>
<InputText addMessage={addMessage} />
      </div>
        :<UserLogin setuser={setuser} />}
    </div>
  )
}

export default ChatContainer
