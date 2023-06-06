import { useLayoutEffect } from "react";
import Return from "./Return";
import WideImageCard from "./WideImageCard";
import TitleCard from "./TitleCard";

const Work = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="container mb-5">
            <div className="row">
                <TitleCard pageTitle="Work & Profession">
                    <a href="https://www.linkedin.com/in/andersen-stewart-57547220b/" className="link social" target="_blank"><img src={require("./assets/linkedin_logo.png")}/></a>

                    <a href="https://github.com/Android-JCPP-Servo" className="link social" target="_blank"><img src={require("./assets/github_logo.png")}/></a>

                    <a href="https://profile.indeed.com/p/andersens-w5xbm3t" className="link social" target="_blank"><img src={require("./assets/indeed.png")}/></a>
                </TitleCard>
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
                    <img src={require("./assets/streamit logo.jpg")} alt="Stream It, Inc. Logo" id="streamit" />
                    <h3>Full-Stack Web Developer at Stream It, Inc.</h3>
                    <p>In October 2021, I was interviewed for a Web Developer Intern position at Stream It, Inc. At the time, the company's product website was being built with Vue.js, a framework that provides functionality similar to React or Angular. I was asked to help finish that website so the company could deploy it for product reservations and other purchases.</p>
                    <p>Now, I am one of their full-stack web developers currently focusing on redeploying their product website using Drupal. Drupal is an open-source content management software (CMS) that helps reduce time in manually writing code and allows for simple layout design and eCommerce integration.</p>
                    <p>During my internship with Stream It, Inc., I have learned about and gained several certifications in web development languages, including HTML5, CSS3, and JavaScript. I have also gained insights and experience with the following:</p>
                    <ul>
                        <li>Development with SCRUM and Agile methodologies</li>
                        <li>Writing technical specifications and code based on pre-defined requirements</li>
                        <li>Testing and debugging applications through cross-browser testing and cross-platform compatibility</li>
                        <li>Executing unit tests while using various edge cases and scenarios</li>
                        <li>Connecting to different cloud services using
                            <ul>
                                <li>API Fetch Requests</li>
                                <li>JSON Handling</li>
                                <li>XML Requests</li>
                                <li>Asynchronous Promises</li>
                            </ul>
                        </li>
                    </ul>
                    <p>The website I am building is for the company's main flag-ship product: <a href="https://cyberlandr.com/" target="_blank" className="link">CyberLandr</a><sup>TM</sup>. CyberLandr<sup>TM</sup> is designed to transform Tesla's new Cybertruck into the ultimate lifestyle vehicle, allowing customers to travel all sorts of terrain. No matter where the adventurer travels or wanders, CyberLandr<sup>TM</sup> will always provide the comforts of home currently missed in the RV industry today.</p>
                </WideImageCard>
                <WideImageCard newId="readMore2" newTargetId="#readMore2">
                    <img src={require("./assets/churchofjesuschrist.jpg")} alt="Church of Jesus Christ Logo" id="streamit" />
                    <h3>Full-Time Proselyting Missionary</h3>
                    <p>From September 2017 to October 2019, I served a mission for my church in Chicago, IL. The work I did involved contacting people through various means (i.e., door-knocking, phone and video calls, text messages, etc.). Additionally, I was asked to serve in a leadership position over 20+ missionaries within three areas. We were taught how to budget time, money, and monthly-mileage allotments.</p>
                    <p>As a missionary, I met with people from various backgrounds, cultures, and social standings. While in leadership, I was responsible for helping fellow missionaries keep track of the work they did in their areas. I would receive specific numbers and feedback from my fellow missionaries, and would then submit that data to my superiors for overall performance analysis. This data would help mission leadership understand how to improve overall performance among missionaries.</p>
                </WideImageCard>
            </div>
            <Return/>
        </div>
    );
}
 
export default Work;