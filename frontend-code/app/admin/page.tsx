import React from "react";
import CardGrid from "./cardgrid";
import { NavbarDemo } from "../nav";
import Footer from "../components/Footer";

const items = [
    {
        title: "Add New Event",
        description: "Experience the genesis of groundbreaking ideas and inventions at our 'Add New Event'",
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
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
    {
        title: "The Spirit of Adventure",
        description: "Embark on exciting journeys and thrilling discoveries.",
    },
];

const YourPage = () => {
    return (
        <div>
            <div className="pb-16">
                <NavbarDemo></NavbarDemo>
            </div>
            <div className="py-10">
                <CardGrid items={items} />
            </div>
            <Footer />
        </div>
    );
};

export default YourPage;
