import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import Lesson from "./pages/Lesson";
import { data } from "./helper/data";
import React from "react";


function App() {
  return (
    <div className="App">
      <Header/>
      <Lesson/>
      <LessonCard/>

    </div>
  );
}

export default App;
