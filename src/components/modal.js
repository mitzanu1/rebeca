import React from 'react'
import _ from 'lodash'
import styles from './modal.module.css'
import Image from 'next/image'

function Modal(props) {
  const {data} = props || {}
  const {text, img} = data || {}

  return (
    <div  className={styles.modal}>
      <div>
        <Image 
          alt={text}
          src={img} 
          width={1400} 
          height={800}
        />
      </div>
    </div>
  )
}

export default Modal