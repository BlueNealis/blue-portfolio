import React, { useEffect } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./Project.module.scss"

const Project = ({title, technologies, img, deployed, features}) => {
    return(
        <div>
            <h1>{title}</h1>
            <Image alt={title} src={img} width={"60vw"} height={"45vh"}/>
            <p>{`${title} is built using ${technologies.map((tech) =>{ return `${tech}, `})}.`}</p>
            <ul>{features.map((feature) => {
                return (<li>{feature}</li>)
            })}</ul>
            <Link href={deployed}>Check out the project here</Link>
        </div>
    )
}