import PropTypes from "prop-types";
import Cook from "./Cook";
const Cooking = ({ foods }) => {
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
                <thead>
                    {foods.map((food, idx) => (
                        <Cook key={idx} food={food}></Cook>
                    ))}
                </thead>
            </table>
            <div className="w-1/2 mx-auto pb-4 mb-6 border-b border-[#2828281A]">
                <h1 className="lexend text-2xl font-semibold text-center">Currently cooking: 02</h1>
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
                    <tr className="bg-[#28282808] fira">
                        <td className="p-4">1</td>
                        <td className="py-4 text-[#282828B3]">Chicken Caesar Salad</td>
                        <td className="py-4 text-[#282828B3]">20 minutes</td>
                        <td className="py-4 text-[#282828B3]">400 calories</td>
                    </tr>
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
};

export default Cooking;
