import NavigationComponent from "../Graphic_design/NavigationComponent";
import { motionCategories } from "../../data/categories";
import motionDesignItems from "../../data/motionDesign";

const MotionDesignPage = ({ imagesArr }) => {
  const handleCategoryChange = (category) => {
    console.log("Selected:", category);
  };

  const galleryItems = imagesArr?.length ? imagesArr : motionDesignItems;

  return (
    <section id="motion_design" className="bg-bleu/95 w-full">
      <div className="px-4 md:px-10 pt-6 pb-3 md:pt-8 md:pb-4 max-w-7xl mx-auto">
        <p className="text-orange text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          Selected Work
        </p>
        <h2 className="text-[2.55rem] md:text-6xl lg:text-[4.4rem] font-black text-white leading-none tracking-tight">
          Motion Design
        </h2>
      </div>
      <NavigationComponent
        imagesArr={galleryItems}
        categories={motionCategories}
        categoryParam="motion"
        onSelect={handleCategoryChange}
      />
    </section>
  );
};

export default MotionDesignPage;
