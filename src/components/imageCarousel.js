import "./imageCarousel.scss";
import {useEffect, useState, useRef} from "react";
import {Images} from "./images.js";
import anime from "animejs";

const ImageCarousel = () => {
    const [images, setImages] = useState(Images);
    const animationRef = useRef(null);
    useEffect(()=> {
    animationRef.current = anime.timeline({
        targets: ".home--image-carousel--image",
        rotateY: -50,
        rotateZ: 10,
        duration: 20,
    }).add({
        translateX: 200,
        duration: 20,
    })
        animationRef.current.restart()
    },[])
	return (
            <section className="home--image-carousel-container">
                    <img className={"home--image-carousel--image"} key={Images[0].key} src={Images[0].src}></img>
            </section>
	);
};

export default ImageCarousel;
