import React from 'react';
// import '../css/sections.css';
import PrimaryButton from '../components/PrimaryButton';

const Section1 = () => {
    return (
        <section className="section section-black">
        <div className="container text-center">
            <h1>Join, Discover & Connect</h1>
            <h2>A Global Network of Women in the Arts</h2>
            <PrimaryButton text="Create Your Profile" href="https://womeninartsnetwork.com/add-listing/" />
        </div>
        </section>
    );
};

export default Section1;