

const destinations = [
    {
        id: 1,
        title: "Cox's Bazar",
        image: "https://example.com/coxbazar.jpg",
        description: "Enjoy the beautiful sea beach.",
        category: "Beach"
    },
    {
        id: 2,
        title: "Sajek Valley",
        image: "https://example.com/sajek.jpg",
        description: "Explore the beautiful hills.",
        category: "Mountain"
    },
    {
        id: 3,
        title: "Sundarbans",
        image: "https://example.com/sundarban.jpg",
        description: "Discover the mangrove forest.",
        category: "Forest"
    },
    {
        id: 4,
        title: "Bandarban",
        image: "https://example.com/bandarban.jpg",
        description: "Explore the stunning hills, waterfalls, and scenic landscapes.",
        category: "Hill"
    },
    {
        id: 5,
        title: "Rangamati",
        image: "https://example.com/rangamati.jpg",
        description: "Enjoy the beauty of Kaptai Lake and the surrounding green hills.",
        category: "Lake"
    },
    {
        id: 6,
        title: "Saint Martin",
        image: "https://example.com/saint-martin.jpg",
        description: "Experience crystal-clear water, coral beaches, and beautiful sunsets.",
        category: "Island"
    }
];

const Card = ({destination}) => {
    return (
        <div className="card bg-base-100 shadow-sm">

        <figure>
            <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-52 object-cover"
            />
        </figure>

        <div className="card-body">
            <h2 className="card-title">
                {destination.title}
            </h2>

            <p>{destination.description}</p>

            <div className="card-actions justify-end">
                <div className="badge badge-outline">
                    {destination.category}
                </div>
            </div>
        </div>

    </div>
);
};



export { destinations };
export default Card;