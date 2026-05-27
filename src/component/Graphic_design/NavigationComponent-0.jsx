import { useState } from "react";
import ImageGallery from "../ImageGallery";

const NavigationComponent = ({imagesArr, selected, onSelect }) => {
    const categories = [
    "illustrations",
    "Memecoins",
    "Posts & Carousels",
    "Banners",
    "Stickers",
    "Covers & Thumbnails",
    ];
    const [activeCategory, setActive] = useState(selected || "illustrations");
    const [isLoading, setLoading ] = useState(false)
    const filteredImages = imagesArr.filter(
    (img) => img.category === activeCategory
    );

    const handleClick = (category) => {
        
        setLoading(true)
        setActive(category);
        onSelect && onSelect(category); // Notify parent if needed
        setLoading(false)
    };
    

    return ( 
        <div className="py-4 md:p-10" aria-label="navigation component">
            <div className="flex flex-wrap gap-2 mb-6 px-1">
            {categories.map((category) => (
                <button
                key={category}
                onClick={() => handleClick(category)}
                className={`px-4 py-2 capitalize rounded-full font-medium text-white transition cursor-pointer
                    ${activeCategory === category ? "bg-orange" : "bg-transparent border backdrop-blur-xl hover:bg-orange/50"}`}
                >
                {category}
                </button>
            ))}
            </div>
            {isLoading && <div>..loading </div>}
            <div className={`transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
            }`}>
            <ImageGallery images={filteredImages} />
            </div>
        </div>
     );
}
 
export default NavigationComponent;