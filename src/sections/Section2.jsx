import React from "react";
import EmblaCarousel from "../components/Carousel/EmblaCarousel";
const OPTIONS = {
    loop:true,
    slidesToScroll:1,
    // align:'start'
}
const SLIDE_COUNT  = 15
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Section2 = () => {
    return(
        <section className="section section-white">
            <div className="container text-center">
                <h2>Our Featured Members</h2>
            </div>
            <EmblaCarousel slides ={SLIDES} options={OPTIONS}/>
        </section>
    )
}

export default Section2;