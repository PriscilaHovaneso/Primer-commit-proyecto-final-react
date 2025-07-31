import React, { useState } from 'react'
import {MessagesList} from '../../Components/MessagesList'
import {NewMessageForm} from '../../Components/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router'


const ChatScreen = () => {
    
    
 const {contact_id} =   useParams ()

 const contact_selected = getContactById (contact_id)

 const [messages, setMessages] = useState(contact_selected.message)

 
    
    const [messages, setMessages] = useState([])
const deleteMessageById = (message_id) => {
        const new_message_list = []

        for(const message of messages) {
            if(message.id !== message_id){
                new_message_list.push(message)
            }
        }
        setMessages(new_message_list)
    }
return (
    <div>
        <h1>Mensajes:</h1>
        {
            messages.length > 0
            &&
            <button  onClick ={deleteMessageById}>Eliminar primer mensaje</button>
        }
        <MessagesList messages={messages} deleteMessageById={deleteMessageById}/>
        <NewMessageForm addNewMessage={addNewMessage}/>
       
    </div>
   
  )
}

export default ChatScreen

