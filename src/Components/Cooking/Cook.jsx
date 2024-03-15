import PropTypes from "prop-types";
const Cook = ({ food, cookFood, idx }) => {
    const { recipe_name, preparing_time, calories } = food;
    return (
        <tr className="bg-[#28282808] fira">
            <td className="p-4">{idx + 1}</td>
            <td className="py-4 text-[#282828B3]">{recipe_name}</td>
            <td className="py-4 text-[#282828B3]">{preparing_time}</td>
            <td className="py-4 text-[#282828B3]">{calories}</td>
            <td className="py-4">
                <button onClick={() => cookFood(food)} className="btn lexend font-medium py-2 px-4 rounded-full bg-[#0BE58A]">
                    Preparing
                </button>
            </td>
        </tr>
    );
};

Cook.propTypes = {
    food: PropTypes.object,
    idx: PropTypes.number,
    cookFood: PropTypes.func,
};

export default Cook;
