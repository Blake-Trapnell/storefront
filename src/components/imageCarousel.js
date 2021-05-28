import "./imageCarousel.scss";
import {useEffect, useState, useRef} from "react";
import {Images} from "./images.js";
import anime from "animejs";

const ImageCarousel = () => {
    const [images, setImages] = useState(Images);
    // const animationRef = useRef(null);
    // useEffect(()=> {
    // animationRef.current = anime.timeline({
    //     targets: ".home--image-carousel--image",
    //     rotateY: -40,
    //     rotateZ: 5,
    //     duration: 20,
    // }).add({
    //     translateX: 200,
    //     duration: 20,
    // })
    //     animationRef.current.restart()
    // },[])

    const divStyle = {
        transform: `translateX()`
    }
	return (
        <div className={"image-carousel"}>
            <section className="home--image-carousel-container">
                    <img className={"home--image-carousel--image"} style={{"--i":0}} key={Images[0].key} src={Images[0].src}></img>
                    <img className={"home--image-carousel--image"} style={{"--i":1}}  key={Images[0].key} src={Images[0].src}></img>
                    <img className={"home--image-carousel--image"} style={{"--i":2}}  key={Images[0].key} src={Images[0].src}></img>
            </section>
        </div>
	);
};

export default ImageCarousel;
