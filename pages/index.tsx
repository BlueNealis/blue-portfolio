import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import technologies from '../public/technolgies'
import TechnologyImage  from '../components/TechnologyImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Nealis' Portfolio</title>
        <meta name="description" content="Scrolling portfolio page of software developer Blue Nealis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={styles.socialBar}>
            <img></img>
            <img></img>
            <img></img>
          </div>
          <button className={styles.contactButton}>Contact Me!</button>
          <div className={styles.landingSection}>
              <div className={styles.logoContainer}>
                <Image className={`${styles.logoImage} ${styles.circleFour}`} height="150" width="150" src="/CircleFour.png" alt="circle"/>
                  <Image className={`${styles.logoImage} ${styles.circleTwo}`} height="200" width="200" src="/CircleTwo.png" alt="circle"/>
                  <Image className={`${styles.logoImage} ${styles.circleOne}`} height="150" width="150" src="/CircleOne.png" alt="circle"/>
                  <Image className={`${styles.logoImage} ${styles.circleThree}`} height="75" width="75" src="/CircleThree.png" alt="circle"/>
                  <Image className={`${styles.logoImage} ${styles.ovalOne}`} height="120" width="170" src="/OvalOne.png" alt="oval"/>
              </div>    
              <div className={styles.container}>
                <h1 className={styles.welcomeText}> Welcome! I'm Blue Nealis, a software developer</h1>
              </div>
        </div>
        <div className={styles.projectSection}>

        </div>
        <div className={styles.technologySection}> 
          <h1>Technologies</h1>

          <h2>Used:</h2>
            {technologies.map((url) => {
              return <TechnologyImage source={url} />
            })}
          <h2>Learning:</h2>
        </div>
        <div className={styles.bioSection}> 

        </div>
        <div className={styles.contactMeSection}> 
          <form>
            <label>Your Name:</label>
            <input></input>
            <label>E-mail:</label>
            <input></input>
            <label>Message:</label>
            <input></input>
          </form>
        </div>
      </main>
    </>
  )
}
