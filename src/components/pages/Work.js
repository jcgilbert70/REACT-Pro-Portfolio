import React from 'react';
import Project from '../Projects';
import canny from '../../img/CANNY.PNG';
import iss from '../../img/news-by-ISS-project.PNG';
import mealTrain from '../../img/Meal-Train.PNG';
import '../../styles/Work.css';


const project = [
    {
        link: 'https://meal-train-ab.herokuapp.com/',
        repo: 'https://github.com/TrilogyHi5/meal-train.git',
        img: mealTrain,
        caption: 'Meal Train',
    },   
    {
        link: 'https://canny.herokuapp.com/',
        repo: 'https://github.com/CannyCreators/canny.git',
        img: canny,
        caption: 'Canny',
    },    
    {
        link: 'https://teamjustalright.github.io/iss-tracker/',
        repo: 'https://github.com/teamJustAlright/iss-tracker.git',
        img: iss,
        caption: 'News by ISS',
    },

];

function Work() {

    return (

        <>
            <header>
                <h2>Work</h2>
            </header>
            <article className="section-content work">
                <Project project={project} />
            </article>
        </>
    );
}

export default Work;