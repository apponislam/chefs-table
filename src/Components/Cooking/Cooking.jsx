import PropTypes from "prop-types";
import Cook from "./Cook";
import Cook2 from "./Cook2";
const Cooking = ({ foods, cookFood, newFood }) => {
    // console.log(newFood.length);
    return (
        <div className="py-8 rounded-2xl border border-[#28282833] mx-4 md:mx-0">
            <div className="w-1/2 mx-auto pb-4 mb-6 border-b border-[#2828281A]">
                <h1 className="lexend text-2xl font-semibold text-center">Want to cook: {foods.length}</h1>
            </div>
            <table className="w-full text-center mb-8">
                <thead>
                    <tr className="text-[#878787] fira">
                        <th className="pb-4"></th>
                        <th className="pb-4">Name</th>
                        <th className="pb-4">Time</th>
                        <th className="pb-4">Calories</th>
                        <th className="pb-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food, idx, index) => (
                        <Cook key={idx} food={food} cookFood={cookFood} number={index + 1}></Cook>
                    ))}
                </tbody>
            </table>
            <div className="w-1/2 mx-auto pb-4 mb-6 border-b border-[#2828281A]">
                <h1 className="lexend text-2xl font-semibold text-center">Currently cooking: {newFood.length}</h1>
            </div>
            <table className="w-full text-center mb-8">
                <thead>
                    <tr className="text-[#878787] fira">
                        <th className="pb-4"></th>
                        <th className="pb-4">Name</th>
                        <th className="pb-4">Time</th>
                        <th className="pb-4">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {newFood.map((food, idx) => (
                        <Cook2 key={idx} food={food}></Cook2>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="fira font-medium">
                        <td className="py-4"></td>
                        <td className="py-4"></td>
                        <td className="py-4 text-[#282828B3]">
                            Total Time = <br /> 45 minutes
                        </td>
                        <td className="py-4 text-[#282828B3]">
                            Total Calories = <br /> 1050 calories
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

Cooking.propTypes = {
    foods: PropTypes.array,
    cookFood: PropTypes.func,
    newFood: PropTypes.array,
};

export default Cooking;
