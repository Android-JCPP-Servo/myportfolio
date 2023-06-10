import { useLayoutEffect } from "react";
import Return from "./Return";
import TitleCard from "./TitleCard";
import WideImageCard from "./WideImageCard";
import Container from "./Container";

const Certifications = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Container>
            <TitleCard pageTitle="Certifications / Affiliations"></TitleCard>
            <WideImageCard newId="readMore5" newTargetId="#readMore5">
                <img src={require("./assets/amazon6707.jpg")} alt="Amazon Logo" className="streamit" />
                <h3>Amazon AWS Certifications</h3>
                <ul>
                    <li>In-Progress - <a href=" https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&amp;sec=rmg&amp;d=1" target="_blank" className="link">Amazon AWS - Cloud Practitioner - Foundational</a></li>
                    <li><a href="https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&sec=rmg&d=1" className="link" target="_blank">Benefits</a>:</li>
                    <ul>
                        <li>Gain a "basic knowledge of IT services and their uses on AWS cloud"</li>
                        <li>Obtain "knowledge of core AWS services and use cases, billing and pricing models, security concepts, and how cloud impacts your business"</li>
                    </ul>
                    <li>Process of Completion:</li>
                    <ol>
                        <li>Get to know the exam and exam-style questions</li>
                        <li>Learn about exam topics in AWS Skill Builder</li>
                        <li>Take exam prep training in AWS Skill Builder</li>
                        <li>Assess your exam readiness with Official Practice Exams</li>
                    </ol>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore4" newTargetId="#readMore4">
                <img src={require("./assets/microsoft_logo.png")} alt="Microsoft Logo" className="streamit"/>
                <h3>Microsoft Certifications</h3>
                <ul>
                    <li>In-Progress - <a className="link" target="_blank" href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/">Microsoft Azure Fundamentals</a></li>
                    <li>Benefits:</li>
                    <ul>
                        <li>Validates basic knowledge of cloud services</li>
                        <li>Teaches how and which services are provided by Azure</li>
                        <li>Provides further knowledge into cloud concepts, such as:</li>
                        <ul>
                            <li>Infrastructure as a Service (IaaS)</li>
                            <li>Platform as a Service (PaaS)</li>
                            <li>Software as a Service (SaaS)</li>
                        </ul>
                    </ul>
                    <li>Process of Completion:</li>
                    <ol>
                        <li>Follow these recommandations provided on the Azure website:</li>
                        <ul>
                            <li>Study the content on Microsoft Learn</li>
                            <li>Take the free Practice Assessment to validate knowledge gained from the content</li>
                            <li>Check out Master the Basics to learn more about the certification and how to prepare for it</li>
                        </ul>
                        <li>Register for and pass the exam</li>
                        <li>Showcase certification badge and skills gained on social platforms like LinkedIn</li>
                    </ol>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore3" newTargetId="#readMore3">
                <img src={require("./assets/codecademy.jpg")} alt="Codecademy Logo" className="streamit" />
                <h3>Codecademy Certifications</h3>
                <ul>
                    <li>Purpose - To enhance my programming fluency for jobs that require experience in or exposure to several languages.</li>
                    <li>Completed Certifications:</li>
                    <ul>
                        <li>C#</li>
                        <li>React</li>
                        <li>Git & GitHub</li>
                        <li>JavaScript</li>
                        <li>Cascading Style Sheets (CSS)</li>
                        <li>HTML</li>
                    </ul>
                    <li>Goal(s):</li>
                    <ul>
                        <li>Complete the Full-Stack Engineer Certification</li>
                        <li>Learn how C# and .NET are used to develop web apps</li>
                    </ul>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore2" newTargetId="#readMore2">
                <img src={require("./assets/linkedin_logo.png")} alt="LinkedIn Logo" className="byui" />
                <h3>LinkedIn Learning</h3>
                <ul>
                    <li>Purpose - In the BYU-Idaho CSE 453 cirriculum, students were required to participate in two LinkedIn Learning programs.</li>
                    <li>Required Programs:</li>
                    <ul>
                        <li>Secure Coding in Python</li>
                        <li>Learning the OWASP Top 10</li>
                    </ul>
                    <li>Certificates of Completion:</li>
                    <ul>
                        <li><a href="https://www.linkedin.com/learning/certificates/2236364fa677cc98311b70a004669d319ff6d56f4f172862cbb9722cbadfa9c2?accountId=2153100&u=2153100&success=true&authUUID=taPmh%2Fv2QFyBnAZFFnkyDw%3D%3D" className="link" target="_blank">Secure Coding in Python</a></li>
                        <li><a href="https://www.linkedin.com/learning/certificates/e321dc294a21173a1cdcb34c26a6287d5a50ea05282dd1f12fb26a4258f93923" className="link" target="_blank">OWASP Top 10</a></li>
                    </ul>
                </ul>
                <p><i><b>Note</b>: The OWASP Top 10 certification page is currently not found. I am researching ways to resolve that issue.</i></p>
            </WideImageCard>
            <WideImageCard newId="readMore1" newTargetId="#readMore1">
                <img src={require("./assets/sololearn.jpg")} alt="SoloLearn Logo" className="streamit" />
                <h3>SoloLearn Certifications</h3>
                <ul>
                    <li>Purpose - To learn best coding practices in PHP, students in the BYU-I CSE 340 class were encouraged to pursue a PHP certificate through SoloLearn.</li>
                    <li>Certificate of Completion - <a href="https://www.sololearn.com/Certificate/CT-CMUUBPVO/jpg" className="link" target="_blank">PHP Certificate</a></li>
                    <li><a href="https://www.sololearn.com/learning/1059" className="link" target="_blank">Benefits</a>:</li>
                    <ul>
                        <li>Help design and integrate PHP modules for Drupal</li>
                        <li>Learn to build websites with stronger front and back-end security measures</li>
                        <li>Build "dynamic webpages, develop websites, and generate dynamic content"</li>
                    </ul>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore6" newTargetId="#readMore6">
                <img src={require("./assets/bsa_logo.png")} alt="Boy Scouts of America Logo" className="streamit" />
                <h3>Boy Scouts of America - Eagle Scout Rank</h3>
                <i>Affiliation</i>
                <ul>
                    <li>Completed & Earned - 2016</li>
                    <li>Recruited volunteers and coordinated 100+ work hours among participants</li>
                    <li>Created, managed, and came in under projected budget</li>
                    <li>Coordinated donation collections and purchase of supplies</li>
                    <li>Designed, built, and installed shelving units and sorting tables for the <a href="https://www.findhelp.org/provider/backpack-coalition--pflugerville-tx/5970922175463424?postal=78665" className="link" target="_blank">Backpack Coalition</a> in Round Rock, TX.</li>
                </ul>
            </WideImageCard>
            <Return/>
        </Container>
    );
}
 
export default Certifications;