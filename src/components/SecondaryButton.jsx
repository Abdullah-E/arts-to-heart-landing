import React from 'react';
import PropTypes from 'prop-types';
import '../css/secondary-button.css';

const SecondaryButton = ({ text, href }) => {
    return (
        <div className="secondary-button-wrapper">
            <a
                className="secondary-button"
                href={href}
            >
                <span className="secondary-button-content-wrapper">
                    <span className="secondary-button-icon">
                        +
                    </span>
                    <span className="secondary-button-text">{text}</span>
                </span>
            </a>
        </div>
    );
};

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired, // Button text
    href: PropTypes.string, // Link URL (optional)
};

export default SecondaryButton;