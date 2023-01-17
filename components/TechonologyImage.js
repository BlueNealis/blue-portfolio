import React from "react"
import Image from "next/image"
import styles from "./TechnologyImage.module.css"

const TechnologyImage = ({source}) => {
    return(
    <Image className={styles.icon} href={source}></Image>)
}

export default TechnologyImage