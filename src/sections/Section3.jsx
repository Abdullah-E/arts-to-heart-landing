import React from "react";
import CardsContainer from "../components/CardsContainer";

const Section3 = () => {
    const cards = [
        {
            link: "https://submit.womeninartsnetwork.com/she-creates-online-exhibition-book/",
            imgSrc: "https://submit.womeninartsnetwork.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-06-at-12.27.21.jpeg",
            alt: "she-creates-online-exhibition-book",
            title: '"Online Exhibition + Book" She Creates',
            description: "Open to All artists",
            deadline: "Ends On March 04, 2025"
        },
        {
            link: "https://submit.womeninartsnetwork.com/artist-of-the-month/",
            imgSrc: "https://submit.womeninartsnetwork.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-06-at-12.26.33.jpeg",
            alt: "artist-of-the-month",
            title: "Artist Of The Month",
            description: "Open to All artists",
            deadline: "Ends On February 25, 2025"
        }
    ];
    return (
        <section className="section section-black">
            <div className="container text-center">
                <h2>Submissions Open Now!</h2>
            </div>
            <CardsContainer cards={cards}/>
            {/* <EmblaCarousel slides ={SLIDES} options={OPTIONS}/> */}
        </section>
    );
};

export default Section3;