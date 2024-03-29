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
            <WideImageCard newId="readMore3" newTargetId="#readMore3">
                <img src={require("./assets/codecademy.jpg")} alt="Codecademy Logo" className="streamit" />
                <h3>Codecademy Certifications</h3>
                <ul>
                    <li>Purpose - To enhance programming fluency in and exposure to several languages.</li>
                    <li>Completed Certifications:</li>
                    <ul>
                        <li>SQL</li>
                        <li>C#</li>
                        <li>React</li>
                        <li>Git & GitHub</li>
                        <li>JavaScript</li>
                        <li>Cascading Style Sheets (CSS)</li>
                        <li>HTML</li>
                    </ul>
                    <li>In-Progress - Full-Stack Engineer Certification</li>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore2" newTargetId="#readMore2">
                <img src={require("./assets/linkedin_logo.png")} alt="LinkedIn Logo" className="byui" />
                <h3>LinkedIn Learning</h3>
                <ul>
                    <li>Purpose:</li>
                    <ul>
                        <li>To learn about Secure Coding in Python</li>
                        <li>To understand the OWASP Top 10 and proper mitigation strategies</li>
                    </ul>
                    <li>Completed Certificates:</li>
                    <ul>
                        <li>Secure Coding in Python</li>
                        <li>OWASP Top 10</li>
                    </ul>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore1" newTargetId="#readMore1">
                <img src={require("./assets/sololearn.jpg")} alt="SoloLearn Logo" className="streamit" />
                <h3>SoloLearn Certifications</h3>
                <ul>
                    <li>Purpose:</li>
                    <ul>
                        <li>To design and integrate PHP modules for Drupal</li>
                        <li>To build dynamic websites with stronger front and back-end security measures</li>
                    </ul>
                    <li>Completed Certificate:</li>
                    <ul>
                        <li>PHP Certificate</li>
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
            <WideImageCard newId="readMore5" newTargetId="#readMore5">
                <img src={require("./assets/amazon6707.jpg")} alt="Amazon Logo" className="streamit" />
                <h3>Amazon AWS Certifications</h3>
                <ul>
                    <li><a href="https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&sec=rmg&d=1" className="link" target="_blank">Purpose</a>:</li>
                    <ul>
                        <li>Gain a "basic knowledge of IT services and their uses on AWS cloud"</li>
                        <li>Obtain "knowledge of core AWS services and use cases, billing and pricing models, security concepts, and how cloud impacts your business"</li>
                    </ul>
                    <li>In-Progress - <a href=" https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&amp;sec=rmg&amp;d=1" target="_blank" className="link">Amazon AWS - Cloud Practitioner - Foundational</a></li>
                </ul>
            </WideImageCard>
            <WideImageCard newId="readMore4" newTargetId="#readMore4">
                <img src={require("./assets/microsoft_logo.png")} alt="Microsoft Logo" className="streamit"/>
                <h3>Microsoft Certifications</h3>
                <ul>
                    <li>Purpose:</li>
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
                    <li>In-Progress - <a className="link" target="_blank" href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/">Microsoft Azure Fundamentals</a></li>
                </ul>
            </WideImageCard>
            <Return/>
        </Container>
    );
}
 
export default Certifications;