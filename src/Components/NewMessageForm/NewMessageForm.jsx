import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handldeSubmitSendMessageForm = (event) => {
       event.preventDefault()
       let new_message_text = event.target.message.value
       addNewMessage(new_message_text)
       event.target.message.value = ''

  }

    return (
        <form onSubmit= {handldeSubmitSendMessageForm}>
            <div>
                <label htmlFor="message">Mensaje...</label>
                <input 
                type= 'text' 
                placeholder='Mensaje...' 
                id='message' 
                name='message' 
                required />
            </div>
            <button type='submit'>Enviar mensaje</button>
        </form>
    );
};

export default NewMessageForm   
    


