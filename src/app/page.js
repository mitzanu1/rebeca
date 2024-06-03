"use client"
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import Modal from '@/components/modal'
import _ from 'lodash'
import { mostre, despreMine1, despreMine2 } from '@/util/data'

export default function Home() {
  const [modalData, setModalData] = React.useState(undefined)

  return (
  <main>
    <section className={styles.main}>
      <nav>
        <ul className={styles.nav}>
          <li><Link href='#'>Despre Mine</Link></li>
          <li><Link href='#portfolio'>Portfolio</Link></li>
          <li><Link href='https://www.linkedin.com/in/rebeca-andreescu-207872207/' target='_blank'>CV</Link></li>
        </ul>
        <ul className={styles.social}>
          <li><SocialIcon url='https://www.facebook.com/rebeca.andreescu.165' target='_blank' /></li>
          <li><SocialIcon url='www.instagram.com' target='_blank'/></li>
          <li><SocialIcon url='https://www.linkedin.com/in/rebeca-andreescu-207872207/' target='_blank'/></li>
        </ul>
      </nav>
      <section className={styles.intro}>
        <div className={styles.flexcol}>
          <div className={styles.pic}>
            <Image 
              alt='Rebecca Andreescu'
              src='/rbk-no-bg.png'
              width={300}
              height={500}
              className={styles.rbk}
            />
          </div>
          <div className={styles.desc}>
            <h1>Rebecca Andreescu</h1>
            <p>Statistician. Data analist. Sociolog.</p>
          </div>
        </div>
        <section className={styles.txt}>
        <article>
            {despreMine1}
            <br />
            <br />
            {despreMine2}
        </article>
      </section>
      </section>
    </section>

    <section className={styles.portfolio} id='portfolio'>
      <h1>Portfolio</h1>
      <section className={styles.list}>
        {
          mostre.map((item, i)=>{
            const {img, text} = item

            return (
              <article 
                className={styles.card} 
                key={i}
                onClick={()=> setModalData(item)}
              >
                <Image 
                  alt={text}
                  src={img} 
                  width={350}
                  height={250}
                />
                <p>{text}</p>               
              </article>
            )
          })            
        }
      </section>
    </section>
   
    <footer className={styles.footer}>
      <h1>Made by Coden Techie</h1>
    </footer>

    {
      !_.isEmpty(modalData) &&
      <div>
        <div className={`${styles.overlay} ${styles.both}`}></div>
        <Modal data = {modalData}/>
        <div
          className={`${styles.overlay} ${styles.top}`}
          onClick={()=>setModalData(undefined)}
        ></div>
      </div>
    }
  </main>
  )
}
