import React, {useState} from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes} from 'react-router'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route 
            path='/' 
            element={<ContactScreen/>}
            />
        <Route 
            path='/contacts/:contact_idmessages' 
            element={<ChatScreen/>}/>
      </Routes>
     
      
    
    </div>
  )
}

export default App

