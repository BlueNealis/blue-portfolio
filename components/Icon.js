import React from "react"
import Image from "next/image"
import styles from "./Icon.module.css"

const Icon = ({source, alt, width, height, type}) => {
    return(
    <Image className={styles.icon} src={source} alt={alt} width={width} height={height}></Image>
        )
}

export default Icon