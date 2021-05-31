import "./imageCarousel.scss";
import { Images } from "./images.js";
import {useState} from "react";

const ImageCarousel = () => {
	const [images, setImages] = useState(Images);
	return (
		<div className={"image-carousel"}>
			<section className="home--image-carousel-container">
				{images.map(({ key, src }, i) => {
					return (
							<img
								className={`home--image-carousel--image image--${key}`}
								style={{"--i": key}}
								key={key}
								src={src}
							></img>
					);
				})}
			</section>
		</div>
	);
};

export default ImageCarousel;
