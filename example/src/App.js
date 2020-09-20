import React from 'react'

import Renotify, {notify, Dialog}  from 'renotify'
import 'renotify/dist/index.css'

const App = () => {
  const press = ()=>{
    notify.show({
      title: "Ama is online",
      subTitle: "Want to chat with her?",
       // backdrop: true,
      // origin: "fromRight",
      type: "warning",
      confirm: true,
      confirmText: "Yes",
      cancelText: "No",
      timeOut: false,
      style:{
        width: "200px"
      }
    })
  }

 
  return (
    <>
     <p>Hello</p>
      <button onClick={press}>press here</button>
     
      
      <Renotify id="modal-root"/>
      </>
  )
}

export default App
