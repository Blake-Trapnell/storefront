import "./home.scss";
import ImageCarousel from "./imageCarousel.js"
import Navbar from "./navbar.js";
import About from "./about.js";
const Home = () => {
	return (
		<article>
            <Navbar/>
            <div className="home--section-container">
            <About/>
            <ImageCarousel/>
            </div>
		</article>
	);
};

export default Home;
