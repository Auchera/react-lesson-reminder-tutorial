import React from "react"
import styles from './lesson.module.css';





const LessonCard = ({id,image,hour,name})=>{
    return(
        <div className={styles.card}>
            <p>{id}</p>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{hour}</p>
        </div>
    )
}



export default LessonCard;