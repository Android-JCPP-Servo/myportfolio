import WideImageCard from "./WideImageCard";

const Home = () => {
    // IMAGE
    const img = "";
    const alt = "";
    const id = "";
    // TEXT
    const title = "Andersen Stewart";
    const p1 = "Howdy! Thank you so much for viewing my portfolio.";
    const p2 = "My name is Andersen Stewart, and I am a recent graduate of the Brigham Young University - Idaho Computer Science program.";
    const p3 = "";
    return (
        <div className="container mb-5">
            <div className="row">
                <WideImageCard title={title}/>
            </div>
        </div>
    );
}
 
export default Home;