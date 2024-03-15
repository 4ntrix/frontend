import React from "react";
import CardGrid from "./cardgrid";

const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
];

const YourPage = () => {
    return (
        <div>
            <div className="py-10">
                <CardGrid items={items} />
            </div>
        </div>
    );
};

export default YourPage;
