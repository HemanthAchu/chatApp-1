// import React from 'react'
// import {Avatar,Image} from 'antd'

// export default function ChatBoxReceiver({avatar,user,message}) {
//   return (
//     <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'row'}} >

//       <Avatar size={50} 
//       src={<Image
//       src={avatar}
//       style={{
//         objectFit:'cover',
//         width:'45',
//         height:'45',
//         borderRadius:"100%"
//       }}
// preview={false}

//       />}/>
//       <p style={{padding:10,backgroundColor:'#dcf8c6',borderRadius:'10',maxWidth:"60%"}}>
//         <strong>
// {user}
//         </strong>
//         {message}
//       </p>


//     </div>
//   )
// }
// import React from 'react'

// export  function ChatBoxSender() {
//   return (
//     <div>
//     ChatBoxreceiver
//   </div>
//   )
// }

import React from 'react'
import { Avatar } from 'antd' // Only import Avatar from Ant Design

export default function ChatBoxReceiver({ avatar, user, message }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
            <Avatar size={30} src={avatar} /> {/* Pass avatar directly to src prop */}
            <p style={{
                padding: 10, backgroundColor: '#dcf8c6', borderRadius: 10, maxWidth: "60%",
            }}>
                <strong style={{ fontSize: 13, display: 'flex', justifyContent: 'flex-start' }}  >{user}</strong><br />
                {message}
            </p>
        </div>
    )
}

// Corrected import statement for ChatBoxSender
export  function ChatBoxSender({ avatar, user, message }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <Avatar size={30} src={avatar} /> {/* Pass avatar directly to src prop */}
            <p style={{
                padding: 16,margin:10, backgroundColor: '#dcf8c6', borderRadius: 10, maxWidth: "60%",
            }}>
                <strong style={{ fontSize: 13, display: 'flex', justifyContent: 'flex-start' }}  >{user}</strong><br />
                {message}
            </p>
        </div>
    )
}