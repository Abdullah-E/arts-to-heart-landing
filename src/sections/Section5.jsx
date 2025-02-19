import React from "react";
import BlogFeedContainer from "../components/BlogFeedContainer";
import "../css/blog-feed.css";

const Section5 = () => {
    const blogs = [
        {
            image: "https://womeninartsnetwork.com/wp-content/uploads/2025/02/Hannah-Witner-6-Hannah-W.png",
            date: { month: "Feb", day: "18" },
            title: "Artist Hannah Witner on Identity, Play, and the Joy of Experimentation",
            description: "“Art is my way of telling stories the world needs to hear,” says Hannah Witner as she reflects on her creative path and the experiences that fuel her work.",
            link: "https://womeninartsnetwork.com/artist-hannah-witner-on-identity-play-and-the-joy-of-experimentation/"
        },
        {
            image: "https://womeninartsnetwork.com/wp-content/uploads/2025/02/Tori-Rumpf-11_hr-Tori-Rumpf-1-683x1024.jpg",
            date: { month: "Feb", day: "16" },
            title: "Alive Against All Odds and Creating Art That Inspires Hope | Tori Page",
            description: "Tori Page's art is all about connection—between people, emotions, and stories...",
            link: "https://womeninartsnetwork.com/alive-against-all-odds-and-creating-art-that-inspires-hope-tori-page/"
        },
        {
            image: "https://womeninartsnetwork.com/wp-content/uploads/2025/02/Copy-of-GardenGift_AliciaTubbs_24x30_2022_7015-Alicia-Tubbs.jpg",
            date: { month: "Feb", day: "13" },
            title: "How Faith and Creativity Shaped Alicia Tubbs' Art",
            description: "Art wasn’t always part of my life, but when I picked up a brush at 51, something inside me came alive...",
            link: "https://womeninartsnetwork.com/how-faith-and-creativity-shaped-alicia-tubbsart/"
        }
    ];

    return (
        <section className="section section-white">
            <div className="container text-center">
                <h2>Get to know our Artist Interviews</h2>
                <BlogFeedContainer blogs={blogs} />
            </div>
        </section>
    );
};

export default Section5;
