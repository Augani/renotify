import React from 'react'
import ReactDOM from 'react-dom'
import './styles.module.css'
import Notify from './notifications'
const Body = function () {
  let bd = document.getElementsByTagName('body')[0]
  let el = document.createElement('div');
  el.style.overflow = "hidden";
  bd.appendChild(el)
  return el
}

export const notify = {
  show: function (options) {
    var successEvent = new CustomEvent('renotify', { detail: options })
    document.dispatchEvent(successEvent)
  }
}

class Main extends React.Component {
  state = {
    id: this.props.id ? this.getEl(this.props.id) : Body,
    content: null
  }

  getEl(id) {
    let el = document.getElementById(id)
    el.style.overflow = "hidden";
    return el;
  }

  getListen() {
    let self = this
    document.addEventListener('renotify', function (c, opt) {
      let options = c.detail
     
      options.cancelAction = function () {
        self.removeContent()
      }
      self.setState({
        content: <Notify options={options} />
      })

      let time = options.timeOut ==="0" || options.timeOut ===0 ?null: options.timeOut; 
      if (!time)return;
      time = parseInt(time) * 1000;
     
      setTimeout(() => {
        self.removeContent()
      }, time)
    })
  }

  removeContent() {
    var self = this
    this.setState({
      ...self.state,
      content: null
    })
  }

  componentWillUnmount() {
    document.removeEventListener('renotify', function () {})
  }

  componentDidMount() {
    this.getListen()
  }
  render() {
    return ReactDOM.createPortal(this.state.content, this.state.id)
  }
}

export default Main
