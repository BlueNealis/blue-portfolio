import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import  { technologies, learning}  from '../public/technologies'
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
            <Link target="_blank" href="https://github.com/BlueNealis">
              <Image className={styles.socialIcon} alt="github social" width={50} height={50} src="/../public/github.png"/>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/blue-nealis/">
              <Image className={styles.socialIcon} alt="linkedin social"  width={50} height={50} src="/../public/linkedin.png"/>
            </Link>
            <Image className={styles.socialIcon} alt="art website"  width={50} height={50} src="/../public/art-gallery.png"/>
          </div>
          <Link href="#landing" className={styles.home}>
            <h1>Home</h1></Link>
          <button className={styles.contactButton}>Contact Me!</button>
          <div id="landing" className={styles.landingSection}>
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
              <div className={styles.actionBar}>
                <Link href="#projectSection" className={styles.anchor}>My Work</Link>
        
                <Link  href="#technologies" className={styles.anchor}>Technologies</Link> 
              
                <Link href="#bioSection" className={styles.anchor}>About Me</Link> 
          
                <Link href='/resume.pdf' target="_blank" className={styles.anchor}>My Resume</Link> 
      
                <Link href="#contactSection" className={styles.anchor}>Get in Touch</Link>
              </div>
        </div>
        <div id="projectSection" className={styles.projectSection}>
          <h1 className={styles.sectionTitle}>Projects</h1>
    

        </div>
        <div id="technologies" className={styles.technologySection}> 
          <h1>Technologies</h1>
          <div className={styles.technologyBlock}>
            <h2>Used:</h2>
              {technologies.map((url) => {
                return <TechnologyImage source={url} />
              })}
              </div>
          <h2>Learning:</h2>
            {learning.map((url) => {
              return <TechnologyImage source={url} />
            })}
        </div>
        <div id="bioSection" className={styles.bioSection}> 
            <h1>About Me</h1>
            <Image src="/../public/miniSelf.png" alt='cartoon self portrait' width={300} height={300}/>
            <p>Blue is an artist animator turn Software Engineer! 2020 came with many changes and I decided to try out coding after
              talking to my brother-in-law about the free courses available at Stanford. After practicing on my own through a few classes I knew it was something I loved. 
              I went forward with a 7 month intensive to further my learning. I love programming, problem solving, and creativity. 
            </p>
        </div>
        <div id="contactSection" className={styles.contactMeSection}> 
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
