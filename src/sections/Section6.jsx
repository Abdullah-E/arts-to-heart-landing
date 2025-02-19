import React from "react";
import SearchForm from "../components/searchForm";

const Section6 = () => {
    const categories = [
        // { label: "All Categories", value: "" },
        { label: "Art", value: "art" },
        { label: "Design", value: "design" },
        { label: "Photography", value: "photography" },
        { label: "Writing", value: "writing" },
        {label:"Flower", value:"flower"},
    ];

    const handleSearch = ({ keyword, category }) => {
        console.log(`Searching for ${keyword} in ${category}`);
    };

    return(
        <section className="section section-black">
            <div className="container text-center">
                <h2>Explore Artist Profiles</h2>
            <SearchForm categories={categories} onSearch={handleSearch}/>
            </div>
        </section>
    )

}

export default Section6;