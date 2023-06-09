import { useLayoutEffect } from "react";
import Return from "./Return";
import WideImageCard from "./WideImageCard";
import TitleCard from "./TitleCard";

const Schooling = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="container mb-5">
            <div className="row">
                <TitleCard pageTitle="Schooling" />
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
                    <img src={require("./assets/1200px-Brigham_Young_University–Idaho_medallion.svg.png")} alt="Brigham Young University Logo" className="byui" />
                    <h3>Bachelor of Science in Software Engineering</h3>
                    <ul>
                        <li>Graduated - Cum Laude</li>
                        <li>GPA - 3.946</li>
                        <li>Team Lead in the following classes:</li>
                        <ul>
                            <li>CSE 246 - Software Design & Development</li>
                            <li>CSE 340 - Web Backend Development</li>
                            <li>CSE 270 - Software Testing</li>
                        </ul>
                        <li>Internship & Senior Project:</li>
                        <ul>
                            <li>Location - <a href="https://www.streamit.live/" target="_blank" className="link">Stream It, Inc.</a> (Remote)</li>
                            <li>Timeline - 7 months</li>
                            <li>Responsibilities:</li>
                            <ul>
                                <li>Be mentored in Vue.js, React.js, and JSX</li>
                                <li>Build webpages that perform eCommerce functions</li>
                                <li>Learn to deploy applications via Node.js, NPM, and Firebase Hosting</li>
                            </ul>
                        </ul>
                    </ul>
                </WideImageCard>
            </div>
            <div className="row">
                <WideImageCard newId="readMore2" newTargetId="#readMore2">
                    <img src={require("./assets/codecademy.jpg")} alt="Codecademy Logo" className="byui" />
                    <h3>Codecademy<sup>TM</sup> Professional Certifications</h3>
                    <p>For the past two years, I have been pursuing additional certifications to augment my schooling experience, including learning additional programming languages and platforms and gaining Full-Stack Development expertise.</p>
                    <p>Through Codecademy, I have gained the following certifications:</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Git/GitHub</li>
                    </ul>
                    <p>Currently, I am pursuing a professional certification through Codecademy to become a certified Full-Stack Engineer. According to Codecademy, the certification process is designed to help students "build web applications from start to finish. This path will start with the front-end, move to the back-end, then connect the two."</p>
                    <p>For additional details regarding this certification process, please visit the <a href="https://www.codecademy.com/career-journey/full-stack-engineer" className="link" target="_blank">Full-Stack Engineer</a> page on the Codecademy website.</p>
                </WideImageCard>
            </div>
            <div className="row">
                <WideImageCard newId="readMore3" newTargetId="#readMore3">
                    <img src={require("./assets/mco_choir_and_orchestra.png")} alt="Brigham Young University Logo" className="byui" />
                    <h3>Millennial Choirs & Orchestra</h3>
                    <p>My vocal experience started in a community children's choir in which I participated for years. In my late teen and adults years, my experience includes singing in church choirs comprised of all-male and mixed female-and-male choirs with all four parts. I have also performed solos with accompaniment for Church Christmas events. In addition, I have experience with making a personal professional-grade recording in a recording studio. The recording consisted of me singing solo pieces with accompaniment.</p>
                    <p>I have recently joined the Millennial Choirs and Orchestra (MCO), singing in the Baritone section. Our focus is to sing hymns and other songs that point to the Reason for the Season. MCO also performs nationwide, going on tour once a year to locations such as Carnegie Hall to perform pre-selected hymns and other songs.</p>
                </WideImageCard>
            </div>
            <Return/>
        </div>
    );
}
 
export default Schooling;