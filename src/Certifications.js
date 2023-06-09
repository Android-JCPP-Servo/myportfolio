import { useLayoutEffect } from "react";
import Return from "./Return";
import TitleCard from "./TitleCard";
import WideImageCard from "./WideImageCard";

const Certifications = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="container mb-5">
            <div className="row">
                <TitleCard pageTitle="Certifications"></TitleCard>
                <WideImageCard newId="readMore5" newTargetId="#readMore5">
                    <img src={require("./assets/amazon6707.jpg")} alt="Amazon Logo" id="streamit" />
                    <h3>Amazon AWS Certifications</h3>
                    <p>During recent job hunts and research, many software companies have asked for developers with AWS experience. To prepare for such jobs, I have started pursuing AWS certifications to offer the skills necessary for the work involved.</p>
                    <p>Currently, I am pursuing the <a href=" https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&amp;sec=rmg&amp;d=1" target="_blank" className="link">AWS Cloud Practitioner - Foundational</a> certification, which covers the entire basics of AWS and Amazon cloud technologies. In addition, I will be pursuing the following certification(s) after the completion of the Foundational certification:</p>
                    <ul>
                        <li><a href="https://aws.amazon.com/certification/certified-developer-associate/?ch=tile&amp;tile=getstarted" target="_blank" className="link">Amazon AWS - Software Developer Engineer - Associate</a></li>
                    </ul>
                </WideImageCard>
                <WideImageCard newId="readMore4" newTargetId="#readMore4">
                    <img src={require("./assets/microsoft_logo.png")} alt="Microsoft Logo" id="streamit"/>
                    <h3>Microsoft Certifications</h3>
                    <p>Similar to my Amazon certifications, many tech companies have posted a strong interest in software engineers who have knowledge of and/or certifications in Microsoft Azure. To help fulfill such needs, I have begun pursuing certifications in Azure.</p>
                    <p>Currently, I have no certifications in Azure, but am in the process of completing the <a className="link" target="_blank" href="https://learn.microsoft.com/en-us/certifications/azure-fundamentals/">Microsoft Azure Fundamentals</a> certification.</p>
                    <p>Other Microsoft certification(s) I am interested in are:</p>
                    <ul>
                        <li><a href="https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/" target="_blank" className="link">Azure AI Fundamentals</a></li>

                        <li><a href="https://learn.microsoft.com/en-us/certifications/microsoft-365-fundamentals/" target="_blank" className="link">Microsoft 365 Fundamentals</a></li>

                        <li><a href="https://learn.microsoft.com/en-us/certifications/security-compliance-and-identity-fundamentals/" target="_blank" className="link">Security, Compliance, and Identity (SCI) Fundamentals</a></li>
                    </ul>
                </WideImageCard>
                <WideImageCard newId="readMore3" newTargetId="#readMore3">
                    <img src={require("./assets/codecademy.jpg")} alt="Codecademy Logo" id="streamit" />
                    <h3>Codecademy Certifications</h3>
                    <p>Within the past year, I have obtained certificates of completion for the following Codecademy courses (from newest to oldest):</p>
                    <ul>
                        <li>C#</li>
                        <li>React</li>
                        <li>Git & GitHub</li>
                        <li>JavaScript</li>
                        <li>Cascading Style Sheets (CSS)</li>
                        <li>HTML</li>
                    </ul>
                    <p>These were all obtained for different purposes, but the primary objective was to enhance my programming knowledge and skills in a variety of languages.</p>
                    <p>A major goal I have is to learn how C# and .NET are used for web-app development. According to <a className="link" href="https://www.codecademy.com/courses/learn-c-sharp/lessons/csharp-hello-world/exercises/c-sharp-in-the-wild" target="_blank">Codecademy</a>, C# can increase requests per second by 2,000%, which will greatly enhance the user experience of a web application. It is my goal to learn how to program a web application using C#, so my future web app experience will be helpful in enhancing UX/UI experience for clientele.</p>
                </WideImageCard>
                <WideImageCard newId="readMore2" newTargetId="#readMore2">
                    <img src={require("./assets/linkedin_logo.png")} alt="LinkedIn Logo" id="byui" />
                    <h3>LinkedIn Learning</h3>
                    <p>In the BYU-Idaho CSE 453 cirriculum, students were required to participate in two LinkedIn Learning programs. Those programs were (in order of completion):</p>
                    <ol>
                        <li>Secure Coding in Python</li>
                        <li>Learning the OWASP Top 10</li>
                    </ol>
                    <p>The following certifications were rewarded after completing the two programs:</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/learning/certificates/2236364fa677cc98311b70a004669d319ff6d56f4f172862cbb9722cbadfa9c2?accountId=2153100&u=2153100&success=true&authUUID=taPmh%2Fv2QFyBnAZFFnkyDw%3D%3D" className="link" target="_blank">Secure Coding in Python</a></li>
                        <li><a href="https://www.linkedin.com/learning/certificates/e321dc294a21173a1cdcb34c26a6287d5a50ea05282dd1f12fb26a4258f93923" className="link" target="_blank">OWASP Top 10</a></li>
                    </ul>
                    <p><i><b>Note</b>: The OWASP Top 10 certification page is currently not found. I am researching ways to resolve that issue.</i></p>
                </WideImageCard>
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
                    <img src={require("./assets/sololearn.jpg")} alt="SoloLearn Logo" id="streamit" />
                    <h3>SoloLearn Certifications</h3>
                    <p>In the BYU-Idaho CSE 340 cirriculum, students were highly encouraged to pursue a PHP certificate through SoloLearn to better understand best coding practices and quality in PHP.</p>
                    <p>The following certificate was earned upon completion of the PHP course: <a href="https://www.sololearn.com/Certificate/CT-CMUUBPVO/jpg" className="link" target="_blank">PHP Course</a></p>
                    <p>I have uploaded my PHP assignment from the BYU-I CSE 340 course to GitHub. Please see here: <a href="https://github.com/Android-JCPP-Servo/phpmotors" className="link" target="_blank">PHPMotors</a></p>
                </WideImageCard>
            </div>
            <Return/>
        </div>
    );
}
 
export default Certifications;