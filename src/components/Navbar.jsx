import React, { useState, useEffect } from 'react';
import SecondaryButton from './SecondaryButton';
import '../css/navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`sticky-header ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="header-content">
                <div className="logo">
                    <img src="https://womeninartsnetwork.com/wp-content/uploads/2025/01/Untitled-design-1024x474.png" alt="Women In Arts Logo" />
                </div>
                <nav className="nav-links">
                    <a href="#home">Portfolios</a>
                    <a href="#about">Submit Your Art</a>
                    <a href="#services">Join Now</a>
                    <a href="#contact">Interviews</a>
                </nav>
                <div className="header-button">
                    <SecondaryButton text="Create Your Profile" href="https://womeninartsnetwork.com/add-listing/" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;