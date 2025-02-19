import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import EmblaCarousel from "../components/Carousel/EmblaCarousel";
const OPTIONS = {
    loop:true,
    slidesToScroll:1,
    // align:'start'
}
const SLIDE_COUNT  = 15
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Section7 = () => {
    return (
        <section className="section section-white">
            <div className="container text-center">
                <h5>GLOBAL DIRECTORY FOR WOMEN IN ARTS</h5>
                <h2>Be a part of a thriving international community of women in the arts</h2>
                <p className="text-justify">The Women in Arts Network is a one-of-a-kind global platform that unites talented women in the arts, offering them a thriving space within the art world. We bring together writers, podcasters, gallerists, curators, and more, fostering not only collaboration but also celebration. It’s a place where collaboration isn’t just possible, it’s celebrated. Here, women from around the globe don’t just connect, they form powerful networks and lasting friendships. So, whether you’re on the hunt for talent or ready to showcase your own, Women in Arts Network is just the place for you.</p>
                <h2>Get Your Profile today!</h2>
                <PrimaryButton text="Create Now" href="https://womeninartsnetwork.com/add-listing/" />
                <h2>Explore Member Artists</h2>
                <EmblaCarousel slides ={SLIDES} options={OPTIONS}/>
                
            </div>
        </section>
    );
}

export default Section7;