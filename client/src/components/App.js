import React from 'react'
import useLocalStorage from '../Hooks/useLocalStorage';
import Login from './Login'
import Dashboard from './Dashboard'
import {ContactsProvider} from '../Contexts/ContantsProvider'
import {ConversationsProvider} from '../Contexts/ConversationsProvider'
import {SocketProvider} from '../Contexts/SocketProvider'

function App() {
  const [id,setId]=useLocalStorage('id');
  
  const dashboard=(
    <SocketProvider id={id}>
    <ContactsProvider>
      <ConversationsProvider id={id}>
      <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
    </SocketProvider>
  )
  return (
    <div style={{backgroundColor:"#10100F"}}>
          {id ? dashboard : <Login onIdSubmit={setId} />}
    </div>
    
  ) 
}

export default App;
