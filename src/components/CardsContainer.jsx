import React from "react";
import '../css/cards.css';


/* 
cards = [{
    link:
    imgSrc:
    alt:
    title:
    description:
    deadline:
}]
*/
const CardsContainer = (props) => {
    /*
    props = {
        cards
    }
    */
    // const cards = Array.from(cardsData.cardsData)
    return(
        <section className="cards-section">
            <div className="container">
                <div className="card-container">
                    {console.log(props.cards)}
                    {props.cards.map((card,index)=>{
                        return(
                        <a key={index} href={card.link} className="card">
                            <div className="image-wrapper">
                                <img src={card.imgSrc} alt={card.alt} />
                            </div>
                            <div className="content">
                                <h1>{card.title}</h1>
                                <p>{card.description}</p>
                                <p className="custom-card-deadline">{card.deadline}</p>
                                <span className="button">Submit Now</span>
                            </div>
                        </a>

                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CardsContainer;