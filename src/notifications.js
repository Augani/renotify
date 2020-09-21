import React from 'react'
import styles from './styles.module.css'

export default Notification = ({ options }) => {
  console.log(options)
  let customStyle = options.style || {}
  let titleStyle = options.titleStyle || {}
  let subTitleStyle = options.subTitleStyle || {}
  let confirm = options.confirm || false
  let confirmText = options.confirmText || 'OK'
  let type = options.type ? options.type : 'default'
  let title = options.title ? options.title : Titles[type].title;
  let subTitle = options.subTitle? options.subTitle : "Subtitle example";
  let cancelText = options.cancelText? options.cancelText: "Cancel"

  return (
    <div
      style={{ ...customStyle, ...Colors[type] }}
      className={Animations[options.origin || 'fromLeft']}
    >
      <div  style={{ ...Colors[type] }} className={styles.renotifyHold}>
        <h6 style={titleStyle}>{title}</h6>
        <small style={subTitleStyle}>{subTitle}</small>
        {confirm ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'justify-around',
              width: "100%"
            }}
          >
            <button
              onClick={options.confirmAction}
              style={{
                fontWeight: 'bold',
                fontSize: '0.5em',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                marginTop: 3,
                marginBottom: 3,
                cursor: 'pointer',
                width: "50%",
                height: "1em"
              }}
            >
              {confirmText}
            </button>
            <button
              onClick={options.cancelAction}
              style={{
                fontWeight: 'bold',
                fontSize: '0.5em',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                marginTop: 3,
                marginBottom: 3,
                cursor: 'pointer',
                width: "50%",
                height: "1em"
              }}
            >
              {cancelText}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const Colors = {
  success: {
    backgroundColor: '#23C552',
    color: 'white'
  },
  danger: {
    backgroundColor: '#F84F31',
    color: 'white'
  },
  info: {
    backgroundColor: '#427DF8',
    color: 'white'
  },
  warning: {
    backgroundColor: '#C6A423',
    color: 'white'
  },
  default: {
    backgroundColor: '#FFFFFF',
    color: 'black'
  }
}

const Titles = {
  success: {
    title: 'Success!'
  },
  danger: {
    title: 'Error!'
  },
  info: {
    title: 'Note!'
  },
  warning: {
    title: 'Caution!'
  },
  default: {
    title: 'Notification'
  }
}

const Animations = {
  fromRight: styles.renotifyFR,
  fromLeft: styles.renotifyFL,
  fromTop: styles.renotifyFT,
  fromBottom: styles.renotifyFB
}
