import React from "react";
import { data } from "../helper/data";
import LessonCard from "../components/LessonCard/LessonCard";
import styles from '../components/LessonCard/lesson.module.css';


const Lesson = () =>{
    return(
        <main className="blackwhite">
            <h1 style={{textAlign:"center"}}>Lesson Reminder</h1>
            <div className={styles.cardContainer}>
            {data.map(lesson => (
        <LessonCard
          id={lesson.id}
          name={lesson.name}
          hour={lesson.hour}
          image={lesson.image}
        />
      ))}
            </div>
        </main>
    )
}

export default Lesson;