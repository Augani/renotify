import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export default function Dialog(props) {
  return (
    <div className={styles.reDialogBack}>
      <div
        className={`${styles.reDialog}  ${props.className}`}
        style={props.style}
      >
        {props.children}
        <div className={styles.reDialogFooter}></div>
      </div>
    </div>
  )
}

Dialog.propTypes = {
  showFooter: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  footerActions: PropTypes.true
}
