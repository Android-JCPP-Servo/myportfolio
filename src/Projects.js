import TitleCard from './TitleCard';
import WideImageCard from './WideImageCard';
import Return from './Return';
import { useLayoutEffect } from "react";
import Container from './Container';

const Projects = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Container>
            <TitleCard pageTitle="Projects"></TitleCard>
            <WideImageCard newId="readMore1" newTargetId="#readMore1">
                <img src={require("./assets/jack_icon.jpg")} alt="Jack Symbol" className="streamit"/>
                <h3>JACK - Personal Voice Assistant (AI)</h3>
                <ul>
                    <li>Project Purpose - Reinforce Machine Learning experience gained from BYU-I CSE 453 and design a voice assistant with customizable voices.</li>
                    <li>My Responsibilities:</li>
                    <ul>
                        <li>Research Python AI tutorials that covered Speech Recognition capabilities</li>
                        <li>Create Python environment for designing JACK</li>
                        <li>Find and download voice snippets from Star Wars</li>
                        <li>Download required Python libraries for JACK</li>
                        <li>Integrate additional features, such as:</li>
                        <ul>
                            <li>Setting up calendar events</li>
                            <li>Sending dynamic emails</li>
                            <li>Telling the weather</li>
                        </ul>
                    </ul>
                    <li>JACK on GitHub - <a href="https://github.com/Android-JCPP-Servo/voice_assistant_project" className='link' target='_blank'>Voice Assistant Project</a></li>
                    <li>Skills Gained*:</li>
                    <ul>
                        <li>Speech Recognition</li>
                        <li>Wake-Word capabilities</li>
                        <li>TensorFlow</li>
                        <li>PyAudio</li>
                        <li>Sending emails</li>
                        <li>Setting up calendar events</li>
                        <li>Telling the weather</li>
                        <li>Opening applications</li>
                        <li>Opening webpages</li>
                    </ul>
                </ul>
                <p>*<i>I learned how to integrate these skills within Python. These skills are also integrated into JACK for it's ML capabilities.</i></p>
                <p>References for audio and tutorials:</p>
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