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
                <TitleCard pageTitle="Education" />
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
                    <img src={require("./assets/1200px-Brigham_Young_University–Idaho_medallion.svg.png")} alt="Brigham Young University Logo" className="byui" />
                    <h3>Bachelor of Science in Software Engineering</h3>
                    <ul>
                        <li>Graduated - Cum Laude</li>
                        <li>GPA - 3.946</li>
                        <li>Course Team Lead:</li>
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
                    <p>Completed certifications:</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Git/GitHub</li>
                        <li>React</li>
                        <li>C#</li>
                    </ul>
                    <p>In-Progress certifications:</p>
                    <ul>
                        <li>Full-Stack Engineer</li>
                    </ul>
                </WideImageCard>
            </div>
            <Return/>
        </div>
    );
}
 
export default Schooling;