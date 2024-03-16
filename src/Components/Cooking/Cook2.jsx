import PropTypes from "prop-types";
const Cook2 = ({ food, index }) => {
    const { recipe_name, preparing_time, calories } = food;
    return (
        <tr className="bg-[#28282808] fira">
            <td className="p-4">{index + 1}</td>
            <td className="py-4 text-[#282828B3]">{recipe_name}</td>
            <td className="py-4 text-[#282828B3]">{preparing_time}</td>
            <td className="py-4 text-[#282828B3]">{calories}</td>
        </tr>
    );
};

Cook2.propTypes = {
    food: PropTypes.object,
    index: PropTypes.number,
};

export default Cook2;
