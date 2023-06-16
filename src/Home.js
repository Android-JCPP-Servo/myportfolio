import NarrowImageCard from "./NarrowImageCard";
import WideImageCard from "./WideImageCard";

const Home = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
                    <img src={require("./assets/andersen_stewart_05-15-2023.png")} alt="Picture of Andersen Stewart wearing button shirt" className="andersen"/>
                    <h1>Andersen Stewart</h1>
                    <p>Howdy! Thank you so much for viewing my portfolio.</p>
                    <p>My name is Andersen Stewart, and I am a recent graduate of the Brigham Young University - Idaho Computer Science program.</p>
                    <p>All through my schooling career, I have taken a strong interest in programming. In high school, I was involved in the Project Lead The Way (PLTW) program, which provided an overview of Civil, Electrical, Mechanical, and Software Engineering principles. I carried the software principles into my college career, which opened the door to team leadership opportunities and earning additional certifications outside of the cirriculum.</p>
                    <p>My goal is to use my degree, work experience, and current and future certifications to help individuals and businesses reach their digital goals.</p>
                    <p>In my free time, I thoroughly enjoy calisthenics, reading, spending time with family and friends, and serving at the Central Texas Food Bank.</p>
                    <p>Thank you again for taking time to view my portfolio! Below, I have listed my educational and work experience as well as projects and certifications I have completed or am in the process of finishing. If you have any questions, please feel free to reach out!</p>
                    <p>Phone: <a href="tel:512-876-0923" className="link">(512) 876-0923</a></p>
                    <p>Email: <a href="mailto:astewart1138@gmail.com" className="link">astewart1138@gmail.com</a></p>
                </WideImageCard>
            </div>
            <div className="row">
                <NarrowImageCard src={require("./assets/1200px-Brigham_Young_University–Idaho_medallion.svg.png")} alt="Brigham Young University Logo" className="byui" title="Education" text="My educational experience leading up to my chosen profession." toPage="/schooling" btnText="School Experience"/>

                <NarrowImageCard src={require("./assets/handshake-icon-35511.png")} alt="Green Work Icon" className="streamit" title="Work & Profession" text="All positions and opportunities I have had within my chosen profession." toPage="/work" btnText="Work Experience"/>

                <NarrowImageCard src={require("./assets/boma_project_icon.png")} alt="Boma Project Icon" className="byui" title="Projects" text="All projects started and completed during school and work careers." toPage="/projects" btnText="Projects"/>

                <NarrowImageCard src={require("./assets/codecademy.jpg")} alt="" className="byui" title="Certifications / Affiliations" text="All certifications / affiliations from my professional development." toPage="/certifications" btnText="Certifications / Affiliations" />
            </div>
        </div>
    );
}
 
export default Home;