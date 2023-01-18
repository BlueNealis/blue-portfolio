import React from "react"
import Image from "next/image"
import styles from "./TechnologyImage.module.css"

const TechnologyImage = ({source}) => {
    return(
    <Image className={styles.icon} src={source} alt='technology icon' width={'250'} height={'75'}></Image>
        )
}

export default TechnologyImage