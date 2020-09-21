import React from 'react'

import Renotify, {notify, Dialog}  from 'renotify-react'
import 'renotify-react/dist/index.css'
import Main from './main'

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
     <Main/>
      <Renotify id="modal-root"/>
      </>
  )
}

export default App
