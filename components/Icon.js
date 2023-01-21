import React, { useEffect } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./Icon.module.scss"

const Icon = ({source, alt, width, height, type}) => {
    const [styleClass, setClass] = useState(styles.techIcon)
    useEffect(() => {
        type === "social" ? setClass(styles.socialIcon) : setClass(styles.techIcon)
    }, [])

    return(
    <Image className={styleClass} src={source} alt={alt} width={width} height={height}/>
        )
}

export default Icon