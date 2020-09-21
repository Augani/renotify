import React from 'react'
import './css/tailwind.css'
import  {notify}  from "renotify-react";

function DefaultView(props) {
  return (
    <section className='flex flex-col items-center'>
      <div className='w-full flex flex-col items-center md:justify-center md:flex-row md:w-4/6 lg:w-1/2'>
        <div className='rounded-lg shadow-sm  lg:mr-4  my-4  w-4/5 md:w-2/5 flex flex-col p-2 lg:p-6 items-center'>
          <h1 className='text-xl lg:text-2xl text-pink-600 font-semibold'>
            Notifications
          </h1>
          <button
            onClick={() => props.set(1)}
            className='bg-pink-600 text-white my-2 lg:my-10 px-4 py-2 rounded-sm shadow-sm '
          >
            View Examples

          </button>
        </div>
        <div className=' rounded-lg shadow-sm  my-4 w-4/5 md:w-2/5 flex flex-col p-2 lg:p-6 items-center'>
          <h1 className='text-xl font-semibold lg:text-2xl text-purple-600'>
            Dialogs
          </h1>
          <button
            onClick={() => props.set(2)}
            className='bg-purple-600 text-white my-2 lg:my-10 px-4 py-2 rounded-sm shadow-sm '
          >
            View Examples
          </button>
        </div>
      </div>
      <div className='w-full flex flex-col items-center md:justify-center md:flex-row md:w-4/6 lg:w-1/2'>
        <div className=' rounded-lg shadow-sm  lg:mr-4  my-4 w-4/5 md:w-2/5 flex flex-col p-2 lg:p4 items-center'>
          <h1 className='text-xl lg:text-2xl text-yellow-600 font-semibold'>
            Tooltips
          </h1>
          <button
            onClick={() => props.set(3)}
            className='bg-yellow-600 text-white my-2 lg:my-10 px-4 py-2 rounded-sm shadow-sm '
          >
            View Examples
          </button>
        </div>
        <div className=' rounded-lg shadow-sm  my-4 w-4/5 md:w-2/5 flex flex-col p-2 lg:p4  items-center'>
          <h1 className='text-xl lg:text-2xl text-red-600 font-semibold'>
            Feature-show off
          </h1>
          <button
            onClick={() => props.set(4)}
            className='bg-red-600 text-white my-2 lg:my-10 px-4 py-2 rounded-sm shadow-sm '
          >
            View Examples
          </button>
        </div>
      </div>
    </section>
  )
}

function Notif(props) {
  const [values, setValues] = React.useState({
    type: 'default',
    origin: 'fromLeft',
    timeOut: 4
  })

  const Selected = (r, l) => {
    var t = r.target.value;
    
    if (l == "type") {
      setValues({...values, type: t})
    }else if(l == "origin"){
      setValues({...values, origin: t})
    }else if(l == "timeOut"){
      setValues({...values, timeOut: t||4})
    }
    
  }

  const Change = (t,l)=>{
    console.log(t.target.value,l)
    if(!t)t=0;
    if (l == "type") {
      setValues({...values, type: t})
    }else if(l == "origin"){
      setValues({...values, origin: t})
    }else if(l == "timeOut"){
      setValues({...values, timeOut: t})
    }
  }

  let code  = ` import {notify} from "renotify-react";

      notify.show({
        type: "${values.type}",
        origin: "${values.origin}",
        timeOut: "${values.timeOut}"
      })

  `;

  const NotifyUser = ()=>{
    notify.show({
      type: `${values.type}`,
      origin: `${values.origin}`,
      timeOut: `${values.timeOut}`
    })
  }
  return (
    <section className='w-full flex flex-col lg:px-14 py-8 relative items-center'>
      <button
        onClick={() => props.set(0)}
        className='bg-transparent text-gray-200 absolute top-0 left-0 m-3'
      >
        Back
      </button>
      <div className='w-full lg:w-3/4 grid lg:grid-cols-2 grid-cols-1 px-4 lg:px-28'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-1'>
          <div className='w-full flex flex-col '>
            <label
              htmlFor='type'
              className='text-xs text-gray-200 lg:text-xl my-2'
            >
              Select notification type
            </label>
            <select
              onChange={(e) => Selected(e, 'type')}
              id='type'
              className='h-10 text-gray-200 bg-transparent p-2'
            >
              <option value='default' selected className="text-gray-900">Default</option>
              <option value='success' className="text-gray-900">Success</option>
              <option value='warning' className="text-gray-900">Warning</option>
              <option value='info' className="text-gray-900">Info</option>
              <option value='danger' className="text-gray-900">Danger</option>
            </select>
          </div>
          <div className='w-full flex flex-col'>
            <label
              htmlFor='origin'
              className='text-xs text-gray-200 lg:text-xl my-2 '
            >
              Select notification origin
            </label>
            <select
              id='origin'
              onChange={(e) => Selected(e, 'origin')}
              className='h-10 text-gray-200 bg-transparent p-2'
            >
              <option value='fromLeft' selected className="text-gray-900">From Left</option>
              <option value='fromRight' className="text-gray-900">From Right</option>
              <option value='fromTop' className="text-gray-900">From Top</option>
              <option value='fromBottom' className="text-gray-900">From Bottom</option>
            </select>
          </div>
          <div className='w-full flex flex-col'>
            <label
              htmlFor='timeout'
              className='text-xs text-gray-200 lg:text-xl my-2 outline-none'
            >
              Select notification timeOut
            </label>
            <input
              id='timeout'
              type="number"
              onChange={(e) => Selected(e, 'timeOut')}
              placeholder={4}
              className='h-10 text-gray-200 bg-transparent p-2 border-2 border-white rounded-sm'
            />
            
          </div>
          <div className='w-full flex flex-col'>
            <label
              htmlFor='timeout'
              className='text-xs text-gray-900 lg:text-xl my-2 lg:flex hidden outline-none'
            >
              Select notification timeOut
            </label>
           
            <button onClick={NotifyUser} className="h-10 bg-green-800 lg:mb-0 mb-10 text-white">Notify</button>
          </div>
         
      
        </div>
        <div className='grid grid-cols-1 gap-2'>
          <textarea value={code} rows={10} readOnly className="bg-gray-800 rounded-sm w-full text-xs lg:text-xl p-0 lg:p-4 lg:m-4 h-full overflow-hidden text-yellow-400 outline-none">

          </textarea>
        </div>
      </div>
    </section>
  )
}

export default function Main() {
  const [view, setView] = React.useState(0)

  const whichView = (v) => {
    switch (v) {
      case 0:
        return <DefaultView set={setView} />
      case 1:
        return <Notif set={setView} />
      default:
        return <DefaultView />
    }
  }
  return (
    <div className='h-screen w-screen flex flex-col bg-gray-900'>
      <section className='w-full py-10 flex flex-col items-center'>
        <a href='/' className='text-2xl lg:text-4xl font-black text-green-500'>
          Renotify - react
        </a>
        <small className=' text-xs md:text-sm italic text-green-200'>
          A simple react library for modals using react portals
        </small>
        <hr className=' border-green-100 w-4/5 lg:w-1/2 md:w-2/3' />
      </section>
      {whichView(view)}
      <footer className='w-full flex flex-row justify-center fixed bottom-0 m-2'>
        <p className='text-gray-300'>
          Built with <strong className='text-red-600'>&#9829;</strong> by{' '}
          <a href='http://github.com/augani'>Augani</a>
        </p>
      </footer>
    </div>
  )
}
