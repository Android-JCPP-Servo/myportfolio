import TitleCard from './TitleCard';
import WideImageCard from './WideImageCard';
import Return from './Return';
import { useLayoutEffect } from "react";
import Container from './Container';

const Projects = () => {
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0);
    // });
    return (
        <Container>
            <TitleCard pageTitle="Projects"></TitleCard>
            <WideImageCard newId="readMore1" newTargetId="#readMore1">
                <img src={require("./assets/jack_icon.jpg")} alt="Jack Symbol" className="streamit"/>
                <h3>JACK - Personal Voice Assistant (AI)</h3>
                <p>JACK was created for two reasons:</p>
                <ol>
                    <li>Machine Learning cirriculum taught in the BYU - Idaho CSE 453 course</li>
                    <li>Interest in a voice assistant that could use custom voices</li>
                </ol>
                <p>Ever since I purchased a new smart phone, I wanted to change Bixby's voice by using custom sounds. The R4-P17 sound effects from Star Wars always fascinated me, particularly when the Astromech would perform communication functions. I searched for a way to integrate the Astromech's sound effects, but could not find an application that was capable of such an action. I then decided to create a voice assistant that would be capable of using such sound effects.</p>
                <p>Basing my work off the cirriculum taught in the BYU-Idaho CSE 453 course, I found several tutorials that taught how to use Speech Recognition in Python programs. In addition, I found the sound bits for R4-P17 that matched what I was looking for, and integrated them into the program.</p>
                <p>After about 2-3 months of programming and testing, JACK can now send emails to several clients, compose/edit/delete documents, open desktop applications, and open different kinds of webpages based on the input I provide.</p>
                <p>Recently, this version of JACK has had slowed performance, so I have begun redesigning the program to use smaller modules and programs while still using Speech Recognition AI and other essential AI Python libraries.</p>
                <p>The following are the tutorials used to design JACK, as well as the sound bits from Star Wars.</p>
                <p><b>Note: I own none of the Star Wars or Python tutorial content. The original owners are also listed for credibility.</b></p>
                <ul>
                    <li><a className="link" href="https://www.youtube.com/watch?v=SXsyLdKkKX0&list=PL7yh-TELLS1G9mmnBN3ZSY8hYgJ5kBOg-&index=14" target='_blank'>Intelligent Voice Assistant in Python - NeuralNine</a></li>
                    <li><a className="link" href="https://www.youtube.com/watch?v=dTFWEHW_REs" target="_blank">R4-P17 Voice (1) - Star Wars - George Lucas</a></li>
                    <li><a className="link" href="https://www.youtube.com/watch?v=4cejt0-UtOU" target="_blank">R4-P17 Voice (2) - Star Wars - George Lucas</a></li>
                    <li><a className="link" href="https://www.youtube.com/watch?v=ehNJ-sULpsM" target="_blank">R4-P17 Voice (3) - Star Wars - George Lucas</a></li>
                    <li><a className="link" href="https://edricstudio.com/thiaga-font-duo/" target="_blank">Thiaga Demo Font - Edric Studio</a></li>
                    <li><a className="link" href="https://www.youtube.com/watch?v=Y5atyJbVsAU&list=PLU9tksFlQRirGvp7qOGrrU1PwcjgV8TG1&index=3" target="_blank">Build Your Own AI Assistant - Kevin McAleer</a></li>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore2" newTargetId="#readMore2">
                <img src={require("./assets/cyberlandr_logo.png")} alt="CyberLandr Logo Icon" className="streamit"/>
                <h3>CyberLandr™</h3>
                <ul>
                    <li>Project Purpose - Transform Tesla's Cybertruck into a modern lifestyle vehicle capable of providing adventure and amazing camping experiences on all sorts of terrains.</li>
                    <li>My Responsibilities:</li>
                    <ul>
                        <li>Design a website to help customers easily place reservations for CyberLandr™</li>
                        <li>Ensure the website is maintained and up-to-date in Drupal and Vue.js instances</li>
                        <li>Track analytics for web app traffic and customer usage</li>
                    </ul>
                    <li>Current Website - <a href="https://cyberlandr.com/" className='link' target='_blank'>https://cyberlandr.com/</a></li>
                    <li>Skills Gained:</li>
                    <ul>
                        <li>HTML5</li>
                        <li>REST APIs</li>
                        <li>JSON</li>
                        <li>Model-View-Controller (MVC) Architecture</li>
                        <li>Node.js</li>
                        <li>Vue.js</li>
                        <li>Software Development Life Cycle (SDLC)</li>
                        <li>Responsive Web Design</li>
                        <li>Problem Solving</li>
                        <li>Techinical Documentation via Coda</li>
                    </ul>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore3" newTargetId="#readMore3">
                <img src={require("./assets/boma_project_icon.png")} alt="BOMA! BMI Calculator App Icon" className="streamit" />
                <h3>BOMA! BMI Calculator&copy; App</h3>
                <ul>
                    <li>Project Purpose - Originally assigned in the BYU-I CSE 246 course, our class teams were required to create an app via Android Studio.</li>
                    <li>My Responsibilities:</li>
                    <ul>
                        <li>Help team construct and design MVC layout for application</li>
                        <li>Prepare code snippets for front-end UX/UI interactions</li>
                        <li>Research API for BMI calculations</li>
                        <li>Finalize presentations for weekly progression submissions</li>
                        <ul>
                            <li>Explain and illustrate our progression each week</li>
                            <li>Show the milestones we achieved as well as any above-and-beyond initiatives we completed</li>
                        </ul>
                    </ul>
                    <li>Google Play Store Link - <a className="link" href="https://play.google.com/store/apps/details?id=com.team02.boma" target='_blank'>BOMA! BMI Calculator</a></li>
                    <li>Skills Gained:</li>
                    <ul>
                        <li>Application upload processes for Google Play Store</li>
                        <li>Team leadership</li>
                        <li>Effective verbal and visual communication</li>
                        <li>Basic Java front-end and back-end development</li>
                        <li>API research and development</li>
                    </ul>
                </ul>
            </WideImageCard>
            <Return/>
        </Container>
    );
}
 
export default Projects;