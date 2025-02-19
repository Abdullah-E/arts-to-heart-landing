import React from "react";
import "../css/blog-feed.css";

const BlogFeed = ({ blogs }) => {
    return (
        <div className="blog-feed-container">
            {blogs.map((blog, index) => (
                <a key={index} href={blog.link} className="blog-card">
                    <div className="blog-image-wrapper">
                        <div className="blog-date">
                            <span className="month">{blog.date.month}</span>
                            <span className="day">{blog.date.day}</span>
                        </div>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                    </div>
                    <div className="blog-content">
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-description">{blog.description}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default BlogFeed;
