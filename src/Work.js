import { useLayoutEffect } from "react";
import Return from "./Return";
import WideImageCard from "./WideImageCard";
import TitleCard from "./TitleCard";
import Container from "./Container";

const Work = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Container>
            <TitleCard pageTitle="Work & Profession" />
            <WideImageCard newId="readMore1" newTargetId="#readMore1">
                <img src="" alt="" />
                <h3>Professional Social Network Links</h3>
                <p>Find my work and experience here:</p>
                <div className="row">
                    <div className="col-md-4">
                        <a href="https://www.linkedin.com/in/andersen-stewart-57547220b/" className="link social" target="_blank">
                            <img src={require("./assets/linkedin_logo.png")} className="profLinks" alt="LinkedIn Logo" />
                            &emsp;LinkedIn
                        </a>
                    </div>
                    
                    <div className="col-md-4">
                        <a href="https://github.com/Android-JCPP-Servo" className="link social" target="_blank">
                            <img src={require("./assets/github_logo.png")} className="profLinks" alt="GitHub Logo" />
                            &emsp;GitHub
                        </a>
                    </div>
                    
                    <div className="col-md-4">
                        <a href="https://profile.indeed.com/p/andersens-w5xbm3t" className="link social" target="_blank">
                            <img src={require("./assets/indeed.png")} className="profLinks" alt="Indeed Logo" />
                            &emsp;Indeed
                        </a>
                    </div>
                </div>
            </WideImageCard>
            <WideImageCard newId="readMore1" newTargetId="#readMore1">
                <img src={require("./assets/streamit logo.jpg")} alt="Stream It, Inc. Logo" className="streamit" />
                <h3>Full-Stack Web Developer at Stream It, Inc.</h3>
                <ul>
                    <li>Timeline</li>
                    <ul>
                        <li>Intern - 7 months</li>
                        <li>Employee - 1 year, 3 months</li>
                    </ul>
                    <li>Location - Stream It, Inc. (Remote)</li>
                    <li>Responsibilities:</li>
                    <ul>
                        <li>Develop SendGrid API and RESTful services to send bulk emails</li>
                        <li>Create Firebase servers and databases to securely store customer information</li>
                        <li>Build and debug cloud functions to handle back-end FETCH requests</li>
                        <li>Research, develop, and update Drupal, Vue.js, and Node.js dependencies</li>
                        <li>Ensure website responsiveness and optimization for mobile and desktop screens</li>
                        <li>Work with UX/UI team to integrate new Drupal instance and Sketch designs</li>
                        <li>Document Drupal instance system requirement specifications (SRS)</li>
                        <li>Build interactive UI for cusomer product reservations</li>
                        <li>Present Drupal, GitHub, and Cloud Function security measures in meetings</li>
                    </ul>
                    <li>Skills Gained:</li>
                    <ul>
                        <li>Vue.js and Drupal Content Management Software (CMS)</li>
                        <li>RESTful APIs</li>
                        <li>Stripe</li>
                        <li>Ecwid</li>
                        <li>Firebase</li>
                        <li>SendGrid</li>
                        <li>Sketch</li>
                    </ul>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore2" newTargetId="#readMore2">
                <img src={require("./assets/churchofjesuschrist.jpg")} alt="Church of Jesus Christ Logo" className="streamit" />
                <h3>Full-Time Proselyting Missionary</h3>
                <ul>
                    <li>Timeline:</li>
                    <ul>
                        <li>Training - 3 months</li>
                        <li>In-Field - 23 months</li>
                    </ul>
                    <li>Location - Chicago, IL</li>
                    <li>Responsibilities:</li>
                    <ul>
                        <li>Train 20+ missionaries in teaching and outreach methods</li>
                        <li>Schedule at least 3 teaching appointments on a daily basis</li>
                        <li>Learn to budget money, time, and monthly-mileage allotments</li>
                        <li>Track and record statistics from missionaries within each assigned district</li>
                        <li>Submit statistics to mission leadership for analysis and feedback</li>
                        <li>Receive and analyze feedback from fellow missionaries and mission leadership</li>
                    </ul>
                    <li>Skills Gained:</li>
                    <ul>
                        <li>Effective verbal and visual communication</li>
                        <li>Leadership experience</li>
                        <li>Budgeting for different resources</li>
                        <li>Data submission and feedback analysis</li>
                    </ul>
                </ul>
            </WideImageCard>
            <Return/>
        </Container>
    );
}
 
export default Work;