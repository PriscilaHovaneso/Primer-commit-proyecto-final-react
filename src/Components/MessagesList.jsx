import React from "react";
import Message from "./Message/Message";

const MessagesList = ({messages, deleteMessageById}) => {
  if(message.length === 0) {
    return <span>No hay mensajes</span>
  }
  
  const lista_mensajes = messages.map(
    function (message) {
      return <Message
        key={message.id}
        emisor={message.emisor}
        hora={message.hora}
        id={message.id}
        texto={message.texto}
        status={message.status}
        />
    }
  )


  return (
    <div>
      
      {lista_mensajes}
    </div>
  )
}

export  {MessagesList};


