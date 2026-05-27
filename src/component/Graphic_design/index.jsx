import NavigationComponent from "./NavigationComponent";
import { graphicCategories } from "../../data/categories";

const GraphicDesignPage = ({imagesArr}) => {
    const handleCategoryChange = (category) => {
        console.log("Selected:", category);
        // filter images/products accordingly
    };
    return ( 
        <section id="graphic_design" className="bg-bleu/95 w-full">
            <div className="px-4 md:px-10 pt-6 pb-3 md:pt-8 md:pb-4 max-w-7xl mx-auto">
                <p className="text-orange text-xs uppercase tracking-[0.3em] font-semibold mb-3">Selected Work</p>
                <h2 className="text-[2.55rem] md:text-6xl lg:text-[4.4rem] font-black text-white leading-none tracking-tight">Graphic Design</h2>
            </div>
            <NavigationComponent imagesArr={imagesArr} categories={graphicCategories} categoryParam="graphic" onSelect={handleCategoryChange} />
        </section>
     );
}
 
export default GraphicDesignPage;
