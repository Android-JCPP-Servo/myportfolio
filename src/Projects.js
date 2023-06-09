import TitleCard from './TitleCard';
import WideImageCard from './WideImageCard';
import Return from './Return';
import { useLayoutEffect } from "react";

const Projects = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="container mb-5">
            <div className="row">
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
                    <p><i>Note: The CyberLandr™ logo is property of Stream It, Inc., and is used here only for project description purposes. It may not be used for any other purpose without direct consent from the original owner.</i></p>
                    <p>This website is designed to help customers smoothly place a reservation for Stream It, Inc.'s most recent product - CyberLandr™. The product will transform Tesla's Cybertruck into a modern lifestyle vehicle capable of providing adventure and amazing camping experiences on all sorts of terrains.</p>
                    <p>The current website is provided here: <a className="link" href="https://cyberlandr.com">https://cyberlandr.com/</a></p>
                    <p>Primary Skills Gained with this Project:</p>
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
                </WideImageCard>
                <WideImageCard newId="readMore3" newTargetId="#readMore3">
                    <img src={require("./assets/boma_project_icon.png")} alt="BOMA! BMI Calculator App Icon" className="streamit" />
                    <h3>BOMA! BMI Calculator App</h3>
                    <p>This is a calculator designed to help determine user BMI values.</p>
                    <p>The user will provide their name, gender, height, weight, a goal weight, and their age. The calculator will then produce results indicating what BMI category the user falls under, based on their input. Additionally, the calculator will offer some general suggestions* on how to improve BMI results regardless of the user's goals or BMI value. The user may also track their progress via the Progress Graph, which will display both their current and goal weights. Lastly, the user may create multiple profiles if they wish. These profiles may be other family members, friends, or even fictional persons. The overall experience will allow the user full control of the calculator interface and information displayed based on their input.</p>
                    <p>*While this app may be helpful in determining BMI categories and values, a personal physician or dietitian should by consulted first and foremost for deciding proper dieting procedures. This app is not intended to diagnose individual or group dietary needs.</p>
                    <p>To view this app, please visit <a className="link" href="https://play.google.com/store/apps/details?id=com.team02.boma">the Play Store</a>.</p>
                </WideImageCard>
            </div>
            <Return/>
        </div>
    );
}
 
export default Projects;