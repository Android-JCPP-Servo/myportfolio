import Return from "./Return";
import TitleCard from "./TitleCard";
import WideImageCard from "./WideImageCard";

const Certifications = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <TitleCard pageTitle="Certifications"></TitleCard>
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
                    <img src="" alt="" />
                </WideImageCard>
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
                    <img src={require("./assets/sololearn.jpg")} alt="SoloLearn Logo" id="streamit" />
                    <h3>SoloLearn Certifications</h3>

                </WideImageCard>
            </div>
            <Return/>
        </div>
    );
}
 
export default Certifications;