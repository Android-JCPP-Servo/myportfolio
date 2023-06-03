import { useLayoutEffect } from "react";
import Return from "./Return";
import WideImageCard from "./WideImageCard";

const Volunteer = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="container mb-5">
            <div className="row">
                <WideImageCard newId="readMore1" newTargetId="#readMore1">
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
 
export default Volunteer;