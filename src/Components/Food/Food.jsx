import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import Ingredient from "../Ingredient/Ingredient";

const Food = ({ food }) => {
    // const { calories, ingredients, preparing_time, recipe_id, recipe_image, recipe_name, short_description } = food;
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = food;
    // console.log(food);
    return (
        <div className="p-6 rounded-2xl border border-[#28282833] mx-4 md:mx-0">
            <img src={recipe_image} className="w-full mb-6 rounded-2xl" />
            <h1 className="lexend font-semibold text-[20px] mb-4">{recipe_name}</h1>
            <h5 className="fira mb-6 pb-4 border-b border-[#2828281A] text-[#878787]">{short_description}</h5>
            <div className="mb-6 pb-4 border-b border-[#2828281A]">
                <h3 className="lexend text-[18px] font-medium mb-4">Ingredients: {ingredients.length}</h3>
                <ul className="list-disc pl-8 fira text-[#878787]">
                    {ingredients.map((ingredient, idx) => (
                        <Ingredient key={idx} ingredient={ingredient}></Ingredient>
                    ))}
                </ul>
            </div>
            <div className="flex items-center mb-6">
                <span className="text-2xl mr-2">
                    <CiClock2 />
                </span>
                <span className="fira mr-4">{preparing_time}</span>
                <span className="text-2xl mr-2">
                    <FaFire />
                </span>
                <span>{calories}</span>
            </div>
            <button className="btn text-[18px] lexend font-medium py-3 px-6 rounded-full bg-[#0BE58A]">Want to Cook</button>
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired,
};

export default Food;
