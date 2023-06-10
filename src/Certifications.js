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
                    <li>Purpose - To develop skills for jobs that require AWS experience or certifications.</li>
                    <li>In-Progress - <a href=" https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&amp;sec=rmg&amp;d=1" target="_blank" className="link">Amazon AWS - Cloud Practitioner - Foundational</a></li>
                    <li>In-Line - <a href="https://aws.amazon.com/certification/certified-developer-associate/?ch=tile&amp;tile=getstarted" target="_blank" className="link">Amazon AWS - Software Developer Engineer - Associate</a></li>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore4" newTargetId="#readMore4">
                <img src={require("./assets/microsoft_logo.png")} alt="Microsoft Logo" className="streamit"/>
                <h3>Microsoft Certifications</h3>
                <ul>
                    <li>Purpose - To develop skills for jobs that require Azure experience or certifications.</li>
                    <li>In-Progress - <a className="link" target="_blank" href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/">Microsoft Azure Fundamentals</a></li>
                    <li>In-Line:</li>
                    <ul>
                        <li><a href="https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/" target="_blank" className="link">Azure AI Fundamentals</a></li>
                        <li><a href="https://learn.microsoft.com/en-us/certifications/microsoft-365-fundamentals/" target="_blank" className="link">Microsoft 365 Fundamentals</a></li>
                        <li><a href="https://learn.microsoft.com/en-us/certifications/security-compliance-and-identity-fundamentals/" target="_blank" className="link">Security, Compliance, and Identity (SCI) Fundamentals</a></li>
                    </ul>
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
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore6" newTargetId="#readMore6">
                <img src={require("./assets/bsa_logo.png")} alt="Boy Scouts of America Logo" className="streamit" />
                <h3>Eagle Scout - Boy Scouts of America</h3>
                <i>Affiliation</i>
                <ul>
                    <li>Completed & Earned - January 25, 2016</li>
                    <li>Purpose - To gain skills necessary for life and being prepared for all lifestyles and changes.</li>
                    <li>Eagle Project - Building shelving units and sorting tables for <a href="https://www.findhelp.org/provider/backpack-coalition--pflugerville-tx/5970922175463424?postal=78665" className="link" target="_blank">Backpack Coalition</a> in Round Rock, TX.</li>
                </ul>
            </WideImageCard>
            <Return/>
        </Container>
    );
}
 
export default Certifications;